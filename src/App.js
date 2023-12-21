import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='*' element={<Home/>} exact/>
      <Route path='/services' element={<Services/>} exact/>
      <Route path='/products' element={<Products/>} exact/>
      <Route path='/sign-up' element={<SignUp/>} exact/>
      </Routes>
      <Footer />
    </Router>
    </>
     
    
  );
}

export default App;
