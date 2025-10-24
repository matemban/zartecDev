import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { quoteItems } from '../data/servicesData';
import AiSuggester from '../components/AiSuggester';

const Quote: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [formState, setFormState] = useState({ name: '', company: '', email: '', details: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleItemToggle = (title: string) => {
    setSelectedItems(prev =>
      prev.includes(title) ? prev.filter(item => item !== title) : [...prev, title]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote Request Submitted:', { ...formState, services: selectedItems });
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  const handleAiSuggestion = (suggestedServices: string[]) => {
    setSelectedItems(prevSelected => {
      const newSelected = new Set([...prevSelected, ...suggestedServices]);
      return Array.from(newSelected);
    });
  };

  const services = quoteItems.filter(item => item.type === 'Service');
  const solutions = quoteItems.filter(item => item.type === 'Partner Solution');

  return (
    <div className="bg-white dark:bg-gray-900 animate-fade-in">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Request a Quote</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Select the services you're interested in, or let our AI suggest solutions for you.
          </p>
        </div>

        {isSubmitted ? (
          <div className="mt-12 max-w-2xl mx-auto p-8 text-center bg-green-50 dark:bg-green-900/30 border-2 border-green-500 rounded-xl shadow-lg animate-fade-in">
            <div className="flex justify-center items-center mb-4">
              <svg className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">
              Thank You! Your Request is Received.
            </h3>
            <p className="mt-3 text-lg text-green-700 dark:text-green-300">
              A member of our team will review your quote request and get back to you shortly. We appreciate your interest in Zartec Trading.
            </p>
            <div className="mt-8">
              <Link
                to="/"
                className="inline-block bg-primary hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg transform hover:scale-105"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-12 max-w-4xl mx-auto">
              <AiSuggester onSuggestion={handleAiSuggestion} />
            </div>

            <div className="mt-12 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {services.map(item => (
                    <ServiceCard
                      key={item.title}
                      {...item}
                      onSelect={handleItemToggle}
                      isSelected={selectedItems.includes(item.title)}
                    />
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Partner Solutions</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {solutions.map(item => (
                    <ServiceCard
                      key={item.title}
                      {...item}
                      onSelect={handleItemToggle}
                      isSelected={selectedItems.includes(item.title)}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-12 lg:mt-0">
                <div className="sticky top-24">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 pb-3">
                      Your Details
                    </h3>

                    <div className="font-medium text-gray-800 dark:text-gray-200">
                      {selectedItems.length > 0
                        ? `${selectedItems.length} item(s) selected`
                        : 'Select items to get started'}
                    </div>

                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="block w-full shadow-sm py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-primary focus:border-primary"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="block w-full shadow-sm py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-primary focus:border-primary"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="block w-full shadow-sm py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-primary focus:border-primary"
                      />
                    </div>

                    <div>
                      <textarea
                        id="details"
                        name="details"
                        rows={3}
                        value={formState.details}
                        onChange={handleChange}
                        placeholder="Additional project details..."
                        className="block w-full shadow-sm py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-primary focus:border-primary"
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={selectedItems.length === 0}
                        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-red-700 dark:bg-primary-dark dark:hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
                      >
                        Submit Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const ServiceCard = ({
  title,
  description,
  onSelect,
  isSelected,
}: {
  title: string;
  description: string;
  onSelect: (title: string) => void;
  isSelected: boolean;
}) => (
  <div
    onClick={() => onSelect(title)}
    className={`cursor-pointer p-4 border rounded-lg transition-all duration-200 ${
      isSelected
        ? 'border-primary dark:border-primary-dark bg-red-50 dark:bg-red-900/20 shadow-lg'
        : 'bg-gray-50 dark:bg-gray-800 hover:shadow-md'
    }`}
  >
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h4>
    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>
  </div>
);

export default Quote;
