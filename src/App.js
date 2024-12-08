import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Sidebar from './layout/SideBar';
import About from './pages/About';
import Contact from './pages/Contact';
import TeaParty from './code-examples/describing-the-ui/keeping-components-pure/TeaParty';
import EventsAsProps from './code-examples/adding-interactivity/responding-to-events/EventsAsProps';
import EventPropogation from './code-examples/adding-interactivity/responding-to-events/event propogation/EventPropogation';
import PreventingDefault from './code-examples/adding-interactivity/responding-to-events/prevent default behavior/PreventingDefault';
import Incrementation from './code-examples/adding-interactivity/state as snapshot/Incrementation';
import Picture from './code-examples/managing-state/declarative-ui/Picture';
import Duplication from './code-examples/managing-state/state structure/Duplication';
import Redundancy from './code-examples/managing-state/state structure/redundant state/Redundancy';
import StateReset from './code-examples/managing-state/preserving state/StateReset';
import Reducer from './code-examples/managing-state/reducer implementation/Reducer';
import Context from './code-examples/managing-state/context implementation/Context';
import ContextReducer from './code-examples/managing-state/context-reducer implementation/ContextReducer';
import ChatInput from './code-examples/escape-hatches/ref/ChatInput';
import RefToggle from './code-examples/escape-hatches/ref/RefToggle';
import RefButton from './code-examples/escape-hatches/ref/manipulating DOM/RefButton';
import FocusEffect from './code-examples/escape-hatches/effects/FocusEffect';
import TimerEffect from './code-examples/escape-hatches/effects/TimerEffect';
import LessEffects from './code-examples/escape-hatches/effects/no-need-for-effect/LessEffects';


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
              <Route path="/describing-the-ui/keeping-components-pure" element={<TeaParty />} />
              <Route path="/adding-interactivity/responding-to-events" element={<EventsAsProps />} />
              <Route path="/adding-interactivity/responding-to-events/event-propogation" element={<EventPropogation />} />
              <Route path="/adding-interactivity/responding-to-events/prevent-default-behavior" element={<PreventingDefault />} />
              <Route path="/adding-interactivity/state-as-snapshot/incrementation" element={<Incrementation />} />
              <Route path="/managing-state/declarative-ui" element={<Picture />} />
              <Route path="/managing-state/state-structure/avoiding-duplication" element={<Duplication/>} />
              <Route path="/managing-state/state-structure/avoiding-redundancy" element={<Redundancy/>} />
              <Route path="/managing-state/resetting-state" element={<StateReset/>} />
              <Route path="/managing-state/resducer-implementation" element={<Reducer/>} />
              <Route path="/managing-state/context-implementation" element={<Context/>} />
              <Route path="/managing-state/context-reducer-implementation" element={<ContextReducer/>} />
              <Route path="/escape-hatches/ref" element={<ChatInput/>}/>
              <Route path="/escape-hatches/ref/second-example" element={<RefToggle/>}/>
              <Route path="/escape-hatches/ref/manipulating-the-DOM" element={<RefButton/>}/>
              <Route path="/escape-hatches/ref" element={<ChatInput/>}/>
              <Route path="/escape-hatches/effects" element={<FocusEffect/>}/>
              <Route path="/escape-hatches/effects/second-example" element={<TimerEffect/>}/>
              <Route path="/escape-hatches/effects/less-state-and-effect" element={<LessEffects/>}/>
              <Route path="/escape-hatches/effects" element={<FocusEffect/>}/>
              <Route path="/escape-hatches/effects" element={<FocusEffect/>}/>
              <Route path="/escape-hatches/effects" element={<FocusEffect/>}/>


            </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
