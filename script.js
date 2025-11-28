let timerInterval = null;
let timeLeft = 60;

/****************************************
   DARK / LIGHT THEME HANDLER
*****************************************/

// Load theme before anything
const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);

// Setup toggle when DOM ready
document.addEventListener("DOMContentLoaded", () => {
  const switchInput = document.getElementById("themeSwitch");
  if (!switchInput) return;

  switchInput.checked = savedTheme === "light";

  switchInput.addEventListener("change", () => {
    const theme = switchInput.checked ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });
});

/****************************************
   QUIZ DATA
*****************************************/
const quizData = {
  jee: {
    physics: {
      mechanics: {
        name: "Mechanics",
        description: "Laws of Motion, Work, Energy & Power",
        questions: [
          {
            question: "Newton's first law is called?",
            options: [
              "Law of Inertia",
              "Law of Force",
              "Law of Reaction",
              "Energy Law",
            ],
            correct: 0,
          },
          {
            question: "SI unit of force?",
            options: ["Joule", "Newton", "Watt", "Erg"],
            correct: 1,
          },
          {
            question: "Work done = ?",
            options: ["F × d", "mgh", "mv", "F/t"],
            correct: 0,
          },
          {
            question: "Approximate value of g on Earth?",
            options: ["8 m/s²", "9.8 m/s²", "12 m/s²", "4.9 m/s²"],
            correct: 1,
          },
          {
            question: "Kinetic energy formula?",
            options: ["mv²", "½mv²", "mgh", "ma"],
            correct: 1,
          },
        ],
      },

      waves: {
        name: "Waves & Sound",
        description: "Wave motion, frequency, amplitude, speed of sound",
        questions: [
          {
            question: "Approx speed of sound in air?",
            options: ["150 m/s", "330 m/s", "450 m/s", "600 m/s"],
            correct: 1,
          },
          {
            question: "Unit of frequency?",
            options: ["Newton", "Hertz", "Joule", "Ampere"],
            correct: 1,
          },
          {
            question: "Which is a longitudinal wave?",
            options: ["Light", "Sound", "X-rays", "Radio waves"],
            correct: 1,
          },
          {
            question: "Wave speed?",
            options: ["λ × f", "λ / f", "f / λ", "λ + f"],
            correct: 0,
          },
          {
            question: "Amplitude relates to?",
            options: ["Frequency", "Energy", "Wavelength", "Velocity"],
            correct: 1,
          },
        ],
      },

      electromagnetism: {
        name: "Electromagnetism",
        description: "Current, resistance, magnetic field, EM waves",
        questions: [
          {
            question: "Unit of electric current?",
            options: ["Volt", "Ampere", "Ohm", "Watt"],
            correct: 1,
          },
          {
            question: "Ohm’s Law?",
            options: ["V = IR", "P = IV", "F = ma", "E = mc²"],
            correct: 0,
          },
          {
            question: "Unit of resistance?",
            options: ["Ampere", "Ohm", "Volt", "Watt"],
            correct: 1,
          },
          {
            question: "Magnetic field unit?",
            options: ["Tesla", "Newton", "Joule", "Coulomb"],
            correct: 0,
          },
          {
            question: "Speed of light?",
            options: [
              "3 × 10⁸ m/s",
              "3 × 10⁶ m/s",
              "3 × 10⁴ m/s",
              "3 × 10² m/s",
            ],
            correct: 0,
          },
        ],
      },
    },

    chemistry: {
      organic: {
        name: "Organic Chemistry",
        description: "Hydrocarbons, functional groups, reactions",
        questions: [
          {
            question: "Ethane formula?",
            options: ["CH₄", "C₂H₆", "C₂H₄", "C₃H₈"],
            correct: 1,
          },
          {
            question: "Alcohol group?",
            options: ["-COOH", "-CHO", "-OH", "-NH₂"],
            correct: 2,
          },
          {
            question: "Benzene is?",
            options: ["Alkane", "Alkene", "Alkyne", "Aromatic"],
            correct: 3,
          },
          {
            question: "Glucose formula?",
            options: ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₄"],
            correct: 0,
          },
          {
            question: "CH₃–CH₃ is?",
            options: ["Methane", "Ethane", "Propane", "Butane"],
            correct: 1,
          },
        ],
      },

      physical: {
        name: "Physical Chemistry",
        description: "Thermodynamics, equilibrium",
        questions: [
          {
            question: "Neutral pH?",
            options: ["1", "7", "14", "0"],
            correct: 1,
          },
          {
            question: "Avogadro number?",
            options: ["6.022×10²³", "9.8", "3×10⁸", "1.6×10⁻¹⁹"],
            correct: 0,
          },
          {
            question: "Gas equation?",
            options: ["PV=nRT", "F=ma", "E=mc²", "V=IR"],
            correct: 0,
          },
          {
            question: "Pressure unit?",
            options: ["Newton", "Pascal", "Watt", "Joule"],
            correct: 1,
          },
          {
            question: "STP temp?",
            options: ["0°C", "25°C", "100°C", "273°C"],
            correct: 0,
          },
        ],
      },

      inorganic: {
        name: "Inorganic Chemistry",
        description: "Periodic table, metals, salts",
        questions: [
          {
            question: "Atomic no of oxygen?",
            options: ["6", "7", "8", "9"],
            correct: 2,
          },
          {
            question: "NaCl is?",
            options: ["Covalent", "Ionic", "Metal", "Gas"],
            correct: 1,
          },
          {
            question: "Fe is?",
            options: ["Non-metal", "Metal", "Metalloid", "Gas"],
            correct: 1,
          },
          {
            question: "H₂ gives?",
            options: [
              "Popping sound",
              "Green flame",
              "No effect",
              "Blue flame",
            ],
            correct: 0,
          },
          {
            question: "Most reactive metal?",
            options: ["Gold", "Silver", "Potassium", "Platinum"],
            correct: 2,
          },
        ],
      },
    },

    mathematics: {
      algebra: {
        name: "Algebra",
        description: "Quadratics, identities, complex",
        questions: [
          { question: "√(-1)?", options: ["e", "i", "π", "φ"], correct: 1 },
          {
            question: "Quadratic formula?",
            options: ["(-b±√(b²-4ac))/2a", "a²+b²=c²", "x=-b/2a", "c/a"],
            correct: 0,
          },
          {
            question: "x²=16 → x?",
            options: ["4", "±4", "2", "±2"],
            correct: 1,
          },
          {
            question: "Sum of roots?",
            options: ["-b/a", "c/a", "-c/a", "b/a"],
            correct: 0,
          },
          {
            question: "(a+b)²?",
            options: ["a²+b²", "a²+2ab+b²", "a²-b²", "2ab"],
            correct: 1,
          },
        ],
      },

      calculus: {
        name: "Calculus",
        description: "Limits, derivatives, integrals",
        questions: [
          { question: "d/dx x²?", options: ["x", "2x", "x²", "1"], correct: 1 },
          {
            question: "d/dx sinx?",
            options: ["cosx", "-cosx", "tanx", "-sinx"],
            correct: 0,
          },
          {
            question: "∫1/x dx?",
            options: ["x²", "ln|x|+C", "eˣ", "1/x²"],
            correct: 1,
          },
          {
            question: "π≈?",
            options: ["2.71", "3.14", "1.41", "1.73"],
            correct: 1,
          },
          { question: "d/dx eˣ?", options: ["eˣ", "1", "x", "0"], correct: 0 },
        ],
      },

      geometry: {
        name: "Geometry",
        description: "Triangles, circles",
        questions: [
          {
            question: "Sum of angles?",
            options: ["90°", "180°", "270°", "360°"],
            correct: 1,
          },
          {
            question: "Area of circle?",
            options: ["2πr", "πr²", "πd", "r²"],
            correct: 1,
          },
          {
            question: "Pythagoras for?",
            options: [
              "Any triangle",
              "Right triangle",
              "Equilateral",
              "Isosceles",
            ],
            correct: 1,
          },
          {
            question: "Radius?",
            options: ["Half diameter", "Same", "Double", "None"],
            correct: 0,
          },
          {
            question: "5-sided polygon?",
            options: ["Hexagon", "Pentagon", "Octagon", "Nonagon"],
            correct: 1,
          },
        ],
      },
    },
  },

  cuet: {
    general_knowledge: {
      india: {
        name: "Indian History & Polity",
        description: "Freedom struggle",
        questions: [
          {
            question: "Independence?",
            options: ["1945", "1947", "1950", "1930"],
            correct: 1,
          },
          {
            question: "Father of nation?",
            options: ["Nehru", "Gandhi", "Patel", "Ambedkar"],
            correct: 1,
          },
          {
            question: "Constitution enforced?",
            options: ["15 Aug", "26 Jan 1950", "26 Nov", "2 Oct"],
            correct: 1,
          },
          {
            question: "Capital?",
            options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
            correct: 1,
          },
          {
            question: "LS elected by?",
            options: ["President", "People", "RS", "Judiciary"],
            correct: 1,
          },
        ],
      },

      world: {
        name: "World Geography",
        description: "Countries, physical geography",
        questions: [
          {
            question: "Capital of Australia?",
            options: ["Sydney", "Canberra", "Melbourne", "Perth"],
            correct: 1,
          },
          {
            question: "Largest ocean?",
            options: ["Indian", "Pacific", "Arctic", "Atlantic"],
            correct: 1,
          },
          {
            question: "Everest in?",
            options: ["India", "Nepal", "China", "Bhutan"],
            correct: 1,
          },
          {
            question: "Sahara is?",
            options: ["Forest", "Desert", "River", "Plateau"],
            correct: 1,
          },
          {
            question: "Amazon is?",
            options: ["Lake", "Desert", "River", "Mountain"],
            correct: 2,
          },
        ],
      },

      economy: {
        name: "Economics",
        description: "GDP, inflation",
        questions: [
          {
            question: "GDP full form?",
            options: [
              "Gross Domestic Product",
              "Global Domestic Product",
              "Plan",
              "Project",
            ],
            correct: 0,
          },
          {
            question: "Inflation?",
            options: ["Fall", "Rise", "Stable", "No change"],
            correct: 1,
          },
          {
            question: "Japan currency?",
            options: ["Won", "Yen", "Dollar", "Euro"],
            correct: 1,
          },
          {
            question: "RBI is?",
            options: ["USA", "UK", "India", "Japan"],
            correct: 2,
          },
          {
            question: "Primary sector?",
            options: ["IT", "Banking", "Agriculture", "Transport"],
            correct: 2,
          },
        ],
      },
    },

    reasoning: {
      logical: {
        name: "Logical Reasoning",
        description: "Patterns & logic",
        questions: [
          {
            question: "1,4,9,16,?",
            options: ["20", "25", "24", "30"],
            correct: 1,
          },
          {
            question: "Smallest prime?",
            options: ["0", "1", "2", "3"],
            correct: 2,
          },
          {
            question: "CAT=?",
            options: ["24", "321", "312", "23"],
            correct: 1,
          },
          { question: "Odd one?", options: ["2", "3", "5", "9"], correct: 3 },
          { question: "3+3=?", options: ["5", "6", "7", "8"], correct: 1 },
        ],
      },

      verbal: {
        name: "Verbal Reasoning",
        description: "Vocabulary & grammar",
        questions: [
          {
            question: "Antonym of HAPPY?",
            options: ["Joyful", "Sad", "Excited", "Positive"],
            correct: 1,
          },
          {
            question: "Who wrote Hamlet?",
            options: ["Shakespeare", "Twain", "Austen", "Dickens"],
            correct: 0,
          },
          {
            question: "Synonym DIFFICULT?",
            options: ["Hard", "Easy", "Simple", "Light"],
            correct: 0,
          },
          {
            question: "Past of go?",
            options: ["Goes", "Going", "Gone", "Went"],
            correct: 3,
          },
          {
            question: "Plural of child?",
            options: ["Childs", "Children", "Childes", "Childer"],
            correct: 1,
          },
        ],
      },

      data_interpretation: {
        name: "Data Interpretation",
        description: "Averages & charts",
        questions: [
          {
            question: "Avg of 10,20,30?",
            options: ["10", "15", "20", "30"],
            correct: 2,
          },
          {
            question: "Bar graph shows?",
            options: ["Comparison", "Speed", "Distance", "Temp"],
            correct: 0,
          },
          {
            question: "Pie chart shows?",
            options: ["Time", "Proportion", "Length", "Volume"],
            correct: 1,
          },
          {
            question: "Median of 1,2,3?",
            options: ["1", "2", "3", "4"],
            correct: 1,
          },
          {
            question: "Mode of 2,2,3,4?",
            options: ["2", "3", "4", "No mode"],
            correct: 0,
          },
        ],
      },
    },
  },

  neet: {
    biology: {
      cell_biology: {
        name: "Cell Biology",
        description: "Organelles & cells",
        questions: [
          {
            question: "Powerhouse?",
            options: ["Ribosome", "Nucleus", "Mitochondria", "Golgi"],
            correct: 2,
          },
          {
            question: "Photosynthesis?",
            options: ["Mito", "Chloro", "Ribo", "Nucleus"],
            correct: 1,
          },
          {
            question: "Cell membrane?",
            options: [
              "Impermeable",
              "Permeable",
              "Semi-permeable",
              "Non-living",
            ],
            correct: 2,
          },
          {
            question: "Protein synthesis?",
            options: ["Ribo", "Lysosome", "Mito", "Nucleus"],
            correct: 0,
          },
          {
            question: "Genetic material?",
            options: ["Cytoplasm", "Cell wall", "Nucleus", "Vacuole"],
            correct: 2,
          },
        ],
      },

      physiology: {
        name: "Human Physiology",
        description: "Body systems",
        questions: [
          {
            question: "Heart chambers?",
            options: ["2", "3", "4", "5"],
            correct: 2,
          },
          {
            question: "Universal donor?",
            options: ["A+", "B+", "O-", "AB+"],
            correct: 2,
          },
          {
            question: "Normal temp?",
            options: ["35", "37", "39", "40"],
            correct: 1,
          },
          {
            question: "Largest organ?",
            options: ["Liver", "Brain", "Skin", "Heart"],
            correct: 2,
          },
          {
            question: "Insulin?",
            options: ["Liver", "Pancreas", "Kidney", "Stomach"],
            correct: 1,
          },
        ],
      },

      genetics: {
        name: "Genetics",
        description: "DNA & heredity",
        questions: [
          {
            question: "DNA?",
            options: ["Deoxy...", "Di...", "Dual...", "Dynamic"],
            correct: 0,
          },
          {
            question: "Unit of heredity?",
            options: ["Cell", "Gene", "Chromosome", "Nucleus"],
            correct: 1,
          },
          {
            question: "Glucose?",
            options: ["Protein", "Carb", "Fat", "Vitamin"],
            correct: 1,
          },
          {
            question: "Enzymes?",
            options: ["Proteins", "Lipids", "Carbs", "Minerals"],
            correct: 0,
          },
          {
            question: "Blood pH?",
            options: ["6.5", "7.4", "8.0", "5.5"],
            correct: 1,
          },
        ],
      },
    },

    physics: {
      optics: {
        name: "Optics",
        description: "Light & reflection",
        questions: [
          {
            question: "Speed of light?",
            options: ["3e8", "3e6", "3e4", "3e2"],
            correct: 0,
          },
          {
            question: "Frequency unit?",
            options: ["Hertz", "Newton", "Joule", "Pascal"],
            correct: 0,
          },
          {
            question: "Convex lens?",
            options: ["Diverging", "Converging", "Mirror", "None"],
            correct: 1,
          },
          {
            question: "Visible range?",
            options: ["400–700nm", "100–200", "800–900", "900–1000"],
            correct: 0,
          },
          {
            question: "Reflection follows?",
            options: ["Ohm", "Snell", "Reflection", "Hooke"],
            correct: 2,
          },
        ],
      },

      motion: {
        name: "Motion",
        description: "Speed & acceleration",
        questions: [
          {
            question: "Speed?",
            options: ["d/t", "t/d", "v/t", "m/v"],
            correct: 0,
          },
          {
            question: "Uniform motion?",
            options: ["Constant", "Increasing", "Decreasing", "Random"],
            correct: 0,
          },
          {
            question: "Velocity?",
            options: ["m/s", "m", "s", "m/s²"],
            correct: 0,
          },
          {
            question: "Acceleration?",
            options: ["dv/dt", "dx/dt", "v/t", "t/v"],
            correct: 0,
          },
          {
            question: "Distance?",
            options: ["Scalar", "Vector", "Tensor", "None"],
            correct: 0,
          },
        ],
      },

      electricity: {
        name: "Electricity",
        description: "Current, voltage",
        questions: [
          {
            question: "Current unit?",
            options: ["Volt", "Ampere", "Ohm", "Watt"],
            correct: 1,
          },
          {
            question: "V=IR?",
            options: ["Ohm", "Faraday", "Newton", "Kirchhoff"],
            correct: 0,
          },
          {
            question: "Power?",
            options: ["VI", "IR", "VR", "I/R"],
            correct: 0,
          },
          {
            question: "Charge?",
            options: ["Coulomb", "Farad", "Tesla", "Henry"],
            correct: 0,
          },
          {
            question: "Resistance symbol?",
            options: ["Ω", "μ", "π", "α"],
            correct: 0,
          },
        ],
      },
    },

    chemistry: {
      organic: {
        name: "Biomolecules",
        description: "Proteins & carbs",
        questions: [
          {
            question: "Protein made of?",
            options: ["Amino acids", "Sugars", "Fatty", "Nucleotides"],
            correct: 0,
          },
          {
            question: "Glucose?",
            options: ["Carb", "Protein", "Lipid", "Vitamin"],
            correct: 0,
          },
          {
            question: "Enzymes?",
            options: ["Proteins", "Lipids", "Carbs", "Vitamins"],
            correct: 0,
          },
          {
            question: "DNA?",
            options: ["Nucleic acid", "Protein", "Carb", "Lipid"],
            correct: 0,
          },
          {
            question: "Protein energy?",
            options: ["4 kcal", "9", "2", "1"],
            correct: 0,
          },
        ],
      },

      inorganic: {
        name: "Inorganic",
        description: "Acids & salts",
        questions: [
          {
            question: "NaOH?",
            options: ["Acid", "Base", "Salt", "Gas"],
            correct: 1,
          },
          {
            question: "HCl?",
            options: ["Strong acid", "Weak acid", "Base", "Salt"],
            correct: 0,
          },
          {
            question: "CO₂ turns lime?",
            options: ["Blue", "Red", "Milky", "Green"],
            correct: 2,
          },
          {
            question: "Metal+acid?",
            options: ["Salt+H₂", "Salt", "Water", "CO₂"],
            correct: 0,
          },
          {
            question: "pH<7?",
            options: ["Neutral", "Basic", "Acidic", "None"],
            correct: 2,
          },
        ],
      },

      physical: {
        name: "Physical Chemistry",
        description: "Atomic basics",
        questions: [
          {
            question: "H atomic no?",
            options: ["0", "1", "2", "3"],
            correct: 1,
          },
          {
            question: "Water pH?",
            options: ["7", "1", "14", "10"],
            correct: 0,
          },
          {
            question: "Gas law?",
            options: ["PV=nRT", "F/A", "IR", "E=mc"],
            correct: 0,
          },
          {
            question: "Electron charge?",
            options: ["-1", "+1", "0", "+2"],
            correct: 0,
          },
          {
            question: "Neutron charge?",
            options: ["0", "+1", "-1", "+2"],
            correct: 0,
          },
        ],
      },
    },
  },
};

