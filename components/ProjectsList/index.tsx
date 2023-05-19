'use client'
import { useAppSelector } from '@/hooks/redux'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'

const ProjectsList = () => {
  const { projects } = useAppSelector((state) => state.project)
  if (!projects.length) {
    return (
      <h1 className='w-full absolute top-1/2 text-center p-5 text-lg'>
        Create your first project{' '}
        <Link
          href={'/create_project'}
          className={'text-primary underline underline-offset-4'}
        >
          Create
        </Link>
      </h1>
    )
  }
  return (
    <article className='grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 2xl:grid-cols-4 gap-4 w-full overflow-y-auto overflow-x-hidden p-5 '>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          projectName={project.projectName}
          projectURL={project.projectURL}
          launch={project.launch}
          goal={project.goal}
          fullTimeWorkers={project.fullTimeWorkers}
          categories={project.categories}
          email={project.email}
        />
      ))}
    </article>
  )
}

export default ProjectsList
