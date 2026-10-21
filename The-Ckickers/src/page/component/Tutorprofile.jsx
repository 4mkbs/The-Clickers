import { useState } from "react";
import Navbar from "../navbar";

const TutorProfile = () => {
  const [showCoursesPopup, setShowCoursesPopup] = useState(false);
  const [showEnrollPopup, setShowEnrollPopup] = useState(false);
  const [newCourseName, setNewCourseName] = useState("");
  const [capableCourses, setCapableCourses] = useState([
    "Math 101 - Calculus I",
    "Physics 202 - General Physics II",
    "Chemistry 303 - Organic Chemistry",
    "Advanced Calculus & Differential Equations",
  ]);

  const [tutoredCourses] = useState([
    {
      course: "Math 101 - Calculus I",
      review: "Dr. Johnson made differential equations feel effortless!",
      student: "John Doe",
    },
    {
      course: "Physics 202 - Electricity & Magnetism",
      review: "Explained complex electromagnetism concepts with incredible clarity.",
      student: "Jane Smith",
    },
    {
      course: "Chemistry 303 - Organic Chemistry",
      review: "Extremely patient and provided amazing study guides before finals.",
      student: "Michael Lee",
    },
  ]);

  const handleCoursesPopup = () => setShowCoursesPopup(!showCoursesPopup);
  const handleEnrollPopup = () => setShowEnrollPopup(!showEnrollPopup);

  const handleEnrollCourse = (e) => {
    e.preventDefault();
    if (!newCourseName.trim()) return;
    setCapableCourses([...capableCourses, newCourseName.trim()]);
    setNewCourseName("");
    setShowEnrollPopup(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Profile Hero Section */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256"
                  alt="Tutor Profile"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-4 ring-white/10 shadow-xl"
                />
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Dr. Emily Johnson</h1>
                  <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded-full border border-emerald-400/30">
                    Verified Tutor
                  </span>
                </div>
                <p className="text-indigo-300 text-sm mt-1 font-semibold">
                  Associate Professor • Department of Physics
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  PhD in Theoretical Physics, MIT Class of &apos;16
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleCoursesPopup}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/10 transition-all backdrop-blur-sm"
              >
                View Capable Courses ({capableCourses.length})
              </button>
              <button
                onClick={handleEnrollPopup}
                className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-all"
              >
                + Enroll New Course
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Column (2 cols) */}
          <div className="lg:col-span-2 space-y-8">

            {/* Tutored Courses History & Testimonials */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Previously Tutored Courses & Student Feedback
                  </h2>
                  <p className="text-xs text-slate-500">Reviews from verified student sessions</p>
                </div>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  ★ 4.9 Average Rating
                </span>
              </div>

              <div className="space-y-4">
                {tutoredCourses.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-slate-50 rounded-2xl border border-slate-200/70 hover:border-indigo-200 transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-sm text-slate-900">{item.course}</h3>
                      <div className="flex text-amber-400 text-xs">★★★★★</div>
                    </div>
                    <p className="text-xs text-slate-600 italic mb-3 leading-relaxed">
                      &quot;{item.review}&quot;
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                      <span>Student: <strong className="text-slate-700">{item.student}</strong></span>
                      <span className="text-emerald-600 font-semibold">Completed</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar (1 col) */}
          <div className="space-y-8">

            {/* Capable Courses List Preview */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-bold text-slate-900">
                  Approved Subjects
                </h2>
                <button
                  onClick={handleEnrollPopup}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-500"
                >
                  + Add
                </button>
              </div>

              <div className="space-y-2">
                {capableCourses.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 border border-slate-100 flex items-center justify-between"
                  >
                    <span>{course}</span>
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats Widget */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-wider mb-4">
                Tutoring Statistics
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-2xl font-extrabold text-white">128</p>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5">Hours Taught</p>
                </div>
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-2xl font-extrabold text-white">42</p>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5">Students Helped</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* Capable Courses Modal */}
      {showCoursesPopup && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-slate-900">Capable Courses</h3>
              <button
                onClick={handleCoursesPopup}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-2.5 max-h-60 overflow-y-auto my-4 pr-1">
              {capableCourses.map((c, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-xl text-xs font-bold text-slate-800 border border-slate-200/60">
                  {c}
                </div>
              ))}
            </div>

            <button
              onClick={handleCoursesPopup}
              className="w-full mt-2 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

      {/* Enroll Course Modal */}
      {showEnrollPopup && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-slate-900">Enroll New Course</h3>
              <button
                onClick={handleEnrollPopup}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleEnrollCourse} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Course Name & Code
                </label>
                <input
                  type="text"
                  placeholder="e.g. CS 301 - Operating Systems"
                  value={newCourseName}
                  onChange={(e) => setNewCourseName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleEnrollPopup}
                  className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-500/20 transition-all"
                >
                  Enroll Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorProfile;
