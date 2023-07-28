import {FC} from 'react';
import {useForm} from 'react-hook-form';

const Modal:FC = () => {
    const { register, handleSubmit, formState:{errors}, reset } = useForm({
       defaultValues:{
         title:'',
         description:'',
         genre:'',
         img:''
       }

    })

    const onSubmit = (data:{} ):void=> {
        console.log(data);
        reset();
    }
  return (  
    <>

        <form className='w-[50%] mx-auto border-x-violet-500 border-y-black border-4 flex flex-col p-5 mt-[10%] gap-2 md:w-[70%] md:mx-auto transition-all duration-500' onSubmit={handleSubmit(onSubmit)}>
                <h5 className='text-center mb-2'>Upload Your Movie</h5>
                <input placeholder='Movie Title' className='mb-2 py-1 rounded-md border-2 border-black px-2' {...register("title", {
                    required:true, minLength:{
                        value:5,
                        message:"Minumun length is 5",
                    },
                    maxLength:{
                        value:7,
                        message:"Maximum length is 7"

                    }
                })}/>
                {errors.title && <p className='text-red-500 font-bold mb-4'>{errors?.description?.message}</p>}
                <input placeholder='Movie Description' className='mb-2 py-1 rounded-md border-2 border-black px-2' {...register("description", {
                    required:true, minLength:{
                        value:5,
                        message:"Minumun length is 7",
                    },
                    maxLength:{
                        value:12,
                        message:"Maximum length is 12"

                    }
                })}/>
                <input placeholder='Movie Genre' className='mb-2 py-1 rounded-md border-2 border-black px-2' {...register("genre", {
                    required:true, minLength:{
                        value:5,
                        message:"Minumun length is 4",
                    },
                    maxLength:{
                        value:12,
                        message:"Maximum length is 6"

                    }
                })}/>
                {errors.genre && <p className='text-red-500 font-bold'>{errors?.genre?.message}</p>}
                <input type='file' className='mb-2 py-1 rounded-md' {...register("img", {
                    required:true,
                })}/>
                {errors.description && <p className='text-red-500'>{errors?.img?.message}</p>}
                <button className='bg-violet-600 text-white mb-2 w-36 self-center p-1 rounded-md hover:bg-violet-800 transition-all duration-500' type='submit' disabled={false}>
                    Upload
                </button>
        </form>

    </>
  )
}

export default Modal