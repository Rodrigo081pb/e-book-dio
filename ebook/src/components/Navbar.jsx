import React from "react";

export default function Navbar({ current, total, onNavigate }) {
  return (
    <nav className="flex justify-between items-center w-full max-w-2xl mx-auto py-4 px-2 md:px-0">
      <span className="text-white/80 text-sm md:text-base">Capítulo {current} de {total}</span>
      <div className="flex gap-2">
        <button
          className="px-3 py-1 rounded bg-purple-600 text-white font-bold disabled:opacity-40"
          onClick={() => onNavigate(current - 1)}
          disabled={current === 1}
        >
          Anterior
        </button>
        <button
          className="px-3 py-1 rounded bg-purple-600 text-white font-bold disabled:opacity-40"
          onClick={() => onNavigate(current + 1)}
          disabled={current === total}
        >
          Próximo
        </button>
      </div>
    </nav>
  );
}
