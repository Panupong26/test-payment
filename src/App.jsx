import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import JuristicFormRequestPage from "./pages/population/tourbusiness/juristic/juristic-request-form";


function App() {
  return (
    <main className="App  relative">
      <Routes>
        <Route path="/" element={<JuristicFormRequestPage/>}>
          <Route path=":step">
            <Route path=":status"/>
          </Route>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
