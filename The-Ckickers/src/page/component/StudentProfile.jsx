import { useState } from "react";
import Navbar from "../navbar";

const StudentProfile = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [appointmentPopup, setAppointmentPopup] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [appointmentMessage, setAppointmentMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState(false);

  // Mock Tutors Data
  const topRatedTutors = [
    {
      id: 1,
      name: "Dr. Emily Johnson",
      department: "Physics",
      rating: 4.9,
      reviews: 128,
      availability: true,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      specialty: "Quantum Mechanics & Optics",
    },
    {
      id: 2,
      name: "Dr. Robert Smith",
      department: "Mathematics",
      rating: 4.8,
      reviews: 95,
      availability: false,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
      specialty: "Linear Algebra & Calculus III",
    },
    {
      id: 3,
      name: "Dr. Sarah Lee",
      department: "Chemistry",
      rating: 4.7,
      reviews: 84,
      availability: true,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
      specialty: "Organic & Physical Chemistry",
    },
  ];

  const previousTutors = [
    { name: "Dr. Emily Johnson", subject: "Physics 202", date: "Oct 2024" },
    { name: "Dr. Michael Brown", subject: "CS 101 Data Structures", date: "Sep 2024" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true);
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const results = topRatedTutors.filter(
      (tutor) =>
        tutor.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleAppointment = (tutor) => {
    setSelectedTutor(tutor);
    setAppointmentPopup(true);
    setSubmittedMessage(false);
    setAppointmentMessage("");
  };

  const closeAppointmentPopup = () => {
    setAppointmentPopup(false);
    setSelectedTutor(null);
  };

  const handleSubmitAppointment = (e) => {
    e.preventDefault();
    setSubmittedMessage(true);
    setTimeout(() => {
      closeAppointmentPopup();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Profile Hero Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256"
                  alt="Student Profile"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-4 ring-white/10 shadow-xl"
                />
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Alex Carter</h1>
                  <span className="bg-indigo-500/30 text-indigo-300 text-xs font-bold px-2.5 py-0.5 rounded-full border border-indigo-400/30">
                    Student
                  </span>
                </div>
                <p className="text-slate-400 text-sm mt-1 font-medium">
                  Computer Science & Engineering • 5th Semester
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-4 mt-3 text-xs text-slate-300">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    4 Active Courses
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    GPA 3.82
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Badge */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center sm:text-right backdrop-blur-sm">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Next Session</p>
              <p className="text-base font-bold text-indigo-300 mt-0.5">Tomorrow, 3:00 PM</p>
              <p className="text-xs text-slate-400">Physics 202 with Dr. Johnson</p>
            </div>
          </div>
        </div>

        {/* Two Column Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Content (Left 2 cols) */}
          <div className="lg:col-span-2 space-y-8">

            {/* Search Section */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
              <h2 className="text-lg font-bold text-slate-900 mb-1">
                Find Qualified Tutors
              </h2>
              <p className="text-xs text-slate-500 mb-4">
                Search by department, subject, or professor name
              </p>

              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="e.g. Physics, Calculus, Dr. Lee"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                  />
                  <svg className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl shadow-md shadow-indigo-500/20 active:scale-95 transition-all"
                >
                  Search Tutors
                </button>
              </form>

              {/* Search Results Display */}
              {hasSearched && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-700 mb-3">
                    Search Results ({searchResults.length})
                  </h3>
                  {searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {searchResults.map((tutor) => (
                        <TutorCard key={tutor.id} tutor={tutor} onAppointment={handleAppointment} />
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                      <p className="text-sm font-medium text-slate-500">
                        No tutors matching &quot;{searchQuery}&quot; were found.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Top Rated Tutors Section */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Top-Rated Tutors
                  </h2>
                  <p className="text-xs text-slate-500">Highly recommended academic mentors</p>
                </div>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  Verified Faculty
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {topRatedTutors.map((tutor) => (
                  <TutorCard key={tutor.id} tutor={tutor} onAppointment={handleAppointment} />
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar (1 col) */}
          <div className="space-y-8">

            {/* Previous Sessions */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Previous Sessions
              </h2>

              <div className="space-y-3">
                {previousTutors.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between hover:bg-slate-100/80 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-bold text-slate-800">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.subject}</p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 bg-white px-2 py-1 rounded-md border border-slate-200/60">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Resources Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white rounded-3xl p-6 shadow-lg shadow-indigo-500/20">
              <h3 className="text-base font-bold mb-2">Need Immediate Help?</h3>
              <p className="text-xs text-indigo-100 mb-4 leading-relaxed">
                Book express 1-on-1 office hours or request study group sessions directly with course tutors.
              </p>
              <button className="w-full py-2.5 bg-white text-indigo-700 hover:bg-indigo-50 font-bold text-xs rounded-xl transition-all shadow-sm">
                View Academic Calendar
              </button>
            </div>

          </div>
        </div>

      </main>

      {/* Modern Modal Overlay */}
      {appointmentPopup && selectedTutor && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">

            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Request Appointment</h3>
                <p className="text-xs text-slate-500">With {selectedTutor.name}</p>
              </div>
              <button
                onClick={closeAppointmentPopup}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {submittedMessage ? (
              <div className="p-6 text-center bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-800 my-4">
                <svg className="w-12 h-12 text-emerald-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-bold">Appointment Request Sent!</p>
                <p className="text-xs text-emerald-600 mt-1">
                  Dr. {selectedTutor.name.split(" ").pop()} will review your request shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitAppointment} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Course / Topic
                  </label>
                  <input
                    type="text"
                    defaultValue={`${selectedTutor.department} Support`}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    rows={3}
                    value={appointmentMessage}
                    onChange={(e) => setAppointmentMessage(e.target.value)}
                    placeholder="Briefly describe what you would like to discuss..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={closeAppointmentPopup}
                    className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-500/20 transition-all"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

// Subcomponent for Tutor Cards
const TutorCard = ({ tutor, onAppointment }) => (
  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70 hover:border-indigo-200 hover:shadow-md transition-all flex flex-col justify-between">
    <div>
      <div className="flex items-center gap-3 mb-3">
        <img
          src={tutor.avatar}
          alt={tutor.name}
          className="w-12 h-12 rounded-xl object-cover ring-2 ring-white"
        />
        <div>
          <h3 className="font-bold text-sm text-slate-900">{tutor.name}</h3>
          <p className="text-xs text-indigo-600 font-semibold">{tutor.department}</p>
        </div>
      </div>

      <p className="text-xs text-slate-500 mb-3 line-clamp-1">
        Specialty: {tutor.specialty}
      </p>

      <div className="flex items-center justify-between text-xs text-slate-600 mb-4">
        <span className="flex items-center gap-1 font-bold text-slate-800">
          <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {tutor.rating} ({tutor.reviews})
        </span>
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
          tutor.availability
            ? "bg-emerald-100 text-emerald-800"
            : "bg-slate-200 text-slate-600"
        }`}>
          {tutor.availability ? "Available" : "Busy"}
        </span>
      </div>
    </div>

    <button
      onClick={() => onAppointment(tutor)}
      disabled={!tutor.availability}
      className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs transition-all ${
        tutor.availability
          ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm"
          : "bg-slate-200 text-slate-400 cursor-not-allowed"
      }`}
    >
      {tutor.availability ? "Request Appointment" : "Unavailable"}
    </button>
  </div>
);

export default StudentProfile;
