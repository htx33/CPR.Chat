export interface CPR {
  title: string;
  description: string;
  criteria: string[];
  accuracy: string;
  attribution: string;
  citation: string;
  url: string;
}

export const cprData: CPR[] = [
  {
    title: "Spinal Manipulation CPR for Low Back Pain",
    description: "Helps predict if a patient with acute low back pain is likely to benefit from spinal manipulation",
    criteria: [
      "Duration of symptoms < 16 days",
      "No symptoms distal to the knee",
      "Fear-Avoidance Beliefs Questionnaire work subscale score < 19",
      "At least 1 hip with > 35° internal rotation range of motion",
      "Hypomobility in the lumbar spine"
    ],
    accuracy: "+LR = 13.2 when 4/5 criteria are present",
    attribution: "This CPR is adapted from the American Physical Therapy Association's Clinical Practice Guideline for Low Back Pain",
    citation: "American Physical Therapy Association. (2021). Clinical Practice Guideline for the Treatment of Low Back Pain [CPG+]. https://www.apta.org/patient-care/evidence-based-practice-resources/cpgs/low-back-pain-clinical-practice-guideline",
    url: "https://www.apta.org/patient-care/evidence-based-practice-resources/cpgs/low-back-pain-clinical-practice-guideline"
  },
  {
    title: "Lumbar Spinal Stenosis CPR",
    description: "Helps identify patients with low back pain who are likely to have lumbar spinal stenosis (LSS)",
    criteria: [
      "Age > 48 years",
      "Symptoms improve with sitting",
      "Symptoms improve with bending forward",
      "First symptoms of the day occur in the morning",
      "Bilateral symptoms"
    ],
    accuracy: "Sensitivity = 0.93, Specificity = 0.68 when 3/5 criteria are present",
    attribution: "This CPR is adapted from the North American Spine Society's Evidence-Based Clinical Guideline for the Diagnosis and Treatment of Lumbar Spinal Stenosis",
    citation: "North American Spine Society. (2011). Evidence-Based Clinical Guidelines for Multidisciplinary Spine Care: Diagnosis and Treatment of Degenerative Lumbar Spinal Stenosis. https://www.spine.org/Research-Clinical-Care/Quality-Improvement/Clinical-Guidelines",
    url: "https://www.spine.org/Research-Clinical-Care/Quality-Improvement/Clinical-Guidelines"
  },
  {
    title: "Cervical Radiculopathy CPR",
    description: "Helps predict the likelihood of cervical radiculopathy in patients with neck pain and arm symptoms",
    criteria: [
      "Upper limb tension test A (median nerve bias) is positive",
      "Cervical rotation < 60° toward the symptomatic side",
      "Spurling test reproduces symptoms",
      "Distraction test relieves symptoms"
    ],
    accuracy: "+LR = 30.3 when 3/4 criteria are present",
    attribution: "This CPR is adapted from the American Physical Therapy Association's Clinical Practice Guideline for Neck Pain",
    citation: "American Physical Therapy Association. (2017). Neck Pain: Clinical Practice Guidelines Linked to the International Classification of Functioning, Disability and Health From the Orthopaedic Section of the American Physical Therapy Association [CPG]. J Orthop Sports Phys Ther, 47(7), A1-A83.",
    url: "https://www.jospt.org/doi/10.2519/jospt.2017.0302"
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
    accuracy: "Likely beneficial when 4/5 criteria are met",
    attribution: "This CPR is adapted from the American Physical Therapy Association's Clinical Practice Guideline for Neck Pain",
    citation: "American Physical Therapy Association. (2017). Neck Pain: Clinical Practice Guidelines Linked to the International Classification of Functioning, Disability and Health From the Orthopaedic Section of the American Physical Therapy Association [CPG]. J Orthop Sports Phys Ther, 47(7), A1-A83.",
    url: "https://www.jospt.org/doi/10.2519/jospt.2017.0302"
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
    attribution: "This CPR is adapted from the American Physical Therapy Association's Clinical Practice Guideline for Shoulder Impingement Syndrome",
    citation: "American Physical Therapy Association. (2019). Shoulder Impingement Syndrome: Clinical Practice Guidelines Linked to the International Classification of Functioning, Disability and Health From the Orthopaedic Section of the American Physical Therapy Association [CPG]. J Orthop Sports Phys Ther, 49(5), A1-A73.",
    url: "https://www.jospt.org/doi/10.2519/jospt.2019.0301"
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
    attribution: "This CPR is adapted from the American Academy of Orthopaedic Surgeons' Clinical Practice Guideline for the Treatment of Rotator Cuff Tears",
    citation: "American Academy of Orthopaedic Surgeons. (2019). Clinical Practice Guideline for the Treatment of Rotator Cuff Tears. https://www.aaos.org/research/guidelines/rotator-cuff-tear-treatment-guideline.pdf",
    url: "https://www.aaos.org/research/guidelines/rotator-cuff-tear-treatment-guideline.pdf"
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
    attribution: "This CPR is adapted from the American College of Rheumatology's Clinical Practice Guideline for the Treatment of Osteoarthritis of the Knee",
    citation: "American College of Rheumatology. (2019). 2019 American College of Rheumatology/Arthritis Foundation Guideline for the Treatment of Osteoarthritis of the Hand, Hip, and Knee. Arthritis Care Res (Hoboken), 71(10), 1361-1374.",
    url: "https://www.rheumatology.org/Portals/0/Files/ACR-AF-Guideline-for-Osteoarthritis-of-the-Hand-Hip-and-Knee.pdf"
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
    attribution: "This CPR is adapted from the American Academy of Orthopaedic Surgeons' Clinical Practice Guideline for the Treatment of Anterior Cruciate Ligament Injuries",
    citation: "American Academy of Orthopaedic Surgeons. (2014). Clinical Practice Guideline for the Treatment of Anterior Cruciate Ligament Injuries. https://www.aaos.org/research/guidelines/acl-treatment-guideline.pdf",
    url: "https://www.aaos.org/research/guidelines/acl-treatment-guideline.pdf"
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
    attribution: "This CPR is adapted from the American Physical Therapy Association's Clinical Practice Guideline for Patellofemoral Pain Syndrome",
    citation: "American Physical Therapy Association. (2019). Patellofemoral Pain Syndrome: Clinical Practice Guidelines Linked to the International Classification of Functioning, Disability and Health From the Orthopaedic Section of the American Physical Therapy Association [CPG]. J Orthop Sports Phys Ther, 49(5), A1-A73.",
    url: "https://www.jospt.org/doi/10.2519/jospt.2019.0301"
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
    attribution: "This CPR is adapted from the American College of Rheumatology's Clinical Practice Guideline for the Treatment of Osteoarthritis of the Hip",
    citation: "American College of Rheumatology. (2019). 2019 American College of Rheumatology/Arthritis Foundation Guideline for the Treatment of Osteoarthritis of the Hand, Hip, and Knee. Arthritis Care Res (Hoboken), 71(10), 1361-1374.",
    url: "https://www.rheumatology.org/Portals/0/Files/ACR-AF-Guideline-for-Osteoarthritis-of-the-Hand-Hip-and-Knee.pdf"
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
    attribution: "This CPR is adapted from the American Academy of Orthopaedic Surgeons' Clinical Practice Guideline for the Treatment of Hip Labral Tears",
    citation: "American Academy of Orthopaedic Surgeons. (2019). Clinical Practice Guideline for the Treatment of Hip Labral Tears. https://www.aaos.org/research/guidelines/hip-labral-tear-treatment-guideline.pdf",
    url: "https://www.aaos.org/research/guidelines/hip-labral-tear-treatment-guideline.pdf"
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
    attribution: "This CPR is adapted from the American Physical Therapy Association's Clinical Practice Guideline for Plantar Fasciitis",
    citation: "American Physical Therapy Association. (2019). Plantar Fasciitis: Clinical Practice Guidelines Linked to the International Classification of Functioning, Disability and Health From the Orthopaedic Section of the American Physical Therapy Association [CPG]. J Orthop Sports Phys Ther, 49(5), A1-A73.",
    url: "https://www.jospt.org/doi/10.2519/jospt.2019.0301"
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
    attribution: "This CPR is adapted from the American Physical Therapy Association's Clinical Practice Guideline for Ankle Sprains",
    citation: "American Physical Therapy Association. (2018). Ankle Sprains: Clinical Practice Guidelines Linked to the International Classification of Functioning, Disability and Health From the Orthopaedic Section of the American Physical Therapy Association [CPG]. J Orthop Sports Phys Ther, 48(5), A1-A73.",
    url: "https://www.jospt.org/doi/10.2519/jospt.2018.0301"
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
    attribution: "This CPR is a basic example and does not have a specific attribution or citation",
    citation: "",
    url: ""
  }
];