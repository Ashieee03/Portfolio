import React from "react";

const TaylorLeanneSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[600px] bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 overflow-hidden py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Taylor
                <br />
                Leanne
                <br />
                Natural
                <br />
                Beauty
              </h2>
              
              <div className="space-y-3">
                <h3 className="text-white text-xl md:text-2xl font-medium">
                  Social Media Management
                </h3>
                <div className="w-16 h-[3px] bg-white"></div>
              </div>
            </div>
          </div>
          
          {/* Images Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Mobile Mockup */}
              <div className="relative">
                <img
                  src="/images/taylorleanne/Rectangle.png"
                  alt="Taylor Leanne Natural Beauty - Mobile Mockup"
                  className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
              
              {/* Desktop/Tablet Mockup */}
              <div className="relative">
                <img
                  src="/images/taylorleanne/Rectangle-1.png"
                  alt="Taylor Leanne Natural Beauty - Desktop Mockup"
                  className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaylorLeanneSection; 