import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/getCounter";
import { CounterSchema } from "entities/counter";

export const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.value);
