import { Header, ProjectsList } from '@/components'
import { FC } from 'react'

const Projects: FC = () => {
  return (
    <main className='min-h-screen w-screen'>
      <Header />
      <ProjectsList />
    </main>
  )
}

export default Projects
