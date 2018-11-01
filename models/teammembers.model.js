const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id:{type: Number, unique: true, required: true},
    teamId: { type: Number, required: true },
    memberId:{type:Number, required:true},
    active:{type:boolean,default:true},
    createdDate: { type: Date, default: Date.now,required:true },
    createdBy:{type:Number, required:true},
    modifiedBy:{type:Number},
    modifiedDate:{type:Date}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('TeamMembers', schema);