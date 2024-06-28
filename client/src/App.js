import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/portfolio/portfolio.jsx";
import Upload from "./components/portfolio/upload.jsx";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Portfolio/>}/>
              <Route path='/upload' element={<Upload/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
