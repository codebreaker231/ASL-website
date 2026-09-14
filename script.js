// =========================================================================
// 1. DICTIONARY DATASET WITH ACCURATE SIGN LANGUAGE ILLUSTRATIONS
// =========================================================================

function getLetterImageUrl(letter) {
  const char = letter.toUpperCase();
  if (char >= "A" && char <= "Z") {
    return `https://upload.wikimedia.org/wikipedia/commons/Sign_language_${char}.svg`;
  }
  return `https://upload.wikimedia.org/wikipedia/commons/Sign_language_A.svg`;
}

const dictionary = [
  // --- GREETINGS & BASICS ---
  {
    id: "asl-hello",
    word: "Hello",
    language: "ASL",
    region: "North America",
    category: "Greetings",
    searchTags: ["hi", "greetings", "hey", "welcome", "wave"],
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/ASL_Hello.svg/600px-ASL_Hello.svg.png",
    slowMediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/ASL_Hello.svg/600px-ASL_Hello.svg.png",
    description:
      "Place hand at temple with palm facing out, then extend forward like a gentle salute.",
    variations: [],
  },
  {
    id: "bsl-hello",
    word: "Hello",
    language: "BSL",
    region: "UK Standard",
    category: "Greetings",
    searchTags: ["hi", "hey", "greetings", "wave"],
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/British_Sign_Language_chart.png/744px-British_Sign_Language_chart.png",
    slowMediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/British_Sign_Language_chart.png/744px-British_Sign_Language_chart.png",
    description: "Wave dominant open hand side-to-side near head level.",
    variations: [],
  },
  {
    id: "asl-goodbye",
    word: "Goodbye",
    language: "ASL",
    region: "North America",
    category: "Greetings",
    searchTags: ["bye", "farewell", "see ya", "later"],
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/ASL_Goodbye.svg/600px-ASL_Goodbye.svg.png",
    slowMediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/ASL_Goodbye.svg/600px-ASL_Goodbye.svg.png",
    description:
      "Open palm facing outward, opening and closing fingers downward repeatedly.",
    variations: [],
  },
  {
    id: "asl-yes",
    word: "Yes",
    language: "ASL",
    region: "North America",
    category: "Basics",
    searchTags: ["yeah", "agree", "correct", "affirmative"],
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Sign_language_S.svg",
    slowMediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Sign_language_S.svg",
    description:
      "Make an 'S' handshape fist and nod it up and down from the wrist like a head nodding.",
    variations: [],
  },
  {
    id: "asl-no",
    word: "No",
    language: "ASL",
    region: "North America",
    category: "Basics",
    searchTags: ["nope", "deny", "negative", "refuse"],
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Sign_language_N.svg",
    slowMediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Sign_language_N.svg",
    description:
      "Snap index and middle finger together against extended thumb tip.",
    variations: [],
  },
  {
    id: "asl-please",
    word: "Please",
    language: "ASL",
    region: "North America",
    category: "Manners",
    searchTags: ["pls", "polite", "beg"],
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/ASL_Please.svg/600px-ASL_Please.svg.png",
    slowMediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/ASL_Please.svg/600px-ASL_Please.svg.png",
    description:
      "Place open flat palm flat against chest and move in circular motions.",
    variations: [],
  },
  {
    id: "asl-thankyou",
    word: "Thank You",
    language: "ASL",
    region: "North America",
    category: "Manners",
    searchTags: ["thanks", "thx", "appreciation", "grateful"],
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/ASL_Thank_You.svg/600px-ASL_Thank_You.svg.png",
    slowMediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/ASL_Thank_You.svg/600px-ASL_Thank_You.svg.png",
    description:
      "Touch fingertips to chin/lips, then move palm forward and slightly downward.",
    variations: [],
  },
  {
    id: "asl-sorry",
    word: "Sorry",
    language: "ASL",
    region: "North America",
    category: "Manners",
    searchTags: ["apologize", "forgive", "my bad"],
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Sign_language_A.svg",
    slowMediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Sign_language_A.svg",
    description:
      "Make an 'A' shape fist and rub in circular motion over your chest.",
    variations: [],
  },

  // --- ESSENTIALS & FOOD ---
  {
    id: "asl-water",
    word: "Water",
    language: "ASL",
    region: "North America",
    category: "Essentials",
    searchTags: ["drink", "thirsty", "beverage", "h2o"],
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Sign_language_W.svg",
    slowMediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Sign_language_W.svg",
    description:
      "Form a 'W' handshape and tap index finger against your chin twice.",
    variations: [],
  },
  {
    id: "asl-food",
    word: "Food / Eat",
    language: "ASL",
    region: "North America",
    category: "Essentials",
    searchTags: ["hungry", "eat", "meal", "dinner"],
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/ASL_Eat.svg/600px-ASL_Eat.svg.png",
    slowMediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/ASL_Eat.svg/600px-ASL_Eat.svg.png",
    description:
      "Bring a flattened 'O' handshape toward your mouth repeatedly.",
    variations: [],
  },
  {
    id: "asl-bathroom",
    word: "Bathroom",
    language: "ASL",
    region: "North America",
    category: "Essentials",
    searchTags: ["toilet", "restroom", "washroom", "loo"],
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Sign_language_T.svg",
    slowMediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Sign_language_T.svg",
    description:
      "Form 'T' handshape (thumb under index finger) and shake side to side.",
    variations: [],
  },

  // --- EMERGENCY & HEALTH ---
  {
    id: "asl-help",
    word: "Help",
    language: "ASL",
    region: "North America",
    category: "Emergency",
    searchTags: ["assist", "emergency", "support", "aid", "sos"],
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/ASL_Help.svg/600px-ASL_Help.svg.png",
    slowMediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/ASL_Help.svg/600px-ASL_Help.svg.png",
    description:
      "Place a thumbs-up fist on an open flat palm and lift both hands upward.",
    variations: [],
  },
  {
    id: "asl-police",
    word: "Police",
    language: "ASL",
    region: "North America",
    category: "Emergency",
    searchTags: ["cop", "officer", "cops", "911"],
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Sign_language_C.svg",
    slowMediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Sign_language_C.svg",
    description:
      "Form a 'C' handshape and tap it near the upper left side of chest like a badge.",
    variations: [],
  },

  // --- QUESTIONS & FAMILY ---
  {
    id: "asl-where",
    word: "Where",
    language: "ASL",
    region: "North America",
    category: "Questions",
    searchTags: ["location", "place", "find"],
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Sign_language_I.svg",
    slowMediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Sign_language_I.svg",
    description: "Hold index finger straight up and shake side to side.",
    variations: [],
  },
  {
    id: "asl-mother",
    word: "Mother",
    language: "ASL",
    region: "North America",
    category: "Family",
    searchTags: ["mom", "mama", "mommy", "parent"],
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/ASL_Mother.svg/600px-ASL_Mother.svg.png",
    slowMediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/ASL_Mother.svg/600px-ASL_Mother.svg.png",
    description: "Open 5-handshape, thumb tip taps chin twice.",
    variations: [],
  },
  {
    id: "asl-father",
    word: "Father",
    language: "ASL",
    region: "North America",
    category: "Family",
    searchTags: ["dad", "pop", "daddy", "parent"],
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/ASL_Father.svg/600px-ASL_Father.svg.png",
    slowMediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/ASL_Father.svg/600px-ASL_Father.svg.png",
    description: "Open 5-handshape, thumb tip taps forehead twice.",
    variations: [],
  },
];

