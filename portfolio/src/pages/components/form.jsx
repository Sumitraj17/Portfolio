import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Comment } from "react-loader-spinner";

function Form() {
  const [response, setResponse] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submit, setSubmit] = useState(false);
  // const [clicked,setClick] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target; // Destructure event.target
    setFormData({ ...formData, [name]: value }); // Update state using name and value
  };

  const handleSubmit = async (event) => {
    setSubmit(true);
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const resp = await axios.post("http://localhost:5000/v1/mail", {
        name: formData.get("name"),
        number: formData.get("number"),
        email: formData.get("email"),
        message: formData.get("message"),
      });

      console.log(resp.data.message); // Adjust based on actual response structure

      setResponse(true);
      setFormData({
        name: "",
        number: "",
        email: "",
        message: "",
      });

      // Resetting the form fields
      form.reset();
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Server error:", error.response.data);
        console.error("Status code:", error.response.status);
      } else if (error.request) {
        // No response received
        console.error("No response received:", error.request);
      } else {
        // Error setting up the request
        console.error("Error setting up request:", error.message);
      }
      setResponse(false);
    } finally {
      setSubmit(false);
    }
  };

  useEffect(
    () => {
      setTimeout(() => {
        setResponse(false);
      }, 1000);
    },
    { response }
  );
  return (
    <div className="flex justify-center items-center h-full text-black  mb-10 rounded-3xl w-2/3">
      <form
        onSubmit={handleSubmit}
        className="w-screen max-w-xl bg-gray-50 text-black flex flex-col p-6 border  rounded-2xl text-xl shadow-2xl"
      >
        {response && (
          <p className="text-green-500">Message Sent Successfully</p>
        )}
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
            rows="8"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded-2xl  border  bg-gray-100 "
            placeholder="Message"
          ></textarea>
        </fieldset>
        <button
          type="submit"
          className="border  rounded-2xl bg-green-400 text-lg hover:font-bold w-full md:w-1/3 m-2 p-3 hover:font-bold flex flex-row justify-evenly "
        >
          <span>Send</span>
          {submit &&(
              <Comment
                visible={true}
                height="30"
                width="30"
                ariaLabel="comment-loading"
                wrapperStyle={{}}
                wrapperClass="comment-wrapper"
                color="#fff"
                backgroundColor="#F4442E"
              />
          )}
        </button>
      </form>
    </div>
  );
}

export default Form;
