const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    time: {
        type:String,  
    }
});

module.exports = todoSchema;