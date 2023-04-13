// import { TasksTable } from 'mocks/data/tasks';
// import { faker } from '@faker-js/faker';
import { notesHandlers } from "./notesHandlers";
import { authHandlers } from "./authHandlers";
import { tasksHandlers } from "./tasksHandlers";

export const handlers = [
  //NOTES HANDLERS
  ...notesHandlers,
  ...authHandlers,
  ...tasksHandlers,
];
