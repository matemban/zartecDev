
import React, { useState } from 'react';
import AiSuggester from '../components/AiSuggester';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-white dark:bg-gray-900 animate-fade-in">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">We'd love to hear from you. Send us a message below.</p>
        </div>
        <div className="mt-12">
          {isSubmitted ? (
            <div className="p-6 text-center bg-green-100 dark:bg-green-900/50 border border-green-400 dark:border-green-600 rounded-lg">
              <h3 className="text-xl font-medium text-green-800 dark:text-green-200">Thank you!</h3>
              <p className="mt-2 text-green-700 dark:text-green-300">Your message has been sent successfully. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input type="text" name="name" id="name" required value={formState.name} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-primary focus:border-primary dark:focus:ring-primary-dark dark:focus:border-primary-dark border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input type="email" name="email" id="email" required value={formState.email} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-primary focus:border-primary dark:focus:ring-primary-dark dark:focus:border-primary-dark border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea id="message" name="message" rows={4} required value={formState.message} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-primary focus:border-primary dark:focus:ring-primary-dark dark:focus:border-primary-dark border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800" placeholder="Your Message"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-red-700 dark:bg-primary-dark dark:hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">Send Message</button>
              </div>
            </form>
          )}
        </div>
        <div className="mt-12">
          <AiSuggester />
        </div>
      </div>
    </div>
  );
};

export default Contact;
