'use client'
import React, { FC, FormEvent, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'

import StartProjectStep from './StartProjectStep'
import ProjectDetailsStep from './ProjectDetailsStep'
import CreateProjectStep from './CreateProjectStep'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { createProject } from '@/redux/reducers/ProjectSlice'

import 'react-toastify/dist/ReactToastify.css'

interface FormProps {
  step: number
  setStep: (value: number) => void
}

const Form: FC<FormProps> = ({ step, setStep }) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { projects } = useAppSelector((state) => state.project)
  const [projectName, setProjectName] = useState('')
  const [projectURL, setProjectURL] = useState('')
  const [categories, setCategories] = useState<string[]>([])
  const [goal, setGoal] = useState('Grow My Community')
  const [workersCount, setWorkersCount] = useState(0)
  const [productLaunch, setProductLaunch] = useState('Pre Product')
  const [email, setEmail] = useState('')

  const validation = () => {
    if (!projectName) {
      toast.error('Project name is required', {
        position: toast.POSITION.BOTTOM_CENTER,
      })
      return false
    }
    if (!projectURL) {
      toast.error('Project URL is required', {
        position: toast.POSITION.BOTTOM_CENTER,
      })
      return false
    }
    if (!categories) {
      toast.error('Category is required', {
        position: toast.POSITION.BOTTOM_CENTER,
      })
      return false
    }
    if (!email && step === 2) {
      toast.error('Email is required', {
        position: toast.POSITION.BOTTOM_CENTER,
      })
      return false
    }
    return true
  }

  const handleChangeWorkersCount = (value: number) => {
    if (value >= 0) {
      setWorkersCount(value)
    }
  }

  const handleStep = (value: number) => {
    const isValid = validation()
    isValid && setStep(value)
  }

  const handleSetCategory = (value: string) => {
    const isCategoryAdded = categories.includes(value)
    if (isCategoryAdded) {
      const filterdCategories = categories.filter(
        (category) => category !== value,
      )
      setCategories(filterdCategories)
    } else {
      setCategories((prev) => [...prev, value])
    }
  }

  const reset = () => {
    router.push('/projects')
    setProjectName('')
    setProjectURL('')
    setCategories([])
    setGoal('Grow My Community')
    setWorkersCount(0)
    setProductLaunch('Pre Product')
    setEmail('')
    setStep(0)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const payload = {
      projectName,
      projectURL: `Alphaguilty.io/${projectURL}`,
      categories,
      goal,
      launch: productLaunch,
      fullTimeWorkers: workersCount,
      email,
    }
    const isValid = validation()
    if (isValid) {
      toast.success('Project succesfuly created', {
        position: toast.POSITION.BOTTOM_CENTER,
      })
      dispatch(createProject({ ...payload, id: projects.length + 1 }))
      reset()
    }
  }

  return (
    <>
      <form
        className='flex flex-col w-fit px-4 lg:px-15 pt-5 lg:pt-25'
        onSubmit={handleSubmit}
      >
        {step === 0 && (
          <StartProjectStep
            projectName={projectName}
            setProjectName={setProjectName}
            projectURL={projectURL}
            setProjectURL={setProjectURL}
            categories={categories}
            handleSetCategory={handleSetCategory}
            setStep={handleStep}
            onReset={reset}
          />
        )}
        {step === 1 && (
          <ProjectDetailsStep goal={goal} setGoal={setGoal} setStep={setStep} />
        )}
        {step === 2 && (
          <CreateProjectStep
            workersCount={workersCount}
            handleChangeWorkersCount={handleChangeWorkersCount}
            productLaunch={productLaunch}
            setProductLaunch={setProductLaunch}
            email={email}
            setEmail={setEmail}
            setStep={setStep}
          />
        )}
      </form>
      <ToastContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}

export default Form
