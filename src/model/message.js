import mongoose from "mongoose";

const Message = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a full name"]
  },
  message: {
    type: String,
    required: [true, "Please enter a message"]
  }
});

export default mongoose.model("Message", Message);
