export default function Loading() {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-slate-500 dark:text-neutral-400">
        Loading bookmarks...
      </p>
      <div className="flex flex-wrap justify-between gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-full h-64 bg-gray-200 rounded-lg dark:bg-neutral-800 animate-pulse desktop:max-w-sm laptop:max-w-lg"
          />
        ))}
      </div>
    </div>
  );
}
