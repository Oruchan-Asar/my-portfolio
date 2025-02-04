export default function Loading() {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-slate-500">Loading bookmarks...</p>
      <div className="flex flex-wrap justify-between gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-full bg-gray-200 animate-pulse h-64 rounded-lg desktop:max-w-sm laptop:max-w-lg"
          />
        ))}
      </div>
    </div>
  );
}
