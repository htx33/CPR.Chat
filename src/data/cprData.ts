export interface CPR {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  clinicalCriteria: string[];
  evidence: {
    source: string;
    sourceLink?: string;
    successRate: string;
    likelihoodRatio?: string;
    cpgReferences: {
      title: string;
      section: string;
      recommendation: string;
      grade?: string;
      link: string;
      year: string;
    }[];
  };
}

export const cprData: CPR[] = [
  {
    id: "spinal-manipulation",
    title: "Spinal Manipulation CPR for Low Back Pain",
    subtitle: "Beneficial when 4 out of 5 criteria are present",
    description: "Helps predict if a patient with acute low back pain is likely to benefit from spinal manipulation",
    clinicalCriteria: [
      "Duration of current episode of symptoms < 16 days",
      "No symptoms distal to the knee",
      "Hip internal rotation range of motion > 35° for at least one hip",
      "Fear-Avoidance Beliefs Questionnaire work subscale score < 19 points",
      "At least one hypomobile segment in the lumbar spine"
    ],
    evidence: {
      source: "Flynn et al. (2002), validated by Childs et al. (2004)",
      sourceLink: "https://pubmed.ncbi.nlm.nih.gov/12322811/",
      successRate: "Success rate increases from 45% to 95% when 4/5 criteria are present",
      likelihoodRatio: "Positive likelihood ratio: +24.38 (95% CI: 4.75, 139.72)",
      cpgReferences: [
        {
          title: "Clinical Practice Guidelines Linked to the International Classification of Functioning, Disability, and Health from the Orthopaedic Section of the APTA",
          section: "Manual Therapy: Thrust Manipulation",
          recommendation: "Clinicians should consider utilizing thrust manipulative procedures to reduce pain and disability in patients with mobility deficits and acute low back and back-related buttock or thigh pain.",
          grade: "Grade A evidence",
          link: "https://www.orthopt.org/content/practice/clinical-practice-guidelines/low-back-pain",
          year: "2021"
        },
        {
          title: "JOSPT Clinical Practice Guidelines for Low Back Pain",
          section: "Intervention - Manual Therapy",
          recommendation: "Use of prediction rule for manipulation supported by strong evidence for patients with acute symptoms.",
          link: "https://www.jospt.org/doi/10.2519/jospt.2021.0304",
          year: "2021"
        }
      ]
    }
  },
  {
    id: "lumbar-stenosis",
    title: "Lumbar Spinal Stenosis CPR",
    subtitle: "High likelihood of LSS when 3/5 criteria are present",
    description: "Clinical prediction rule for diagnosing lumbar spinal stenosis",
    clinicalCriteria: [
      "Age > 48 years",
      "Bilateral symptoms",
      "Leg pain greater than back pain",
      "Pain improves with sitting",
      "Pain worsens with standing"
    ],
    evidence: {
      source: "Cook et al. (2011)",
      sourceLink: "https://pubmed.ncbi.nlm.nih.gov/21242568/",
      successRate: "Sensitivity of 0.93 (95% CI: 0.87, 0.97) with 3+ criteria",
      likelihoodRatio: "Positive likelihood ratio: +12.0 (95% CI: 5.9, 24.3) with 3+ criteria",
      cpgReferences: [
        {
          title: "Diagnosis and Treatment of Degenerative Lumbar Spinal Stenosis",
          section: "Diagnostic Procedures (Action Statement 3)",
          recommendation: "Clinicians should include body pain diagram, assessment of walking tolerance, and questions regarding relief of symptoms with sitting as components of the baseline assessment for patients with degenerative lumbar spinal stenosis.",
          grade: "Recommendation based on moderate evidence",
          link: "https://www.orthopt.org/content/practice/clinical-practice-guidelines/lumbar-spinal-stenosis",
          year: "2013"
        },
        {
          title: "APTA Clinical Practice Guidelines - Lumbar Spinal Stenosis",
          section: "Diagnosis/Classification",
          recommendation: "Use of validated diagnostic rule recommended for identifying patients with lumbar spinal stenosis.",
          link: "https://www.jospt.org/doi/10.2519/jospt.2013.0302",
          year: "2013"
        }
      ]
    }
  },
  {
    id: "cervical-radiculopathy",
    title: "Cervical Radiculopathy CPR",
    subtitle: "High likelihood when at least 3/4 criteria are positive",
    description: "Clinical prediction rule for diagnosing cervical radiculopathy",
    clinicalCriteria: [
      "Upper limb tension test A (median nerve bias) is positive",
      "Cervical rotation < 60° toward the symptomatic side",
      "Spurling test reproduces primary symptoms",
      "Cervical distraction test relieves primary symptoms"
    ],
    evidence: {
      source: "Wainner et al. (2003)",
      sourceLink: "https://pubmed.ncbi.nlm.nih.gov/12622147/",
      successRate: "Probability increases to 90% when ≥ 3 tests are positive",
      likelihoodRatio: "Positive likelihood ratio: +30.3 (95% CI: 12.3, 74.4) with 3+ criteria",
      cpgReferences: [
        {
          title: "Neck Pain: Clinical Practice Guidelines (APTA)",
          section: "Diagnosis/Classification (Recommendation B)",
          recommendation: "Clinicians should utilize the clinical findings of cervical rotation < 60°, Spurling test, upper limb tension test, and cervical distraction test to make clinical judgments regarding the presence of cervical radiculopathy.",
          grade: "Grade A evidence",
          link: "https://www.orthopt.org/content/practice/clinical-practice-guidelines/neck-pain",
          year: "2019"
        },
        {
          title: "JOSPT Neck Pain Clinical Practice Guidelines",
          section: "Physical Impairment Measures",
          recommendation: "Strong evidence supports use of clustered physical examination items to identify patients with cervical radiculopathy.",
          link: "https://www.jospt.org/doi/10.2519/jospt.2019.0302",
          year: "2019"
        }
      ]
    }
  }
];
