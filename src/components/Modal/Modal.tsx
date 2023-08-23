/* eslint-disable @typescript-eslint/ban-types */
import { FC, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createMovie, getGenres } from '../../api/request.service';



const Modal: FC = () => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const [genres, setGenres] = useState([]);


    const { VITE_API_URL: url } = import.meta.env

    const { isAuthenticated, getAccessTokenSilently } = useAuth0();


    useEffect(() => {
        const fetchGenres = async () => {
            const responseGenres = getGenres(`${url}/genres`);
            const data = await responseGenres;
            setGenres(data);
        }
        fetchGenres()
    }, [url])


    const onSubmit = (data: any): void => {
        try {
            createMovie(data, getAccessTokenSilently)
        } catch (error) {
            console.log(error);
        }
        console.log(data)
        reset();
    }
    return (
        <>

            {
                isAuthenticated ?
                    <form className='w-[50%] mx-auto border-x-violet-500 border-y-black border-4 flex flex-col p-5 mt-[10%] gap-2 md:w-[70%] md:mx-auto transition-all duration-500' onSubmit={handleSubmit(onSubmit)}>
                        <h5 className='text-center mb-2'>Upload Your Movie</h5>
                        <input placeholder='Movie Title' className='mb-4 p-2 rounded-md border-2 border-black ' {...register("title", {
                            required: true, minLength: {
                                value: 5,
                                message: "Minumun length is 5",
                            },
                            maxLength: {
                                value: 7,
                                message: "Maximum length is 7"

                            }
                        })} />
                        {errors.title && <p className='text-red-500 text-2xl font-bold mb-5 text-center '>{errors?.title?.message}</p>}
                        <input placeholder='Released' className='mb-2 py-1 rounded-md border-2 border-black px-2' {...register("year", {
                            required: true,
                            pattern: {
                                value: /^\d{4}$/,
                                message: "Please enter a valid year"
                            }
                        }
                        )} />

                        {errors.year && <div className='text-red-500 text-2xl font-bold mb-5 text-center'>{errors?.year?.message}</div>}


                        <input placeholder='Score' className='mb-4 py-1 rounded-md border-2 border-black px-2' {...register("score", {
                            required: true, minLength: {
                                value: 1,
                                message: "Minimun length is 1",
                            },
                            maxLength: {
                                value: 5,
                                message: "Maximum length is 5"

                            }
                        })} />
                        {errors.score && <p className='text-red-500 text-2xl font-bold mb-5 text-center'>{errors?.score?.message}</p>}

                        <select className='mb-2 py-1 rounded-md border-2 border-black px-2' id="" {...register('genre', { required: true })}
                        >


                            {
                                genres?.map((item: any) => {
                                    return (
                                        <option key={item.id} value={item.name}>{item.name}</option>
                                    )
                                })
                            }


                        </select>

                        {errors.genre && <p className='text-red-500 font-bold'>{errors?.genre?.message}</p>}

                        <input type='file' className='mb-2 py-1 rounded-md' onChange={(e) => {
                            console.log(e.target.files[0])
                            setValue('posterImage', e.target.files[0].name)
                        }} />

                        {errors.files && <p className='text-red-500'>{errors?.files?.message}</p>}

                        <button className='bg-violet-600 text-white mb-2 w-36 self-center p-1 rounded-md hover:bg-violet-800 transition-all duration-700' type='submit' disabled={false}>
                            Upload
                        </button>
                    </form >

                    :

                    <Link className='mt-2 ml-[10%] font-bold bg-violet-600/50 p-2 rounded-md md:w-[15%] transition-all duration-700 ' to="/">Please Log in</Link>
            }


        </>
    )
}

export default Modal