import { createSlice } from "@reduxjs/toolkit";

let id = 1;

const createNewHabit = (name) => {
  const today = new Date();
  const day = today.getDate() - today.getDay();
  const month = today.getMonth();
  const year = today.getFullYear();

  return {
    id: id++,
    name,
    weekLog: [
      { id: 0, day: "Sunday", dd: day, mm: month, yyyy: year, isDone: "" },
      { id: 1, day: "Monday", dd: day + 1, mm: month, yyyy: year, isDone: "" },
      // ... (repeat for other days)
    ],
  };
};

export const habitSlice = createSlice({
  name: "habits",
  initialState: [],
  reducers: {
    addHabit: (state, action) => {
      const newHabit = createNewHabit(action.payload);
      return [...state, newHabit];
    },

    deleteHabit: (state, action) => {
      return state.filter((habit) => habit.id !== action.payload);
    },

    habitDone: (state, action) => {
      return state.map((habit) =>
        habit.id === Number(localStorage.getItem("id"))
          ? {
              ...habit,
              weekLog: habit.weekLog.map((day, index) =>
                index === action.payload ? { ...day, isDone: true } : day
              ),
            }
          : habit
      );
    },

    habitUnDone: (state, action) => {
      return state.map((habit) =>
        habit.id === Number(localStorage.getItem("id"))
          ? {
              ...habit,
              weekLog: habit.weekLog.map((day, index) =>
                index === action.payload ? { ...day, isDone: false } : day
              ),
            }
          : habit
      );
    },

    habitNone: (state, action) => {
      return state.map((habit) =>
        habit.id === Number(localStorage.getItem("id"))
          ? {
              ...habit,
              weekLog: habit.weekLog.map((day, index) =>
                index === action.payload ? { ...day, isDone: "" } : day
              ),
            }
          : habit
      );
    },
  },
});

export const { addHabit, deleteHabit, habitDone, habitUnDone, habitNone } = habitSlice.actions;

export default habitSlice.reducer;
