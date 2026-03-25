import { useState } from 'react';

export default function AICareerPath() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generatePath = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    // Clear previous output and show a loading state
    setOutput('<p class="animate-pulse text-emerald-600 font-medium">Our AI is mapping your agricultural leadership journey...</p>');

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY; 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    // We specifically ask the AI to format its response in HTML so it looks pretty on the screen
    const systemPrompt = "You are the Senior Admissions Officer at Agri-Impact Institute. Based on a user's background, suggest a personalized curriculum. Use professional, corporate language. Mention courses like 'Ag-Fintech Strategies', 'Sustainable Supply Chains', and 'Policy & Governance'. Format the response in clean HTML, using <h3> for headings, <ul> for lists with bullet points, and <p> for paragraphs. Do not include markdown code blocks like ```html.";

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] }
        })
      });

      const data = await response.json();
      let reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "<p>I'm sorry, I couldn't process that request.</p>";
      
      // Strip out any markdown formatting just in case the AI includes it
      reply = reply.replace(/```html|```/g, '');
      
      setOutput(reply);
    } catch (error) {
      console.error("API Error:", error);
      setOutput("<p class='text-red-500'>Connection error. Please try again later.</p>");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="careers" className="bg-emerald-50 p-8 border border-emerald-100 rounded-sm mb-16">
      <div className="flex items-center gap-2 mb-6 text-emerald-900">
        <span className="text-2xl">✨</span>
        <h2 className="text-3xl font-serif">AI Career Path Explorer</h2>
      </div>
      <p className="text-slate-700 mb-6">Unsure which program fits your trajectory? Tell our AI about your current role and goals, and we'll generate a personalized curriculum map.</p>
      
      <div className="space-y-4">
        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-4 border border-slate-200 rounded-sm focus:ring-2 focus:ring-emerald-500 outline-none" 
          rows="3" 
          placeholder="e.g., 'I am a logistics manager in Nigeria looking to optimize cold-chain storage...'"
          disabled={isLoading}
        ></textarea>
        
        <button 
          onClick={generatePath}
          disabled={isLoading || !input.trim()}
          className="bg-emerald-900 text-white px-6 py-3 font-bold hover:bg-emerald-800 transition uppercase tracking-widest text-xs flex items-center gap-2 disabled:opacity-50"
        >
          {isLoading ? '✨ Analyzing...' : '✨ Generate My Path'}
        </button>
      </div>

      {/* React uses dangerouslySetInnerHTML to render HTML strings passed from the AI */}
      {output && (
        <div 
          className="mt-8 p-6 bg-white border border-emerald-100 text-slate-700 space-y-4 shadow-inner rounded-sm"
          dangerouslySetInnerHTML={{ __html: output }}
        />
      )}
    </section>
  );
}