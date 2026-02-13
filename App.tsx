import React from 'react';
import Navbar from './components/Navbar';
import Orbit3D from './components/Orbit3D';
import AboutSection from './components/AboutSection';
import CollectionSection from './components/CollectionSection';
import KikoTerminal from './components/KikoTerminal';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#AEE2FF] via-[#E6FFFD] to-[#ACBCFF]">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-[90vh] flex flex-col items-center justify-center relative scroll-mt-32">
          <div className="absolute top-10 text-center z-30 px-4">
             <h1 className="text-7xl md:text-9xl font-heading text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)] stroke-purple-800">
              Welcome to KIKO
            </h1>
            <p className="text-xl md:text-3xl font-heading text-purple-600 mt-2">
                The Guardian of Joy & Memes
            </p>
          </div>
          <Orbit3D />
        </section>

        {/* Story Section */}
        <AboutSection />

        {/* Terminal Chat Section */}
        <section className="w-full flex justify-center items-center py-10">
          <div className="text-center w-full">
            <h2 className="text-5xl font-heading text-purple-800 mb-2 drop-shadow-sm">
              Chat with Kiko
            </h2>
            <p className="text-purple-600 font-heading text-xl mb-6">Ask anything to the guardian of the Dream Box!</p>
            <KikoTerminal />
          </div>
        </section>

        {/* Collection Section */}
        <CollectionSection />

        {/* Footer */}
        <footer className="w-full py-10 bg-white/40 backdrop-blur-md mt-20 text-center">
            <p className="font-heading text-purple-900 text-xl">
                © {new Date().getFullYear()} KIKO World. All rights reserved.
            </p>
            <p className="font-body text-purple-700/60 mt-2">
                Designed for maximum giggle.
            </p>
        </footer>
      </main>
    </div>
  );
}

export default App;