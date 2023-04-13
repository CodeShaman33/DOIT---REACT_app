import { rest } from "msw";

import { db } from "mocks/db";

export const tasksHandlers = [
  rest.get("/", (req, res, ctx) => {
    const allTasks = db.task.getAll();
    return res(ctx.status(200), ctx.json({ allTasks }));
  }),

  rest.put(`/api/updateTask/:id`, (req, res, ctx) => {
    const id = req.params.id;
    console.log(id);

    const currentTask = db.task.findFirst({ where: { id: id } });

    currentTask.task = "req.body";
    db.task.save(currentTask);
    return res(ctx.status(200));
  }),
];
