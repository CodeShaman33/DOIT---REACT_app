import { setupWorker  } from "msw";
import { handlers } from "./handlers/index";
import { db } from "./db";

export const worker = setupWorker(...handlers);

const createTasks = () => {
    for (let i = 0; i < 15; i++) {
        db.task.create();
}
}

createTasks();
db.user.create();

window.mocks = {
    createTasks,
    getTasks: () => db.task.getAll()
}