import {rest} from 'msw';
import { TasksTable } from 'mocks/data/tasks';


export const handlers = [
    rest.get('/', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({TasksTable}));
    })
]
