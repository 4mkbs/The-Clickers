import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-slate-900 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative text-center max-w-lg mx-auto bg-white/95 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/20">
        <span className="text-8xl font-black bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
          404
        </span>
        <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-2 text-sm text-slate-500 font-medium leading-relaxed">
          The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-500/25 transition-all active:scale-95"
          >
            Go Back Home
          </Link>
          <Link
            to="/login"
            className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl transition-all"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
