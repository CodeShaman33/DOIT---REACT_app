import {rest} from 'msw';
// import { TasksTable } from 'mocks/data/tasks';
import { db } from 'mocks/db';
import { authenticateRequest } from 'mocks/helpers';

const sanitizeUser = (user) => {
    const { password, ...rest } = user;
    return rest;
  };

export const handlers = [
    rest.get('/', (req, res, ctx) => {
        const allTasks = db.task.getAll();
        return res(ctx.status(200), ctx.json({allTasks}));
    }),

    rest.put(`/api/updateTask/:id`, (req, res, ctx) => {
      const id = req.params.id;
     console.log(id)

     const currentTask = db.task.findFirst({where: {id: id}})

   currentTask.task = 'req.body';
     db.task.save(currentTask);
     return res(ctx.status(200));

    }), 

    rest.post('/login', (req, res, ctx) => {
        console.log('axios started')
        const user = db.user.findFirst({
          where: {
            login: {
              equals: req.body.login,
            },
          },
        });
        if (user.password === req.body.password) {
          const token = btoa(user.login);
          console.log(token);
          localStorage.setItem('__be_token__', token);
          return res(ctx.status(200), ctx.json({ ...sanitizeUser(user), token }));
        }
        return res(
          ctx.status(403),
          ctx.json({
            error: 'Invalid user data',
          })
        );
      }),
      rest.get('/me', (req, res, ctx) => {
        if (authenticateRequest(req)) {
          const user = db.user.getAll();
          return res(ctx.status(200), ctx.json({ ...sanitizeUser(user) }));
        }
        return res(ctx.status(401));
      }),
]
