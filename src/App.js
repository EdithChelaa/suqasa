// import './App.css';import React from 'react';
// import {Routes, Route} from "react-router-dom";
// import About from './Components/About';
// import Home from './Components/Home';
// import Properties from './Components/Properties';
// import Contacts from './Components/Contact';
// import Navbar from './Components/Navbar';
// import LoginForm from './Components/login/LoginForm';

// function App() {
//   return (
//     <div className='app'>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/properties' element={<Properties/>}/>
//         <Route path='/contacts' element={<Contacts/>}/>
//       </Routes>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Properties from './Components/Properties';
import Contacts from './Components/Contact';
import Navbar from './Components/Navbar';
import LoginForm from './Components/login/LoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic and set isLoggedIn to true if successful
    setIsLoggedIn(true);
  };

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route
          path='/login'
          element={<LoginForm onLogin={handleLogin} />}
        />
      </Routes>
    </div>
  );
}

export default App;