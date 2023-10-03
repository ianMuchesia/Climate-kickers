import React from 'react'

const Login = () => {
  return (
    <div  className='w-full min-h-screen flex items-center justify-center flex-col  gap-8'>
      <div className="bg-green-200 text-green-700 py-4 px-6 rounded-sm text-2xl cursor-pointer">GREEN CONNECT</div>
      <input className='w-96 h-12 border-2 border-green-200 rounded-sm px-4' placeholder='Enter your passkey'/>
      <div className="bg-green-200 text-green-700 py-4 px-6 rounded-sm text-2xl cursor-pointer">LOGIN</div>
      <p className='text-center'>Climate Kickers 2023</p>

    </div>
  )
}

export default Login