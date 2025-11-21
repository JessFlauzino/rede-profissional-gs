export default function Card({ className = '', children }) {
  const base =
    'rounded-2xl bg-white dark:bg-black shadow-xl border border-gray-200 dark:border-gray-800';
  return <div className={`${base} ${className}`}>{children}</div>;
}
