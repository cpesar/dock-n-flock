const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const lotSchema = new Schema(
  {
    address: { 
        type: String,
        required: true
    }
    
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);