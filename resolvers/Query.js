import Day from "../models/Day.js";
import Task from "../models/Task.js";
import * as dotenv from "dotenv";
dotenv.config();

export const Query = {
  getTasks: async () => {
    return await Task.find();
  },
  getTasksByDay: async (parent, { id }, context) => {
    return Task.find({ belongedDay: id });
  },

  getDays: async () => {
    return await Day.find();
  },

  getDayById: async (parent, { id }, context) => {
    return await Day.findById(id);
  },

  getDayByDate: async (parent, { date }, context) => {
    return await Day.findOne({ date: date });
  },
};
