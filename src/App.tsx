import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RankingPage from "./pages/RankingPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/quiz" element={<HomePage />} />
        <Route path="/quiz/:step" element={<RankingPage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/quiz" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
