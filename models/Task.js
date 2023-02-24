import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  title: String,
  description: String,
  hoursWorked: String,
  belongedDay: String,
  startedHour: String,
  isStarted: Boolean,
});

const model = mongoose.model("Task", taskSchema);
export const schema = model.schema;
export default model;
