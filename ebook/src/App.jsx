import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Summary from "./components/Summary";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Chapter3 from "./pages/Chapter3";
import "./index.css";

const chapters = [
  { title: "O Sonho Nasce", content: <Chapter1 key={1} /> },
  { title: "Desafios e Coragem", content: <Chapter2 key={2} /> },
  { title: "O Mundo é Possível", content: <Chapter3 key={3} /> },
  // Adicione mais capítulos aqui para uma história longa
];

function App() {
  const [current, setCurrent] = useState(1);
  const [turning, setTurning] = useState(false);

  const handleNavigate = (idx) => {
    if (idx === current) return;
    setTurning(true);
    setTimeout(() => {
      setCurrent(idx);
      setTurning(false);
    }, 700); // duração da animação
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-yellow-100 via-purple-100 to-blue-100 p-2 md:p-4">
      <Navbar current={current} total={chapters.length} onNavigate={handleNavigate} />
      <Summary chapters={chapters} onNavigate={handleNavigate} current={current} />
      <div className={`relative flex-1 w-full flex flex-col items-center justify-center transition-transform duration-700 ${turning ? 'animate-turn-page' : ''}`} style={{ perspective: '1200px' }}>
        <div className="caderno bg-white shadow-2xl border-4 border-yellow-300 rounded-3xl max-w-2xl w-full min-h-[60vh] p-8 flex flex-col items-center justify-center relative overflow-hidden" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
          {/* Linhas do caderno */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="border-b border-dashed border-blue-200 opacity-30" style={{ top: `${(i + 1) * 5}%`, position: 'absolute', width: '100%' }} />
            ))}
            {/* Margem do caderno */}
            <div className="absolute left-6 top-0 bottom-0 w-1 border-l-4 border-pink-300 opacity-60" />
          </div>
          <div className="relative z-10 w-full">
            {chapters[current - 1].content}
          </div>
        </div>
      </div>
      <Footer />
      {/* Animações customizadas */}
      <style>{`
        .animate-fade-in { animation: fadeIn 1.2s ease-in; }
        .animate-slide-down { animation: slideDown 1.2s cubic-bezier(0.4,0,0.2,1); }
        .animate-fade-in-delay { animation: fadeIn 2s 0.5s both; }
        .animate-fade-in-delay2 { animation: fadeIn 2s 1s both; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
        .animate-turn-page { animation: turnPage 0.7s cubic-bezier(0.4,0,0.2,1); }
        @keyframes turnPage {
          0% { transform: rotateY(0deg); }
          40% { transform: rotateY(-60deg) scale(0.98); }
          100% { transform: rotateY(0deg); }
        }
      `}</style>
    </main>
  );
}

export default App;
