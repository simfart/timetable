import { Provider } from "react-redux";
import { FC, PropsWithChildren } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { calendarReducer } from "../../entity/calendar/model/";

export const store = configureStore({
  reducer: { calendar: calendarReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

interface IReduxToolkitProvider extends PropsWithChildren {}

export const ReduxToolkitProvider: FC<IReduxToolkitProvider> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};
