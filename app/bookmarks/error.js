"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
}
