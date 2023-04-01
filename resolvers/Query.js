import Day from "../models/Day.js";
import Task from "../models/Task.js";
import * as dotenv from "dotenv";
dotenv.config();

// If the first day is greater than the second one, then it will return true. Otherwise, it will return false
function isTheFirstDayGreater(day1, day2) {
  const day1Arr = day1.split("/");
  const day2Arr = day2.split("/");

  if (day1Arr[2] > day2Arr[2]) {
    return true;
  } else if (day1Arr[2] < day2Arr[2]) {
    return false;
  }

  if (day1Arr[1] > day2Arr[1]) {
    return true;
  } else if (day1Arr[1] < day2Arr[1]) {
    return false;
  }

  if (day1Arr[0] > day2Arr[0]) {
    return true;
  } else if (day1Arr[0] < day2Arr[0]) {
    return false;
  }

  return true;
}

export const Query = {
  getTasks: async () => {
    return await Task.find();
  },
  getTasksByDay: async (parent, { date }, context) => {
    return Task.find({ belongedDay: date });
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

  getCurrentWeek: async (parent, { monday, today }, context) => {
    const allDays = await Day.find();

    const currentWeek = allDays.filter((day) => {
      if (
        isTheFirstDayGreater(day.date, monday) &&
        isTheFirstDayGreater(today, day.date)
      ) {
        return day;
      }
    });

    return currentWeek;
  },
};
