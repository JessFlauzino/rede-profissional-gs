import professionals from '../data/professionals.json';
import ProfessionalCard from '../components/ProfessionalCard';
import ProfileModal from '../components/ProfileModal';
import { useState } from 'react';

export default function Directory() {
  const [search, setSearch] = useState('');
  const [area, setArea] = useState('');
  const [cidade, setCidade] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [modalData, setModalData] = useState(null);

  
  const filteredList = professionals.filter(p => {
    const bySearch =
      p.nome.toLowerCase().includes(search.toLowerCase()) ||
      p.cargo.toLowerCase().includes(search.toLowerCase()) ||
      p.resumo.toLowerCase().includes(search.toLowerCase());
    const byArea = !area || p.area === area;
    const byCidade = !cidade || p.localizacao.toLowerCase().includes(cidade.toLowerCase());
    const byTecnologia = !tecnologia || (p.habilidadesTecnicas || []).some(h =>
      h.toLowerCase().includes(tecnologia.toLowerCase())
    );
    return bySearch && byArea && byCidade && byTecnologia;
  });

  return (
    
    <div className="pt-24 min-h-screen bg-gray-100 dark:bg-gray-900 w-full">
      <div className="max-w-4xl mx-auto px-2">
        <div className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow p-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white w-full">Profissionais Disponíveis</h2>
          
          <div className="flex flex-wrap gap-4 items-center">
            <input
              type="text"
              placeholder="Buscar nome, cargo, resumo..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg w-full sm:w-[230px] bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition"
            />
            <select
              value={area}
              onChange={e => setArea(e.target.value)}
              className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg w-full sm:w-[180px] bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition"
            >
              <option value="">Todas áreas</option>
              <option value="Desenvolvimento">Desenvolvimento</option>
              <option value="Design">Design</option>
              <option value="Data Science">Data Science</option>
            </select>
            <input
              type="text"
              placeholder="Cidade (ex: São Paulo)"
              value={cidade}
              onChange={e => setCidade(e.target.value)}
              className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg w-full sm:w-[180px] bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition"
            />
            <input
              type="text"
              placeholder="Tecnologia (ex: React)"
              value={tecnologia}
              onChange={e => setTecnologia(e.target.value)}
              className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg w-full sm:w-[180px] bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition"
            />
          </div>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredList.map(p => (
            <ProfessionalCard key={p.id} data={p} onClick={() => setModalData(p)} />
          ))}
        </div>
        {modalData && (
          <ProfileModal data={modalData} onClose={() => setModalData(null)} />
        )}
      </div>
    </div>
  );
}