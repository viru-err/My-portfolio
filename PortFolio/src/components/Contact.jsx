import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Check the console.');
    }
  };
  

  return (
    <div className='flex w-full justify-between items-center p-10 md:p-20 bg-black min-h-screen'>
      {/* Left Section - Form */}
      <div className='md:w-2/4 md:pt-10'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-3xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'
        >
          Contact Me
        </motion.h1>
        <p className='text-sm md:text-2xl tracking-tight mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
          Have a question or want to work together? Feel free to reach out!
        </p>
        <form onSubmit={handleSubmit} className='w-full bg-gray-800 p-6 rounded-lg shadow-lg mt-5'>
          <input 
            type='text' 
            name='name' 
            placeholder='Your Name' 
            className='w-full p-2 rounded mb-2' 
            value={formData.name} 
            onChange={handleChange} 
            required
          />
          <input 
            type='email' 
            name='email' 
            placeholder='Your Email' 
            className='w-full p-2 rounded mb-2' 
            value={formData.email} 
            onChange={handleChange} 
            required
          />
          <textarea 
            name='message' 
            placeholder='Your Message' 
            className='w-full p-2 rounded mb-2' 
            value={formData.message} 
            onChange={handleChange} 
            required
          ></textarea>
          <button 
            type='submit' 
            className='py-2 px-4 text-lg font-semibold rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-pink-500 hover:to-blue-500 w-full'>
            Send Message
          </button>
        </form>
      </div>

      {/* Right Section - Image with glowing effect */}
      <div className='md:w-2/4 flex justify-center relative'>
        <div className='absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full blur-3xl opacity-50 animate-pulse'></div>
        <img
          className='w-full md:w-3/4 h-auto rounded-[50%] shadow-lg border-4 border-gray-700'
          src='https://static.vecteezy.com/system/resources/previews/052/254/926/non_2x/a-boy-working-laptop-silhouette-vector.jpg'
          alt='Contact'
        />
      </div>
    </div>
  );
}

export default Contact;