/****************************************
   HELPERS
*****************************************/
function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function saveLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getLocal(key) {
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/****************************************
   PAGE ROUTER
*****************************************/
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path.includes("login.html")) initLogin();
  else if (path.includes("signup.html")) initSignup();
  else if (path.includes("chapters.html")) initChapters();
  else if (path.includes("quiz.html")) initQuiz();
  else if (path.includes("results.html")) initResults();
  else initHome();
});

/****************************************
   LOGIN
*****************************************/
function initLogin() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const pass = document.getElementById("loginPassword").value;

    const users = getLocal("users") || [];
    const user = users.find((u) => u.email === email && u.password === pass);

    if (!user) {
      showMessage("loginError", "Invalid email or password!");
      return;
    }

    saveLocal("currentUser", { name: user.name, email: user.email });
    window.location.href = "index.html";
  });
}

/****************************************
   SIGNUP
*****************************************/
function initSignup() {
  const form = document.getElementById("signupForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const pass = document.getElementById("signupPassword").value;
    const confirm = document.getElementById("signupConfirmPassword").value;

    if (pass !== confirm) {
      showMessage("signupError", "Passwords do not match!");
      return;
    }

    const users = getLocal("users") || [];
    if (users.some((u) => u.email === email)) {
      showMessage("signupError", "Email already registered!");
      return;
    }

    users.push({ name, email, password: pass });
    saveLocal("users", users);
    saveLocal("currentUser", { name, email });

    window.location.href = "index.html";
  });
}

