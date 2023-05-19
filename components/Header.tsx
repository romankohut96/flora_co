import Link from 'next/link'
import React, { FC } from 'react'

const Header: FC = () => {
  return (
    <div className='w-full bg-primary-100 h-16 flex items-center px-7 justify-between'>
      <h1 className='text-xl text-primary'>Projects</h1>
      <Link href={'/create_project'} className={'bg-primary p-2.5 rounded-xl'}>
        Create project
      </Link>
    </div>
  )
}

export default Header
