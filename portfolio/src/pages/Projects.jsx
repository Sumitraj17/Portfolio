import lib from './components/images/lib2.jpg'
import store from './components/images/store4.jpg'
import web from './components/images/zip2.png'
import Card from './components/card.jsx'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, Outlet } from "react-router-dom";

function Projects(){
    return (
        <>
            <div className="bg-gray-100 text-black min-h-screen ">
            <button className="ml-4 mt-4 p-2 border border-black bg-white rounded-full hover:bg-blue-50"><Link to='/'><FaArrowLeft size={30} /></Link></button>
                <h1 className=" italic text-5xl font-bold  text-center text-shadow-md ml-5 mr-5 mb-5">PROJECTS</h1>
                <section className="flex flex-col justify-center items-center mt-5">
                    <Card image={lib} head = "Digital Library" 
                        desc='Digital Library is a collaborative C programming-based system developed by a team of 2. It offers two interfaces:
                        one for librarians with features like managing book inventory and borrowing history, and another for customers to
                        check book availability and borrow books'
                        link='https://github.com/Sumitraj17/Digital_Library'
                        bg='bg-white'
                        width='w-2/3'
                    ></Card>
                    <Card image={store} head='NexStore'
                        desc='NexStore is a modern Angular web app with category navigation, price sorting, and customizable viewing options
                        for a seamless shopping experience. It features essential cart functionalities like price calculation and product
                        management.
                         '
                        link='https://github.com/Sumitraj17/NexStore-WebShop'
                        bg='bg-white'
                        width='w-2/3'
                    ></Card>
                    <Card image={web} head='WebSizer'
                        desc='WebSizer , a team-built web app, employs HTML, CSS, JavaScript, Node. js (Express. js ), and MySQL. It optimizes
                        data for storage and web performance, offering file and image compression capabilities.'
                        link='https://github.com/sujanps2003/WebSizer'
                        bg='bg-white'
                        width='w-3/5'
                    ></Card>
                </section>
            </div>
        </>
    )
}
export default Projects