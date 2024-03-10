import logo from './logo.svg';
import './App.css';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Stack, ThemeProvider } from 'react-bootstrap';
import Index from './Pages/Index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import TeamMember from './Pages/TeamMember';
import Career from './Pages/Career';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={ <Index /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='/team' element={<TeamMember />} />
      <Route path='/career' element={<Career />}></Route>
      </Routes>
    </Router>
    
    </>

  );
}

export default App;
