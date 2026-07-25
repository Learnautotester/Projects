const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["TODO", "DONE"],
      default: "TODO",
    },

    linkedFile: {
      data: Buffer,
      contentType:String,
    },

    createdOn: {
      type: Date,
      default: Date.now,
    },

    deadline: {
      type: Date,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const taskModel = mongoose.model("Task", taskSchema);

console.log(taskModel);

module.exports = taskModel;