/****************************************
   TIMER
*****************************************/
function startTimer() {
  clearInterval(timerInterval);

  timeLeft = 60;
  const timerEl = document.getElementById("timerValue");
  if (!timerEl) return;

  timerEl.textContent = timeLeft + "s";

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft + "s";

    if (timeLeft <= 0) {
      clearInterval(timerInterval);

      if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        loadQuestion();
      } else {
        submitQuiz();
      }
    }
  }, 1000);
}

/****************************************
   HOME PAGE
*****************************************/
function initHome() {
  const user = getLocal("currentUser");
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const el = document.getElementById("userName");
  if (el) el.textContent = user.name;

  const logoutBtn = document.querySelector(".btn-logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("currentUser");
    });
  }
}

/****************************************
   CHAPTERS PAGE
*****************************************/
function initChapters() {
  const user = getLocal("currentUser");
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const category = getQueryParam("category");
  const titleEl = document.getElementById("chaptersTitle");
  const grid = document.getElementById("chaptersGrid");

  if (!category || !quizData[category]) return;

  const names = {
    jee: "JEE (Joint Entrance Exam)",
    cuet: "CUET (Common University Entrance Test)",
    neet: "NEET (Medical Entrance)",
  };

  titleEl.textContent = names[category] || "Chapters";

  let index = 1;
  const data = quizData[category];

  for (let subject in data) {
    for (let chapterKey in data[subject]) {
      const chapterData = data[subject][chapterKey];

      const card = document.createElement("div");
      card.className = "chapter-card";
      card.innerHTML = `
          <div class="chapter-number">Chapter ${index}</div>
          <h3>${chapterData.name}</h3>
          <p>${chapterData.description}</p>
          <p style="color:#a855f7; font-weight:600; margin-top:8px;">
            ${chapterData.questions.length} Questions
          </p>
        `;

      card.addEventListener("click", () => {
        window.location.href = `quiz.html?category=${category}&subject=${subject}&chapter=${chapterKey}`;
      });

      grid.appendChild(card);
      index++;
    }
  }
}

