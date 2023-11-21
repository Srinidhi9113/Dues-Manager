import React from 'react'

import Hero from './components/hero'
import Form from './components/form'

export default function Login() {
  return (
    <div className='bg-black'>
    <div className='flex md:flex-row flex-col h-screen bg-LoginBG bg-fixed bg-no-repeat bg-cover bg-opacity-0 bg-center'>
      <Hero/>
      <Form/>
    </div>
    </div>
  )
}
