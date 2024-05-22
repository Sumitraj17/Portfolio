import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Form() {
    const [response,setResponse]=useState();
    const [formData,setFormData]=useState({
        name:'',
        number:'',
        email:'',
        message:''
    })
    const handleChange = (event) => {
        const { name, value } = event.target; // Destructure event.target
        setFormData({ ...formData, [name]: value }); // Update state using name and value
      };
      
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        
        try{
            const resp = await axios.post('/api/v1/mail', {
                name:formData.get('name'),
                number:formData.get('number'),
                email:formData.get('email'),
                message:formData.get('message')
            });
            console.log(resp.message);
            setResponse(true);
            setFormData({name:'',
            number:'',
            email:'',
            message:''})
        }
        catch(error){
            console.error(error);
            setResponse(false);
        }
    }
    useEffect(()=>{
        setTimeout(()=>{
            setResponse(null);
        },1000)
    },{response})
    return (
        <div className="flex justify-center items-center h-full text-black  mb-10 rounded-3xl w-2/3">
            <form onSubmit={handleSubmit} className="w-screen max-w-xl bg-gray-50 text-black flex flex-col p-6 border  rounded-2xl text-xl shadow-2xl">
                {response && <p className="text-green-500">Message Sent Successfully</p>}
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="border  rounded-2xl bg-gray-100 shadow-md p-2 m-2 hover:font-bold"
                />
                <input 
                    type="text" 
                    name="number" 
                    placeholder="Mobile Number" 
                    required 
                    value={formData.number}
                    onChange={handleChange}
                    className="border rounded-2xl bg-gray-100 shadow-md p-2 m-2 hover:font-bold" 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email ID" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="border  rounded-2xl bg-gray-100 shadow-md p-2 m-2 hover:font-bold"
                />
                <fieldset className="border rounded-2xl shadow-md  m-2">
                    <textarea 
                        name="message" 
                        cols="30" 
                        rows="10" 
                        required 
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 rounded-2xl  border  bg-gray-100 "
                        placeholder='Message'
                    ></textarea>
                </fieldset>
                <button 
                    type="submit" 
                    className="border  rounded-2xl bg-green-400 text-lg hover:font-bold w-full md:w-1/3 m-2 p-3 hover:font-bold "
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default Form;