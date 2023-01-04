import React from 'react';
import './Contactus.css'
const ContactUs = () => {
    return (
        <div className='form-bg'>
            <p className='text-xl text-teal-400 text-center '>Contact us </p>
            <p className='text-2xl text-center'>Stay Connected With Us </p>
            <form>
            
                <p><input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs my-2" /></p>            
                <p><input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs my-2 " /></p>            
                <p><input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs my-2" /></p>            
            </form>
        </div>
    );
};

export default ContactUs;