import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-4">🤔</div>

        <h1 className="text-6xl md:text-8xl font-bold text-gray-200 mb-2">
          404
        </h1>

        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          Oops! Page not found
        </h2>

        <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
          Looks like you've wandered into uncharted territory. The page you're
          looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md transition-all text-sm md:text-base"
          >
            Go back home
          </Link>
          <button
            onClick={onBack}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-md transition-all text-sm md:text-base"
          >
            Go back
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-xs">
            Lost? Try checking the URL or head back to our homepage.
          </p>
        </div>
      </div>
    </section>
  );
}
