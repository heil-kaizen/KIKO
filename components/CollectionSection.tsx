import React from 'react';
import { KIKO_ASSETS } from '../constants';

const CollectionSection: React.FC = () => {
  const collectionImages = KIKO_ASSETS.COLLECTION;

  return (
    <div id="collection" className="w-full py-20 px-4 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-heading text-center text-purple-800 mb-16 drop-shadow-md">
          Kiko's Collection
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {collectionImages.map((src, index) => (
            <div 
              key={index} 
              className="group relative aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:z-20 hover:-translate-y-2"
            >
              <img 
                src={src} 
                alt={`Collection Kiko ${index + 1}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;