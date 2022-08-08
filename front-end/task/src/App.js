import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import LogIn from './log/LogIn';
import SignUp from './log/SignUp';

function App() {
  return (
  
 <Router>
  <Routes>
  <Route path='/login' element={<LogIn/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  
  </Routes>
 </Router>
     
    
  );
}

export default App;
