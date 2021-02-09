const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Adventure = new Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    category: {type:Array, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    details: { type: Array, required: true},
    imgURL: { type: Array, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('adventure', Adventure)