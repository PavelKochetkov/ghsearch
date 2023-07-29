import React from "react";
import { Route, Routes } from 'react-router-dom'
import { Main } from "./Pages/Main";
import { Faq } from "./Pages/Faq";
import { Navbar } from "./components/Navbar";
import { Profile } from "./Pages/Profile";
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="faq" element={<Faq/>}/>
          <Route path="/profile/:login" element={<Profile/>}/>
        </Routes>
      </div>
    </React.Fragment>
  );
}
export default App;
