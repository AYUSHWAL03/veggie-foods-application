import React from 'react'
import {Link} from  'react-router-dom'
// import '../App.css'
const Navbar = () => {
  return (
    <div>
        <section class="navbar navbar-default navbar-static-top" role="navigation">
          <div class="container">

               <div class="navbar-header">
                    <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                         <span class="icon icon-bar"></span>
                         <span class="icon icon-bar"></span>
                         <span class="icon icon-bar"></span>
                    </button>

                    
                    <Link to="/" class="navbar-brand">TeleMed</Link>
           </div>

              
               <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                         <li><Link to="/" className="smoothScroll nav-link-ele">Home</Link></li>
                         <li><Link to="/about" class="smoothScroll nav-link-ele">About Us</Link></li>
                         <li><Link to="/doctor" class="smoothScroll nav-link-ele">Doctors</Link></li>
                         <li><Link to="/news" class="smoothScroll nav-link-ele">News</Link></li>
                         <li><Link to="/contact" class="smoothScroll nav-link-ele">Contact</Link></li>
                         <li class="appointment-btn"><Link to="/appointment">Make an appointment</Link></li>
                    </ul>
               </div>

          </div>
     </section>
    </div>
  )
}

export default Navbar