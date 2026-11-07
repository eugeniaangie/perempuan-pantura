import { impactStats } from "@/lib/data";

export function ImpactStats() {
  return (
    <section className="mx-auto max-w-6xl border-t border-blue-24 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto mb-6 max-w-xl text-center sm:mb-10">
        <h2 className="text-xl font-semibold text-blue sm:text-3xl">
          Dampak Bersama di Karawang
        </h2>
        <p className="mt-1 text-xs text-blue-60 sm:text-sm">
          Merawat literasi pesisir dan keberanian bersuara sejak hari pertama.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-center sm:gap-6 md:grid-cols-4">
        {impactStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-blue-24 bg-blue-06 p-4 sm:p-6"
          >
            <span className="block text-2xl font-semibold text-blue sm:text-4xl">
              {stat.value}
            </span>
            <span className="mt-1 block text-[11px] font-semibold text-blue-60 sm:mt-2 sm:text-xs">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
