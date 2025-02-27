import { Schema } from "mongoose";

const appliedModel = new Schema(
  {
    issueId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "projectIssue",
    },
    projectId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "project",
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default appliedModel;
