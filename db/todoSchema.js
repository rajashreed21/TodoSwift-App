const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    
    title: {
        type: String,
    },
   
});

module.exports = todoSchema;