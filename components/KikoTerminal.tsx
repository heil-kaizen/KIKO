import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, Loader2 } from 'lucide-react';
import { TERMINAL_QUESTIONS, TERMINAL_RESPONSES, BAD_WORDS, KIKO_RANDOM_RESPONSES } from '../constants';

interface Message {
  role: 'user' | 'model' | 'system';
  text: string;
}

const KikoTerminal: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', text: "🧠 Welcome to Kiko Terminal\nType \"help\" to see commands.\nType \"hi\" to know about KIKO." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const getResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase().trim();

    // 1. Check Bad Words
    if (BAD_WORDS.some(word => lowerQuery.includes(word))) {
      return "⚠️ *Kiko covers ears* Eeep! No bad words in the Dream Box! Only good vibes and green candles allowed! 😤🚫";
    }

    // 2. Check Specific Greetings (GM/GN)
    if (lowerQuery === 'gm' || lowerQuery.startsWith('gm ')) {
      return "gm gm! ☀️ Rise and grind! The blockchain never sleeps! ☕️🚀";
    }
    if (lowerQuery === 'gn' || lowerQuery.startsWith('gn ')) {
      return "gn fam! 🌙 Rest those diamond hands. Kiko will watch the charts! 💤";
    }

    // 3. Check Exact Match from Constants
    if (TERMINAL_RESPONSES[query]) {
      return TERMINAL_RESPONSES[query];
    }

    // 4. Check case-insensitive match for predefined keys
    for (const key of Object.keys(TERMINAL_RESPONSES)) {
      if (key.toLowerCase() === lowerQuery) {
        return TERMINAL_RESPONSES[key];
      }
    }

    // 5. Keyword matching fallback
    if (lowerQuery.includes('buy') || lowerQuery.includes('purchase')) return TERMINAL_RESPONSES["How can I buy $kiko?"];
    if (lowerQuery.includes('who') && lowerQuery.includes('kiko')) return TERMINAL_RESPONSES["Who is Kiko?"];
    if (lowerQuery.includes('what') && lowerQuery.includes('kiko')) return TERMINAL_RESPONSES["What is $kiko?"];
    if (lowerQuery.includes('safe') || lowerQuery.includes('scam') || lowerQuery.includes('legit')) return TERMINAL_RESPONSES["Is $kiko safe?"];
    if (lowerQuery.includes('goal') || lowerQuery.includes('future') || lowerQuery.includes('roadmap')) return TERMINAL_RESPONSES["What is the goal of Kiko?"];
    if (lowerQuery.includes('utility') || lowerQuery.includes('use')) return TERMINAL_RESPONSES["What's the utility of $kiko?"];
    if (lowerQuery.includes('solana') || lowerQuery.includes('chain')) return TERMINAL_RESPONSES["solana"];

    // 6. Random Kiko Mode Response
    return KIKO_RANDOM_RESPONSES[Math.floor(Math.random() * KIKO_RANDOM_RESPONSES.length)];
  };

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    // Add user message
    const userMsg: Message = { role: 'user', text: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Simulate network delay for "thinking"
    setTimeout(() => {
      const responseText = getResponse(text);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setIsLoading(false);
    }, 600 + Math.random() * 800); // Random delay between 600ms and 1400ms
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div id="terminal" className="w-full py-20 px-4 flex justify-center scroll-mt-24">
      <div className="w-full max-w-4xl bg-[#AEE2FF] rounded-xl overflow-hidden shadow-2xl border-4 border-white/50 relative">
        
        {/* Terminal Header */}
        <div className="bg-[#8CBBE6] px-4 py-2 flex items-center justify-between border-b border-white/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="font-mono text-sm text-slate-700 font-bold flex items-center gap-2">
            <Terminal size={14} /> kiko_terminal.exe
          </div>
          <div className="w-8" /> {/* Spacer */}
        </div>

        {/* Terminal Body */}
        <div 
          className="h-[500px] overflow-y-auto p-6 font-mono text-slate-800 text-lg space-y-4 custom-scrollbar"
          ref={scrollRef}
          style={{ fontFamily: '"Fredoka", monospace' }} // Using Fredoka for a friendly terminal look
        >
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-purple-500 text-white px-4 py-2 rounded-l-xl rounded-tr-xl shadow-sm' 
                    : msg.role === 'system'
                      ? 'text-slate-700 font-bold'
                      : 'text-slate-800'
                }`}
              >
                {msg.role === 'model' && <span className="mr-2">🤖</span>}
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="text-purple-600 animate-pulse flex items-center gap-2">
                 <Loader2 size={18} className="animate-spin" /> Kiko is thinking...
               </div>
            </div>
          )}
        </div>

        {/* Recommended Questions (Horizontal Scroll) */}
        <div className="bg-[#9ACDF5] px-4 py-3 border-t border-white/20 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex gap-2">
             {TERMINAL_QUESTIONS.map((q, i) => (
               <button
                 key={i}
                 onClick={() => handleSend(q)}
                 className="px-3 py-1 bg-white/40 hover:bg-white/70 text-slate-700 rounded-full text-sm font-bold transition-colors border border-white/30"
               >
                 {i + 1}. {q}
               </button>
             ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-[#8CBBE6] p-4 flex gap-4 items-center">
            <div className="text-purple-600 font-bold text-xl">{'>'}</div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 bg-transparent border-none outline-none text-slate-800 font-mono text-lg placeholder-slate-500"
              autoFocus
            />
            <button 
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 transition-colors"
            >
              <Send size={20} />
            </button>
        </div>

      </div>
    </div>
  );
};

export default KikoTerminal;