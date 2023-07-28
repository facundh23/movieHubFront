import zapatilla from '../../assets/images/zapatilla3.jpg'
const CardMovie = () => {
  return (
    <div>
        <section className="w-65 h-70 mt-5 flex flex-col gap-2 items-center border-2 border-r-violet-400 border-y-black">
         
                <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus </p>
            
                 <img id="img"
                 className="w-full h-full object-cover" src={zapatilla}/>
                 ⭐⭐⭐⭐
        </section>
    </div>
  )
}

export default CardMovie