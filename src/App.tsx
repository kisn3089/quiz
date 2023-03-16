import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RankingPage from "./pages/RankingPage";
import MyPage from "./pages/MyPage";
import KakaoAuthPage from "./pages/KakaoAuthPage";
import KakaoLogoutPage from "./pages/KakaoLogoutPage";
//https://www.figma.com/file/cFntIkMMX5FQuuVIYLMHeT/%ED%80%B4%EC%A6%88-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8?node-id=0-1&t=tduH2jr3bTnwXi3I-0

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/quiz" element={<HomePage />} />
        <Route path="/quiz/:step" element={<RankingPage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my/:email" element={<MyPage />} />
        <Route path="/oauth/kakao/callback" element={<KakaoAuthPage />} />
        <Route path="/oauth/kakao/logout" element={<KakaoLogoutPage />} />
        <Route path="*" element={<Navigate to="/quiz" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
