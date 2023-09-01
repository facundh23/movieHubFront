import { FC, ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';


type CardProps = {
  id: string
  title: string
  year: number,
  score: number,
  poster_image: string
  genres: genreProps[],

}

type genreProps = {
  id: string
  name: string
  children: ReactNode
}

const CardMovie: FC<CardProps> = ({ ...props }) => {

  const { title, year, genres, score, poster_image, id } = props;
  const { isAuthenticated } = useAuth0();
  const { VITE_API_URL: url } = import.meta.env
  const stars = (data: ReactNode) => {
    switch (data) {
      case 1:
        return '⭐'
      case 2:
        return '⭐⭐'
        break;
      case 3:
        return '⭐⭐⭐'
        break;
      case 4:
        return '⭐⭐⭐⭐'
        break;
      case 5:
        return '⭐⭐⭐⭐'
        break;
      default:
        break;
    }
  }

  const scoreStar = stars(score);

  return (
    <div className='p-2 border-2 border-r-violet-400 border-y-black'>
      <section className="w-[80%] h-400 mx-auto flex flex-col gap-5 items-center  justify-center">



        <h4 className='font-bold'>{title}</h4>
        <div className='flex w-[100%] h-[80%] items-center justify-center'>
          <p className='font-bold'>Genres: </p>
          {
            genres?.map((genre: genreProps) => {
              return <p key={genre.name} className='text-center flex w-[20%] justify-center items-center ml-2'> {genre?.name}</p>
            })

          }
        </div>
        <p> Released: {year} </p>
        <img id="img"
          className="h-[60%] w-[60%]  object-cover" src={poster_image} />


        {isAuthenticated ? <div className='flex justify-between w-full'> <Link to={`/home/movies/edit/${id}`} className='bg-blue-400 p-2  w-[30%] text-center rounded-md'>Edit</Link> <Link to={`/home/movies/movie/${id}`} className='bg-violet-400 p-2 w-[30%] text-center rounded-md'>Go to details</Link></div> : <Link to="/" className='bg-violet-400 p-2'>Please Log in</Link>}

        {
          <p key={score}>{scoreStar}</p>
        }
      </section>
    </div>
  )
}

export default CardMovie