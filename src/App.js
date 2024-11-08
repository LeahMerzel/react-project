
import React from 'react';
import Sidebar from './layout/SideBar';
import { Routes, Route } from 'react-router-dom';
import './style/App.css';
import './style/Theme.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import ContentArea from './layout/ContentArea';
import TeaParty from './code examples/keeping components pure/TeaParty';
import EventsAsProps from './code examples/responding to events/EventsAsProps';
import Picture from './code examples/declarative UI/Picture';
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
            {<Route path="/interactive-examples/keeping-components-pure" element={<TeaParty />} />}
            {<Route path="/interactive-examples/responding-to-events" element={<EventsAsProps />} />}
            {<Route path="/interactive-examples/declarative-ui" element={<Picture />} />}
            {<Route path="/interactive-examples/responding-to-events" element={<EventsAsProps />} />}
            {<Route path="/interactive-examples/responding-to-events" element={<EventsAsProps />} />}
            {<Route path="/interactive-examples/responding-to-events" element={<EventsAsProps />} />}
            {<Route path="/interactive-examples/responding-to-events" element={<EventsAsProps />} />}
          </Routes>
        </ContentArea>
        </div>
      </div>
    </>
  );}

export default App;
