const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id:{type: Number, unique: true, required: true},
    name: { type: String, unique: true, required: true },
    active:{type:boolean},
    status:{type:boolean},
    startDate:{type:Date,required:true},
    endDate:{type:Date,required:true},
    createdDate: { type: Date, default: Date.now },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Project', schema);