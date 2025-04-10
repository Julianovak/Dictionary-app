import Navbar from "./components/common/Navbar"
import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from "./components/auth/loginForm.Jsx";


function App() {

  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<div>Home Page</div>} />
    //       <Route path="/add-words" element={<div>Add Words Page</div>} />
    //       <Route path="/my-words" element={<div>My Words Page</div>} />
    //       <Route path="/quiz" element={<div>Quiz Page</div>} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <LoginForm />
  );
}

export default App;
