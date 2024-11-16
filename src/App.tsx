import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Order from './components/Order';
import Donate from './components/Donate';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Main />
        <Donate />
      </div>
    </Router>
  );
}

function Main() {
  const location = useLocation();

  return (
    <TransitionGroup className="content">
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={500}
      >
        <div className="content-wrapper">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
