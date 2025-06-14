import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Chapter3 from "./pages/Chapter3";
import "./index.css";

const chapters = [
  <Chapter1 key={1} />, 
  <Chapter2 key={2} />, 
  <Chapter3 key={3} />
];

function App() {
  const [current, setCurrent] = useState(1);

  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 animate-fade-in p-2 md:p-4">
      <Navbar current={current} total={chapters.length} onNavigate={setCurrent} />
      <div className="flex-1 w-full flex flex-col items-center justify-center">
        {chapters[current - 1]}
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
      `}</style>
    </main>
  );
}

export default App;
