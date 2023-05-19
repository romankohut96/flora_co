import React, { FC } from 'react'
import RadioButton from '../RadioButton'

interface ProjectDetailsStepProps {
  goal: string
  setGoal: (value: string) => void
  setStep: (value: number) => void
}

const goals = [
  'Grow My Community',
  'Activate Existing Members',
  'Understand My Members',
  'Other',
]

const ProjectDetailsStep: FC<ProjectDetailsStepProps> = ({
  goal,
  setGoal,
  setStep,
}) => {
  return (
    <>
      <h2 className='text-sm lg:text-xl text-primary mb-2 font-normal'>
        Project Details
      </h2>
      <h1 className='text-3xl mb-1'>What is your main goal with AlphaQuest?</h1>
      <div>
        {goals.map((item) => (
          <RadioButton
            key={item}
            id={item}
            label={item}
            value={item}
            onChange={({ target }) => setGoal(target.value)}
            checked={goal === item}
          />
        ))}
      </div>
      <div className='flex gap-4 lg:gap-8 mt-8'>
        <button
          className='bg-secondary hover:bg-stone-700 w-39'
          onClick={() => setStep(0)}
          type='button'
        >
          Back
        </button>
        <button
          className='bg-primary hover:bg-indigo-500 text-black w-39 lg:w-82'
          onClick={() => setStep(2)}
          type='button'
        >
          Continue
        </button>
      </div>
    </>
  )
}

export default ProjectDetailsStep
