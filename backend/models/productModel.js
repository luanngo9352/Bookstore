import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    bookName:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    publicCompany:{
        type: String,
        required: true,
    },
    language:{
        type: String,
        required: true,
    },
    form:{
        type: String,
        required: true,
    },
    pageNumber:{
        type: Number,
        required: true,
    },
    bookPrice:{
        type: Number,
        required: true,
        default: 0,
    },
    bookDetail:{
        type: String,
        required: true,
    },
    bookImage:{
        type: String,
        required: true
    },
    bookQuaranty:{
        type: Number,
        required: true,
        default: 0,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;