const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")));

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let players = {};
let gameInProgress = false;
let gameLoopTimeout = null;

io.on("connection", (socket) => {
  console.log(`[+] Player connected: ${socket.id}`);

  // Handle player joining arena
  socket.on("join_game", (data) => {
    players[socket.id] = {
      id: socket.id,
      username: data.username || `Player_${socket.id.substring(0, 4)}`,
      tileIndex: 0,
      isEliminated: false,
      score: 0,
    };

    // Broadcast updated player list
    io.emit("update_players", Object.values(players));

    // Auto-start match when 2 or more players join
    if (Object.keys(players).length >= 2 && !gameInProgress) {
      startMatchSequence();
    }
  });

  // Handle tile movement on arena floor
  socket.on("move_player", (data) => {
    const player = players[socket.id];
    if (player && !player.isEliminated) {
      player.tileIndex = data.tileIndex;
      io.emit("player_moved", { id: player.id, tileIndex: data.tileIndex });
    }
  });

  // Handle player disconnects
  socket.on("disconnect", () => {
    console.log(`[-] Player disconnected: ${socket.id}`);
    delete players[socket.id];
    io.emit("update_players", Object.values(players));

    if (Object.keys(players).length < 2) {
      gameInProgress = false;
      clearTimeout(gameLoopTimeout);
      io.emit("game_reset", { message: "Waiting for more players..." });
    }
  });
});

function startMatchSequence() {
  gameInProgress = true;

  // Reset player states
  Object.values(players).forEach((p) => {
    p.isEliminated = false;
    p.tileIndex = 0;
  });

  io.emit("update_players", Object.values(players));

  // Pick 4 target letters
  const roundQuestions = [...ALPHABET]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  const revealedTips = roundQuestions.slice(0, 2);

  // 10-second Memory Phase
  io.emit("memory_phase_start", {
    revealedTips: revealedTips,
    duration: 10,
  });

  gameLoopTimeout = setTimeout(() => {
    runGameRound(roundQuestions, 0);
  }, 10000);
}

function runGameRound(questions, currentRoundIndex) {
  if (currentRoundIndex >= questions.length) {
    const survivors = Object.values(players).filter((p) => !p.isEliminated);
    survivors.forEach((p) => (p.score += 50));

    io.emit("match_ended", {
      winners: survivors.map((p) => p.username),
      scores: players,
    });

    gameInProgress = false;

    // Restart game after 8 seconds if players remain
    setTimeout(() => {
      if (Object.keys(players).length >= 2) {
        startMatchSequence();
      }
    }, 8000);
    return;
  }

  const targetLetter = questions[currentRoundIndex];

  // Pick 4 options (1 correct, 3 distractors)
  let choices = [targetLetter];
  while (choices.length < 4) {
    let rand = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    if (!choices.includes(rand)) choices.push(rand);
  }
  choices.sort(() => Math.random() - 0.5);

  io.emit("round_start", {
    round: currentRoundIndex + 1,
    totalRounds: questions.length,
    targetLetter: targetLetter,
    tiles: choices,
    duration: 5,
  });

  // 5-second round elimination timer
  gameLoopTimeout = setTimeout(() => {
    const correctIndex = choices.indexOf(targetLetter);
    let newlyEliminated = [];

    Object.values(players).forEach((p) => {
      if (!p.isEliminated && p.tileIndex !== correctIndex) {
        p.isEliminated = true;
        newlyEliminated.push(p.id);
      }
    });

    io.emit("round_elimination", {
      correctIndex: correctIndex,
      correctLetter: targetLetter,
      eliminatedIds: newlyEliminated,
    });

    // Pause 3 seconds before next round
    gameLoopTimeout = setTimeout(() => {
      runGameRound(questions, currentRoundIndex + 1);
    }, 3000);
  }, 5000);
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 ASL Server live on http://localhost:${PORT}`);
});
