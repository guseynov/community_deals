export default function Loading() {
  return (
    <main className="min-h-screen bg-[var(--canvas)]">
      <div className="site-shell flex h-20 items-center border-b border-black/10">
        <div className="h-9 w-40 animate-pulse rounded-full bg-black/10" />
      </div>
      <div className="site-shell py-20">
        <div className="h-6 w-44 animate-pulse rounded-full bg-black/10" />
        <div className="mt-7 h-20 max-w-3xl animate-pulse rounded-3xl bg-black/10" />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="space-y-4">
              <div className="aspect-[4/4.2] animate-pulse rounded-[1.75rem] bg-black/[0.07]" />
              <div className="h-4 w-2/3 animate-pulse rounded-full bg-black/10" />
              <div className="h-3 w-full animate-pulse rounded-full bg-black/[0.06]" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
