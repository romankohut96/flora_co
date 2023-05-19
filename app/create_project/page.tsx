'use client'
import React, { FC, useState } from 'react'
import { Form, Stepper } from '@/components'
import Image from 'next/image'
import Gradient from '@/assets/images/gradient.svg'

const steps = ['Start First Project', 'Project Details', 'Create Project']

const ProjectForm: FC = () => {
  const [step, setStep] = useState(0)

  return (
    <main className='min-h-screen sm:w-[100vw] flex flex-col lg:flex-row items-center lg:items-start'>
      <Stepper
        steps={steps}
        currentStep={step}
        className={'w-full flex justify-center mt-18 lg:hidden'}
      />
      <aside className='min-h-screen border-r border-grey w-65 pt-10.5 hidden lg:flex flex-col justify-between'>
        <Stepper
          steps={steps}
          currentStep={step}
          className={'flex justify-start px-6'}
          isHorizontal={false}
        />
        <Image src={Gradient} alt='gradient' priority={true} />
      </aside>
      <Form step={step} setStep={setStep} />
    </main>
  )
}

export default ProjectForm
