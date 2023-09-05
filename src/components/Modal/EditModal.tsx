/* eslint-disable @typescript-eslint/ban-types */
import { FC, ReactNode, ChangeEvent } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import { useGenres } from '../../context/GenresProvider';
import { useMovies } from '../../context/MovieProvider';


interface ModalProps {
    genres: string[]
    title: string
    year: number
    score: number
    file?: File | null
    children: ReactNode
}

type GenreItemsProps = {
    id: string | undefined,
    name: string | undefined,
    createdAt: string | undefined,
    updatedAt: string | undefined,
    moviesId: string | undefined,

}


const EditModal: FC<ModalProps> = () => {

    const { movies, handleUpdateMovie } = useMovies()
    const { movieId } = useParams();
    const selectedMovie = movieId ? movies?.find((movie: { id: string; }) => movie.id === movieId) : undefined;
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        defaultValues: {
            title: selectedMovie?.title,
            year: selectedMovie?.year,
            score: selectedMovie?.score,
            poster_image: selectedMovie?.poster_image,
            genres: selectedMovie?.genres
        }
    });
    const { VITE_API_URL: url } = import.meta.env


    const { genres } = useGenres();

    if (!selectedMovie) return


    const onSubmit = async (data: any): Promise<void> => {

        handleUpdateMovie(`${url}/home/movies/edit/${movieId}`, data, getAccessTokenSilently)
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Upload in successfully'
        })

        setTimeout(() => {
            navigate(`/home`)
            reset();
        }, 3000)
    }


    return (
        <div className='p-4'>
            <Link className="mt-4 ml-[10%] font-bold bg-violet-600/50 p-2 rounded-md md:w-[15%] transition-all duration-700 " to={'/home'} >Go to Dashboard</Link>

            {
                isAuthenticated ?

                    <form className='w-[50%] mx-auto border-x-violet-500 border-y-black border-4 flex flex-col p-5 mt-[10%] gap-2 md:w-[70%] md:mx-auto transition-all duration-500' onSubmit={handleSubmit(onSubmit)}>
                        <h5 className='text-center mb-2'>Edit Your Movie</h5>
                        <input placeholder='Movie Title' className='mb-4 p-2 rounded-md border-2 border-black ' {...register("title", {
                            required: {
                                value: true,
                                message: "Please enter a title"
                            },
                            minLength: {
                                value: 5,
                                message: "Minumun length is 5",
                            },
                            maxLength: {
                                value: 15,
                                message: "Maximum length is 15"

                            }
                        })} />
                        {errors.title && <span className='text-red-500 block'>{errors?.title?.message?.toString()}</span>}

                        <input type='number' placeholder='Released' className='mb-2 py-1 rounded-md border-2 border-black px-2' {...register("year", {
                            required: true,
                            pattern: {
                                value: /^\d{4}$/,
                                message: "Please enter a valid year"
                            }
                        }
                        )} />

                        {errors.year && <p className='text-red-500 block'>{errors?.year?.message?.toString()}</p>}

                        <input type='number' placeholder='Score' className='mb-4 py-1 rounded-md border-2 border-black px-2' {...register("score", {
                            required: {
                                value: true,
                                message: "Please enter a score"
                            }, min: {
                                value: 1,
                                message: "Minimun length is 1",
                            },
                            max: {
                                value: 5,
                                message: "Maximum length is 5"

                            }
                        })} />
                        {errors.score && <p className='text-red-500 block'>{errors?.score?.message?.toString()}</p>}

                        <div className='grid grid-flow-row auto-rows-[30px] 
            auto-cols-[50px] p-4 gap-8 md:grid-flow-col justify-center md:gap-10'>
                            {
                                genres && genres?.map(({ id, name }: GenreItemsProps) => {

                                    return (
                                        < div key={id} >
                                            <p>{name}</p>
                                            <input type='checkbox' value={id} className='mb-6  rounded-md border-2 border-black '  {...register('genres', {
                                                required: {
                                                    value: true,
                                                    message: "Please enter a genre"
                                                }
                                            })} />

                                        </div>

                                    )
                                })
                            }
                        </div>

                        {errors.genres && <p className='text-red-500 font-bold'>{errors?.genre?.message?.toString()}</p>}

                        <input type='file' className='mb-2 mt-6 py-1 rounded-md' onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setValue('poster_image', e.target.files && e.target!.files[0])
                        }} />

                        {errors.files && <p className='text-red-500 block'>{errors?.files?.message?.toString()}</p>}

                        <button className='bg-violet-600 text-white mb-2 w-36 self-center p-1 rounded-md hover:bg-violet-800 transition-all duration-700' type='submit' disabled={false}>
                            Edit
                        </button>
                    </form >

                    :

                    <Link className='mt-2 ml-[10%] font-bold bg-violet-600/50 p-2 rounded-md md:w-[15%] transition-all duration-700 ' to="/">Please Log in</Link>
            }


        </div >
    )
}

export default EditModal

