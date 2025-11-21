import React, { useState } from "react";

export default function ProfileModal({ data, onClose }) {
  const [showForm, setShowForm] = useState(false);

  const handleRecomendar = () => {
    alert(`Profissional recomendado: ${data.nome}`);
  };

  const handleMensagem = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  
    return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-xl w-full sm:p-8 p-4 relative border border-gray-100 dark:border-gray-800
        max-h-[80vh] overflow-y-auto flex flex-col">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 text-2xl hover:text-red-500 transition-colors">×</button>
        
        
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
          <img
            src={data.foto}
            className="w-24 h-24 rounded-full object-cover ring-4 ring-blue-500 dark:ring-blue-700"
            alt={data.nome}
          />
          <div className="w-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{data.nome}</h2>
            <div className="text-lg text-gray-600 dark:text-gray-400">{data.cargo}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {(data.habilidadesTecnicas || []).map((skill) => (
                <span key={skill}
                  className="px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5 text-[1.05rem] text-gray-900 dark:text-gray-100 leading-relaxed">
          <div>
            <span className="block mb-1 font-semibold text-blue-600 dark:text-blue-400">Sobre</span>
            {data.resumo}
          </div>
          <div>
            <span className="block mb-1 font-semibold text-indigo-600 dark:text-indigo-400">Formação</span>
            {(data.formacao || []).map(f => (
              <div key={f.curso} className="pl-2 text-gray-700 dark:text-gray-300">
                {f.curso} - {f.instituicao} <span className="text-sm text-gray-400">({f.ano})</span>
              </div>
            ))}
          </div>
          <div>
            <span className="block mb-1 font-semibold text-cyan-600 dark:text-cyan-400">Experiência</span>
            {(data.experiencias || []).map(e => (
              <div key={e.empresa + e.cargo} className="pl-2">
                <span className="font-medium">{e.cargo}</span> em <span>{e.empresa}</span>
                <span className="text-sm text-gray-400"> ({e.inicio} - {e.fim})</span><br />
                <span className="text-xs text-gray-700 dark:text-gray-400">{e.descricao}</span>
              </div>
            ))}
          </div>
          <div>
            <span className="block mb-1 font-semibold text-purple-600 dark:text-purple-400">Soft Skills</span>
            <span className="ml-2">{(data.softSkills || []).join(', ')}</span>
          </div>
          <div>
            <span className="block mb-1 font-semibold text-green-600 dark:text-green-400">Certificações</span>
            <span className="ml-2">{(data.certificacoes || []).join(', ')}</span>
          </div>
          <div>
            <span className="block mb-1 font-semibold text-pink-600 dark:text-pink-400">Projetos</span>
            {(data.projetos || []).map(p => (
              <div key={p.titulo} className="pl-2">
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className="text-blue-700 dark:text-blue-300 underline font-medium mr-2">{p.titulo}</a>
                <span className="text-xs text-gray-700 dark:text-gray-400">{p.descricao}</span>
              </div>
            ))}
          </div>
          <div>
            <span className="block mb-1 font-semibold text-amber-600 dark:text-amber-300">Idiomas</span>
            <span className="ml-2">
              {(data.idiomas || []).map(idioma => `${idioma.idioma} (${idioma.nivel})`).join(', ')}
            </span>
          </div>
          <div>
            <span className="block mb-1 font-semibold text-teal-600 dark:text-teal-300">Interesses</span>
            <span className="ml-2">{(data.areaInteresses || []).join(', ')}</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button
            className="px-6 py-2 rounded-lg font-bold bg-green-600 hover:bg-green-700 text-white shadow-md transition"
            onClick={handleRecomendar}
            >
            Recomendar profissional
        </button>
          <button
            className="px-6 py-2 rounded-lg font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md transition"
            onClick={handleMensagem}>
            Enviar mensagem
        </button>
        {showForm && (
  <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center px-2">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-sm relative border border-gray-200 dark:border-gray-700">
      <button
        onClick={handleCloseForm}
        className="absolute top-3 right-4 text-lg text-gray-400 dark:text-gray-200 hover:text-red-500"
      >×</button>
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Enviar mensagem para {data.nome}</h3>
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Mensagem enviada para ${data.nome}!\nConteúdo:\n${e.target.mensagem.value}`);
        setShowForm(false);
      }}>
        <textarea
          name="mensagem"
          rows={5}
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3 mb-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
          placeholder="Digite sua mensagem..."
          required
        />
        <button className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition" type="submit">
          Enviar
        </button>
      </form>
    </div>
  </div>
)}
        </div>
      </div>
    </div>
  );
}