const mongoose = require('mongoose');
const Part = require('../addpart/addPartModel');
const Schema = new mongoose.Schema(
  {
    module_date: { // Date of creation
      type: Date,
      default: new Date(),
    },
    part_id: {
      type: mongoose.Schema.ObjectId,
      ref: Part,
    },

    q1:{
        type: String,
        default: 'WEATHER CP ADRESSES ALL PRODUCT & PROCESS CHARACTERSTICS AS MENTINED IN PFD?'
    },
    q1_option: String,
    q1_comment: String,
    q1_person: String,
    q1_due_date: Date,

    q2:{
        type: String,
        default: 'WEATHER CONTROL METHODS IDENTIFIED IN THE CP IS INLINE WITH THE PFMEA?'
    },
    q2_option: String,
    q2_comment: String,
    q2_person: String,
    q2_due_date: Date,

    q3:{
        type: String,
        default: 'WEATHER CP FOCUS IS ON PREVENTION OF CAUSES OR ONLY ON DETECTION OF DEFECTS?'
    },
    q3_option: String,
    q3_comment: String,
    q3_person: String,
    q3_due_date: Date,

    q4:{
        type: String,
        default: 'WEATHER SPECIAL CHARACTERSTICS ARE IDENTIFIED IN CONTROL PLAN?'
    },
    q4_option: String,
    q4_comment: String,
    q4_person: String,
    q4_due_date: Date,

    q5:{
        type: String,
        default: 'WEATHER FREQUENCY & SAMPLE OF INSPECTION IS ADEQUATE TO DETECT THE FAILURE MODE ? OR CAUSE?'
    },
    q5_option: String,
    q5_comment: String,
    q5_person: String,
    q5_due_date: Date,

    q6:{
        type: String,
        default: 'WEATHER REACTION PLAN MENTIONED IS ADEQUATE?'
    },
    q6_option: String,
    q6_comment: String,
    q6_person: String,
    q6_due_date: Date,

    q7:{
        type: String,
        default: '4M,TOOL ENVIRONMENT SUPPLIER RELATED PARAMETERS IDENTIFIED HAS ADEQUATE CONTROL?'
    },
    q7_option: String,
    q7_comment: String,
    q7_person: String,
    q7_due_date: Date,

    q8:{
        type: String,
        default: 'WEATHER PROCESS PARAMETERS IDINTIFIED IN CP ARE ARRIVED SCIENTIFICALLY?'
    },
    q8_option: String,
    q8_comment: String,
    q8_person: String,
    q8_due_date: Date,

    q9:{
        type: String,
        default: 'WEATER CONTROL PLAN PREPARED FOR PROTO.PRELAUNCH & PRODUCTION STAGE?'
    },
    q9_option: String,
    q9_comment: String,
    q9_person: String,
    q9_due_date: Date,

    q10:{
        type: String,
        default: 'WEATHER CONTROL PLAN SPECIFICATION IS INLINE WITH DRAWING SPECIFICATION?'
    },
    q10_option: String,
    q10_comment: String,
    q10_person: String,
    q10_due_date: Date,

    q11:{
        type: String,
        default: 'WEATHER CONTROL PLAN IS AS PER THE LATEST DRAWING?'
    },
    q11_option: String,
    q11_comment: String,
    q11_person: String,
    q11_due_date: Date,

    q12:{
        type: String,
        default: 'WEATHER CONTROL PLAN COVERS ALL PROCESSES INCLUDING PARTS RECEVING ,STORAGE,LOADING DISPATCH?'
    },
    q12_option: String,
    q12_comment: String,
    q12_person: String,
    q12_due_date: Date,

    q13:{
        type: String,
        default: 'CONTROL METHODS TO BE CHANGED AS PER THE CHANGE OF GRAVITY?'
    },
    q13_option: String,
    q13_comment: String,
    q13_person: String,
    q13_due_date: Date,

    q14:{
        type: String,
        default: 'WEATHER POKAYOKE ARE COVERED IN THE CONTROL PLAN?'
    },
    q14_option: String,
    q14_comment: String,
    q14_person: String,
    q14_due_date: Date,

    q15:{
        type: String,
        default: 'WEATHER THE LUX LEVEL OF ALL PROCESSES ARE COVERED IN THE CONTROL PLAN?'
    },
    q15_option: String,
    q15_comment: String,
    q15_person: String,
    q15_due_date: Date,

    remark: String,
    prepared_by: String,
    approved_by: String,
    customer: String,
    model: String,
  },
  { timestamps: true }
);

const ControlPlanCheckListDND = mongoose.model('ControlPlanCheckListDND', Schema);
module.exports = ControlPlanCheckListDND;
