

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from './components/Login/Login'
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Movies />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />

        <Header />
        <GlavPage />
        <Search />
        <Button /> */}
      </Routes>
    </Router>
  );
}

export default App;


