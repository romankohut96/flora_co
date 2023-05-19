import { Header, ProjectsList } from '@/components'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <main className='min-h-screen w-screen'>
      <Header />
      <ProjectsList />
    </main>
  )
}

export default Home
