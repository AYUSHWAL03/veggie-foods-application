import './App.css';
import { useEffect } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import AppointmentPage from './Pages/AppointmentPage';
import NewPage from './Pages/NewPage';
import DoctorPage from './Pages/DoctorPage';
import ContactPage from './Pages/ContactPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
   <>
      <BrowserRouter>
        <Navbar/>
              <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/appointment' element={<AppointmentPage/>}/>
                <Route path='/news' element={<NewPage/>}/>
                <Route path='/doctor' element={<DoctorPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
              </Routes>
        <Footer/>
      </BrowserRouter>
   </>
  );
}

export default App;
