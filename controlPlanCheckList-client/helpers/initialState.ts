export const initialState = {
  module_date: new Date(), // date of receiving creation/ updating
  part_id: null,
  q1:'WEATHER CP ADRESSES ALL PRODUCT & PROCESS CHARACTERSTICS AS MENTINED IN PFD?',
  q1_option: '',
  q1_comment: '',
  q1_person: '',
  q1_due_date: new Date(),

  q2:'WEATHER CONTROL METHODS IDENTIFIED IN THE CP IS INLINE WITH THE PFMEA?',
  q2_option: '',
  q2_comment: '',
  q2_person: '',
  q2_due_date: new Date(),

  q3:'WEATHER CP FOCUS IS ON PREVENTION OF CAUSES OR ONLY ON DETECTION OF DEFECTS?',
  q3_option: '',
  q3_comment: '',
  q3_person: '',
  q3_due_date: new Date(),

  q4:'WEATHER SPECIAL CHARACTERSTICS ARE IDENTIFIED IN CONTROL PLAN?',
  q4_option: '',
  q4_comment: '',
  q4_person: '',
  q4_due_date: new Date(),

  q5:'WEATHER FREQUENCY & SAMPLE OF INSPECTION IS ADEQUATE TO DETECT THE FAILURE MODE ? OR CAUSE?',
  q5_option: '',
  q5_comment: '',
  q5_person: '',
  q5_due_date: new Date(),

  q6:'WEATHER REACTION PLAN MENTIONED IS ADEQUATE?',
  q6_option: '',
  q6_comment: '',
  q6_person: '',
  q6_due_date: new Date(),

  q7:'4M,TOOL ENVIRONMENT SUPPLIER RELATED PARAMETERS IDENTIFIED HAS ADEQUATE CONTROL?',
  q7_option: '',
  q7_comment: '',
  q7_person: '',
  q7_due_date: new Date(),

  q8:'WEATHER PROCESS PARAMETERS IDINTIFIED IN CP ARE ARRIVED SCIENTIFICALLY?',
  q8_option: '',
  q8_comment: '',
  q8_person: '',
  q8_due_date: new Date(),

  q9:'WEATER CONTROL PLAN PREPARED FOR PROTO.PRELAUNCH & PRODUCTION STAGE?',
  q9_option: '',
  q9_comment: '',
  q9_person: '',
  q9_due_date: new Date(),

  q10:'WEATHER CONTROL PLAN SPECIFICATION IS INLINE WITH DRAWING SPECIFICATION?',
  q10_option: '',
  q10_comment: '',
  q10_person: '',
  q10_due_date: new Date(),

  q11:'WEATHER CONTROL PLAN IS AS PER THE LATEST DRAWING?',
  q11_option: '',
  q11_comment: '',
  q11_person: '',
  q11_due_date: new Date(),

  q12:'WEATHER CONTROL PLAN COVERS ALL PROCESSES INCLUDING PARTS RECEVING ,STORAGE,LOADING DISPATCH?',
  q12_option: '',
  q12_comment: '',
  q12_person: '',
  q12_due_date: new Date(),

  q13:'CONTROL METHODS TO BE CHANGED AS PER THE CHANGE OF GRAVITY?',
  q13_option: '',
  q13_comment: '',
  q13_person: '',
  q13_due_date: new Date(),

  q14:'WEATHER POKAYOKE ARE COVERED IN THE CONTROL PLAN?',
  q14_option: '',
  q14_comment: '',
  q14_person: '',
  q14_due_date: new Date(),

  q15:'WEATHER THE LUX LEVEL OF ALL PROCESSES ARE COVERED IN THE CONTROL PLAN?',
  q15_option: '',
  q15_comment: '',
  q15_person: '',
  q15_due_date: new Date(),

  remarks: '',
  prepared_by: '',
  approved_by: '',



  /*processes_1: {
    s_no: 1,
    desc1: 'DO WE MAKE SIMILAR PARTS ?',
    desc_1_value: '',
    desc2: 'IF YES',
    part_name: '',
    part_number: '',
    current_scrap_percent: null,
    plant: '',
    line_no: '',
    speed: '',
  },
  processes_2: {
    s_no: 2,
    desc1: 'IF NO, WHAT IS OUR BENCHMARKING ?',
    for_design: '',
    for_process: '',
  },

  processes_3_to_9: [
    {
      s_no: 3,
      process: [
        {
          desc: 'DO WE HAVE EQUIPMENT TO DEVELOP THIS PART ?',
          value: '',
        },
        {
          desc: 'IF NO, SOURCE AND NAME OF EQUIPMENT NEEDED',
          value: '',
        },
      ],
    },
    {
      s_no: 4,
      process: [
        {
          desc: 'DO WE HAVE ALL RAW MATERIALS TO DEVELOP THIS PART ?',
          value: '',
        },
        {
          desc: 'IF NO, SOURCE AND NAME OF RAW MATERIALS NEEDED:',
          value: '',
        },
        {
          desc: 'CAN WE PROCURE MATERIALS IN LINE TO CUSTOMER SCHEDULE ?',
          value: '',
        },
      ],
    },
    {
      s_no: 5,
      process: [
        {
          desc: 'PLANT FOR DEVELOPMENT:',
          value: '',
        },
      ],
    },
    {
      s_no: 6,
      process: [
        {
          desc: 'ARE ALL TEST REQUIREMENTS CLEAR ?',
          value: '',
        },
      ],
    },
    {
      s_no: 7,
      process: [
        {
          desc: 'CAN WE DO ALL TESTING ?',
          value: '',
        },
        {
          desc: 'IF NO, SOURCE FOR TESTING:',
          value: '',
        },
      ],
    },
    {
      s_no: 8,
      process: [
        {
          desc: 'SPECIAL MACHINES /REQUIREMENTS FOR TESTING:',
          value: '',
        },
      ],
    },
    {
      s_no: 9,
      process: [
        {
          desc: 'SPECIAL MACHINES FOR MANUFACTURING:',
          value: '',
        },
      ],
    },
  ],

  processes_10_to_14: [
    {
      s_no: 10,
      process: [
        {
          s_no: 'A',
          desc: 'PLANT & LINE TO PRODUCE PRODUCT:',
          value: '',
        },
        {
          s_no: 'B',
          desc: 'DO WE HAVE SPARE CAPACITY ON LINE ?',
          value: '',
        },
        {
          s_no: 'C',
          desc: 'CURRENT CAPACITY UTILISED OF LINE:',
          value: '',
        },
        {
          s_no: 'D',
          desc: 'DO WE HAVE SPARE CAPACITY  IN FINISHING ?',
          value: '',
        },
        {
          s_no: 'E',
          desc: 'IF NO, WHAT IS PROPOSAL ?',
          value: '',
        },
        {
          s_no: 'F',
          desc: 'CAN WE PROCURE & INSTALL NEW EQUIPMENT AS PER CUSTOMER SCHEDULE ?',
          value: '',
        },
      ],
    },
    {
      s_no: 11,
      process: [
        {
          s_no: 'A',
          desc: 'DO WE HAVE TO DESIGN THE PRODUCT ?',
          value: '',
        },
        {
          s_no: 'B',
          desc: 'IF YES, DO WE HAVE DESIGN CAPABILITY ?',
          value: '',
        },
        {
          s_no: 'C',
          desc: 'IF YES, CAN WE MEET CUSTOMER SCHEDULE ?',
          value: '',
        },
        {
          s_no: 'D',
          desc: 'LOCATION FOR DESIGNING:',
          value: '',
        },
        {
          s_no: 'E',
          desc: 'FEA ANALYSIS REQUIREMENT',
          value: '',
        },
        {
          s_no: 'F',
          desc: 'IS THE DESIGNING COST, CUSTOMER FUNDED ?',
          value: '',
        },
      ],
    },
    {
      s_no: 12,
      process: [
        {
          s_no: 'A',
          desc: 'IS REQUIREMENT & SPECS OF ALL CHILD PARTS CLEAR ?',
          value: '',
        },
        {
          s_no: 'B',
          desc: 'IF NO, WHAT IS THE PROPOSAL ?',
          value: '',
        },
      ],
    },
    {
      s_no: 13,
      process: [
        {
          s_no: 'A',
          desc: 'DO WE HAVE PLANT CAPACITY ON JIGS & FIXTURES ?',
          value: '',
        },
        {
          s_no: 'B',
          desc: 'IF NO, THEN WHAT IS PROPOSAL ?',
          value: '',
        },
      ],
    },
    {
      s_no: 14,
      process: [
        {
          s_no: 'A',
          desc: 'IS  SOME TOOLING TO BE OUTSOURCED ?',
          value: '',
        },
        {
          s_no: 'B',
          desc: 'IF YES,  HAVE WE IDENTIFIED SOURCE & ITS CAPABILITY ?',
          value: '',
        },
      ],
    },
  ],

  processes_15_to_18: [
    {
      s_no: 15,
      process: [
        {
          desc: 'CAN WE MEET  PROCESS CAPABILITY  ON SC/CC OF PRODUCT ?',
          value: '',
        },
      ],
    },
    {
      s_no: 16,
      process: [
        {
          desc: 'CAN WE MEET  PROCESS CAPABILITY  ON SC/CC OF PROCESS ?',
          value: '',
        },
        {
          desc: 'IF NO, THEN WHAT IS PROPOSAL ?',
          value: '',
        },
      ],
    },
    {
      s_no: 17,
      process: [
        {
          desc: 'LIST DOWN POTENTIAL RISKS INVOLVED IN DELAY / FAILURE IN DEVELOPMENT',
          value: '',
        },
      ],
    },
    {
      s_no: 18,
      process: [
        {
          desc: 'OVERALL RATING, IS THE PART FEASIBLE TO DEVELOP ?',
          value: '',
        },
      ],
    },
  ],
  sign_value: ['', '', '', '', ''],
  sign_keys: [
    'BUSINESS HEAD',
    'D&D HEAD',
    'PROD. HEAD',
    'Q.A.HEAD',
    'PLANT HEAD',
  ],*/
};
