import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import LogIn from './log/LogIn';
import SignUp from './log/SignUp';
import Product from './Component/Product';
import All from './Component/All';
import Edit from './Component/Edit';
import Nav from './layout/Nav';
import Home from './Component/Home';
import Footer from './layout/Footer';
import About from './Component/About';
import Single from './Component/Single';
function App() {
  return (
  
 <Router>
  <Nav/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>

  <Route path='/login' element={<LogIn/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/product' element={<Product/>}/>
  <Route path='/all' element={<All/>}/>
  <Route path='/item/:id' element={<Single/>}/>
  <Route path='/edit/:id' element={<Edit/>}/>
  
  
  </Routes>
  <Footer/>
 </Router>
     
    
  );
}

export default App;
