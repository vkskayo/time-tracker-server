import Day from "../models/Day.js";
import Task from "../models/Task.js";
import * as dotenv from "dotenv";
dotenv.config();

export const Mutation = {
  createDay: async (_, { dayInput: { title, description, date } }) => {
    const createdDay = new Day({
      title: title,
      description: description,
      hoursWorked: "10 hours",
      date: date,
    });

    const res = await createdDay.save();

    return {
      id: res.id,
      ...res._doc,
    };
  },

  createTask: async (
    _,
    { taskInput: { title, description, belongedDay, startedHour } }
  ) => {
    const createdTask = new Task({
      title: title,
      description: description,
      hoursWorked: "10hours",
      belongedDay: belongedDay,
      startedHour: startedHour,
    });

    const res = await createdTask.save();
    return {
      id: res.id,
      ...res._doc,
    };
  },
  deleteDay: async (_, { ID }) => {
    const wasDeleted = await Day.deleteOne({
      _id: ID,
    });

    return wasDeleted.deletedCount;
  },

  deleteTask: async (_, { ID }) => {
    const wasDeleted = await Task.deleteOne({
      _id: ID,
    });

    return wasDeleted.deletedCount;
  },
};
