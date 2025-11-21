import React, { useState } from 'react';
import professionals from '../data/professionals.json';
import assets from '../assets/assets';
import ThemeToggleBtn from './ThemeToggleBtn';
import {
  HomeIcon as IconHome,
  UserIcon as IconUser,
  BriefcaseIcon as IconBriefcase,
  BellIcon as IconBell,
  MagnifyingGlassIcon as IconSearch,
} from '@heroicons/react/24/outline';
import { Crown as IconCrown } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItens = [
  { to: '/', icon: <IconHome className="w-6 h-6" />, label: "Home" },
  { to: '/profissionais', icon: <IconUser className="w-6 h-6" />, label: "Profissionais" },
  { to: '/vagas', icon: <IconBriefcase className="w-6 h-6" />, label: "Vagas" },
  { to: '/notificacoes', icon: <IconBell className="w-6 h-6" />, label: "Notificações" },
];

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [busca, setBusca] = useState('');
  const [resultados, setResultados] = useState([]);

  function handleBusca(e) {
    const valor = e.target.value;
    setBusca(valor);

    if (valor.trim().length > 0) {
      const filtrados = professionals.filter(p =>
        p.nome.toLowerCase().includes(valor.toLowerCase()) ||
        p.localizacao.toLowerCase().includes(valor.toLowerCase()) ||
        p.cargo.toLowerCase().includes(valor.toLowerCase())
      );
      setResultados(filtrados);
    } else {
      setResultados([]);
    }
  }

  return (
    <nav className="fixed w-full z-40 bg-gray-900 text-gray-300">
      <div className="container mx-auto flex items-center px-4 py-2">

        
        <div className="flex-shrink-0">
          <Link to="/" aria-label="Home">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </Link>
        </div>

        
        <div className="relative flex items-center bg-gray-800 rounded-full px-4 py-1 ml-6 max-w-xs w-full">
          <IconSearch className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={busca}
            onChange={handleBusca}
            placeholder="Pesquisar"
            className="bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none ml-2 w-full"
          />
          {resultados.length > 0 && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-40 max-h-80 overflow-y-auto">
              {resultados.map(p => (
                <div
                  key={p.id}
                  className="px-4 py-2 flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer transition"
                  onClick={() => { window.location.href = '/profissionais'; }}
                >
                  <img src={p.foto} className="w-8 h-8 rounded-full mr-2" alt={p.nome} />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-50">{p.nome}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-300">{p.cargo} · {p.localizacao}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        
        <div className="flex-1 flex justify-center">
          <div className="hidden sm:flex items-center space-x-8">
            {navItens.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="p-2 rounded-md hover:bg-gray-700 flex items-center justify-center"
                aria-label={`Ir para ${item.to}`}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        
        <div className="hidden sm:flex items-center gap-4 ml-8">
          <div className="flex items-center space-x-2 bg-gray-800 rounded-full px-3 py-1 cursor-pointer hover:bg-gray-700">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Denis"
              className="w-7 h-7 rounded-full"
            />
            <span className="text-gray-200 font-semibold">Denis</span>
          </div>
          <button className="flex items-center space-x-1 bg-gray-800 rounded-full px-3 py-1 cursor-pointer hover:bg-gray-700">
            <IconCrown className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">Premium</span>
          </button>
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        </div>
        
        <button
          className="ml-auto sm:hidden p-2 rounded-md hover:bg-gray-800"
          onClick={() => setSidebarOpen(true)}
        >
          <img
            src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
            alt="Menu"
            className="w-8"
          />
        </button>
      </div>

      
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setSidebarOpen(false)}>
          <div className="absolute top-0 left-0 h-full w-3/4 bg-gray-900 flex flex-col p-6">
            
            <button className="self-end mb-4 p-2" onClick={() => setSidebarOpen(false)}>
              <img src={assets.close_icon} alt="Fechar" className="w-6" />
            </button>
            
            <div className="flex flex-col gap-6">
              {navItens.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="p-2 flex items-center gap-3 text-lg font-semibold rounded-md hover:bg-gray-800"
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.icon}
                  <span className="text-gray-200">{item.label}</span>
                </Link>
              ))}
              <div className="flex items-center gap-2 p-2 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="Denis"
                  className="w-7 h-7 rounded-full"
                />
                <span className="text-gray-200 font-semibold">Denis</span>
              </div>
              <button className="flex items-center gap-2 bg-gray-800 rounded-full px-3 py-1 cursor-pointer hover:bg-gray-700">
                <IconCrown className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Premium</span>
              </button>
              <ThemeToggleBtn theme={theme} setTheme={setTheme} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;