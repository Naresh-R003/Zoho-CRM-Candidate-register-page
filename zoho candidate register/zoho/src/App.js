import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LeaveTracker from './Pages/LeaveTracker/LeaveTracker';
import SelfService from './Pages/SelfServices/SelfService';
import Login from './Pages/Login'
import Register from './Pages/Register'
// import Navbar from './Components/Navbar';

import Main from './Main';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route path="/" element={<Login/>}/>
          <Route path="/Login/Home" element={<Home/>}/>
          <Route path="/LeaveTracker" element={<LeaveTracker/>}/>
          <Route path="/SelfService" element={<SelfService/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
