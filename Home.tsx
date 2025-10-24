
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ManagedServicesIcon, CloudIcon, SecurityIcon, WebDesignIcon } from '../components/Icons';
import AiSuggester from '../components/AiSuggester';

const backgrounds = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };


  return (
    <div 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative bg-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0">
        {backgrounds.map((bg, index) => (
          <img
            key={bg}
            src={bg}
            alt={`Background slide ${index + 1}`}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${index === currentSlide ? 'opacity-30' : 'opacity-0'}`}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.05), transparent 80%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:py-32 lg:px-8 text-white text-center animate-fade-in">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">Welcome to Zartec Trading</h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300">We build scalable, secure, and smart solutions for a digital future.</p>
        <div className="mt-8">
          <Link
            to="/solutions"
            className="inline-block bg-primary hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg transform hover:scale-105"
          >
            Explore Our Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

const features = [
  { title: "Expertise", description: "Years of industry experience in AI, web, and cloud tech." },
  { title: "Custom Tech", description: "Tailored solutions for every business scale." },
  { title: "24/7 Support", description: "We provide round-the-clock assistance for our partners." },
];

const services = [
    { title: "Managed Services", description: "Proactive IT management to maximize uptime and performance.", icon: <ManagedServicesIcon /> },
    { title: "Cloud & Backup", description: "Cloud infrastructure and data protection you can rely on.", icon: <CloudIcon /> },
    { title: "Security & Connectivity", description: "Secure networks, VPNs, and firewall solutions.", icon: <SecurityIcon /> },
    { title: "Website Design & Hosting", description: "Modern, responsive websites backed by reliable hosting.", icon: <WebDesignIcon /> },
];

const processSteps = [
    { number: "01", title: "Discovery", description: "We start by understanding your business, goals, and challenges." },
    { number: "02", title: "Strategy", description: "We craft a tailored strategy and technology roadmap for success." },
    { number: "03", title: "Implementation", description: "Our expert team builds, tests, and deploys your solution efficiently." },
    { number: "04", title: "Support", description: "We provide ongoing support and optimization to ensure long-term value." },
];

const testimonials = [
    { quote: "Zartec's team transformed our IT infrastructure. Their expertise and support are second to none. We've seen a significant improvement in performance and security.", name: "John Doe", company: "Innovate Corp" },
    { quote: "The new website Zartec designed has been a game-changer for our business. It's beautiful, fast, and has doubled our online leads. Highly recommended!", name: "Jane Smith", company: "Market Leaders Inc." },
];

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">Why Choose Us?</h3>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="p-8 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h4>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-base font-semibold text-primary dark:text-primary-dark tracking-wide uppercase">Capabilities</h2>
          <h3 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white">Our Core Services</h3>
           <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{service.title}</h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/services" className="inline-block bg-secondary hover:bg-secondary-dark dark:bg-secondary-dark dark:hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Simple Four-Step Process</h3>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">From concept to completion, we ensure a seamless experience.</p>
          <div className="mt-12 grid gap-10 md:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white font-bold text-2xl shadow-lg">{step.number}</div>
                    <h4 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h4>
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">What Our Clients Say</h3>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.name} className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        <p className="text-lg text-gray-600 dark:text-gray-300">"{testimonial.quote}"</p>
                        <div className="mt-4">
                            <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                            <p className="text-sm text-primary dark:text-primary-dark">{testimonial.company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AiSuggester />
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary via-black to-black">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to Transform Your Business?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-300">
            Let's discuss how Zartec can help you achieve your technology goals.
          </p>
          <Link
            to="/quote"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 sm:w-auto transition-colors duration-300"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
