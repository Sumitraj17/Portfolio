function Card({ image, title, description }) {
    return (
        <div className="relative w-80 h-50 m-5 overflow-hidden rounded-lg shadow-xl  transform transition-transform duration-300 hover:scale-105 border-2 border-black ">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300">
                <h2 className="text-xl font-bold italic ">{title}</h2>
                <p className="text-sm mt-2">{description}</p>
            </div>
        </div>
    );
}
export default Card