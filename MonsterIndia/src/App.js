
import './App.css';
import React from "react"
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import MainRoutes from './Pages/MainRoutes'
import JobCard from './Components/JobCard';
import JobPage from './Pages/JobPage';
import Login from './Pages/Login';
import CareerPage from './Pages/Career/CareerPage';

function App() {
  return (
    <div className="App">
       <Navbar/>

       <MainRoutes/>
       {/* <CareerPage/> */}

       {/* <div style={{marginBottom:"100%", marginTop:"30px"}} >
        <JobPage/>
       </div> */}



       {/* <Login/> */}
       
        <Footer />
      
     

    </div>
  );
}

export default App;
