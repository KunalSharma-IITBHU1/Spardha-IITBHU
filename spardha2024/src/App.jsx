import './App.css'
import React, { useState } from 'react';
import EventFilter from './components/filterList.jsx';
import EventList from './components/eventList.jsx';




function App() {
  const [filteredEvents, setFilteredEvents] = useState([]);

 return (
  <div className="App">
 <header id='header'>

<nav id='nav1'>
  <section id='sec1' >
  <h1 id='h1'>Spardha 2024</h1>
<a  href="https://www.instagram.com/spardha_iitbhu/?hl=en">
<img id='img1' src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-390.jpg?semt=ais_hybrid" alt="" />
  </a>
  <a href="https://www.facebook.com/search/top?q=spardha%20-%20iit%20(bhu)%2C%20varanasi">
    <img id='img4' src="https://i.pinimg.com/474x/d2/17/4b/d2174bdef984e49aafabeb437744ca7a.jpg" alt="" />
  </a>
  <a href="https://x.com/Spardha_IITBHU">
  <img id='img6' src="https://cdn-icons-png.flaticon.com/512/2496/2496110.png" alt="" />
  </a>
  <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A13326821&keywords=spardha%2C%20iit%20(bhu)%20varanasi&origin=RICH_QUERY_SUGGESTION">
  <img id='img5' src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="" />
  </a>
 
  </section>
</nav>

<nav id='nav2'>


<a id='a1'href="https://iitbhu.ac.in/dean/dosa/games">About</a>
<div id='a9'>
  
  <EventFilter onFilter={setFilteredEvents} />
  <EventList events={filteredEvents} />
</div>
<a id='a3' href="">Teams </a>
<a id='a4' href="">Pre-Events</a>
<a id='a5' href="">Sponsors</a>
<a id='a6' href="https://www.placement.iitbhu.ac.in/contacts/">Contact Us</a>
</nav>
 </header>

<div id='div2' >
  <section>
<a href="https://iitbhu.ac.in/">
  <img id='img2' src="https://www.iitbhu.ac.in/contents/iitbhu/img/other/iit_emblem_original.jpg" alt="" />
</a>

  </section>
  
</div>

<div id='heroimg'>


</div >

<div id='a11'> 
  <h1 className='h2'> Welcome to Spardha 2024</h1>
  <h2 className='h2'>18-20 oct 2024</h2>
  <h3 className='h2'>Annual sports festival of IIT (BHU) under the Games and Sports Council.</h3>
</div>

<div id="a12">

</div>



<footer id='footer'>
  <div id='footer1'>
     <div id='footer2'>
         <ul id='ul'>
            <li className='li1' ><a  href="">History</a></li>
            <li className='li1'><a href="">Know our Guests</a></li>
            <li className='li1'><a href="">Sports and Technology</a></li>
            <li className='li1'><a href="">Coches and Staff</a></li>
          </ul>
          <div>
          <a href="https://amul.com/products/milk.php">
            <img id='img7' src="/public/amul.png" alt="" />
          </a>
          <a href="">
            <img id='img8' src="\public\iitianTrader.png" alt="" />
          </a>
          <a href="">
            <img id='img9' src="\public\ballebaazi_logo.png" alt="" />
          </a>
          <a href="https://ipsator.com/">
            <img id='img10' src="\public\ipsator.png" alt="" />
          </a>
         <a href="https://www.ktm.com/en-in.html">
          <img id='img11' src="\public\KTM_Logo.png" alt="" />
          <a href="">
            <img id='img12' src="\public\rankers.png" alt="" />
          </a>
          <a href="https://www.toyotabharat.com/">
            <img id='img13' src="\public\toyota.png" alt="" />
          </a>
          <a href="">
            <img id='img14' src="\public\DGPcafe.png" alt="" />
          </a>
         </a>
          </div>
          
      </div>
  
    </div>
            
     
</footer>
</div>
 ) 
};

export default App
