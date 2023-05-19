import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Project } from '@/types'

interface initialState {
  projects: Project[]
}

const initialState: initialState = {
  projects: [],
}

export const ProjectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    createProject(state, action: PayloadAction<Project>) {
      state.projects.unshift(action.payload)
    },
  },
})

export const { createProject } = ProjectSlice.actions

export default ProjectSlice.reducer
