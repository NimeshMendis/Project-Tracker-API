const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
    {
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      name: {
        type: String,
        required: [true, "Please add the project name"],
      },
      manager: {
        type: String,
        required: [true, "Please add the project manager"],
      },
      description: {
        type: String,
        required: [true, "Please add the project description"],
      },
      progress: {
        type: String,
        required: [true, "Please add the project status"],
      },
    },
    {
      timestamps: true,
    }
  );

  module.exports = mongoose.model("Project", projectSchema);