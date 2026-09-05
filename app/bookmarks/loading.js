export default function Loading() {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-stone-500 dark:text-stone-400">
        Loading bookmarks...
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 laptop:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-full h-64 bg-stone-200 rounded-lg dark:bg-stone-800 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}
