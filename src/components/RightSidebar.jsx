import Card from './Card';

export default function RightSidebar() {
  return (
    <div className="space-y-4 w-[340px]">
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-gray-900 dark:text-white">Adicione ao seu feed</h4>
          <button className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">i</button>
        </div>

        <div className="mt-3 space-y-3">
          {['LinkedIn', 'Microsoft', 'Apple'].map((brand) => (
            <div key={brand} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gray-200 dark:bg-white/10" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{brand}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-300">Empresa</p>
                </div>
              </div>
              <button className="px-3 py-1 rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white">
                Seguir
              </button>
            </div>
          ))}
        </div>

        <button className="mt-4 w-full rounded-lg bg-gray-100 dark:bg-white/10 py-2 text-sm hover:bg-gray-200 dark:hover:bg-white/20 text-gray-900 dark:text-white">
          Ver todas as recomendações
        </button>
      </Card>

      <Card className="p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white">Cursos em alta</h4>
        <div className="mt-3 space-y-3">
          {[
            { title: 'UI/UX Design Essencial', btn: 'Ver' },
            { title: 'Criando Ilustrações no Figma', btn: 'Ver' },
          ].map((c, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-sm text-gray-900 dark:text-white">{c.title}</span>
              <button className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-900 dark:text-white">
                {c.btn}
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
