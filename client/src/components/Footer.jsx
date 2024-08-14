import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between text-center md:text-left">
          
          {/* Features Column */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Features</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Cool stuff</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Random feature</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Team feature</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Stuff for developers</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Another one</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Last time</a></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Resource</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Resource name</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Another resource</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Final resource</a></li>
            </ul>
          </div>
          
          {/* About Column */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">About</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Team</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Locations</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Privacy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Terms</a></li>
            </ul>
          </div>
          
          {/* Help Column */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Help</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Support</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Help Center</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        {/* Stay Connected */}
        <div className="flex justify-center my-8">
          <p className="font-semibold text-gray-900 mb-4">Stay connected</p>
        </div>
        <div className="flex justify-center space-x-3 mb-8">
          <div className="w-8 h-8 rounded-full border border-gray-300"></div>
          <div className="w-8 h-8 rounded-full border border-gray-300"></div>
          <div className="w-8 h-8 rounded-full border border-gray-300"></div>
        </div>
        
        
      </div>
      
    </footer>
  );
};

export default Footer;