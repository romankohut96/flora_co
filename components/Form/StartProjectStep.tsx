import React, { FC } from 'react'
import Input from '../Input'

interface StartProjectStepProps {
  projectName: string
  setProjectName: (value: string) => void
  projectURL: string
  setProjectURL: (value: string) => void
  categories: string[]
  handleSetCategory: (value: string) => void
  setStep: (value: number) => void
  onReset: () => void
}

const categoriesList = [
  'NFT',
  'GameFi',
  'DeFi',
  'DAO',
  'SocialFi',
  'Metaverse',
  'Tools',
  'Ecosystem',
  'Others',
]

const StartProjectStep: FC<StartProjectStepProps> = ({
  projectName,
  setProjectName,
  projectURL,
  setProjectURL,
  categories,
  handleSetCategory,
  setStep,
  onReset,
}) => {
  return (
    <>
      <h2 className='text-sm lg:text-xl text-primary font-normal'>
        To Create Quest you need firstly create Project
      </h2>
      <h1 className='text-3xl mt-2'>Add New Project</h1>
      <Input
        id='project_name'
        label='Project Name (It can be changed later)'
        className={'mt-6 max-w-2xl'}
        value={projectName}
        onChange={({ target }) => setProjectName(target.value)}
        inputClass={'mt-1'}
        placeholder={'Type project name'}
      />
      <Input
        id='project_URL'
        label='Project URL (It cannot be changed after creation)'
        className={'mt-6 max-w-2xl'}
        value={projectURL}
        onChange={({ target }) => setProjectURL(target.value)}
        inputClass={'mt-1'}
        inputText='Alphaguilty.io/'
      />
      <p className='mt-6'>
        Project Category (It cannot be changed after creation)
      </p>
      <div className='flex flex-wrap gap-3 mt-3 max-w-2xl'>
        {categoriesList.map((item) => (
          <span
            key={item}
            className={`${
              categories.includes(item)
                ? 'text-primary bg-primary-100'
                : 'bg-secondary'
            } w-fit px-3 py-1.5 rounded-2xl cursor-pointer`}
            onClick={() => handleSetCategory(item)}
          >
            {item}
          </span>
        ))}
      </div>
      <div className='flex gap-4 lg:gap-8 mt-8'>
        <button
          className='bg-secondary hover:bg-stone-700 w-39'
          onClick={() => onReset()}
          type='button'
        >
          Cancel
        </button>
        <button
          className='bg-primary hover:bg-indigo-500 text-black w-39 lg:w-82'
          onClick={() => setStep(1)}
          type='button'
        >
          Add Project
        </button>
      </div>
    </>
  )
}

export default StartProjectStep
