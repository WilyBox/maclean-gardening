'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900">
      <Image 
        src="/images/contact-us-nature.jpg" 
        alt="Contact Us" 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0 z-0"
      />
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
    </div>
  );
}