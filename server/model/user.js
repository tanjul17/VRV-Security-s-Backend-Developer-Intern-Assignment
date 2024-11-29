import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  employee_id: { 
    type: String, 
    required: true, 
    unique: true // Ensure employee_id is unique
  },
  phone: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    required: true,
    enum: ["Guard", "Manager", "Authority"], // Ensure only valid roles
  },
});

export default mongoose.model("User", userSchema);
