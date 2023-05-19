import React, { ChangeEvent, FC } from 'react'
interface RadioButtonProps {
  type?: string
  label: string
  id: string
  value?: string | number
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
}

const RadioButton: FC<RadioButtonProps> = ({
  label,
  id,
  value,
  checked,
  onChange,
  className,
}) => {
  return (
    <div className={`${className} flex mt-6`}>
      <input
        id={id}
        type='radio'
        value={value}
        checked={checked}
        onChange={onChange}
        className={`bg-black-100 border border-white-100 rounded-lg outline-0 px-4 mt-1 h-12`}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioButton
