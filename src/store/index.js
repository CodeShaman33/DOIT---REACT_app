import {v4 as uuid } from 'uuid'
import { createSlice, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const initialTasksState = [
    {
        id: uuid(),
        content: 'first task orem ipsum content',
        priority: 1,
        // done: false,
    }
]





const notesApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
    }),
    tagTypes: ['Notes'],
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => 'notes',
            providesTags: ['Notes'],
        }),
        addNote: builder.mutation({
            query: (body) => ({
                url: 'notes',
                method: 'POST',
                body,  
            }),
            invalidatesTags: ['Notes'],  
        }),
        removeNote: builder.mutation({
            query: (id) => ({
                url: `notes/${id}`,
                method: 'DELETE',
                }),
                invalidatesTags: ['Notes'],
            })
        })
    })


export const {useGetNotesQuery, useAddNoteMutation, useRemoveNoteMutation } = notesApi;
export const api = notesApi;


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

const tasks = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
    }),
    tagTypes: ['Tasks'],
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => '/',
            providesTags: ['Tasks'],
        }),
        addNote: builder.mutation({
            query: (body) => ({
                url: 'notes',
                method: 'POST',
                body,  
            }),
            invalidatesTags: ['Notes'],  
        })
    })
})



// export const {addNote, removeNote} = notesSlice.actions
export const {addTask, removeTask} = tasksSlice.actions


export const store = configureStore({

    reducer: {
        [notesApi.reducerPath]: notesApi.reducer,
        tasks: tasksSlice.reducer

    },

    middleware: () =>
    getDefaultMiddleware().concat(api.middleware),
})