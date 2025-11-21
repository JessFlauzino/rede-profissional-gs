export default function ProfessionalCard({ data, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl border shadow-lg p-4 flex flex-col items-center hover:scale-105 transition bg-white dark:bg-gray-900"
    >
      <img src={data.foto} className="w-16 h-16 rounded-full mb-2" alt={data.nome} />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{data.nome}</h3>
      <span className="text-sm text-gray-500 dark:text-gray-300">{data.cargo}</span>
      <div className="flex flex-wrap gap-1 mt-2">
        {(data.habilidadesTecnicas || []).map(skill => (
          <span key={skill} className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded text-xs">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
