import React from 'react';

function AutoshowSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-6xl font-bold bg-gradient-to-r from-[rgb(255,0,102)] to-[rgb(255,100,150)] text-transparent bg-clip-text animate-gradient">
                EV AutoShow
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[rgb(255,0,102)] to-[rgb(0,102,255)]"></div>
            </div>
            <p className="text-xl leading-relaxed text-gray-200 font-light">
              Experience the future of EV automobiles at our Mega Event. 
              <span className="block mt-4">
                Discover the latest models, cutting-edge technology, and innovative designs 
                in the EV industry from the Pakistan's leading EV manufacturers.
              </span>
            </p>
          </div>
          <div className="w-full md:w-1/2 transform hover:scale-105 transition-all duration-500">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(255,0,102)] to-[rgb(0,102,255)] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury car at autoshow"
                className="relative rounded-lg shadow-2xl w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AutoshowSection;