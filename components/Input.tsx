import React, { ChangeEvent, FC } from 'react'

interface InputProps {
  type?: string
  label?: string
  id?: string
  value?: string | number
  defaultValue?: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
  inputClass?: string
  inputText?: string
  placeholder?: string
  readOnly?: boolean
}

const Input: FC<InputProps> = ({
  label,
  id,
  value,
  onChange,
  className,
  type = 'text',
  inputClass,
  defaultValue,
  inputText,
  placeholder,
  readOnly,
}) => {
  return (
    <div className={`${className} flex flex-col relative`}>
      <label htmlFor={id}>{label}</label>
      {inputText ? (
        <span className={`  absolute bottom-[11px] left-4 text-secondary-100`}>
          {inputText}
        </span>
      ) : (
        ''
      )}
      <input
        id={id}
        type={type}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        className={`${inputClass} w-full bg-black-100 border border-white-100 rounded-lg h-11.5 outline-0 px-4 ${
          inputText ? 'pl-28.5' : ''
        }`}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </div>
  )
}

export default Input
