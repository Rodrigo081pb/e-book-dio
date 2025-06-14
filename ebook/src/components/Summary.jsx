import React from "react";

export default function Summary({ chapters, onNavigate, current }) {
  return (
    <aside className="bg-white/80 rounded-2xl shadow-lg p-4 mb-8 max-w-xs w-full mx-auto border-2 border-dashed border-purple-300 animate-fade-in">
      <h3 className="text-lg font-bold text-purple-800 mb-2">Sumário</h3>
      <ul className="space-y-1">
        {chapters.map((chapter, idx) => (
          <li key={chapter.title}>
            <button
              className={`w-full text-left px-2 py-1 rounded transition font-medium ${current === idx + 1 ? 'bg-purple-200 text-purple-900' : 'hover:bg-purple-100 text-purple-700'}`}
              onClick={() => onNavigate(idx + 1)}
            >
              {idx + 1}. {chapter.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
