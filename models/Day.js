import mongoose, { Schema } from "mongoose";

const daySchema = new Schema({
  title: String,
  description: String,
  hoursWorked: String,
  date: String,
  closed: Boolean,
});

const model = mongoose.model("Day", daySchema);
export const schema = model.schema;
export default model;
