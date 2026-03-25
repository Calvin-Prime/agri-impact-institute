import { useState } from 'react';

export default function ProgramAssistant() {
  // 1. Set up state to hold the chat history and the user's current typing
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 2. The function that calls the Gemini API
  const askAI = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    // Fetching the key securely from the .env file
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY; 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const systemPrompt = "You are a helpful AI assistant for the Agri-Impact Institute. Answer questions about admissions, fees ($2,250), duration (8 weeks), and impact. Be concise and professional. If you don't know, suggest they contact admissions@agri-impact.inst.";

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userMessage }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] }
        })
      });

      const data = await response.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm having trouble connecting right now.";
      
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Connection error. Please check your network." }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Allow pressing "Enter" to send the message
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') askAI();
  };

  return (
    <div id="ai-consultant" className="bg-emerald-900 text-white p-8 shadow-2xl border-t-4 border-emerald-400 rounded-sm">
      <h3 className="text-xl font-bold mb-4 uppercase text-sm tracking-widest flex items-center gap-2">
        ✨ Program Assistant
      </h3>
      <p className="text-emerald-100 text-sm mb-6">Instant answers about admissions, fees, and curriculum details.</p>
      
      <div className="space-y-4">
        {/* The Chat Window */}
        <div className="h-48 overflow-y-auto mb-4 space-y-3 text-xs text-slate-200 bg-emerald-950/50 p-3 rounded border border-emerald-800 flex flex-col">
          {messages.map((msg, index) => (
            <div key={index} className={msg.role === 'user' ? "text-white self-end text-right bg-emerald-800/50 p-2 rounded-md ml-8" : "text-emerald-300 self-start text-left bg-emerald-900 p-2 rounded-md mr-8"}>
              <span className="font-semibold">{msg.role === 'user' ? 'You' : 'Assistant'}:</span> {msg.text}
            </div>
          ))}
          {isLoading && <div className="text-emerald-400 animate-pulse self-start text-left p-2">Assistant is typing...</div>}
        </div>
        
        {/* Input Area */}
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full bg-emerald-800/50 border border-emerald-700 p-3 rounded text-sm placeholder-emerald-300 outline-none focus:border-emerald-400 transition" 
          placeholder="Ask a question..."
          disabled={isLoading}
        />
        <button 
          onClick={askAI}
          disabled={isLoading}
          className="w-full bg-emerald-400 text-emerald-950 font-bold py-3 hover:bg-emerald-300 transition tracking-widest text-xs uppercase shadow-lg rounded-sm disabled:opacity-50"
        >
          {isLoading ? 'Consulting...' : 'Send Question'}
        </button>
      </div>
    </div>
  );
}