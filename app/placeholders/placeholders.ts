import { DateTime } from "luxon";
import { Task } from "../types";

export const tasks: Task[] = [
  {
    id: 1,
    title: "Do Laundry",
    dueDate: DateTime.now(),
    createdDate: DateTime.now().minus(1000),
  },
  {
    id: 2,
    title: "Clean out the fridge",
    dueDate: DateTime.now(),
    createdDate: DateTime.now().minus(1000),
  },
];
