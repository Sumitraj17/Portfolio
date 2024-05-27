import { Link, Outlet } from "react-router-dom";

function Card(props) {
  return (
    <div
      className={`md:transform md:transition-transform md:duration-300 md:hover:scale-110 flex flex-col lg:flex-row justify-center  border-4 w-3/4 ${props.tcolor} shadow-2xl rounded-lg mb-10 italic ${props.bg}`}
    >
      <section
        className={`${props.width} lg:m-3 lg:ml-5 lg:mr-5 mt-5 flex justify-center items-center mx-auto`}
      >
        <img
          src={props.image}
          alt=""
          className="rounded-full h-30 w-40 lg:h-48 lg:w-48 object-cover mx-auto" // Added CSS for image rounding
          style={{ objectFit: "cover" }}
        />
      </section>
      <section className="flex flex-col justify-center items-center m-4">
        <h1
          className={`text-xl md:text-3xl font-bold ${props.tcolor} text-center`}
        >
          {props.head}
        </h1>
        <p className={`m-2 ${props.tdcolor}`}>{props.desc}</p>
        <p className={`m-2 font-bold  ${props.tdcolor}`}>{props.stack}</p>
        {props.link && (
          <a
            href={props.link}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-110"
            target="_blank"
          >
            Visit Project
          </a>
        )}
      </section>
    </div>
  );
}

export default Card;
