export default function SectionTitle({
  title,
  subtitle,
  className = "",
  dark = false,
}) {
  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold tracking-tight ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      <div className="w-12 h-1 bg-blue-900 mx-auto mt-3 rounded-full" />
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
