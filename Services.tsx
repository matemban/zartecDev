
import React from 'react';
import { servicesList } from '../data/servicesData';

const contactInfo = [
    { title: "Visit Us", content: "No 86, Thohoyandou, 0970" },
    { title: "Call", content: "087 265 4829" },
    { title: "Email", content: "information@zartec.co.za", isLink: true },
];

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h4>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-300">{description}</p>
    </div>
);


const Services: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-base font-semibold text-primary dark:text-primary-dark tracking-wide uppercase">Our Capabilities</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
              Our Services
            </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesList.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
                Get In Touch
                </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
                {contactInfo.map(info => (
                     <div key={info.title} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{info.title}</h4>
                        {info.isLink ? (
                            <a href={`mailto:${info.content}`} className="mt-2 text-base text-secondary dark:text-secondary-dark hover:underline">{info.content}</a>
                        ) : (
                            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">{info.content}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
