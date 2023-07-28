
import CardMovie from '../Card/CardMovie';



const CardList = () => {
  return (
    <>
    <h1 className='font-bold text-2xl text-center'>List Of Movies</h1>
    <section className='h-full grid w-4/5 mx-auto gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] z-0 sm:h-full '>
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
    </section>
    </>
  )
}

export default CardList