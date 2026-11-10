export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  icon,
  iconPosition = "right",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-blue-900 hover:bg-blue-950 text-white shadow-sm hover:shadow active:bg-slate-900",
    secondary:
      "bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 shadow-sm active:bg-slate-200",
    outline:
      "bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-50 active:bg-slate-100",
    darkOutline:
      "bg-transparent border border-slate-700 text-slate-200 hover:bg-slate-800/60 active:bg-slate-800",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles} {...props}>
      {content}
    </button>
  );
}
