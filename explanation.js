const explanations = {
  jee: {
    physics: {
      mechanics: [
        "Law of inertia states that an object continues in its state unless acted by an external force.",
        "Newton is the SI unit of force.",
        "Work = Force × displacement.",
        "g on Earth is approximately 9.8 m/s².",
        "Kinetic energy formula is ½mv².",
      ],
      waves: [
        "Speed of sound in air at room temperature is ~330 m/s.",
        "Frequency is measured in Hertz.",
        "Sound waves are longitudinal.",
        "Wave speed = wavelength × frequency.",
        "Amplitude represents energy of the wave.",
      ],
      electromagnetism: [
        "Ampere is the SI unit of current.",
        "Ohm’s law: V = IR.",
        "Ohm is the unit of resistance.",
        "Tesla is the SI unit of magnetic field.",
        "Speed of light in vacuum is 3 × 10⁸ m/s.",
      ],
    },

    chemistry: {
      organic: [
        "Ethane has formula C₂H₆.",
        "Alcohols contain the -OH functional group.",
        "Benzene is an aromatic compound.",
        "Glucose formula is C₆H₁₂O₆.",
        "CH₃–CH₃ has IUPAC name Ethane.",
      ],
      physical: [
        "Neutral solution has pH = 7.",
        "Avogadro number = 6.022 × 10²³.",
        "Ideal gas equation is PV = nRT.",
        "Pascal is SI unit of pressure.",
        "STP temperature is 0°C.",
      ],
      inorganic: [
        "Oxygen has atomic number 8.",
        "NaCl is an ionic compound.",
        "Iron is a metal.",
        "Hydrogen gives a popping sound when burnt.",
        "Potassium is highly reactive.",
      ],
    },

    mathematics: {
      algebra: [
        "√(-1) = i (imaginary unit).",
        "Quadratic formula: (-b ± √(b² - 4ac)) / 2a.",
        "x² = 16 → x = ±4.",
        "Sum of roots = -b/a.",
        "(a+b)² = a² + 2ab + b².",
      ],
      calculus: [
        "Derivative of x² is 2x.",
        "Derivative of sin x is cos x.",
        "Integral of 1/x is ln|x| + C.",
        "π ≈ 3.14.",
        "Derivative of eˣ is eˣ.",
      ],
      geometry: [
        "Sum of angles of triangle = 180°.",
        "Area of circle = πr².",
        "Pythagoras theorem is for right triangles.",
        "Radius = half of diameter.",
        "Polygon with 5 sides = Pentagon.",
      ],
    },
  },

  cuet: {
    general_knowledge: {
      india: [
        "India gained independence on 15th August 1947.",
        "Mahatma Gandhi is known as the Father of the Nation.",
        "The Constitution was enforced on 26 January 1950.",
        "The capital of India is New Delhi.",
        "People directly elect the Lok Sabha members.",
      ],
      world: [
        "Capital of Australia is Canberra.",
        "Pacific Ocean is the largest.",
        "Mount Everest is located in Nepal.",
        "Sahara is the world's largest hot desert.",
        "Amazon is the second longest river in the world.",
      ],
      economy: [
        "GDP stands for Gross Domestic Product.",
        "Inflation means a continuous increase in prices.",
        "Japan's currency is Yen.",
        "RBI is the central bank of India.",
        "Agriculture is the primary sector.",
      ],
    },

    reasoning: {
      logical: [
        "Series: 1,4,9,16 → perfect squares → next is 25.",
        "2 is the smallest prime number.",
        "CAT → 3,1,20 → 312 logically (C-A-T).",
        "9 is not a prime number, so it is the odd one out.",
        "3+3 = 6 (standard arithmetic).",
      ],
      verbal: [
        "Opposite of happy is sad.",
        "Shakespeare wrote 'Hamlet'.",
        "Synonym of difficult is hard.",
        "Past of go is went.",
        "Plural of child is children.",
      ],
      data_interpretation: [
        "Average of 10,20,30 = (10+20+30)/3 = 20.",
        "Bar graph is used for comparing categories.",
        "Pie chart shows proportional values.",
        "Median of 1,2,3 is 2.",
        "Mode is the value occurring most frequently → 2.",
      ],
    },
  },

  neet: {
    biology: {
      cell_biology: [
        "Mitochondria produce ATP, so they are called the powerhouse of the cell.",
        "Photosynthesis occurs inside chloroplasts because they contain chlorophyll.",
        "A cell membrane is selectively/semi-permeable, allowing some substances to pass.",
        "Ribosomes are the sites of protein synthesis.",
        "Genetic material (DNA) is stored mainly in the nucleus.",
      ],
      physiology: [
        "The human heart has four chambers: two atria and two ventricles.",
        "O-negative is the universal donor because it can be given to any blood group.",
        "Normal human body temperature is 37°C.",
        "Skin is the largest organ of the human body.",
        "Insulin is produced by the pancreas (beta cells).",
      ],
      genetics: [
        "DNA stands for Deoxyribonucleic Acid.",
        "A gene is the functional unit of heredity.",
        "Glucose is a carbohydrate (monosaccharide).",
        "Most enzymes are proteins that act as biological catalysts.",
        "Normal human blood pH is around 7.4.",
      ],
    },

    physics: {
      optics: [
        "Speed of light in vacuum is 3 × 10⁸ m/s.",
        "Frequency is measured in Hertz (Hz).",
        "A convex lens converges parallel rays, so it is a converging lens.",
        "Visible light wavelength range is 400–700 nm.",
        "Reflection follows the law of reflection: angle of incidence = angle of reflection.",
      ],
      motion: [
        "Speed = distance / time.",
        "Uniform motion means the object moves at constant speed.",
        "Unit of velocity is m/s.",
        "Acceleration = change in velocity per unit time (dv/dt).",
        "Distance is a scalar quantity because it has only magnitude.",
      ],
      electricity: [
        "Electric current is measured in Ampere.",
        "V = IR is known as Ohm’s Law.",
        "Power in electricity is calculated using P = VI.",
        "Charge is measured in Coulombs.",
        "The symbol of resistance is Ω (Ohm).",
      ],
    },

    chemistry: {
      organic: [
        "Proteins are made of amino acids linked by peptide bonds.",
        "Glucose is a carbohydrate (simple sugar).",
        "Most enzymes are proteins that speed up reactions.",
        "DNA is a nucleic acid made of nucleotides.",
        "1 gram of protein provides around 4 kcal of energy.",
      ],
      inorganic: [
        "NaOH is a strong base.",
        "HCl is a strong acid.",
        "CO₂ turns lime water milky by forming calcium carbonate.",
        "Metal + acid → salt + hydrogen gas.",
        "pH < 7 indicates an acidic solution.",
      ],
      physical: [
        "Hydrogen has atomic number 1.",
        "Pure water at 25°C has pH = 7 (neutral).",
        "Ideal gas equation is PV = nRT.",
        "Electron has a charge of -1.",
        "Neutron has no charge (0).",
      ],
    },
  },
};
