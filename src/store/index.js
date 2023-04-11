//those actions are not muting existing state, they copy all of exiting state and works on them
import { createStore } from "redux"
import {v4 as uuid } from 'uuid'

export const addNote = (payload) => {
    return {
        type: 'notes/add',
        payload: {
            id: uuid(),
            ...payload,
        }
    }
}

export const addTask = (payload) => {
    return {
        type: 'tasks/add',
        payload: {
            id: uuid(),
            ...payload,
        }
    }
}



export const removeNote = (payload) => {
    return {
        type: 'notes/remove',
        payload
    }
}

const initialState = {
    notes: [
        {
            id: uuid(),
            title: 'first note lorem ipsum',
            content: 'first note lorem ipsum content'
        }, 
       
    ],
    tasks: [
        {
            id: uuid(),
            content: 'first task orem ipsum content',
            priority: 1,
            // done: false,
        }
    ]
}

const notesReducer = (state = initialState, action) => {
     switch(action.type) {
        case 'notes/add': 
        return {
            ...state,
            notes: [...state.notes, action.payload]
        }

        case 'notes/remove':
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.id)
            }

        case 'tasks/add': 
            return {
                ...state,
                tasks: [...state.tasks, action.payload]

            }
        default: 
        return state; 
     }
}

export const store = createStore(notesReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 