export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  subject: "biology" | "chemistry" | "physics" | "mixed";
  difficulty: "easy" | "medium" | "hard";
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  // Biology - Easy
  {
    id: "bio-easy-1",
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
    correctAnswer: 1,
    subject: "biology",
    difficulty: "easy",
    explanation: "Mitochondria produce ATP through cellular respiration, providing energy for the cell.",
  },
  {
    id: "bio-easy-2",
    question: "What is DNA short for?",
    options: ["Deoxyribonucleic Acid", "Dinitroxide Acid", "Dual Nuclear Acid", "Dextrose Nitric Acid"],
    correctAnswer: 0,
    subject: "biology",
    difficulty: "easy",
    explanation: "DNA stands for Deoxyribonucleic Acid, the molecule that carries genetic information.",
  },
  {
    id: "bio-easy-3",
    question: "How many chambers does a human heart have?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    subject: "biology",
    difficulty: "easy",
    explanation: "The human heart has 4 chambers: two atria and two ventricles.",
  },
  
  // Biology - Medium
  {
    id: "bio-med-1",
    question: "What process do plants use to convert light energy into chemical energy?",
    options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
    correctAnswer: 1,
    subject: "biology",
    difficulty: "medium",
    explanation: "Photosynthesis converts light energy (usually from the sun) into chemical energy stored in glucose.",
  },
  {
    id: "bio-med-2",
    question: "What are the building blocks of proteins?",
    options: ["Nucleotides", "Amino acids", "Fatty acids", "Carbohydrates"],
    correctAnswer: 1,
    subject: "biology",
    difficulty: "medium",
    explanation: "Proteins are made up of chains of amino acids linked by peptide bonds.",
  },
  
  // Biology - Hard
  {
    id: "bio-hard-1",
    question: "What is the role of mRNA in protein synthesis?",
    options: [
      "It stores genetic information",
      "It carries amino acids to ribosomes",
      "It transfers genetic code from DNA to ribosomes",
      "It breaks down proteins"
    ],
    correctAnswer: 2,
    subject: "biology",
    difficulty: "hard",
    explanation: "mRNA (messenger RNA) carries genetic information from DNA in the nucleus to ribosomes for protein synthesis.",
  },

  // Chemistry - Easy
  {
    id: "chem-easy-1",
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "H2O2"],
    correctAnswer: 0,
    subject: "chemistry",
    difficulty: "easy",
    explanation: "Water is H2O - two hydrogen atoms bonded to one oxygen atom.",
  },
  {
    id: "chem-easy-2",
    question: "What is the most abundant element in Earth's atmosphere?",
    options: ["Oxygen", "Carbon", "Nitrogen", "Hydrogen"],
    correctAnswer: 2,
    subject: "chemistry",
    difficulty: "easy",
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere.",
  },
  {
    id: "chem-easy-3",
    question: "What is the pH of pure water?",
    options: ["0", "7", "14", "10"],
    correctAnswer: 1,
    subject: "chemistry",
    difficulty: "easy",
    explanation: "Pure water has a pH of 7, which is neutral (not acidic or basic).",
  },

  // Chemistry - Medium
  {
    id: "chem-med-1",
    question: "What type of bond forms when atoms share electrons?",
    options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
    correctAnswer: 1,
    subject: "chemistry",
    difficulty: "medium",
    explanation: "Covalent bonds form when atoms share pairs of electrons to achieve stable electron configurations.",
  },
  {
    id: "chem-med-2",
    question: "What is Avogadro's number?",
    options: ["6.02 × 10²³", "3.14 × 10⁸", "1.38 × 10²³", "9.81 × 10⁹"],
    correctAnswer: 0,
    subject: "chemistry",
    difficulty: "medium",
    explanation: "Avogadro's number (6.02 × 10²³) is the number of particles in one mole of a substance.",
  },

  // Chemistry - Hard
  {
    id: "chem-hard-1",
    question: "What is the electron configuration of Iron (Fe)?",
    options: [
      "[Ar] 3d⁶ 4s²",
      "[Ar] 3d⁸",
      "[Ne] 3s² 3p⁶ 3d⁶",
      "[Kr] 4d⁶"
    ],
    correctAnswer: 0,
    subject: "chemistry",
    difficulty: "hard",
    explanation: "Iron has 26 electrons. Its configuration is [Ar] 3d⁶ 4s², where [Ar] represents the configuration of Argon.",
  },

  // Physics - Easy
  {
    id: "phys-easy-1",
    question: "What is the SI unit of force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correctAnswer: 1,
    subject: "physics",
    difficulty: "easy",
    explanation: "The Newton (N) is the SI unit of force, named after Isaac Newton.",
  },
  {
    id: "phys-easy-2",
    question: "What is the speed of light in a vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"],
    correctAnswer: 0,
    subject: "physics",
    difficulty: "easy",
    explanation: "Light travels at approximately 300,000 kilometers per second (or 3 × 10⁸ m/s) in a vacuum.",
  },
  {
    id: "phys-easy-3",
    question: "What force keeps planets in orbit around the Sun?",
    options: ["Magnetic force", "Gravity", "Nuclear force", "Friction"],
    correctAnswer: 1,
    subject: "physics",
    difficulty: "easy",
    explanation: "Gravity is the attractive force between masses that keeps planets in orbit.",
  },

  // Physics - Medium
  {
    id: "phys-med-1",
    question: "What is Newton's Second Law of Motion?",
    options: [
      "F = ma",
      "E = mc²",
      "For every action, there's an equal opposite reaction",
      "Objects at rest stay at rest"
    ],
    correctAnswer: 0,
    subject: "physics",
    difficulty: "medium",
    explanation: "Newton's Second Law states that Force equals mass times acceleration (F = ma).",
  },
  {
    id: "phys-med-2",
    question: "What type of energy does a stretched spring possess?",
    options: ["Kinetic energy", "Thermal energy", "Potential energy", "Nuclear energy"],
    correctAnswer: 2,
    subject: "physics",
    difficulty: "medium",
    explanation: "A stretched or compressed spring has elastic potential energy stored due to its deformation.",
  },

  // Physics - Hard
  {
    id: "phys-hard-1",
    question: "What is Heisenberg's Uncertainty Principle?",
    options: [
      "Energy cannot be created or destroyed",
      "You cannot simultaneously know exact position and momentum of a particle",
      "Light behaves as both wave and particle",
      "Mass and energy are equivalent"
    ],
    correctAnswer: 1,
    subject: "physics",
    difficulty: "hard",
    explanation: "The Uncertainty Principle states that the more precisely you know a particle's position, the less precisely you can know its momentum, and vice versa.",
  },
];

export const getQuestionsByFilters = (
  subject: "biology" | "chemistry" | "physics" | "mixed",
  difficulty: "easy" | "medium" | "hard"
): QuizQuestion[] => {
  let filtered = quizQuestions;
  
  if (subject !== "mixed") {
    filtered = filtered.filter(q => q.subject === subject);
  }
  
  filtered = filtered.filter(q => q.difficulty === difficulty);
  
  // Shuffle and return
  return filtered.sort(() => Math.random() - 0.5);
};
