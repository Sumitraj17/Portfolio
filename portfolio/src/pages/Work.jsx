import Card from "./components/card.jsx"
import drdo from './components/images/drdo.jpg'
import adroit from './components/images/adroit.jpg'
import { Link, Outlet } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
function Work(){
    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                <button className="ml-4 mt-4 border border-black rounded-full p-2 hover:bg-blue-50 bg-white"><Link to='/'><FaArrowLeft size={30} /></Link></button>
                <h1 className=" italic text-5xl font-bold text-black text-center text-shadow-md ml-5 mr-5 mb-5">WORK EXPERIENCE</h1>
                <section className="flex flex-col justify-center items-center">
                    <Card image={drdo} head = "Internship at ADE DRDO" 
                        desc='Design and Implementation of Data Structures in Java. This also included the core concepts like Garbage Collection, MultiThreading etc.'
                        tcolor='text-black'
                        tdcolo='text-gray-300'
                        bg='bg-white'
                        width='w-1/4'
                    ></Card>
                    <Card image={adroit} head='Core Committee Member (BlockChain | Machine Learning)'
                        desc='Adroit (Low Code Avenues) is a club of CSE at RNS Institute of Technology. '
                        tcolor='text-black'
                        tdcolo='text-gray-300'
                        bg='bg-white'
                        width='w-1/4'
                    ></Card>
                </section>
                
            </div>
        </>
    )
}

export default Work