/****************************************
   QUIZ PAGE
*****************************************/
let currentQuestions = [];
let currentIndex = 0;
let answers = {};
let quizMeta = null;
let markedForReview = {};
let quizStartTime = null;

function initQuiz() {
  const user = getLocal("currentUser");
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const category = getQueryParam("category");
  const subject = getQueryParam("subject");
  const chapter = getQueryParam("chapter");

  const section = document.getElementById("quizSection");
  if (!section || !category || !subject || !chapter) return;

  const data = quizData[category]?.[subject]?.[chapter];
  if (!data) return;

  currentQuestions = data.questions;
  currentIndex = 0;
  answers = {};
  markedForReview = {};
  quizMeta = { category, subject, chapter, chapterName: data.name };

  quizStartTime = Date.now();

  section.innerHTML = `
    <h2>${data.name}</h2>
    <div id="quizProgressContainer">
      <div id="quizProgressFill"></div>
    </div>
    <div id="questionCounter"></div>

    <div id="timerDisplay">
      <span id="timerValue">60s</span>
    </div>

    <div id="questionText" class="question-text"></div>
    <div id="optionsContainer" class="options-container"></div>

    <div class="quiz-actions">
        <button id="prevBtn" class="btn btn-secondary">← Previous</button>

        <button id="clearBtn" class="btn btn-warning">Clear Response</button>
        <button id="markBtn" class="btn btn-purple">★ Mark</button>

        <button id="nextBtn" class="btn btn-primary">Next →</button>
        <button id="submitBtn" class="btn btn-success">Submit</button>
    </div>
  `;

  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      loadQuestion();
      renderPalette();
    }
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentIndex < currentQuestions.length - 1) {
      currentIndex++;
      loadQuestion();
      renderPalette();
    }
  });

  document.getElementById("submitBtn").addEventListener("click", submitQuiz);

  document.getElementById("clearBtn").addEventListener("click", () => {
    delete answers[currentIndex];
    loadQuestion();
    renderPalette();
  });

  document.getElementById("markBtn").addEventListener("click", () => {
    markedForReview[currentIndex] = !markedForReview[currentIndex];
    loadQuestion();
    renderPalette();
  });

  loadQuestion();
  function renderPalette() {
    const grid = document.getElementById("paletteGrid");
    if (!grid) return;

    grid.innerHTML = "";

    currentQuestions.forEach((q, i) => {
      const div = document.createElement("div");
      div.className = "palette-item";

      if (i === currentIndex) div.classList.add("current");
      if (answers[i] !== undefined) div.classList.add("answered");
      if (markedForReview[i]) div.classList.add("marked");

      div.textContent = i + 1;

      div.addEventListener("click", () => {
        currentIndex = i;
        loadQuestion();
        renderPalette();
      });

      grid.appendChild(div);
    });
  }

  renderPalette();
}

