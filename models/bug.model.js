const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id:{type: Number, unique: true, required: true},
    title: { type: String, required: true },
    description:{type: String},
    status:{type:boolean},
    startDate:{type:Date,required:true},
    endDate:{type:Date,required:true},
    createdDate: { type: Date, default: Date.now },
    active:{type:boolean},
    priority:{type:number},
    storyId:{type:number,required:true}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Task', schema);