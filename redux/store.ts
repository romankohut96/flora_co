import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ProjectSlice from './reducers/ProjectSlice'

const rootReducer = combineReducers({ project: ProjectSlice })

export const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
