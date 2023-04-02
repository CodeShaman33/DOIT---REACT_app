import {rest} from 'msw';
import { TasksTable } from 'mocks/data/tasks';
import { db } from 'mocks/db';

export const handlers = [
    rest.get('/', (req, res, ctx) => {
        const allTasks = db.task.getAll();
        return res(ctx.status(200), ctx.json({allTasks}));
    }),

    rest.put(`/api/updateTask/:id`, (req, res, ctx) => {
        let id = req.params.id;
        const newData = req.body;
        console.log(newData);
        
        const index = TasksTable.findIndex((obj) => obj.id === String(id));
        console.log(TasksTable[index]);      
        TasksTable[index].task = newData;
        console.log(TasksTable[index]);

        
        return res(ctx.status(200))
    })
]
