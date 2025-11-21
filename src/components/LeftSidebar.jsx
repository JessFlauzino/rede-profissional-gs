import { EyeIcon, UsersIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import Card from '../components/Card'; 

export default function LeftSidebar() {
  return (
    <Card className="p-0">
      
      <div className="flex items-center gap-3 justify-center pt-6 pb-3">
        
        <div className="h-16 w-16 rounded-full bg-gray-600 ring-2 ring-gray-700 overflow-hidden">
          
        </div>
        
        <div className="text-left">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Denis Bujupaj</h3>
          <p className="text-xs text-gray-500 dark:text-gray-300">Designer UI/UX Sênior</p>
        </div>
      </div>

      <div className="px-4 space-y-4 pb-4">
        
        <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-white dark:bg-black shadow-xl border border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <EyeIcon className="w-5 h-5 text-gray-300" />
            <span className="font-medium text-gray-900 dark:text-white">Quem viu seu perfil</span>
          </div>
          <span className="font-semibold text-blue-400">14</span>
        </div>

        
        <div className="px-4 py-3 rounded-lg  bg-white dark:bg-black shadow-xl border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UsersIcon className="w-5 h-5 text-gray-300" />
              <span className="font-medium text-gray-900 dark:text-white">Conexões</span>
            </div>
            <span className="font-semibold text-blue-400">1.7k</span>
          </div>
          <button
            className="block w-full mt-3 px-4 py-2 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 
                    text-gray-900 dark:text-white font-medium shadow-xl text-center hover:bg-gray-100 dark:hover:bg-gray-950 transition">
            Gerenciar sua rede
          </button>
        </div>

        
        <div className="px-4 py-3 rounded-lg bg-white dark:bg-black shadow-xl border border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2">
        <BriefcaseIcon className="w-5 h-5 text-gray-400 dark:text-gray-300" />
        <span className="font-medium text-gray-900 dark:text-white">
          Ferramentas exclusivAs
        </span>
      </div>
 
  <button
    className="block w-full mt-3 px-4 py-2 rounded-lg
      bg-white dark:bg-black
      border border-gray-200 dark:border-gray-800
      text-yellow-600 dark:text-yellow-400 font-medium shadow-xl text-center
      hover:bg-yellow-50 dark:hover:bg-gray-950 transition flex items-center justify-center gap-2">
    
    <span>Teste grátis</span>
  </button>
</div>
      </div>
    </Card>
  );
}
