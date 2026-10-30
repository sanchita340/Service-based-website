import mongoose from "mongoose";
const blogschema= new mongoose.Schema({
     title: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    excerpt: {
      type: String,
      trim: true
    },

    content: {
      type: String,
      required: true
    },

    image: {
      type: String
    },

    category: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Draft"
    }

},
{
    timestamps:true
})
const Blog = mongoose.model("Blog", blogschema);

export default Blog;