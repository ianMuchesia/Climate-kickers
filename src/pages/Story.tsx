import React from 'react';
import displayImage from '../assets/And Now This Message.jpeg'
import profileImage from '../assets/Portrait of a smiling beautiful woman standing alone on a yellow background.jpeg'
import { AiFillLike} from 'react-icons/ai'
const Story = () => {
  return (
   <div className="h-screen">
    <h1 className="text-4xl uppercase">
    OUR GLOBE OUR RESPONSIBILITY

    </h1>
    <div className="">
    <div className="">
      <div className="flex flex-col items-start justify-center">
        <img src={profileImage} alt=""  className='h-10 w-10'/>
        <h4>Richard Geivan</h4>
      </div>
      <img src={displayImage} alt="" />
    </div>
    <div className="">
      <h2 className='text-center text-3xl font-bold'>THE CLIMATE STORY</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellat eligendi aliquid possimus aspernatur laborum, labore culpa corrupti quasi saepe.</p>
    </div>
    <div className="flex justify-between px-10">
      <button className='bg-green-200 text-green-800 px-3 py-2 rounded-sm'>
        G
      </button>
      <button className='bg-blue-700 text-white px-4 py-2 rounded-lg'>
        <AiFillLike/>
      </button>
    </div>
    </div>

    
   </div>
  )
}

export default Story