'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // calling the API route in the frontend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json();
  
      if (res.ok) {
        console.log('✅ Email sent:', result.message);
      } else {
        console.error('❌ Failed to send email:', result.message);
      }
    } catch (err) {
      console.error('❌ Error during fetch:', err);
    }
  };
  

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 space-y-6">
      <Image 
        src="/images/contact-us-nature.webp" 
        alt="Contact Us" 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0 z-0"
      />

      {/* Contact Form Card */}
      <div className="relative bg-transparent p-6 rounded-lg shadow-md w-full max-w-md z-10 border-2 border-white">
        <h2 className="text-2xl font-bold mb-4 text-white text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            className="border-2 border-white p-2 rounded-lg w-full bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            className="border-2 border-white p-2 rounded-lg w-full bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            className="border-2 border-white p-2 rounded-lg w-full h-32 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            required
          ></textarea>
          <button 
            type="submit" 
            className="bg-white text-gray-900 py-2 rounded-lg hover:bg-gray-300 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Facebook Contact Card */}
      <div className="relative bg-transparent p-6 rounded-lg shadow-md w-full max-w-md z-10 border-2 border-white text-center flex flex-col items-center">
        <p className="text-white text-lg mb-3 font-bold">Or reach out to us on Facebook!</p>
        <a 
          href="https://www.facebook.com/profile.php?id=61568108347078"
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all"
        >
          <FaFacebook size={24} className="logo-color-facebook " />
          <span>Visit Our Facebook</span>
        </a>
      </div>
    </div>
  );
}
