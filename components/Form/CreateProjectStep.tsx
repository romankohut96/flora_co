import React, { FC } from 'react'

import Input from '../Input'
import RadioButton from '../RadioButton'

interface CreateProjectStepProps {
  workersCount: number
  handleChangeWorkersCount: (value: number) => void
  productLaunch: string
  setProductLaunch: (value: string) => void
  email: string
  setEmail: (value: string) => void
  setStep: (value: number) => void
}

const CreateProjectStep: FC<CreateProjectStepProps> = ({
  workersCount,
  handleChangeWorkersCount,
  productLaunch,
  setProductLaunch,
  email,
  setEmail,
  setStep,
}) => {
  return (
    <>
      <h2 className='text-sm lg:text-xl text-primary mb-2 font-normal'>
        Create Project
      </h2>
      <h1 className='text-3xl mb-4'>
        How many full-time workers on the project?
      </h1>
      <div className='flex gap-4 w-full'>
        <button
          type='button'
          className='bg-secondary hover:bg-stone-700 w-12'
          onClick={() => handleChangeWorkersCount(workersCount - 1)}
        >
          -
        </button>
        <Input
          className={'w-38'}
          inputClass={'h-12 w-38 text-center touch-none'}
          type='number'
          value={workersCount}
          onChange={({ target }) =>
            handleChangeWorkersCount(Number(target.value))
          }
          readOnly={true}
        />
        <button
          className='bg-secondary hover:bg-stone-700 w-12'
          type='button'
          onClick={() => handleChangeWorkersCount(workersCount + 1)}
        >
          +
        </button>
      </div>
      <h1 className='text-3xl mt-7'>Are you pre or post product launch?</h1>
      <div>
        <RadioButton
          id={'pre_product'}
          label={'Pre Product'}
          value={'Pre Product'}
          onChange={({ target }) => setProductLaunch(target.value)}
          checked={productLaunch === 'Pre Product'}
        />
        <RadioButton
          id={'post_product'}
          label={'Post Product'}
          value={'Post Product'}
          onChange={({ target }) => setProductLaunch(target.value)}
          checked={productLaunch === 'Post Product'}
        />
      </div>
      <h1 className='text-3xl mt-7'>Contact Email</h1>
      <Input
        className={'mt-4'}
        type='email'
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        placeholder={'Type your email'}
      />
      <div className='flex gap-4 lg:gap-8 mt-8'>
        <button
          className='bg-secondary hover:bg-stone-700 w-39'
          onClick={() => setStep(1)}
        >
          Back
        </button>
        <button
          className='bg-primary hover:bg-indigo-500 text-black w-39 lg:w-82'
          type='submit'
        >
          Create Project
        </button>
      </div>
    </>
  )
}

export default CreateProjectStep
