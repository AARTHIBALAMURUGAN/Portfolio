import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Voice Notification
    const speech = new SpeechSynthesisUtterance();
    speech.text = `Hello ${formData.name}, your form has been submitted successfully!`;
    window.speechSynthesis.speak(speech);

    // Show Toast Notification
    toast.success(`Hello ${formData.name}, your form has been submitted!`, {
      position: "top-center",
      autoClose: 3000, // 3 seconds
    });

    // Clear form
    setFormData({ email: '', name: '', subject: '', message: '' });
  };

  return (
    <div className='py-10 sm:py-15'>
      <h1 className='text-white text-4xl sm:text-5xl text-center font-extrabold'>Contact</h1>
      <h3 className='text-gray-300 text-center my-2'>Feel free to reach out to me for any questions or opportunities!</h3>

      {/* Toast Notification Container */}
      <ToastContainer />

      <form onSubmit={handleSubmit} className='flex flex-col w-[90%] max-w-[600px] bg-[#171721] mx-auto px-10 gap-4 sm:gap-7 my-6 py-7 rounded-3xl shadow-2xl'>
        <p className='text-[30px] font-bold'>Email me 🚀</p>
        <input
          type="email"
          placeholder='Your Email'
          className='border border-gray-300 px-4 py-3 text-lg rounded-sm'
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder='Your Name'
          className='border border-gray-300 px-4 py-3 text-lg rounded-sm'
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder='Subject'
          className='border border-gray-300 px-4 py-3 text-lg rounded-sm'
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
        <textarea
          rows='4'
          className='border border-gray-400 rounded-lg pl-4 pt-3'
          placeholder='Your Message'
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
        <button type="submit" className="text-white text-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-4 text-center me-2 mb-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
