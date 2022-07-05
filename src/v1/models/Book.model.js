const mongoose = require('mongoose')

const Book = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    authorId: { type: String, required: true },
    subtitle: { type: String },
    category: { type: String, required: false },
    description: { type: String },
    remarks: { type: Number , default: 0,},
    numberOfAuthors: { type: Number, required: true },
    bookUrl: { type: String, required: true, default:false },
    initialization: { type: Boolean, required: true, default:false },
    review: { type: Boolean, required: true, default:false },
    proofing: { type: Boolean, required: true, default:false },
    readyToPublish: { type: Boolean, required: true, default:false },
    published: { type: Boolean, required: true, default:false },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Books', Book)
