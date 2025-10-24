
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-black">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Zartec Trading (PTY) LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
