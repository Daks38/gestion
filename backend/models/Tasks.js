const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    content: { type: String, required: true },

    status: {
      type: String,
      enum: ["En cours", "Terminée"],
      default: "En cours",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model.Task || mongoose.model("Task", TaskSchema);
