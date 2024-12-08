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
          title: "Clinical Practice Guidelines Linked to the ICF from the Orthopaedic Section of the APTA",
          section: "Manual Therapy: Thrust Manipulation",
          recommendation: "Clinicians should consider utilizing thrust manipulative procedures to reduce pain and disability in patients with mobility deficits and acute low back and back-related buttock or thigh pain.",
          grade: "Grade A",
          link: "https://www.jospt.org/doi/10.2519/jospt.2012.42.4.A1",
          year: "2021"
        }
      ]
    }
  },
  {
    id: "lumbar-stenosis",
    title: "Lumbar Spinal Stenosis CPR",
    subtitle: "Diagnostic accuracy improves with more criteria met",
    description: "Helps identify patients likely to have lumbar spinal stenosis based on history and physical examination",
    clinicalCriteria: [
      "Age > 60 years",
      "Bilateral symptoms",
      "Symptoms improve with sitting",
      "Symptoms worsen with standing and walking",
      "Good relief with forward bending"
    ],
    evidence: {
      source: "Cook et al. (2011)",
      sourceLink: "https://pubmed.ncbi.nlm.nih.gov/21242568/",
      successRate: "Sensitivity of 0.93 and specificity of 0.86 when 3/5 criteria are met",
      likelihoodRatio: "Positive likelihood ratio: +6.64 (95% CI: 4.14, 10.6)",
      cpgReferences: [
        {
          title: "NASS Evidence-Based Clinical Guidelines for Multidisciplinary Spine Care",
          section: "Diagnosis/Imaging",
          recommendation: "The history and physical examination are the most important tools in the diagnosis of lumbar spinal stenosis.",
          grade: "Grade B",
          link: "https://www.spine.org/Research-Clinical-Care/Quality-Improvement/Clinical-Guidelines",
          year: "2020"
        }
      ]
    }
  },
  {
    id: "cervical-radiculopathy",
    title: "Cervical Radiculopathy CPR",
    subtitle: "Diagnostic accuracy improves with more tests positive",
    description: "Helps identify patients with cervical radiculopathy using a cluster of tests",
    clinicalCriteria: [
      "Upper limb tension test 1 positive",
      "Cervical rotation < 60° toward the symptomatic side",
      "Neck rotation toward the symptomatic side reproduces symptoms",
      "Spurling test positive"
    ],
    evidence: {
      source: "Wainner et al. (2003)",
      sourceLink: "https://pubmed.ncbi.nlm.nih.gov/14508412/",
      successRate: "Post-test probability of 90% when all 4 criteria are present",
      likelihoodRatio: "Positive likelihood ratio: +30.3 (95% CI: 12.3, 74.4)",
      cpgReferences: [
        {
          title: "Neck Pain Clinical Practice Guidelines",
          section: "Diagnosis/Classification",
          recommendation: "Clinicians should utilize the clinical findings of cervical rotation < 60°, spurling test, upper limb tension test, and distraction test for classifying patients with neck pain into the following categories: neck pain with mobility deficits, neck pain with radiating pain, neck pain with headache.",
          grade: "Grade A",
          link: "https://www.jospt.org/doi/10.2519/jospt.2017.0302",
          year: "2017"
        }
      ]
    }
  }
];
