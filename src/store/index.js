//those actions are not muting existing state, they copy all of exiting state and works on them
// import { createStore } from "redux"
import {v4 as uuid } from 'uuid'
// import axios from "axios"
import { createSlice, configureStore } from "@reduxjs/toolkit"
const initialNotesState =  [
        {
            id: uuid(),
            title: 'first note lorem ipsum',
            content: 'first note lorem ipsum content'
        }, 
    ]

const initialTasksState = [
    {
        id: uuid(),
        content: 'first task orem ipsum content',
        priority: 1,
        // done: false,
    }
]





// export const addNote = (payload) => {
//     return {
//         type: 'notes/add',
//         payload: {
//             id: uuid(),
//             ...payload,
//         }
//     }
// }

// export const addTask = (payload) => {
//     return {
//         type: 'tasks/add',
//         payload: {
//             id: uuid(),
//             ...payload,
//         }
//     }
// }



// export const removeNote = (payload) => {
//     return {
//         type: 'notes/remove',
//         payload
//     }
// }



const notesSlice = createSlice({
    name: 'notes',
    initialState: initialNotesState,
    reducers: {
        addNote(state, action) {
            state.push({
                id: uuid(),
                ...action.payload,
            })
        },
        removeNote(state, action) {
            return state.filter(note => note.id !== action.payload.id)
        },
    }

})

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialTasksState,
    reducers: {
        addTask(state, action) {
            state.push({
                id: uuid(),
                ...action.payload,
            })
        },
        removeTask(state, action) {},
    }

})



export const {addNote, removeNote} = notesSlice.actions
export const {addTask, removeTask} = tasksSlice.actions


export const store = configureStore({

    reducer: {
        notes: notesSlice.reducer,
        tasks: tasksSlice.reducer

    }
})