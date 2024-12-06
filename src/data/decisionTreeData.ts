export interface DecisionNode {
  id: string;
  question: string;
  description?: string;
  options: {
    text: string;
    nextId?: string;
    outcome?: string;
    recommendation?: string;
  }[];
}

export interface DecisionTree {
  id: string;
  title: string;
  description: string;
  initialNodeId: string;
  nodes: DecisionNode[];
}

export const decisionTrees: DecisionTree[] = [
  {
    id: "overhead-shoulder-pain",
    title: "Overhead Shoulder Pain Decision Tree",
    description: "Clinical decision tree for evaluating and treating overhead shoulder pain",
    initialNodeId: "initial",
    nodes: [
      {
        id: "initial",
        question: "Is there a history of acute trauma or injury?",
        options: [
          { text: "Yes", nextId: "acute-trauma" },
          { text: "No", nextId: "pain-location" }
        ]
      },
      {
        id: "acute-trauma",
        question: "Are any of these present?",
        description: "Check for red flags",
        options: [
          { 
            text: "Severe pain, deformity, or inability to move",
            outcome: "Refer for Immediate Medical Evaluation",
            recommendation: "Possible fracture, dislocation, or complete tear requiring immediate medical attention"
          },
          { text: "None of the above", nextId: "pain-location" }
        ]
      },
      {
        id: "pain-location",
        question: "Where is the primary location of pain?",
        options: [
          { text: "Anterior/lateral shoulder", nextId: "impingement-test" },
          { text: "Superior shoulder", nextId: "ac-joint" },
          { text: "Posterior shoulder", nextId: "posterior-pain" }
        ]
      },
      {
        id: "impingement-test",
        question: "Positive impingement tests?",
        description: "Hawkins-Kennedy and Neer tests",
        options: [
          { text: "Yes", nextId: "rotator-cuff-strength" },
          { text: "No", nextId: "labral-tests" }
        ]
      },
      {
        id: "rotator-cuff-strength",
        question: "Is rotator cuff strength decreased?",
        description: "Test external rotation and abduction strength",
        options: [
          { 
            text: "Yes",
            outcome: "Probable Rotator Cuff Pathology",
            recommendation: "1. Begin conservative treatment with RC strengthening\n2. Consider imaging if no improvement\n3. Refer to protocol for RC rehabilitation"
          },
          { 
            text: "No",
            outcome: "Subacromial Impingement Syndrome",
            recommendation: "1. Activity modification\n2. Scapular stabilization exercises\n3. Rotator cuff strengthening\n4. Manual therapy for posterior capsule"
          }
        ]
      },
      {
        id: "labral-tests",
        question: "Positive labral tests?",
        description: "O'Brien's test, Biceps Load II",
        options: [
          { 
            text: "Yes",
            outcome: "Possible Labral Pathology",
            recommendation: "1. Refer for orthopedic evaluation\n2. Consider imaging\n3. Begin conservative treatment focusing on stability"
          },
          { 
            text: "No",
            nextId: "scapular-dyskinesis"
          }
        ]
      },
      {
        id: "scapular-dyskinesis",
        question: "Is scapular dyskinesis present?",
        description: "Observe for winging or abnormal movement patterns",
        options: [
          { 
            text: "Yes",
            outcome: "Scapular Dyskinesis",
            recommendation: "1. Scapular stabilization exercises\n2. Postural correction\n3. Motor control training\n4. Address any workspace ergonomics"
          },
          { 
            text: "No",
            outcome: "Non-specific Shoulder Pain",
            recommendation: "1. General shoulder strengthening\n2. Range of motion exercises\n3. Activity modification\n4. Consider further assessment if no improvement"
          }
        ]
      },
      {
        id: "ac-joint",
        question: "Pain with horizontal adduction?",
        description: "Cross-body adduction test",
        options: [
          { 
            text: "Yes",
            outcome: "AC Joint Pathology",
            recommendation: "1. Activity modification\n2. Consider taping\n3. Progressive loading when tolerated\n4. Manual therapy techniques"
          },
          { text: "No", nextId: "scapular-dyskinesis" }
        ]
      },
      {
        id: "posterior-pain",
        question: "Loss of internal rotation?",
        description: "Compare to opposite side",
        options: [
          { 
            text: "Yes",
            outcome: "Posterior Capsule Tightness / GIRD",
            recommendation: "1. Posterior capsule stretching\n2. Sleeper stretches\n3. Cross-body stretches\n4. Address any throwing mechanics if applicable"
          },
          { text: "No", nextId: "scapular-dyskinesis" }
        ]
      }
    ]
  },
  {
    id: "low-back-radiating",
    title: "Low Back Pain with Radiation",
    description: "Clinical decision tree for evaluating and treating low back pain with radiating symptoms",
    initialNodeId: "initial",
    nodes: [
      {
        id: "initial",
        question: "Are any red flags present?",
        description: "Check for: Cauda Equina Syndrome, Progressive Neurological Deficit, Suspected Fracture, Cancer, Infection",
        options: [
          { 
            text: "Yes",
            outcome: "Immediate Medical Referral Required",
            recommendation: "1. Immediate referral to Emergency Department\n2. Document all red flags present\n3. Arrange appropriate transport if needed\n4. Provide written documentation of findings"
          },
          { text: "No", nextId: "radiation-pattern" }
        ]
      },
      {
        id: "radiation-pattern",
        question: "What is the pattern of radiation?",
        options: [
          { text: "Below knee (follows dermatomal pattern)", nextId: "nerve-root" },
          { text: "Above knee only", nextId: "referred-pain" },
          { text: "Bilateral/diffuse symptoms", nextId: "bilateral-symptoms" }
        ]
      },
      {
        id: "nerve-root",
        question: "Are nerve root tension signs positive?",
        description: "SLR, Crossed SLR, Femoral Nerve Tension Test",
        options: [
          { text: "Yes", nextId: "motor-deficit" },
          { text: "No", nextId: "referred-pain" }
        ]
      },
      {
        id: "motor-deficit",
        question: "Is there a motor deficit present?",
        description: "Check myotomes and muscle strength",
        options: [
          { 
            text: "Yes - Progressive/Severe",
            outcome: "Urgent Medical Referral",
            recommendation: "1. Refer for medical evaluation within 24-48 hours\n2. Document strength deficits\n3. Patient education on red flags\n4. Activity modification instructions"
          },
          { text: "Yes - Mild/Stable", nextId: "radiculopathy-treatment" },
          { text: "No", nextId: "radiculopathy-treatment" }
        ]
      },
      {
        id: "radiculopathy-treatment",
        question: "Centralization with repeated movements?",
        description: "Assess directional preference",
        options: [
          { 
            text: "Yes",
            outcome: "Radiculopathy - Mechanical Response",
            recommendation: "1. Direction-specific exercises\n2. Neural mobilization\n3. Graded activity progression\n4. Patient education on posture and mechanics\n5. Consider manual therapy\n6. Monitor for progression of symptoms"
          },
          { 
            text: "No",
            outcome: "Radiculopathy - Chemical Irritation",
            recommendation: "1. Relative rest from aggravating activities\n2. Pain management strategies\n3. Gentle neural mobilization\n4. Gradual introduction of direction-specific exercises\n5. Consider referral if no improvement in 2-3 weeks"
          }
        ]
      },
      {
        id: "referred-pain",
        question: "Centralization with repeated movements?",
        description: "Assess mechanical response to movement",
        options: [
          { 
            text: "Yes",
            outcome: "Referred Pain - Mechanical Response",
            recommendation: "1. Direction-specific exercises\n2. Postural education\n3. Manual therapy\n4. Progressive loading program\n5. Activity modification guidance"
          },
          { 
            text: "No",
            outcome: "Referred Pain - Non-mechanical",
            recommendation: "1. Pain management strategies\n2. Gentle movement within tolerance\n3. Progressive loading program\n4. Consider manual therapy\n5. Monitor for changes in symptoms"
          }
        ]
      },
      {
        id: "bilateral-symptoms",
        question: "Associated with increased loading/activity?",
        options: [
          { 
            text: "Yes",
            outcome: "Neurogenic Claudication",
            recommendation: "1. Flexion-based exercises\n2. Walking program with appropriate rest breaks\n3. Aerobic conditioning\n4. Patient education on activity modification\n5. Consider referral if severe lifestyle impact"
          },
          { 
            text: "No",
            outcome: "Non-specific Bilateral Symptoms",
            recommendation: "1. General conditioning exercises\n2. Pain management strategies\n3. Activity modification\n4. Consider additional screening if symptoms persist\n5. Monitor for development of red flags"
          }
        ]
      }
    ]
  },
  {
    id: "hip-pain",
    title: "Hip Pain Decision Tree",
    description: "Clinical decision tree for evaluating and treating hip pain",
    initialNodeId: "initial",
    nodes: [
      {
        id: "initial",
        question: "Are any red flags present?",
        description: "Check for: Fracture, Infection, Cancer, AVN risk factors",
        options: [
          { 
            text: "Yes",
            outcome: "Immediate Medical Referral Required",
            recommendation: "1. Immediate referral to appropriate medical provider\n2. Document all red flags\n3. Limit weight bearing as appropriate\n4. Provide written documentation of findings"
          },
          { text: "No", nextId: "pain-location" }
        ]
      },
      {
        id: "pain-location",
        question: "What is the primary location of pain?",
        options: [
          { text: "Anterior hip/groin", nextId: "anterior-hip" },
          { text: "Lateral hip", nextId: "lateral-hip" },
          { text: "Posterior hip", nextId: "posterior-hip" }
        ]
      },
      {
        id: "anterior-hip",
        question: "Pain with FADIR test?",
        description: "Flexion, Adduction, Internal Rotation",
        options: [
          { text: "Yes", nextId: "hip-mobility" },
          { text: "No", nextId: "muscle-strength" }
        ]
      },
      {
        id: "hip-mobility",
        question: "Is hip mobility restricted?",
        description: "Compare to opposite side",
        options: [
          { 
            text: "Yes",
            outcome: "Possible Intra-articular Pathology",
            recommendation: "1. Refer for imaging if significant functional limitation\n2. Activity modification\n3. Manual therapy for mobility\n4. Hip mobility exercises within tolerance\n5. Address movement patterns"
          },
          { 
            text: "No",
            outcome: "Possible Labral/Capsular Irritation",
            recommendation: "1. Activity modification\n2. Movement pattern training\n3. Hip stability exercises\n4. Consider referral if no improvement"
          }
        ]
      },
      {
        id: "lateral-hip",
        question: "Pain with single leg stance?",
        description: "30 second test",
        options: [
          { text: "Yes", nextId: "glute-strength" },
          { text: "No", nextId: "muscle-strength" }
        ]
      },
      {
        id: "glute-strength",
        question: "Is hip abductor strength decreased?",
        description: "Test in side-lying",
        options: [
          { 
            text: "Yes",
            outcome: "Greater Trochanteric Pain Syndrome",
            recommendation: "1. Load management program\n2. Hip abductor strengthening\n3. Movement pattern training\n4. Consider manual therapy\n5. Address contributing factors"
          },
          { 
            text: "No",
            outcome: "Lateral Hip Pain - Other",
            recommendation: "1. Movement analysis\n2. Activity modification\n3. Progressive loading program\n4. Consider manual therapy\n5. Monitor response to treatment"
          }
        ]
      },
      {
        id: "posterior-hip",
        question: "Pain with resisted external rotation?",
        options: [
          { text: "Yes", nextId: "deep-squat" },
          { text: "No", nextId: "muscle-strength" }
        ]
      },
      {
        id: "deep-squat",
        question: "Pain with deep squat?",
        options: [
          { 
            text: "Yes",
            outcome: "Deep External Rotator Involvement",
            recommendation: "1. Deep external rotator strengthening\n2. Movement pattern training\n3. Manual therapy\n4. Progress to functional training\n5. Address contributing factors"
          },
          { 
            text: "No",
            outcome: "Posterior Hip Pain - Other",
            recommendation: "1. Assess lumbar spine contribution\n2. General hip strengthening\n3. Movement pattern training\n4. Manual therapy as needed"
          }
        ]
      },
      {
        id: "muscle-strength",
        question: "Is there specific muscle weakness?",
        description: "Test all hip muscle groups",
        options: [
          { 
            text: "Yes",
            outcome: "Specific Muscle Weakness",
            recommendation: "1. Targeted strengthening program\n2. Movement pattern training\n3. Progress to functional activities\n4. Address contributing factors\n5. Monitor strength improvements"
          },
          { 
            text: "No",
            outcome: "Non-specific Hip Pain",
            recommendation: "1. General hip strengthening\n2. Movement pattern assessment\n3. Activity modification\n4. Monitor response to treatment\n5. Consider additional testing if no improvement"
          }
        ]
      }
    ]
  }
];
