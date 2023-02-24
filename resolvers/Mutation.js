import Day from "../models/Day.js";
import Task from "../models/Task.js";
import * as dotenv from "dotenv";
dotenv.config();

export const Mutation = {
  createDay: async (_, { dayInput: { title, description, date } }) => {
    const createdDay = new Day({
      title: title,
      description: description,
      hoursWorked: 0,
      date: date,
      closed: false,
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
      hoursWorked: 0,
      belongedDay: belongedDay,
      startedHour: startedHour,
      isStarted: false,
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

  updateTask: async (
    _,
    { ID, taskUpdateInput: { startedHour, isStarted } }
  ) => {
    const wasEdited = (
      await Task.updateOne(
        { _id: ID },
        { $set: { startedHour: startedHour, isStarted: isStarted } }
      )
    ).modifiedCount;

    if (wasEdited) {
      return Task.findById(ID);
    }
  },

  updateDay: async (_, { date, dayUpdateInput: { closed, hoursWorked } }) => {
    const wasEdited = (
      await Day.updateOne(
        { date: date },
        { $set: { closed: closed, hoursWorked: hoursWorked } }
      )
    ).modifiedCount;

    if (wasEdited) {
      return true;
    }
  },
};
