export function Button({ children, className = '', variant = 'default', ...props }) {
  const baseStyle = "rounded px-4 py-2 font-semibold transition";
  const variantStyles = {
    default: "bg-orange-500 hover:bg-orange-600 text-white",
    outline: "border border-orange-500 text-orange-500 hover:bg-orange-100"
  };
  return (
    <button className={`${baseStyle} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
