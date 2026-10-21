import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-blue-500 flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              C
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent">
                The Clickers
              </span>
              <span className="text-[10px] font-medium tracking-widest text-indigo-600 uppercase -mt-1">
                Academic Tutoring
              </span>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/Studentprofile"
              className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors hidden sm:block"
            >
              Student Hub
            </Link>
            <Link
              to="/Tutorprofile"
              className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors hidden sm:block"
            >
              Tutor Portal
            </Link>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 p-1.5 rounded-full hover:bg-slate-100 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 shadow-sm">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256"
                      alt="User Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <svg
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setDropdownOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Signed in as
                      </p>
                      <p className="text-sm font-bold text-slate-800 truncate">
                        alex.carter@university.edu
                      </p>
                    </div>

                    <div className="py-1">
                      <Link
                        to="/Studentprofile"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Student Dashboard
                      </Link>
                      <Link
                        to="/Tutorprofile"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                        Tutor Dashboard
                      </Link>
                    </div>

                    <div className="border-t border-slate-100 pt-1">
                      <Link
                        to="/login"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 font-medium transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sign Out
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
