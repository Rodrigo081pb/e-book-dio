import './index.css'

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 animate-fade-in p-4">
      <div className="text-center p-8 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 max-w-2xl w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6 animate-slide-down">
          O Garoto Que Queria o Mundo
        </h1>
        <h2 className="text-lg md:text-2xl font-medium text-purple-200 mb-8 animate-fade-in-delay">
          Uma jornada de sonhos, coragem e superação nascida na favela
        </h2>
        <p className="text-base md:text-xl text-white/90 leading-relaxed animate-fade-in-delay2">
          Em meio a becos e vielas, nasceu um garoto com um sonho maior que o morro. Sem nada além da vontade de vencer, ele acreditava que o mundo era possível para quem não desiste. Esta é a história de quem ousou sonhar alto, mesmo quando tudo parecia impossível.
        </p>
        <div className="mt-10 animate-bounce">
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 text-lg md:text-xl">
            Começar a leitura
          </button>
        </div>
        <footer className="mt-12 text-sm text-white/60">
          Feito com ❤️ por Kauã Rodrigo — TCC 2025
        </footer>
      </div>
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
  )
}

export default App