let activeRenderedData = [...dictionary];

// =========================================================================
// 2. FINGERSPELLING FALLBACK ENGINE
// =========================================================================
function generateFingerspellingFallback(word, language) {
  const cleanWord = word.toUpperCase().replace(/[^A-Z]/g, "");
  if (!cleanWord) return null;

  const letterBadges = cleanWord
    .split("")
    .map(
      (letter) =>
        `<div style="display:inline-block; text-align:center; margin:4px;">
            <img src="${getLetterImageUrl(letter)}" alt="Letter ${letter}" style="width:48px; height:48px; border-radius:4px; display:block; margin:0 auto 4px auto; background:#f1f5f9; padding:2px;">
            <span style="background:#e2e8f0; color:#1e293b; font-weight:bold; padding:2px 6px; border-radius:4px; font-size:12px;">${letter}</span>
        </div>`,
    )
    .join("");

  const firstLetter = cleanWord[0];

  return {
    id: `fs-${cleanWord.toLowerCase()}`,
    word: word,
    language: language === "ALL" ? "ASL" : language,
    region: "Fingerspelled Fallback",
    category: "Manual Alphabet",
    description: `This word is rendered using the standard manual fingerspelling alphabet sequence:`,
    mediaUrl: getLetterImageUrl(firstLetter),
    slowMediaUrl: getLetterImageUrl(firstLetter),
    customContent: `<div style="margin-top:12px;"><strong>Fingerspelling Sequence:</strong><br><div style="margin-top:8px; display:flex; flex-wrap:wrap;">${letterBadges}</div></div>`,
    variations: [],
  };
}

