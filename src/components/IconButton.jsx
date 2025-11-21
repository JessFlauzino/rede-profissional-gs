export default function IconButton({ children, className = '', ...rest }) {
  const base = 'inline-flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition';
  return (
    <button className={`${base} ${className}`} {...rest}>
      {children}
    </button>
  );
}