import React from 'react';
import { KIKO_ASSETS } from '../constants';

const Orbit3D: React.FC = () => {
  const images = KIKO_ASSETS.ORBIT_IMAGES;
  const count = images.length;
  
  // Total animation duration
  const duration = 20; // seconds

  return (
    <div className="orbit-component relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden perspective-container">
      <style>{`
        .orbit-component {
          --orbit-radius: 350px;
          --item-size: 7rem; /* Reduced size for orbit images */
        }
        @media (max-width: 768px) {
          .orbit-component {
            --orbit-radius: 160px;
            --item-size: 4.5rem; /* Reduced size for mobile */
          }
        }

        .perspective-container {
          perspective: 1200px;
        }
        .scene {
          transform-style: preserve-3d;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* 
           Keyframe for the orbit. 
           We rotate the frame Y to position on circle, push out Z (radius), 
           then un-rotate Y to face the camera (billboard).
        */
        @keyframes orbit-float {
          0% {
            transform: rotateY(0deg) translateZ(var(--orbit-radius)) rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg) translateZ(var(--orbit-radius)) rotateY(-360deg);
          }
        }
      `}</style>

      {/* Floor Shadow */}
      <div className="absolute bottom-20 md:bottom-32 w-48 md:w-64 h-8 bg-black/20 blur-xl rounded-[100%] z-0"></div>

      <div className="scene relative">
        
        {/* Central Hero Image */}
        {/* Increased size: w-80 (20rem) on mobile, w-[30rem] on desktop */}
        <div className="absolute z-10 pointer-events-none">
          <img 
            src={KIKO_ASSETS.HERO_MAIN} 
            alt="Kiko Main" 
            className="w-80 md:w-[30rem] h-auto drop-shadow-2xl filter brightness-105"
            style={{ maxWidth: 'none' }} 
          />
        </div>

        {/* Orbiting Images */}
        {images.map((src, index) => {
          // Calculate negative delay to distribute them along the path immediately
          const delay = -1 * (duration / count) * index;

          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 flex items-center justify-center"
              style={{
                width: 'var(--item-size)',
                height: 'var(--item-size)',
                marginLeft: 'calc(var(--item-size) / -2)', // Center the item
                marginTop: 'calc(var(--item-size) / -2)',  // Center the item
                transformStyle: 'preserve-3d',
                animation: `orbit-float ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            >
              <div className="w-full h-full rounded-2xl shadow-xl transform hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden">
                <img
                  src={src}
                  alt={`Kiko Orbit ${index}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Orbit3D;