// =========================================================================
// 3. MAIN RENDERER & PRIVATE VIEW MODAL HANDLERS
// =========================================================================
function renderCards(data) {
  activeRenderedData = data;
  const grid = document.getElementById("signGrid");
  if (!grid) return;
  grid.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    let variationHTML =
      item.variations && item.variations.length > 0
        ? item.variations
            .map(
              (v) =>
                `<div class="variation-box"><strong>${v.region}:</strong> ${v.note}</div>`,
            )
            .join("")
        : "";

    let customHTML = item.customContent || "";

    card.innerHTML = `
            <div class="media-container" style="cursor: pointer;" onclick="openPrivateModal('${item.id}')">
                <img id="media-${item.id}" src="${item.mediaUrl}" alt="${item.word} in ${item.language}">
            </div>
            <div class="card-content">
                <span class="tag" style="cursor: pointer;" onclick="openPrivateModal('${item.id}')" title="Click to view sign enlarged">
                    🔍 ${item.language} | ${item.region}
                </span>
                <h3 style="cursor: pointer;" onclick="openPrivateModal('${item.id}')">${item.word}</h3>
                <p>${item.description}</p>
                ${customHTML}
                
                <div class="speed-control" style="margin-top: 12px; display: flex; gap: 8px;">
                    <button onclick="toggleSpeed('${item.id}', '${item.mediaUrl}', '${item.slowMediaUrl}')">
                        Toggle Speed
                    </button>
                    <button onclick="startWebcamPractice('${item.word}')" style="background:#2563eb; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">
                        📷 Practice Live
                    </button>
                </div>

                ${variationHTML}
            </div>
        `;
    grid.appendChild(card);
  });
}

function openPrivateModal(id) {
  const item = activeRenderedData.find((d) => d.id === id);
  if (!item) return;

  document.getElementById("modalTag").innerText =
    `${item.language} | ${item.region}`;
  document.getElementById("modalTitle").innerText = item.word;
  document.getElementById("modalImage").src = item.mediaUrl;
  document.getElementById("modalDescription").innerText = item.description;

  const varContainer = document.getElementById("modalVariations");
  varContainer.innerHTML = item.customContent || "";

  const modal = document.getElementById("privateSignModal");
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
}

