import { useState } from "react";
import "./App.css";
import Login from "./page/Login";
import { Route, Routes } from "react-router-dom";
import Registration from "./page/Registration";
import NotFoundPage from "./page/NotFound";
import StudentProfile from "./page/component/StudentProfile";
import TutorProfile from "./page/component/Tutorprofile";
import Navbar from "./page/navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/Studentprofile" element={<StudentProfile />} />
      <Route path="/Tutorprofile" element={<TutorProfile />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
