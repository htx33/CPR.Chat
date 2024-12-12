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
      "Flynn T, Fritz J, Whitman J, et al. A clinical prediction rule for classifying patients with low back pain who demonstrate short-term improvement with spinal manipulation. Spine. 2002;27(24):2835-2843. DOI: 10.1097/00007632-200212150-00018",
      "Childs JD, Fritz JM, Flynn TW, et al. A clinical prediction rule to identify patients with low back pain most likely to benefit from spinal manipulation: a validation study. Ann Intern Med. 2004;141(12):920-928. DOI: 10.7326/0003-4819-141-12-200412210-00008"
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
      "Cook CJ, Cook CE, Reiman MP, et al. Systematic review of diagnostic accuracy of patient history, clinical findings, and physical tests in the diagnosis of lumbar spinal stenosis. Eur Spine J. 2020;29(1):93-112. DOI: 10.1007/s00586-019-06048-4",
      "Katz JN, Dalgas M, Stucki G, et al. Degenerative lumbar spinal stenosis. Diagnostic value of the history and physical examination. Arthritis Rheum. 1995;38(9):1236-1241. DOI: 10.1002/art.1780380910"
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
      "Wainner RS, Fritz JM, Irrgang JJ, et al. Development of a clinical prediction rule for the diagnosis of cervical radiculopathy. Arch Phys Med Rehabil. 2003;84(1):4-11. DOI: 10.1053/apmr.2003.50024",
      "Thoomes EJ, van Geest S, van der Windt DA, et al. Value of physical tests in diagnosing cervical radiculopathy: a systematic review. Spine J. 2018;18(1):179-189. DOI: 10.1016/j.spinee.2017.08.241"
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
      "Tseng YL, Wang WT, Chen WY, et al. Predictors for the immediate responders to cervical manipulation in patients with neck pain. Man Ther. 2006;11(4):306-315. DOI: 10.1016/j.math.2005.07.009",
      "Cleland JA, Childs JD, Fritz JM, et al. Development of a clinical prediction rule for guiding treatment of a subgroup of patients with neck pain: use of thoracic spine manipulation, exercise, and patient education. Phys Ther. 2007;87(1):9-23. DOI: 10.2522/ptj.20060155"
    ]
  },
  {
    title: "Shoulder Impingement Syndrome CPR",
    description: "Identifies patients with shoulder pain likely to have impingement syndrome",
    criteria: [
      "Positive Hawkins-Kennedy test",
      "Painful arc during abduction",
      "Pain on palpation of acromion and greater tuberosity",
      "Restricted motion in abduction or flexion"
    ],
    accuracy: "Strong support for diagnosis when criteria combination is positive",
    references: [
      "Michener LA, Walsworth MK, Doukas WC, Murphy KP. Reliability and diagnostic accuracy of 5 physical examination tests and combination of tests for subacromial impingement. Arch Phys Med Rehabil. 2009;90(11):1898-1903. DOI: 10.1016/j.apmr.2009.05.015",
      "Hegedus EJ, Goode AP, Cook CE, et al. Which physical examination tests provide clinicians with the most value when examining the shoulder? Update of a systematic review with meta-analysis of individual tests. Br J Sports Med. 2012;46(14):964-978. DOI: 10.1136/bjsports-2012-091066"
    ]
  },
  {
    title: "Rotator Cuff Tear CPR",
    description: "Helps identify patients likely to have a rotator cuff tear",
    criteria: [
      "Age > 60 years",
      "Weakness in external rotation",
      "Night pain",
      "Limited range of motion"
    ],
    accuracy: "High likelihood when 3 or more criteria are met, especially in patients over 60",
    references: [
      "Park HB, Yokota A, Gill HS, El Rassi G, McFarland EG. Diagnostic accuracy of clinical tests for the different degrees of subacromial impingement syndrome. J Bone Joint Surg Am. 2005;87(7):1446-1455. DOI: 10.2106/JBJS.D.02335",
      "Hermans J, Luime JJ, Meuffels DE, et al. Does this patient with shoulder pain have rotator cuff disease? The Rational Clinical Examination systematic review. JAMA. 2013;310(8):837-847. DOI: 10.1001/jama.2013.276187"
    ]
  },
  {
    title: "Knee Osteoarthritis CPR",
    description: "Helps identify patients with knee pain likely to have osteoarthritis",
    criteria: [
      "Age > 50 years",
      "Morning stiffness < 30 minutes",
      "Crepitus with active motion",
      "Bony enlargement of the knee",
      "Pain with weight-bearing"
    ],
    accuracy: "Increased likelihood when pain and crepitus are present with other criteria",
    references: [
      "Altman R, Asch E, Bloch D, et al. Development of criteria for the classification and reporting of osteoarthritis. Classification of osteoarthritis of the knee. Arthritis Rheum. 1986;29(8):1039-1049. DOI: 10.1002/art.1780290816",
      "Zhang W, Doherty M, Peat G, et al. EULAR evidence-based recommendations for the diagnosis of knee osteoarthritis. Ann Rheum Dis. 2010;69(3):483-489. DOI: 10.1136/ard.2009.113100"
    ]
  },
  {
    title: "ACL Injury CPR",
    description: "Helps identify patients with knee injury likely to have ACL tear",
    criteria: [
      "Positive Lachman test",
      "History of 'pop' during injury",
      "Positive pivot shift test",
      "Positive anterior drawer test",
      "Inability to hop on affected leg"
    ],
    accuracy: "High probability when at least 3 criteria are met",
    references: [
      "Benjaminse A, Gokeler A, van der Schans CP. Clinical diagnosis of an anterior cruciate ligament rupture: a meta-analysis. J Orthop Sports Phys Ther. 2006;36(5):267-288. DOI: 10.2519/jospt.2006.2011",
      "Leblanc MC, Kowalczuk M, Andruszkiewicz N, et al. Diagnostic accuracy of physical examination for anterior cruciate ligament injury: a systematic review. Br J Sports Med. 2015;49(22):1467-1472. DOI: 10.1136/bjsports-2013-092791"
    ]
  },
  {
    title: "Patellofemoral Pain Syndrome CPR",
    description: "Identifies patients with anterior knee pain likely to have PFPS",
    criteria: [
      "Age < 50 years",
      "Insidious onset",
      "Pain with squatting/stairs",
      "Positive patellar grind test",
      "Pain with resisted knee extension"
    ],
    accuracy: "Likely when 3 or more symptoms are present",
    references: [
      "Cook C, Mabry L, Reiman MP, Hegedus EJ. Best tests/clinical findings for screening and diagnosis of patellofemoral pain syndrome: a systematic review. Physiotherapy. 2012;98(2):93-100. DOI: 10.1016/j.physio.2011.09.001",
      "Crossley KM, Stefanik JJ, Selfe J, et al. 2016 Patellofemoral pain consensus statement from the 4th International Patellofemoral Pain Research Retreat. Br J Sports Med. 2016;50(14):839-843. DOI: 10.1136/bjsports-2016-096384"
    ]
  },
  {
    title: "Hip Osteoarthritis CPR",
    description: "Helps identify patients with hip pain likely to have osteoarthritis",
    criteria: [
      "Age > 50 years",
      "Morning stiffness < 60 minutes",
      "Hip pain with internal rotation",
      "Limited hip internal rotation",
      "Pain with weight-bearing activities"
    ],
    accuracy: "Highly likely when 4 of 5 criteria are present",
    references: [
      "Altman R, Alarcón G, Appelrouth D, et al. The American College of Rheumatology criteria for the classification and reporting of osteoarthritis of the hip. Arthritis Rheum. 1991;34(5):505-514. DOI: 10.1002/art.1780340502",
      "Kim C, Nevitt MC, Niu J, et al. Association of hip pain with radiographic evidence of hip osteoarthritis: diagnostic test study. BMJ. 2015;351:h5983. DOI: 10.1136/bmj.h5983"
    ]
  },
  {
    title: "Hip Labral Tear CPR",
    description: "Helps identify patients with hip pain likely to have a labral tear",
    criteria: [
      "Clicking or catching sensation",
      "Positive FADIR test",
      "Pain with resisted hip flexion or abduction",
      "Limited internal rotation"
    ],
    accuracy: "Likely when at least 3 factors are present",
    references: [
      "Martin RL, Kivlan BR, Cleland JA. A clinical prediction rule for classifying patients with patellofemoral pain who demonstrate short-term success with hip mobilization and exercise. Int J Sports Phys Ther. 2013;8(3):192-201.",
      "Reiman MP, Goode AP, Cook CE, et al. Diagnostic accuracy of clinical tests for the diagnosis of hip femoroacetabular impingement/labral tear: a systematic review with meta-analysis. Br J Sports Med. 2015;49(12):811. DOI: 10.1136/bjsports-2014-094302"
    ]
  },
  {
    title: "Plantar Fasciitis CPR",
    description: "Helps identify patients with heel pain likely to have plantar fasciitis",
    criteria: [
      "First-step morning pain",
      "Pain with palpation of plantar fascia",
      "No pain with weight-bearing after warming up",
      "Pain with prolonged standing"
    ],
    accuracy: "Likely when at least 3 criteria are present",
    references: [
      "Martin RL, Davenport TE, Reischl SF, et al. Heel pain-plantar fasciitis: revision 2014. J Orthop Sports Phys Ther. 2014;44(11):A1-33. DOI: 10.2519/jospt.2014.0303",
      "McPoil TG, Martin RL, Cornwall MW, et al. Heel pain--plantar fasciitis: clinical practice guidelines linked to the international classification of function, disability, and health from the orthopaedic section of the American Physical Therapy Association. J Orthop Sports Phys Ther. 2008;38(4):A1-A18. DOI: 10.2519/jospt.2008.0302"
    ]
  },
  {
    title: "Chronic Ankle Instability CPR",
    description: "Helps identify patients with ankle instability after sprain",
    criteria: [
      "History of multiple sprains",
      "Giving way sensation",
      "Pain or weakness with functional activities",
      "History of severe initial sprain"
    ],
    accuracy: "Likely when 3 or more criteria are present",
    references: [
      "Delahunt E, Coughlan GF, Caulfield B, et al. Inclusion criteria when investigating insufficiencies in chronic ankle instability. Med Sci Sports Exerc. 2010;42(11):2106-2121. DOI: 10.1249/MSS.0b013e3181de7a8a",
      "Gribble PA, Bleakley CM, Caulfield BM, et al. Evidence review for the 2016 International Ankle Consortium consensus statement on the prevalence, impact and long-term consequences of lateral ankle sprains. Br J Sports Med. 2016;50(24):1496-1505. DOI: 10.1136/bjsports-2016-096189"
    ]
  }
];