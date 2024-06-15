import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CalendarState {
  month: Date;
  year: Date;
  date: Date;
}

const initialState: CalendarState = {
  month: new Date(),
  year: new Date(),
  date: new Date(),
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    changeMonth: (state, action: PayloadAction<Date>) => {
      state.month = action.payload;
    },
    changeYear: (state, action: PayloadAction<Date>) => {
      state.year = action.payload;
    },
    changeDate: (state, action: PayloadAction<Date>) => {
      state.date = action.payload;
    },
  },
});

export const { changeMonth, changeYear, changeDate } = calendarSlice.actions;

export const calendarReducer = calendarSlice.reducer;
