export interface CPR {
  title: string;
  description: string;
  criteria: string[];
  accuracy: string;
  references: string[];
}

export const cprData: CPR[] = [
  {
    title: "Spinal Manipulation CPR for Low Back Pain",
    description: "Helps predict if a patient with acute low back pain is likely to benefit from spinal manipulation",
    criteria: [
      "Duration of symptoms: Less than 16 days",
      "No symptoms below the knee",
      "Hip internal rotation: At least 1 hip with > 35 degrees of internal rotation",
      "Low fear avoidance (measured by FABQ work subscale)",
      "Absence of neurologic signs"
    ],
    accuracy: "Beneficial when 4 out of 5 criteria are present",
    references: [
      "Flynn T, Fritz J, Whitman J, et al. A clinical prediction rule for classifying patients with low back pain who demonstrate short-term improvement with spinal manipulation. Spine. 2002;27(24):2835-2843.",
      "Childs JD, Fritz JM, Flynn TW, et al. A clinical prediction rule to identify patients with low back pain most likely to benefit from spinal manipulation: a validation study. Ann Intern Med. 2004;141(12):920-928."
    ]
  },
  {
    title: "Lumbar Spinal Stenosis CPR",
    description: "Helps identify patients with low back pain who are likely to have lumbar spinal stenosis (LSS)",
    criteria: [
      "Age: Older than 50 years",
      "Bilateral leg pain",
      "Relief with flexion (bending forward or sitting)",
      "Worsening symptoms with extension"
    ],
    accuracy: "High likelihood of LSS when all criteria are present",
    references: [
      "Cook CJ, Cook CE, Reiman MP, et al. Systematic review of diagnostic accuracy of patient history, clinical findings, and physical tests in the diagnosis of lumbar spinal stenosis. Eur Spine J. 2020;29(1):93-112.",
      "Katz JN, Dalgas M, Stucki G, et al. Degenerative lumbar spinal stenosis. Diagnostic value of the history and physical examination. Arthritis Rheum. 1995;38(9):1236-1241."
    ]
  },
  {
    title: "Cervical Radiculopathy CPR",
    description: "Helps predict the likelihood of cervical radiculopathy in patients with neck pain and arm symptoms",
    criteria: [
      "Positive upper limb tension test (ULTT)",
      "Positive Spurling's test",
      "Positive cervical distraction test"
    ],
    accuracy: "Highly likely when all 3 criteria are positive",
    references: [
      "Wainner RS, Fritz JM, Irrgang JJ, et al. Development of a clinical prediction rule for the diagnosis of cervical radiculopathy. Arch Phys Med Rehabil. 2003;84(1):4-11.",
      "Thoomes EJ, van Geest S, van der Windt DA, et al. Value of physical tests in diagnosing cervical radiculopathy: a systematic review. Spine J. 2018;18(1):179-189."
    ]
  },
  {
    title: "Cervical Manipulation CPR",
    description: "Identifies patients with acute neck pain who are likely to benefit from cervical manipulation",
    criteria: [
      "Age: Between 18-60 years",
      "Symptoms lasting less than 38 days",
      "No neurological signs",
      "At least 10 degrees of cervical rotation difference between sides",
      "No signs of centralization"
    ],
    accuracy: "Success rate increases when all criteria are met",
    references: [
      "Tseng YL, Wang WT, Chen WY, et al. Predictors for the immediate responders to cervical manipulation in patients with neck pain. Man Ther. 2006;11(4):306-315.",
      "Cleland JA, Childs JD, Fritz JM, et al. Development of a clinical prediction rule for guiding treatment of a subgroup of patients with neck pain: use of thoracic spine manipulation, exercise, and patient education. Phys Ther. 2007;87(1):9-23."
    ]
  },
  {
    title: "Shoulder Impingement Syndrome CPR",
    description: "Helps diagnose shoulder impingement syndrome",
    criteria: [
      "Positive Neer's test",
      "Positive Hawkins-Kennedy test",
      "Pain with overhead activities",
      "Pain on palpation of acromion and greater tuberosity",
      "Restricted motion in abduction or flexion"
    ],
    accuracy: "Strong support for diagnosis when criteria combination is positive",
    references: []
  },
  {
    title: "Rotator Cuff Tear CPR",
    description: "Identifies patients likely to have a rotator cuff tear",
    criteria: [
      "Age: Older than 60 years",
      "Weakness in external rotation",
      "Pain with shoulder motion",
      "Night pain",
      "Limited range of motion"
    ],
    accuracy: "High likelihood when 3 or more criteria are met, especially in patients over 60",
    references: []
  },
  {
    title: "Knee Osteoarthritis CPR",
    description: "Identifies patients with knee osteoarthritis (OA)",
    criteria: [
      "Age: Greater than 50 years",
      "Morning stiffness: Less than 30 minutes",
      "Crepitus during knee motion",
      "Bony enlargement of the knee",
      "Pain with weight-bearing"
    ],
    accuracy: "Increased likelihood when pain and crepitus are present with other criteria",
    references: []
  },
  {
    title: "ACL Injury CPR",
    description: "Helps predict the likelihood of ACL injury in patients presenting with knee pain",
    criteria: [
      "Age: Under 25 years",
      "Sudden deceleration or pivoting injury",
      "Positive Lachman's test",
      "Positive anterior drawer test",
      "Inability to hop on affected leg"
    ],
    accuracy: "High probability when at least 3 criteria are met",
    references: []
  },
  {
    title: "Patellofemoral Pain Syndrome CPR",
    description: "Identifies patients with patellofemoral pain syndrome",
    criteria: [
      "Anterior knee pain",
      "Pain with squatting or climbing stairs",
      "Pain with prolonged sitting",
      "Positive patellar grind test",
      "Pain with resisted knee extension"
    ],
    accuracy: "Likely when 3 or more symptoms are present",
    references: []
  },
  {
    title: "Hip Osteoarthritis CPR",
    description: "Predicts the likelihood of hip osteoarthritis (OA)",
    criteria: [
      "Age: > 50 years",
      "Hip pain localized to groin or anterior hip",
      "Morning stiffness < 60 minutes",
      "Limited hip internal rotation",
      "Pain with weight-bearing activities"
    ],
    accuracy: "Highly likely when 4 of 5 criteria are present",
    references: []
  },
  {
    title: "Hip Labral Tear CPR",
    description: "Identifies patients with a hip labral tear",
    criteria: [
      "History of hip trauma or repetitive stress",
      "Pain with deep hip flexion or internal rotation",
      "Clicking or catching sensation",
      "Pain with resisted hip flexion or abduction",
      "Limited internal rotation"
    ],
    accuracy: "Likely when at least 3 factors are present",
    references: []
  },
  {
    title: "Plantar Fasciitis CPR",
    description: "Helps diagnose plantar fasciitis in patients with heel pain",
    criteria: [
      "Pain on medial calcaneal tuberosity",
      "Pain first thing in the morning",
      "Pain with dorsiflexion",
      "No pain with weight-bearing after warming up",
      "Pain with prolonged standing"
    ],
    accuracy: "Likely when at least 3 criteria are present",
    references: []
  },
  {
    title: "Chronic Ankle Instability CPR",
    description: "Identifies individuals at risk for chronic ankle instability following a sprain",
    criteria: [
      "History of recurrent ankle sprains",
      "Self-reported feelings of instability",
      "Positive ligamentous tests",
      "Pain or weakness with functional activities",
      "History of severe initial sprain"
    ],
    accuracy: "Likely when 3 or more criteria are present",
    references: []
  },
  {
    title: "Basic CPR",
    description: "Basic CPR description",
    criteria: [
      "Criterion 1",
      "Criterion 2",
      "Criterion 3"
    ],
    accuracy: "Basic CPR accuracy",
    references: []
  }
];