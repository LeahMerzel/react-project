
import React from 'react';
import Sidebar from './layout/SideBar';
import { Routes, Route } from 'react-router-dom';
import './style/App.css';
import './style/Theme.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import ContentArea from './layout/ContentArea';
import ComponentPurity from './code examples/keeping components pure/ComponentPurity';
import TeaParty from './code examples/keeping components pure/TeaParty';
function App() {

  return (
    <>
      <NavBar/>
      <div className="app">
        <Sidebar />
        <div className="content">
        <ContentArea>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add routes for Mood Tracker */}
            {/* <Route path="/interactive-examples/keeping-components-pure" element={<ComponentPurity />} /> */}
            {<Route path="/interactive-examples/keeping-components-pure" element={<TeaParty />} />}
            {/* Define other routes */}
          </Routes>
        </ContentArea>
        </div>
      </div>
    </>
  );}

export default App;
