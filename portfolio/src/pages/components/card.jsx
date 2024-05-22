import { Link, Outlet } from "react-router-dom";

function Card(props) {
    return (
        <div className={`flex flex-col md:flex-row justify-center border-4 w-3/4 ${props.tcolor} shadow-2xl rounded-lg mb-10 italic ${props.bg}`}>
            <section className={`${props.width} m-3 ml-5 mr-5 flex justify-center`}>
                <img src={props.image} alt="" className="rounded-full h-30 w-40 md:h-48 md:w-48 object-cover" />
            </section>
            <section className="flex flex-col justify-center items-center m-4">
                <h1 className={`text-xl md:text-3xl font-bold ${props.tcolor} text-center`}>{props.head}</h1>
                <p className={`m-2 ${props.tdcolor}`}>{props.desc}</p>
                {props.link && (
                    <a href={props.link} className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:font-bold" target="_blank">
                        Visit Project
                    </a>
                )}
            </section>
        </div>
    );
}

export default Card;
