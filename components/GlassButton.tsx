import React from 'react';

interface GlassButtonProps {
  text: string;
  onClick?: () => void;
  primary?: boolean;
}

const GlassButton: React.FC<GlassButtonProps> = ({ text, onClick, primary }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden
        px-8 py-4 rounded-2xl
        font-heading text-xl tracking-wide
        transition-all duration-300 transform hover:scale-105 hover:-translate-y-1
        backdrop-blur-md
        border border-white/40
        shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
        group
        ${primary 
          ? 'bg-gradient-to-br from-purple-400/80 to-blue-400/80 text-white' 
          : 'bg-white/30 text-purple-900 hover:bg-white/40'
        }
      `}
    >
      {/* Liquid sheen effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
      
      <span className="relative z-20 flex items-center gap-2">
        {text}
      </span>
    </button>
  );
};

export default GlassButton;