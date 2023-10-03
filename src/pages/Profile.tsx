import React, { useEffect, useState } from 'react'
import profileImage from '../assets/Portrait of a smiling beautiful woman standing alone on a yellow background.jpeg'
import { BsFillGridFill} from "react-icons/bs"
import { backend } from '../declarations/backend'



const Profile = () => {
    const [ user, setUser] = useState([])

    const [ stories, setStories ] = useState([])


    useEffect(()=>{

    }, [])
  return (
   <div className="h-screen">
    <h1 className='text-center text-4xl py-2'>Profile</h1>
    <div className="">
        <div className="flex items-center gap-2">
            <img src={profileImage} alt="" className='h-96 w-96' />
            <div className="">
            <h1 className='text-3xl font-bold text-green-800'>My Name</h1>
            <h4 className='text-lg'>About Me</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consectetur autem sunt amet ut itaque ipsam optio animi, nostrum alias saepe eos molestiae tempore id voluptate porro, sapiente magni soluta.</p>
            </div>
        </div>
        <div className="mt-4">
            <div className="">
                <h4>My Posts</h4>
            </div>
            <div className="flex items-center">
                <img src={profileImage} alt="" className='h-48 w-32' />
                <div className="flex flex-col ">
                    <h3 className=''>Title</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quia nihil a! Placeat, hic! Beatae animi facilis quia omnis quae!...</p>
                </div>
            </div>
        </div>
    </div>

   </div>
  )
}

export default Profile