function loadQuestion() {
  const q = currentQuestions[currentIndex];

  const counterEl = document.getElementById("questionCounter");
  const questionEl = document.getElementById("questionText");
  const optionsEl = document.getElementById("optionsContainer");
  const prevBtn = document.getElementById("prevBtn");

  counterEl.textContent = `Question ${currentIndex + 1} of ${
    currentQuestions.length
  }`;
  questionEl.textContent = q.question;

  if (markedForReview[currentIndex]) {
    questionEl.innerHTML = `⭐ <span style="color:#a855f7">Marked for Review</span><br>${q.question}`;
  }

  optionsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option-item";
    div.innerHTML = `
      <input type="radio" name="opt" ${
        answers[currentIndex] === i ? "checked" : ""
      }>
      <label>${opt}</label>
    `;
    div.addEventListener("click", () => {
      answers[currentIndex] = i;
      loadQuestion();
    });
    optionsEl.appendChild(div);
  });

  prevBtn.disabled = currentIndex === 0;

  const progressFill = document.getElementById("quizProgressFill");
  progressFill.style.width =
    ((currentIndex + 1) / currentQuestions.length) * 100 + "%";

  startTimer();
}

function nextQuestion() {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion();
  }
}

/****************************************
   SUBMIT QUIZ 
*****************************************/
function submitQuiz() {
  clearInterval(timerInterval);

  let correct = 0,
    wrong = 0,
    notAttempted = 0;

  const detailed = [];

  currentQuestions.forEach((q, i) => {
    const userAns = answers[i];
    const userValue = userAns === undefined ? null : userAns;

    if (userValue === null) notAttempted++;
    else if (userValue === q.correct) correct++;
    else wrong++;

    let explanationText = "No explanation available.";

    if (typeof explanations !== "undefined" && quizMeta) {
      const cleanCategory = quizMeta.category.trim().toLowerCase();
      const cleanSubject = quizMeta.subject.trim().toLowerCase();
      const cleanChapter = quizMeta.chapter.trim().toLowerCase();

      const chapExpl =
        explanations?.[cleanCategory]?.[cleanSubject]?.[cleanChapter];

      if (Array.isArray(chapExpl) && chapExpl[i]) {
        explanationText = chapExpl[i];
      }
    }

    detailed.push({
      question: q.question,
      options: q.options,
      correctAnswer: q.correct,
      userAnswer: userValue,
      explanation: explanationText,
    });
  });

  const totalQuestions = currentQuestions.length;
  const attempted = totalQuestions - notAttempted;
  const accuracy = totalQuestions
    ? Math.round((correct / totalQuestions) * 100)
    : 0;

  // time taken in seconds (from quizStartTime)
  let timeTakenSeconds = 0;
  if (quizStartTime) {
    timeTakenSeconds = Math.round((Date.now() - quizStartTime) / 1000);
  }

  const summary = {
    totalQuestions,
    attempted,
    correct,
    wrong,
    notAttempted,
    accuracy,
    timeTakenSeconds,
  };

  saveLocal("quizMeta", quizMeta);

  saveLocal("quizResult", {
    correct,
    wrong,
    notAttempted,
    markedForReview,
    detailed,
    chapterName: quizMeta.chapterName,
    summary,
  });

  window.location.href = "results.html";
}

