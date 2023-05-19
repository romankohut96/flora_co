import React, { FC } from 'react'

interface ProjectItemProps {
  projectName: string
  projectURL: string
  fullTimeWorkers: number
  launch: string
  goal: string
  email: string
  categories: string[]
}

const ProjectItem: FC<ProjectItemProps> = ({
  projectName,
  projectURL,
  fullTimeWorkers,
  launch,
  goal,
  email,
  categories,
}) => {
  return (
    <div className='max-w-90 bg-indigo-50 hover:bg-indigo-100 rounded-lg hover:cursor-pointer flex flex-col p-2.5 gap-0.5 text-black'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>{projectName}</h1>
        <div className='flex-col items-center'>
          <p className='text-[10px]'>FT Workers: </p>
          <p className='bg-primary-100 text-center px-4 py-2'>
            {fullTimeWorkers}
          </p>
        </div>
      </div>
      <p className='text-sm'>
        <strong>Launch: </strong>
        {launch}
      </p>
      <p className='text-sm'>
        <strong>URL: </strong>
        {projectURL}
      </p>
      <p className='text-sm'>
        <strong>Goal: </strong>
        {goal}
      </p>
      <p className='text-sm'>
        <strong>Email: </strong>
        {email}
      </p>
      <strong className='text-sm my-1'>Categories:</strong>
      <div className='flex flex-wrap w-full overflow-y-auto overflow-x-hidden h-9 gap-1'>
        {categories?.map((category) => (
          <span
            key={category}
            className={`
            'text-primary bg-primary-100 w-fit px-3 py-1.5 rounded-2xl cursor-pointer`}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectItem
