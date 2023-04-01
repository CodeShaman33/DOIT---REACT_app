import {rest} from 'msw';
import { TasksTable } from 'mocks/data/tasks';
export const handlers = [
    rest.get('/', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({TasksTable}));
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
