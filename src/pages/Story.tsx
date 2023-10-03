import React, { useEffect, useState } from 'react';
import displayImage from '../assets/And Now This Message.jpeg'
import profileImage from '../assets/Portrait of a smiling beautiful woman standing alone on a yellow background.jpeg'
import { AiFillLike, AiOutlineUser} from 'react-icons/ai'
import { backend } from '../declarations/backend';
import heap from "../assets/heap.jpeg"

const Story = () => {

  const [ stories , setStories] = useState([])

  const fetchData = async()=>{
    try {
      const data = await backend.getStories();


   
    } catch (error) {
      
    }
  }

  useEffect(()=>{

  //  fetchData()
  },[])
  
  return (
   <div className="h-screen">
    <h1 className="text-4xl uppercase">
    OUR GLOBE OUR RESPONSIBILITY

    </h1>
    <div className="flex flex-col items-start justify-center">
        <AiOutlineUser  className='h-10 w-10'/>
        <h4>User</h4>
      </div>
  <>
        <div className="lg:flex items-center mb-16">
        
        <div className="">
          
          <img src={displayImage} alt="" />
        </div>
        <div className="">
          <h2 className='text-center text-3xl font-bold'>THE CLIMATE STORY</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellat eligendi aliquid possimus aspernatur laborum, labore culpa corrupti quasi saepe.</p>
        </div>
        </div>
        <div className="flex justify-between px-10 lg:max-w-[40%] py-4 ">
          <button className='bg-green-200 text-green-800 px-3 py-2 rounded-sm'>
            G
          </button>
          <button className='bg-blue-700 text-white px-4 py-2 rounded-lg'>
            <AiFillLike/>
          </button>
        </div>
        </> 

          <>
        <div className="lg:flex items-center">
        
        <div className="">
          
          <img src={heap} alt="" />
        </div>
        <div className="">
          <h2 className='text-center text-3xl font-bold'>THE GARBAGE COLLECTION STORY</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellat eligendi aliquid possimus aspernatur laborum, labore culpa corrupti quasi saepe.</p>
        </div>
        </div>
        <div className="flex justify-between px-10 lg:max-w-[40%] py-4 ">
          <button className='bg-green-200 text-green-800 px-3 py-2 rounded-sm'>
            G
          </button>
          <button className='bg-blue-700 text-white px-4 py-2 rounded-lg'>
            <AiFillLike/>
          </button>
        </div>
        </>   
    
     
   </div>
  )
}

export default Story