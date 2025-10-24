
import React, { useState } from 'react';
import { partners } from '../data/servicesData';

type Tab = keyof typeof partners;

const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('veeam');

  const TabButton = ({ id, name, logo }: { id: Tab; name: string; logo: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-3 px-4 py-3 font-medium text-sm leading-5 rounded-lg focus:outline-none transition-all duration-300 ${
        activeTab === id
          ? 'bg-primary text-white shadow-lg'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      <img src={logo} alt={`${name} logo`} className="w-16 h-8 object-contain rounded"/>
      <span>{name}</span>
    </button>
  );

  const currentPartner = partners[activeTab];

  return (
    <div className="bg-white dark:bg-gray-800 animate-fade-in">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary dark:text-primary-dark tracking-wide uppercase">Partnerships</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
            Our Strategic Technology Partnerships
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            We partner with industry leaders to bring you the best solutions.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-5">
             {Object.keys(partners).map((key) => (
                <TabButton key={key} id={key as Tab} name={partners[key as Tab].name} logo={partners[key as Tab].logo} />
             ))}
          </div>

          <div className="mt-8 animate-slide-in">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">{currentPartner.title}</h3>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">{currentPartner.content}</p>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                    <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                        {currentPartner.features.map(feature => (
                           <div key={feature} className="relative">
                               <dt>
                                   <svg className="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                   </svg>
                                   <p className="ml-9 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature}</p>
                               </dt>
                           </div>
                        ))}
                    </dl>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