function closePrivateModal() {
  const modal = document.getElementById("privateSignModal");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

function filterSigns(activeCategory = "All") {
  const langSelect = document.getElementById("languageSelect");
  const searchInput = document.getElementById("searchInput");
  if (!langSelect || !searchInput) return;

  const selectedLang = langSelect.value;
  const searchQuery = searchInput.value.trim().toLowerCase();

  let filtered = dictionary.filter((item) => {
    const matchesLang =
      selectedLang === "ALL" || item.language === selectedLang;
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    if (!matchesLang || !matchesCategory) return false;
    if (!searchQuery) return true;

    const matchesWord = item.word.toLowerCase().includes(searchQuery);
    const matchesCatText = item.category.toLowerCase().includes(searchQuery);
    const matchesDesc = item.description.toLowerCase().includes(searchQuery);
    const matchesTag =
      item.searchTags &&
      item.searchTags.some((tag) => tag.toLowerCase().includes(searchQuery));

    return matchesWord || matchesCatText || matchesDesc || matchesTag;
  });

  if (filtered.length === 0 && searchQuery.length > 0) {
    const fallbackCard = generateFingerspellingFallback(
      searchQuery,
      selectedLang,
    );
    if (fallbackCard) {
      filtered = [fallbackCard];
    }
  }

  renderCards(filtered);
  renderAlphabetGrid();
}

function toggleSpeed(id, normalUrl, slowUrl) {
  const img = document.getElementById(`media-${id}`);
  if (img) {
    img.src = img.src === normalUrl ? slowUrl : normalUrl;
  }
}

// =========================================================================
// 4. MEDIAPIPE HAND-TRACKING & PRACTICE MODULE
// =========================================================================
let handsDetector = null;
let webcamCamera = null;
let currentPracticeSign = null;

function initMediaPipe() {
  const videoElement = document.getElementById("webcam");
  const canvasElement = document.getElementById("outputCanvas");
  if (!videoElement || !canvasElement) return;

  const canvasCtx = canvasElement.getContext("2d");

  handsDetector = new Hands({
    locateFile: (file) =>
      `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
  });

  handsDetector.setOptions({
    maxNumHands: 2,
    modelComplexity: 1,
    minDetectionConfidence: 0.7,
    minTrackingConfidence: 0.7,
  });

  handsDetector.onResults((results) => {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height,
    );

    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      for (const landmarks of results.multiHandLandmarks) {
        drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
          color: "#00FF00",
          lineWidth: 4,
        });
        drawLandmarks(canvasCtx, landmarks, {
          color: "#FF0000",
          lineWidth: 2,
          radius: 4,
        });
        evaluateGesture(landmarks);
      }
    } else {
      updateFeedback("No hands detected in frame.", "#ef4444");
    }
    canvasCtx.restore();
  });

  webcamCamera = new Camera(videoElement, {
    onFrame: async () => {
      await handsDetector.send({ image: videoElement });
    },
    width: 640,
    height: 480,
  });
}

function startWebcamPractice(signWord) {
  currentPracticeSign = signWord.toUpperCase();
  const modal = document.getElementById("webcamPracticeModal");
  if (modal) modal.style.display = "block";

  if (!handsDetector) {
    initMediaPipe();
  }

  if (webcamCamera) {
    webcamCamera.start();
  }
}

function stopWebcamPractice() {
  if (webcamCamera) {
    webcamCamera.stop();
  }
  const modal = document.getElementById("webcamPracticeModal");
  if (modal) modal.style.display = "none";
}

function getFingerStates(lm) {
  return {
    thumb: lm[4].x < lm[3].x,
    index: lm[8].y < lm[6].y,
    middle: lm[12].y < lm[10].y,
    ring: lm[16].y < lm[14].y,
    pinky: lm[20].y < lm[18].y,
  };
}

function evaluateGesture(landmarks) {
  const fingers = getFingerStates(landmarks);
  let detectedSign = "UNKNOWN";

  if (fingers.index && fingers.middle && fingers.ring && fingers.pinky) {
    detectedSign = "HELLO";
  } else if (
    fingers.index &&
    !fingers.middle &&
    !fingers.ring &&
    !fingers.pinky
  ) {
    detectedSign = "WHERE";
  } else if (
    !fingers.index &&
    !fingers.middle &&
    !fingers.ring &&
    !fingers.pinky
  ) {
    detectedSign = "YES";
  }

  if (currentPracticeSign && detectedSign === currentPracticeSign) {
    updateFeedback(
      `Match Found! You signed "${detectedSign}" correctly!`,
      "#22c55e",
    );
    addXP(5);
  } else {
    updateFeedback(
      `Detected: ${detectedSign} | Target: ${currentPracticeSign}`,
      "#eab308",
    );
  }
}

function updateFeedback(text, color) {
  const feedbackEl = document.getElementById("gestureMatchFeedback");
  if (feedbackEl) {
    feedbackEl.innerText = text;
    feedbackEl.style.color = color;
  }
}

// =========================================================================
// 5. QUIZ ENGINE LOGIC
// =========================================================================
const quizQuestions = [
  {
    id: "q-01",
    language: "ASL",
    type: "vocabulary",
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Sign_language_W.svg",
    question: "Making a 'W' handshape and tapping index finger to chin means:",
    correctAnswer: "Water",
    options: ["Water", "Milk", "Coffee", "Apple"],
  },
  {
    id: "q-02",
    language: "ASL",
    type: "vocabulary",
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Sign_language_T.svg",
    question: "Shaking a 'T' handshape back and forth stands for:",
    correctAnswer: "Bathroom",
    options: ["Teacher", "Bathroom", "Time", "Telephone"],
  },
  {
    id: "q-03",
    language: "ASL",
    type: "vocabulary",
    mediaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/ASL_Thank_You.svg/600px-ASL_Thank_You.svg.png",
    question:
      "Touching your chin and moving your hand outward toward someone means:",
    correctAnswer: "Thank You",
    options: ["Please", "Thank You", "Hello", "Goodbye"],
  },
];

let currentQuizTarget = null;

function startQuiz() {
  const quizContainer = document.getElementById("quizContainer");
  const feedback = document.getElementById("quizFeedback");
  const langSelect = document.getElementById("languageSelect");
  if (!quizContainer || !feedback || !langSelect) return;

  feedback.innerText = "";
  quizContainer.style.display = "block";

  const currentLang = langSelect.value;
  const availableQuestions = quizQuestions.filter(
    (q) => q.language === currentLang || currentLang === "ALL",
  );

  if (availableQuestions.length === 0) {
    alert("No quiz questions available for this language selection right now!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuizTarget = availableQuestions[randomIndex];

  const questionEl = document.querySelector(".quiz-question");
  const imageEl = document.getElementById("quizImage");
  if (questionEl) questionEl.innerText = currentQuizTarget.question;
  if (imageEl) imageEl.src = currentQuizTarget.mediaUrl;

  const optionsContainer = document.getElementById("quizOptions");
  if (!optionsContainer) return;
  optionsContainer.innerHTML = "";

  const shuffledOptions = [...currentQuizTarget.options].sort(
    () => 0.5 - Math.random(),
  );

  shuffledOptions.forEach((optionText) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = optionText;
    btn.onclick = () => checkAnswer(optionText, btn);
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(selectedOption, buttonElement) {
  const feedback = document.getElementById("quizFeedback");
  const allOptionBtns = document.querySelectorAll(".option-btn");

  allOptionBtns.forEach((btn) => (btn.disabled = true));

  if (selectedOption === currentQuizTarget.correctAnswer) {
    buttonElement.classList.add("correct");
    feedback.style.color = "#15803d";
    feedback.innerText = "🎉 Correct! +10 XP";
    addXP(10);
  } else {
    buttonElement.classList.add("wrong");
    feedback.style.color = "#b91c1c";
    feedback.innerText = `❌ Answer: "${currentQuizTarget.correctAnswer}"`;

    allOptionBtns.forEach((btn) => {
      if (btn.innerText === currentQuizTarget.correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }

  setTimeout(() => {
    startQuiz();
  }, 2500);
}

// =========================================================================
// 6. ALPHABET GRID & PROGRESS TRACKER
// =========================================================================
function renderAlphabetGrid() {
  const grid = document.getElementById("alphabetGrid");
  const langSelect = document.getElementById("languageSelect");
  if (!grid || !langSelect) return;

  grid.innerHTML = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const currentLang = langSelect.value === "ALL" ? "ASL" : langSelect.value;

  letters.forEach((letter) => {
    const btn = document.createElement("button");
    btn.className = "letter-btn";
    btn.innerText = letter;
    btn.onclick = () => showLetterPreview(letter, currentLang);
    grid.appendChild(btn);
  });
}

function showLetterPreview(letter, lang) {
  const preview = document.getElementById("letterPreview");
  const title = document.getElementById("previewTitle");
  const img = document.getElementById("previewImage");

  if (preview && title && img) {
    preview.style.display = "block";
    title.innerText = `${lang} Manual Alphabet - Letter ${letter}`;
    img.src = getLetterImageUrl(letter);
  }
}

let userStats = JSON.parse(localStorage.getItem("signHubStats")) || {
  streak: 1,
  lastActive: new Date().toDateString(),
  xp: 0,
};

function updateStatsUI() {
  const streakEl = document.getElementById("streakCount");
  const xpEl = document.getElementById("xpCount");
  if (streakEl) streakEl.innerText = userStats.streak;
  if (xpEl) xpEl.innerText = userStats.xp;
}

function addXP(amount) {
  userStats.xp += amount;
  checkStreak();
  localStorage.setItem("signHubStats", JSON.stringify(userStats));
  updateStatsUI();
}

function checkStreak() {
  const today = new Date().toDateString();
  if (userStats.lastActive !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (userStats.lastActive === yesterday.toDateString()) {
      userStats.streak += 1;
    } else {
      userStats.streak = 1;
    }
    userStats.lastActive = today;
  }
}

// =========================================================================
// 7. INITIALIZATION
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  updateStatsUI();
  filterSigns();
});