/****************************************
   RESULTS PAGE
*****************************************/
function initResults() {
  const result = getLocal("quizResult");
  if (!result) return;

  const correctEl = document.getElementById("correctAnswers");
  const wrongEl = document.getElementById("wrongAnswers");
  const notAttemptedEl = document.getElementById("notAttempted");
  const scoreEl = document.getElementById("scorePercentage");
  const chapterEl = document.getElementById("resultChapter");
  const reviewBox = document.getElementById("reviewContainer");

  const total = result.correct + result.wrong + result.notAttempted;
  const scorePercent = total ? Math.round((result.correct / total) * 100) : 0;

  if (correctEl) correctEl.textContent = result.correct;
  if (wrongEl) wrongEl.textContent = result.wrong;
  if (notAttemptedEl) notAttemptedEl.textContent = result.notAttempted;
  if (scoreEl) scoreEl.textContent = scorePercent + "%";
  if (chapterEl) chapterEl.textContent = result.chapterName;

  // summary elements
  const sumTotalEl = document.getElementById("sumTotal");
  const sumAttemptedEl = document.getElementById("sumAttempted");
  const sumAccuracyEl = document.getElementById("sumAccuracy");
  const sumTimeEl = document.getElementById("sumTime");

  const s = result.summary || {};
  const totalQuestions = s.totalQuestions ?? total;
  const attempted = s.attempted ?? total - result.notAttempted;
  const accuracy = s.accuracy ?? scorePercent;
  const timeTakenSeconds = s.timeTakenSeconds ?? 0;

  if (sumTotalEl) sumTotalEl.textContent = totalQuestions;
  if (sumAttemptedEl) sumAttemptedEl.textContent = attempted;
  if (sumAccuracyEl) sumAccuracyEl.textContent = accuracy + "%";

  if (sumTimeEl) {
    const mins = Math.floor(timeTakenSeconds / 60);
    const secs = timeTakenSeconds % 60;
    sumTimeEl.textContent = mins ? `${mins}m ${secs}s` : `${secs}s`;
  }

  // Question-wise review
  if (reviewBox) {
    reviewBox.innerHTML = result.detailed
      .map((item, index) => {
        const status =
          item.userAnswer === null
            ? "unattempted"
            : item.userAnswer === item.correctAnswer
            ? "correct"
            : "wrong";

        return `
        <div class="review-item ${status}">
            <h4>Q${index + 1}: ${item.question}</h4>

            <p><strong>Your Answer:</strong> 
                ${
                  item.userAnswer === null
                    ? "<span class='unanswered'>Unattempted</span>"
                    : item.options[item.userAnswer]
                }
            </p>

            <p><strong>Correct Answer:</strong> 
                ${item.options[item.correctAnswer]}
            </p>

            <p><strong>Explanation:</strong> 
                ${item.explanation}
            </p>
        </div>
      `;
      })
      .join("");
  }

  //  ADD FILTER LOGIC HERE
  const filterButtons = document.querySelectorAll(".filter-btn");
  const reviewItems = document.querySelectorAll(".review-item");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      reviewItems.forEach((item) => {
        if (filter === "all") item.style.display = "block";
        else if (item.classList.contains(filter)) item.style.display = "block";
        else item.style.display = "none";
      });
    });
  });

  // RETAKE BUTTON
  const meta = getLocal("quizMeta");
  const retakeBtn = document.getElementById("retakeBtn");

  if (meta && retakeBtn) {
    retakeBtn.href = `quiz.html?category=${meta.category}&subject=${meta.subject}&chapter=${meta.chapter}`;
  }
}

/****************************************
   TOAST MESSAGE
*****************************************/
function showMessage(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;

  el.textContent = msg;
  el.classList.add("show");

  setTimeout(() => el.classList.remove("show"), 3000);
}
