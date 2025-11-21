export default function SearchFilterBar({ value, onChange }) {
  return (
    <div className="mb-4 flex flex-col gap-2 md:flex-row items-center">
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full md:w-2/3 text-gray-900 dark:text-white bg-white dark:bg-gray-900"
        placeholder="Buscar profissional, área, cidade ou tecnologia"
      />
      
    </div>
  );
}
