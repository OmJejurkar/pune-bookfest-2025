import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/bookfest-logo.png"
                alt="BookFest 2025"
                width={50}
                height={50}
                className="object-contain"
                style={{ width: 'auto', height: '50px' }}
              />
              <div>
                <h3 className="text-xl font-bold">BookFest 2025</h3>
                <p className="text-gray-400 text-sm">Pune Book Festival</p>
              </div>
            </div>
          </div>
          
          {/* Info Section */}
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-400">
              &copy; 2025 BookFest. All rights reserved.
            </p>
            <div className="flex flex-col space-y-1">
              <p className="text-orange-400 font-semibold">
                📅 1st-9th May 2025
              </p>
              <p className="text-gray-300 text-sm">
                📍 Pragati Maidan, New Delhi
              </p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg transition-colors duration-200"
                aria-label="Facebook"
              >
                <span>📘</span>
                <span className="text-sm">Facebook</span>
              </Link>
              <Link 
                href="#" 
                className="flex items-center space-x-2 bg-blue-400 hover:bg-blue-500 px-3 py-2 rounded-lg transition-colors duration-200"
                aria-label="Twitter"
              >
                <span>🐦</span>
                <span className="text-sm">Twitter</span>
              </Link>
              <Link 
                href="#" 
                className="flex items-center space-x-2 bg-pink-600 hover:bg-pink-700 px-3 py-2 rounded-lg transition-colors duration-200"
                aria-label="Instagram"
              >
                <span>📸</span>
                <span className="text-sm">Instagram</span>
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="text-center md:text-right text-sm text-gray-400 mt-4">
              <p>📧 info@bookfest2025.com</p>
              <p>📞 +91-XXXX-XXXXXX</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Celebrating literature, promoting literacy, and fostering the love of books across India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;