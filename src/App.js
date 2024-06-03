import React, { useEffect, useState } from "react";
import Home from './HOme';
import NNavBar from './NNavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])
  return (
    <BrowserRouter>
      
    {/* {loading ?
      <div className="preloaderr">
        <ScaleLoader color={'#f87765'} loading={loading} height={100} margin={10} />
      </div> : */}

      <>
        <NNavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
{/* } */}
  </BrowserRouter>
  );
}

export default App;
