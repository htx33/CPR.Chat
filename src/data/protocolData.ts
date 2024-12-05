export interface Protocol {
  id: string;
  title: string;
  description: string;
  phases: {
    name: string;
    duration: string;
    keyPoints: string[];
    goals?: string[];
    exercises?: string[];
    criteria?: string[];
  }[];
}

export const protocolData: Protocol[] = [
  {
    id: "acl-reconstruction",
    title: "ACL Reconstruction Protocol",
    description: "Comprehensive rehabilitation protocol for ACL reconstruction (ACL-R) with detailed progression through phases of recovery and return to sport.",
    phases: [
      {
        name: "Phase I - Initial Post-operative",
        duration: "Weeks 0-6",
        keyPoints: [
          "Weight bearing as tolerated (WBAT)",
          "No brace required",
          "Focus on obtaining full extension symmetric to contralateral side",
          "Gradual progression of knee flexion to 90 degrees",
          "Can advance flexion to full after week 2 (do not force)"
        ],
        exercises: [
          "Swelling control (GameReady and patient education)",
          "Quad sets with proper form",
          "Straight leg raises with calf taps",
          "Prone hangs, hamstring, and calf stretches",
          "Patellar mobilizations and soft tissue techniques",
          "Double leg mini squats and leg press (0° to 60°, progress to 90°)",
          "Core exercises, TKEs, calf raises, static balance",
          "Chair squats, step ups, static lunge, hamstring curls",
          "Hip abduction machine, bridges",
          "Single leg squats (week 4) with proper criteria"
        ],
        criteria: [
          "Discontinue crutches when: ≥0° knee extension, 90° knee flexion, proper SLR without lag, minimal effusion, normal gait",
          "Begin stationary bike when ≥110° flexion"
        ]
      },
      {
        name: "Phase II - Strengthening",
        duration: "Weeks 6-12",
        keyPoints: [
          "Focus on strengthening",
          "Preparation for jogging and in-line running"
        ],
        exercises: [
          "Leg press, step ups, step downs, RDLs",
          "Lunges, Bulgarian squats, wall sits",
          "Advanced hip abduction & glute strength exercises",
          "Core exercises: planks, side planks, v-ups",
          "Stationary bike and rowing machine",
          "Balance training with foam pad and balance board",
          "Dynamic warm-ups",
          "Swimming (straight kick, no flip turns)"
        ],
        goals: [
          "Symmetric knee extension and flexion to 120°",
          "Minimal effusion and pain",
          "Quad and hamstring strength at least 65% normal",
          "Single leg squat with good form for 1 minute"
        ]
      },
      {
        name: "Phase III - Running & Plyometrics",
        duration: "Weeks 12-20",
        keyPoints: [
          "Initiation of running",
          "Introduction of agility and double leg plyometrics",
          "No single leg plyometrics until week 20"
        ],
        exercises: [
          "Progressive gym training (barbell squats, deadlifts, Olympic lifts)",
          "Single leg strengthening exercises",
          "Dynamic core exercises",
          "Interval strength circuits",
          "Running preparation exercises",
          "Progressive jogging program",
          "Agility drills and double leg plyometrics",
          "Sport-specific drills"
        ]
      },
      {
        name: "Phase IV - Advanced Training",
        duration: "Weeks 20-24",
        keyPoints: [
          "Advanced strengthening",
          "Agility work",
          "Introduction of speed work and single leg plyometrics"
        ],
        criteria: [
          "Quad & hamstring strength >80% normal",
          ">50% H/Q ratio for females",
          "3 minutes of resisted single leg squats",
          "15 minutes jogging with minimal pain/swelling"
        ],
        exercises: [
          "Advanced barbell exercises",
          "Dynamic eccentric loading",
          "Complex plyometrics",
          "Change of direction drills",
          "Non-contact sports specific drills",
          "Track workouts and sprinting"
        ]
      },
      {
        name: "Phase V - Return to Sport",
        duration: "24+ weeks",
        keyPoints: [
          "Sport-specific progression",
          "Complex movement patterns",
          "Performance level preparation"
        ],
        criteria: [
          ">75/100 on ACL-RSI survey",
          "Quad & hamstring strength >95% normal",
          ">60% H/Q ratio for females",
          "95% normal single leg hop tests",
          "95% normal agility tests"
        ],
        goals: [
          "Return to non-contact sports at 6 months if criteria met",
          "Return to contact sports at 9 months if criteria met"
        ]
      }
    ]
  },
  {
    id: "acl-meniscus-repair",
    title: "ACL and Meniscus Repair Protocol",
    description: "Comprehensive rehabilitation protocol for combined ACL reconstruction and meniscus repair. Special considerations for root repairs included.",
    phases: [
      {
        name: "Initial Post-operative Phase",
        duration: "Week 0-1",
        keyPoints: [
          "Keep knee extended with leg on pillow under calf and ankle (not under knee) for 10-15 min, 4-6x/day",
          "Achieve normal extension from day 1",
          "Brace can be unlocked up to 90°, must wear at night",
          "Partial weight bearing (PWB) for first 3 weeks",
          "**Special Note: If root repair - No weight bearing for 4 weeks, PWB from weeks 4-6, Full WB at 6 weeks. Progress ROM beyond 60° after 3 weeks"
        ],
        exercises: [
          "Quad sets (5-10 per hour)",
          "Straight Leg Raises (5 per hour)",
          "Ankle pumps",
          "Pain and swelling control techniques"
        ],
        goals: [
          "Control pain and swelling",
          "Establish good quad control (10 unassisted SLR)",
          "Establish good hip strength",
          "ROM 0-90 degrees"
        ]
      },
      {
        name: "Early Rehabilitation Phase",
        duration: "Weeks 2-3",
        keyPoints: [
          "Progress from 30% weight bearing on crutches",
          "Brace opened to 0-90° while partial weight bearing",
          "Progress to full weight bearing without limp by week 3 (for sutures)"
        ],
        exercises: [
          "Continue SLR and quad sets",
          "T-band plantarflexion 2x20",
          "Terminal knee extension with T-band",
          "Hamstring curls to 90° (progress to standing)",
          "Standing T-Band exercises x4",
          "Seated calf raises 2x10",
          "Balance training on floor (one leg 2x30 sec)"
        ],
        goals: [
          "ROM 0-100 degrees (maintain 90° for posterior horn until week 5)",
          "Progress weight bearing per MD orders",
          "Maintain good quad control and hip strength"
        ]
      },
      {
        name: "Intermediate Phase",
        duration: "Weeks 4-6",
        keyPoints: [
          "Progress to full weight bearing",
          "Brace unlocked to 100-120° while weight bearing",
          "Consider brace discontinuation at 5-6 weeks post-op with good quad control"
        ],
        exercises: [
          "Wall sits (30° flexion, 3x30 sec)",
          "Standing calf raises 2x10",
          "Double leg mini squats 2x10",
          "Step downs (short step) 2x10",
          "Extension exercises 90-45° if compliant",
          "Balance training with ball toss",
          "Advanced proprioception on uneven surface"
        ],
        goals: [
          "Restore full ROM",
          "Progress with aggressive quad exercises",
          "Advance proprioceptive training"
        ]
      },
      {
        name: "Advanced Strengthening Phase",
        duration: "Weeks 7-10",
        keyPoints: [
          "Begin walking program progression",
          "May assess light jogging on treadmill, Alter-G, or pool by week 10"
        ],
        exercises: [
          "Front and lateral step downs (higher step)",
          "Various double leg mini squats (stagger, ballet)",
          "Theraband walking and shuffling",
          "Single leg mini squats (week 10)",
          "Advanced balance training with ball movements",
          "Walking program: progress from 10 min to 25 min"
        ],
        goals: [
          "Maintain full ROM",
          "Progress strength training",
          "Improve dynamic stability"
        ]
      },
      {
        name: "Return to Activity Phase",
        duration: "Weeks 11-20",
        keyPoints: [
          "Begin running program at week 12",
          "Start plyometric activities at week 13",
          "Begin sport-specific training at week 15",
          "Full return to sports at week 16-20 per MD clearance"
        ],
        exercises: [
          "Progressive running program",
          "Light agility work (week 14)",
          "Sport-specific drills (non-contact at week 15)",
          "Full activities by week 16-20"
        ],
        goals: [
          "Full ROM equal to opposite leg",
          "Full quad/hamstring strength (5/5 MMT)",
          "Pain-free daily activities",
          "Safe return to sports activities"
        ],
        criteria: [
          "Full range of motion compared to opposite leg",
          "5/5 muscle strength in quadriceps and hamstrings",
          "Completion of running program",
          "Successful progression through sport-specific training"
        ]
      }
    ]
  },
  {
    id: "acl-meniscus",
    title: "ACL Reconstruction with Meniscus Repair Protocol",
    description: "Modified protocol for ACL reconstruction with concurrent meniscal repair",
    phases: [
      {
        name: "Phase I - Protection Phase",
        duration: "Weeks 0-6",
        keyPoints: [
          "Protected weight bearing (PWB)",
          "ROM restrictions based on repair type",
          "Basic strengthening within limitations"
        ]
      }
    ]
  },
  {
    id: "rotator-cuff-repair",
    title: "Rotator Cuff Repair Protocol",
    description: "Progressive rehabilitation following arthroscopic rotator cuff repair",
    phases: [
      {
        name: "Phase I - Immediate Post-operative",
        duration: "Weeks 0-6",
        keyPoints: [
          "Immobilization in sling",
          "Passive ROM only",
          "Scapular positioning exercises"
        ]
      }
    ]
  },
  {
    id: "lumbar-laminectomy",
    title: "Lumbar Laminectomy Protocol",
    description: "Post-operative rehabilitation following lumbar decompression surgery",
    phases: [
      {
        name: "Phase I - Acute Recovery",
        duration: "Weeks 0-4",
        keyPoints: [
          "Walking program",
          "Spine neutral positioning",
          "Basic core activation"
        ]
      }
    ]
  },
  {
    id: "lumbar-fusion",
    title: "Lumbar Fusion Protocol",
    description: "Structured rehabilitation following lumbar spinal fusion surgery",
    phases: [
      {
        name: "Phase I - Protection Phase",
        duration: "Weeks 0-6",
        keyPoints: [
          "Strict brace compliance",
          "Log roll technique",
          "Walking program within pain limits"
        ]
      }
    ]
  },
  {
    id: "hip-labral-repair",
    title: "Hip Labral Repair Protocol",
    description: "Rehabilitation protocol following arthroscopic hip labral repair",
    phases: [
      {
        name: "Phase I - Initial Post-operative",
        duration: "Weeks 0-4",
        keyPoints: [
          "Protected weight bearing",
          "ROM restrictions",
          "Isometric exercises"
        ]
      }
    ]
  }
];