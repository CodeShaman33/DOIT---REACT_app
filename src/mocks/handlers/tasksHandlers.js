import { rest } from "msw";
import { faker } from '@faker-js/faker';

import { db } from "mocks/db";

export const tasksHandlers = [
  rest.get('/tasks', (req, res, ctx) => {
    console.log(req.params)
    const tasks = db.task.getAll();
    return res(ctx.status(200), ctx.json({ tasks: tasks }));
  }),



  rest.post('tasks', (req, res, ctx) => {
    console.log('TASK POST STARTED');
    console.log(req.body);
    if(req.body.content && req.body.priority){
      

      const newTask = {
        id: faker.datatype.uuid(),
        priority: req.body.priority,
        content: req.body.content 
      }

      db.task.create(newTask);
      console.log(newTask);

      return res(ctx.status(200))

    } else {
      return res(ctx.status(400))

    }

  }),

  rest.delete('/tasks/:id', (req,res,ctx) => {
    const {id} = req.params
    console.log(id)
    // console.log(req.body.id)
    if(id) {
      const removedTask = db.task.delete({
        where: {
          id: {
            equals: id
          }
        }
      })

      return res(ctx.status(200), ctx.json({removedTask}))
    }

    return res(ctx.status(400), ctx.json({
      error: 'please try again'
    }))
  }),

  rest.put('tasks/:id', (req, res, ctx) => {
    console.log(`TASK UPDATE STARTED for task ID: ${req.params.id}`);
    const newString = Object.values(req.body).join('');
    console.log(newString);
  
    const taskId = req.params.id;
    const updatedTask = db.task.findFirst({
      where: {
        id: {
          equals: taskId,
        }
      }
    })
    console.log(updatedTask);
  
    if (!updatedTask) {
      return res(ctx.status(404));
    }
  
    if (newString !== updatedTask.content) {
      updatedTask.content = newString;
    }
  
    db.task.update(taskId, updatedTask);
    console.log(updatedTask);
  
    return res(ctx.status(200));
  })
  

  
];
