
import CardMovie from '../Card/CardMovie';



const CardList = () => {
  return (
    <section className='grid w-4/5 mx-auto gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] z-0'>
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
    </section>
  )
}

export default CardList