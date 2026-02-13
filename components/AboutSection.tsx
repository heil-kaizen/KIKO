import React from 'react';
import { TEXT_CONTENT, LINKS } from '../constants';
import GlassButton from './GlassButton';
import { Copy, ExternalLink } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyCA = () => {
    // Placeholder CA
    const ca = "COMING SOON"; 
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleStickers = () => {
    window.open(LINKS.TELEGRAM_STICKERS, '_blank');
  };

  return (
    <div id="story" className="relative w-full py-20 px-4 md:px-0 flex flex-col items-center gap-24 scroll-mt-28">
      
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Who is Kiko */}
      <section className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-5xl md:text-7xl font-heading text-purple-800 mb-8 drop-shadow-sm rotate-1">
          Who is Kiko?
        </h2>
        <div className="bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] border-4 border-white shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
          <p className="font-body text-xl md:text-2xl leading-relaxed text-purple-900 font-medium">
            {TEXT_CONTENT.WHO_IS_KIKO}
          </p>
        </div>
      </section>

      {/* How Kiko was Born */}
      <section className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-5xl md:text-7xl font-heading text-blue-700 mb-8 drop-shadow-sm -rotate-1">
          How Kiko was Born
        </h2>
        <div className="bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] border-4 border-white shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
          <p className="font-body text-xl md:text-2xl leading-relaxed text-blue-900 font-medium">
            {TEXT_CONTENT.HOW_KIKO_BORN}
          </p>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 z-10 mt-8">
        <div className="flex flex-col items-center">
            <GlassButton 
                text={copied ? "Copied!" : "CA: Coming Soon"} 
                onClick={handleCopyCA}
            />
             <div className="mt-2 text-sm text-purple-700/60 font-body flex items-center gap-1">
                <Copy size={12} /> Click to copy
             </div>
        </div>

        <div className="flex flex-col items-center">
             <GlassButton 
                text="Get Stickers" 
                primary 
                onClick={handleStickers}
            />
            <div className="mt-2 text-sm text-purple-700/60 font-body flex items-center gap-1">
                <ExternalLink size={12} /> Telegram
             </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;