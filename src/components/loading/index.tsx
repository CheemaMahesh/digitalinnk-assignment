export default function Loading() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="relative mb-6">
          <div className="text-6xl animate-bounce">🛒</div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-2 bg-gray-200 rounded-full blur-sm animate-pulse" />
        </div>

        <div className="flex items-center justify-center gap-1 mb-4">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
        </div>

        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          Hang tight!
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          We're getting things ready for you...
        </p>
      </div>
    </section>
  );
}
