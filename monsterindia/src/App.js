
// import './App.css';
import React from "react"

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login';
import MainRoutes from "./Pages/MainRoutes";


function App() {
  return (
    <div className="App">


      <Navbar/>
      <Footer/>
      {/* <Login/> */}

      <MainRoutes/>

    </div>
  );
}

export default App;
