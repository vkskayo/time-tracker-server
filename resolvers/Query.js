import Day from "../models/Day.js";
import Task from "../models/Task.js";
import * as dotenv from "dotenv";
dotenv.config();

// Assuming that I have a database

// const tasks = dabaseResource
// const days = databaseResource


export const Query = {
  hello: ()=>{
    return "Worldasdas"
  },

  getTasks: async ()=>{
    return await Task.find();
  },
  getTasksByDay: async (parent, { id }, context) => {
    // return tasks.filter((task)=> task.belongedDay == id)  something like that
  },

  getDays: async ()=>{
    // return days;
    return await Day.find()
  },

   getDayById:async (parent, { id }, context) => {
    // return days.filter((day)=> day.id == id)  something like that
    return await Day.findById(id);
  }, 

};