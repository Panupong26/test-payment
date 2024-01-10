import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import JuristicFormRequestPage from "./pages/population/tourbusiness/juristic/juristic-request-form";


function App() {
  return (
    <main className="App  relative">
      <Routes>
        <Route path="/:step/:status" element={<JuristicFormRequestPage/>}/>
      </Routes>
    </main>
  );
}

export default App;
