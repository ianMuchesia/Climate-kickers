import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { backend } from '../declarations/backend';

const SingleStory = () => {

    const  { id } = useParams();


    const [ stories , setStories] = useState([])


    const fetchData = async()=>{
        try {
            
            const data = await backend.getStories
        } catch (error) {
            
        }
    }

    useEffect(()=>{

    }, [])
  return (
    <div className="h-screen">
    <h1 className="text-4xl uppercase">
    OUR GLOBE OUR RESPONSIBILITY

    </h1>
    </div>
  )
}

export default SingleStory