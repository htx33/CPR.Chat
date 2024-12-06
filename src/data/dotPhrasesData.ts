export interface DotPhrase {
  id: string;
  title: string;
  phrase: string;
  category: string;
  description?: string;
}

export const dotPhrases: DotPhrase[] = [
  {
    id: "pt-eval-lbp",
    title: "PT Initial Evaluation - Low Back Pain",
    category: "Evaluations",
    description: "Comprehensive initial evaluation template for low back pain",
    phrase: `SUBJECTIVE:
Patient is a [XX]-year-old [male/female] presenting with complaints of low back pain. Patient reports onset of symptoms [acute/gradual] beginning [timeframe]. Patient describes pain as [dull/sharp/achy] rated [X]/10 at worst and [X]/10 at best on NPRS. 

Aggravating Factors: [sitting/standing/walking/bending/lifting]
Alleviating Factors: [rest/position change/ice/heat]
24-hour pattern: [worse in AM/PM, better as day progresses]

Prior Episodes: [first episode/recurring condition]
Prior Interventions: [PT/chiro/injections/medications]
Imaging: [type and results if available]

Red Flags: Negative for saddle anesthesia, bowel/bladder changes, progressive neurological symptoms, unexplained weight loss, night pain, or fever.

Current Functional Limitations:
- Sitting tolerance: [X] minutes
- Standing tolerance: [X] minutes
- Walking tolerance: [X] minutes/distance
- Sleep disruption: [frequency]
- Work/ADL impact: [specific limitations]

OBJECTIVE:

Posture/Observation:
- Standing posture: [normal/increased lordosis/decreased lordosis]
- Gait: [normal/antalgic/guarded]
- Functional movement patterns: [describe movement impairments]

ROM (in degrees):
Lumbar Flexion: [X]°
Lumbar Extension: [X]°
Side Bend R: [X]° L: [X]°
Rotation R: [X]° L: [X]°

Pain with ROM: [describe pain behavior with movement]

Special Tests:
- SLR: [pos/neg] R/L
- Slump Test: [pos/neg] R/L
- FABER: [pos/neg] R/L
- Centralization/Peripheralization: [response to repeated movements]

Neurological Screen:
- Myotomes: [strength grades by level]
- Dermatomal sensation: [intact/impaired]
- DTRs: [normal/diminished]

Palpation:
- Tenderness: [location and severity]
- Muscle tone: [normal/increased/decreased]

ASSESSMENT:
1. [Primary impairments]
2. [Contributing factors]
3. [Functional limitations]
4. [Prognostic factors]

Rehab Potential: [Good/Fair/Poor]

Plan of Care:
- Frequency: [X] visits per week for [X] weeks
- Treatment focus: [specific interventions]
- Short-term goals (2-4 weeks):
  1. Reduce pain to [X]/10
  2. Improve lumbar ROM by [X]%
  3. Increase sitting tolerance to [X] minutes
  4. [functional goal]

- Long-term goals (6-8 weeks):
  1. Return to full work duties
  2. Independent HEP
  3. [specific functional goals]

TREATMENT:
Today's session focused on initial assessment and education. Patient was instructed in:
1. Proper posture and body mechanics
2. Initial HEP including:
   - [specific exercises]
   - [positions of relief]
3. Activity modification strategies

Patient demonstrated good understanding of HEP and plan of care. Will follow up [timeframe] to progress treatment.`
  }
];
