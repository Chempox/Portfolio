import { useState } from 'react';
import './LandingPage.css'
import Sidebar from './Sidebar';
function LandingPage() {
  
    return (
      <div className="lp-container">
          <div className="lp-main">
              <h1>HELLO,</h1>
              <h1>I'M <span>JUAN</span>,</h1>
              <h1>AND I MAKE INTERNET STUFF.</h1>
          </div>
          <Sidebar/>
      </div>
    );
  }
  
  export default LandingPage;