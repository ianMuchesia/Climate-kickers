import React from 'react'
import { useForm } from 'react-hook-form'
import { backend } from '../declarations/backend'
import { toast } from 'react-toastify';
type formData={
    title:string;
    story:string;
    image:string;
}
const Create = () => {


    const {register, formState:{errors}, handleSubmit } = useForm({
        defaultValues:{
            title:"",
            story:"",
            image:"",
        }

    })

    const [uploadImage, setUploadImage] = React.useState<string | null>(null)

    const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0];

        const reader = new FileReader();
        
        reader.onloadend=()=>{
            setUploadImage(reader.result as string)
        }

        reader.readAsDataURL(file as Blob)
    }


    const formSubmit =async(formData:formData)=>{
        const now = new Date();
        const createdAt: bigint = BigInt(Math.floor(now.getTime()));
        
        if(uploadImage === null){
            return;
        }
      try {
        const data = await backend.createStory({
            main:formData.story,
             mainImage:uploadImage,
            story: [],
            user:'1',
          createdAt,
            updatedAt:[],
            story_id:"",




        })

        console.log(data);
        toast.success("Story created successfully")
      } catch (error) {
        console.log(error)
      }
    }


  return (
    
    <div className="">
        <h1 className='text-4xl text-center'>
            Create
        </h1>
        
        <form className='flex m-10 flex-col items-start gap-24' onSubmit={handleSubmit(formSubmit)}>
        <div className="">
                <input type="file" className='bg-gray-100 md:w-96 p-5 border-b-2 border-b-gray-400' 
                 onChange={handleFileChange}/>
                <p>upload image</p>
            </div> 
            <div className="">
                <input type="text" className='bg-gray-100 md:w-96 p-5 border-b-2 border-b-gray-400'{
                ...register("title", {required:true})
                } />
                <p>Enter your title here</p>
            </div> 
            <div className="">
                <textarea  id="" cols={30} rows={10} className='bg-gray-100 md:w-96 p-5 border-b-2 border-b-gray-400' {...register("story",{required:true})}/>
                <p>Enter your story here</p>
            </div>
            <button className='bg-blue-700 py-4 px-2 text-white rounded-lg'>Submit</button>
        </form>
    </div>
  )
}

export default Create