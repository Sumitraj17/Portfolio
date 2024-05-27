import React from 'react';
import image from './images/pic2.jpg';
import resume from './images/resume.pdf';

function Main() {
    function handleClick() {
        const anchor = document.createElement('a');
        anchor.href = resume;
        anchor.download = 'SumitRaj_Resume.pdf';
        anchor.click();
    }

    return (
        <div className=" md:m-12 flex flex-col-reverse md:flex-row justify-evenly items-center">
            <section className="p-4 w-full md:w-1/2">
                <h1 className="text-2xl md:text-4xl font-bold italic mb-4">SUMIT RAJ</h1>
                <p className="text-base md:text-2xl italic text-black">
                    I am a dedicated web developer and a perpetual student, constantly honing my skills in creating dynamic web applications while staying updated with the latest advancements in technology. My passion for learning drives me to explore and integrate new concepts into my work continuously.
                </p>
                <button onClick={handleClick} className=" transform transition-transform duration-300 hover:scale-110  hover:shadow-lg font-semibold bg-green-600 border border-green-500 p-5  mt-10 rounded-full ">
                    Download Resume
                </button>
            </section>
            <section className="w-2/3 md:w-1/4 mb-4 md:mb-0">
                <img src={image} alt="Sumit Raj" className="rounded-full mx-auto" />
            </section>
        </div>
    );
}

export default Main;
