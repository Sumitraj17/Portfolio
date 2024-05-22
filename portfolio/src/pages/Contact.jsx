import Form from "./components/form.jsx";
import { Link, Outlet } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import Footer from "./components/footer.jsx";
function Contact(){
    return(
        <>
        <div  className="bg-gray-100 tetx-black min-h-screen ">
        <button className="ml-4 mt-4 border border-black rounded-full p-2 hover:bg-blue-50 bg-white"><Link to='/'><FaArrowLeft size={30} /></Link></button>

            <h1 className=" italic text-5xl font-bold  text-center text-shadow-md ml-5 mr-5 mb-5">GET IN TOUCH</h1>
            <div className="flex justify-center items-center mt-5">
            <Form></Form>
            </div>
            <div className="md:fixed md:bottom-0 md:w-full flex justify-center items-center">
            <Footer></Footer>
            </div>
        </div>
            
        </>
    )
}
export default Contact