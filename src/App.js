import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Sidebar from './layout/SideBar';
import About from './pages/About';
import Contact from './pages/Contact';
import TeaParty from './code-examples/keeping-components-pure/TeaParty';
import EventsAsProps from './code-examples/responding-to-events/EventsAsProps';
import Picture from './code-examples/declarative-ui/Picture';

function App() {
  return (
    <>
      <NavBar />
      <div className="app">
        <Sidebar />
        <div className="content">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/interactive-examples/basics/keeping-components-pure" element={<TeaParty />} />
              <Route path="/interactive-examples/basics/declarative-ui" element={<Picture />} />
              <Route path="/interactive-examples/events/responding-to-events" element={<EventsAsProps />} />
            </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
