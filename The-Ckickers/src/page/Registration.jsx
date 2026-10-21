import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../constant/constant";
import { Link } from "react-router-dom";

const Registration = () => {
  const [activeTab, setActiveTab] = useState("student");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(`${baseUrl}/user/signup`, {
        ...formData,
        role: activeTab,
      });
      setSuccess("Account created successfully! You can now log in.");
      console.log("API Response:", response.data);
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during registration. Please try again."
      );
      console.error("API Error:", err.response || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-slate-900 overflow-hidden">
      {/* Background Lighting Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative w-full max-w-md bg-white/95 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/20">

        {/* Brand Header */}
        <div className="text-center mb-6">
          <Link to="/" className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-500 text-white font-extrabold text-2xl shadow-lg shadow-indigo-500/30 mb-3 hover:scale-105 transition-transform">
            C
          </Link>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Create an Account
          </h2>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Join The Clickers learning community
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="p-1 bg-slate-100 rounded-xl flex space-x-1 mb-6">
          <button
            type="button"
            className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === "student"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
            onClick={() => setActiveTab("student")}
          >
            🎓 Student
          </button>
          <button
            type="button"
            className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === "teacher"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
            onClick={() => setActiveTab("teacher")}
          >
            👨‍🏫 Teacher / Tutor
          </button>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200/60 text-red-700 text-sm flex items-start space-x-3">
            <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-sm flex items-start space-x-3">
            <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{success}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all placeholder:text-slate-400"
              placeholder="e.g. Alex Carter"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all placeholder:text-slate-400"
              placeholder="name@university.edu"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all placeholder:text-slate-400"
              placeholder="Create a strong password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Creating Account...</span>
              </>
            ) : (
              <span>Register as {activeTab === "student" ? "Student" : "Teacher"}</span>
            )}
          </button>
        </form>

        <p className="text-center text-sm font-medium text-slate-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-indigo-600 hover:text-indigo-500 transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
