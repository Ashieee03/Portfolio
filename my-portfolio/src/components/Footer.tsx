import React from 'react';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Social media links
  const socialLinks = [
    { name: "LinkedIn", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "Dribbble", url: "#" }
  ];

  // Quick links
  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" }
  ];

  // Services
  const services = [
    "UI/UX Design",
    "Social Media Marketing",
    "Brand Identity",
    "Web Design"
  ];

  return (
    <footer className="w-full py-20 bg-[#f8f7f0]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#030e02]">Let's Connect there</h2>
          <p className="text-gray-600 max-w-2xl mb-8">
            Have a project in mind or want to discuss potential collaborations?
            I'm always open to new opportunities and exciting challenges.
          </p>
          <Button 
            variant="default" 
            className="bg-[#fbbc05] text-black hover:bg-[#fbbc05]/80 px-8 py-6 text-lg"
          >
            HIRE ME
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#030e02]">Contact</h3>
            <p className="text-gray-600 mb-2">info@yourdesign.com</p>
            <p className="text-gray-600 mb-2">+1 234 567 8901</p>
            <p className="text-gray-600">Los Angeles, CA 90001</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#030e02]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gray-600 hover:text-[#030e02] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#030e02]">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-600">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#030e02]">Get in Touch</h3>
            <form>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full mb-3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#030e02]" 
              />
              <textarea 
                placeholder="Message" 
                className="w-full h-24 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#030e02] resize-none mb-3" 
              />
              <Button 
                variant="default" 
                className="bg-[#030e02] text-white hover:bg-[#030e02]/80 w-full"
              >
                Send
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom section with social links and copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">© 2023 Portfolio. All rights reserved.</p>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-gray-600 hover:text-[#030e02] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 