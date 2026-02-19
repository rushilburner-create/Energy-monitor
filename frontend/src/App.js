import React, { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard.js";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
