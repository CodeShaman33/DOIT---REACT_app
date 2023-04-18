// import {v4 as uuid } from 'uuid'
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const notesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  tagTypes: ["Notes"],
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => "notes",
      providesTags: ["Notes"],
    }),
    addNote: builder.mutation({
      query: (body) => ({
        url: "notes",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Notes"],
    }),
    removeNote: builder.mutation({
      query: (id) => ({
        url: `notes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notes"],
    }),
  }),
});

export const { useGetNotesQuery, useAddNoteMutation, useRemoveNoteMutation } =
  notesApi;
export const api = notesApi;

const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "tasks",
      providesTags: ["Tasks"],
    }),
    addTask: builder.mutation({
      query: (body) => ({
        url: "tasks",
        method: "POST",
        body,
      }),
      
      invalidatesTags: ["Tasks"],
    }),
    removeTask: builder.mutation({
      query: (id) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),

    updateTask: builder.mutation({
      query: ({id,  ...body}) => ({
        url: `tasks/${id}`,
        method: "PUT",
        body
      })
    })

  }),
});

export const { useGetTasksQuery, useAddTaskMutation, useRemoveTaskMutation, useUpdateTaskMutation  } = tasksApi;
export const api2 = tasksApi;

export const store = configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer,

    [notesApi.reducerPath]: notesApi.reducer,
    // tasks: tasksSlice.reducer
  },

  middleware: () =>
    getDefaultMiddleware()
      .concat(notesApi.middleware)
      .concat(tasksApi.middleware),
});
