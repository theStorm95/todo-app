import { DateTime } from "luxon";

export interface Task {
  id: number;
  title: string;
  dueDate: DateTime;
  createdDate: DateTime;
}
