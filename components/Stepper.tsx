import React, { FC, Fragment } from 'react'

interface StepperProps {
  steps: any[]
  currentStep: number
  isHorizontal?: boolean
  className?: string
}

const Stepper: FC<StepperProps> = ({
  steps,
  currentStep,
  isHorizontal = true,
  className,
}) => {
  return (
    <div
      className={`${className} flex ${
        isHorizontal ? 'items-center gap-1' : 'flex-col items-start'
      }`}
    >
      {steps.map((item, index) => (
        <Fragment key={item}>
          <div className={`flex items-center ${!isHorizontal ? 'gap-2' : ''}`}>
            <span
              className={`${currentStep === index ? 'bg-white' : ''} ${
                currentStep < index ? 'bg-secondary-100' : 'bg-primary'
              } w-2 h-2 rounded-[50%]`}
            ></span>
            <label
              className={`${currentStep === index ? 'text-white' : ''} ${
                currentStep < index ? 'text-secondary-100' : 'text-primary'
              } hidden lg:block text-sm`}
            >
              {item}
            </label>
          </div>
          {!index || index !== steps.length - 1 ? (
            <div
              className={`${
                currentStep > index ? 'border-primary' : 'border-secondary-100'
              } ${isHorizontal ? 'w-10 border-t' : 'h-6 border-r ml-[3.5px]'}`}
            ></div>
          ) : (
            ''
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default Stepper
