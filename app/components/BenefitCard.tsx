import type { Benefit } from "@/app/data/home";

type BenefitCardProps = {
  benefit: Benefit;
};

export function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <article className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
      <p className="font-mono text-xs text-[#e9b95f]">{benefit.number}</p>
      <h3 className="mt-12 text-xl font-semibold">{benefit.title}</h3>
      <p className="mt-3 max-w-xs text-sm leading-6 text-white/55">
        {benefit.copy}
      </p>
    </article>
  );
}
