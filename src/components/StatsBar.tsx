const STATS = [
  { value: "50+", label: "Products launched" },
  { value: "$2M+", label: "Client revenue generated" },
  { value: "6–8 wk", label: "Avg. delivery timeline" },
  { value: "US / CA", label: "Primary markets" }
];

export default function StatsBar() {
  return (
    <section className="border-t border-b border-gray-200 bg-[#faf9f9]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, idx) => (
          <div
            key={stat.label}
            className={`py-8 px-6 md:px-10 flex flex-col gap-1 text-left ${
              idx < 3 ? "border-r border-gray-200" : ""
            } ${idx === 1 ? "max-md:border-r-0" : ""} ${
              idx > 1 ? "max-md:border-t border-gray-200" : ""
            }`}
          >
            <span className="font-display font-bold text-[34px] md:text-[38px] text-[#111111] leading-none">
              {stat.value}
            </span>
            <span className="font-mono text-[10.5px] text-gray-500 uppercase tracking-[0.1em]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
