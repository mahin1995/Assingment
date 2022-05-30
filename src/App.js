import logo from './logo.svg';
import './App.css';
import './style/main.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
 } from "react-router-dom";
import Header from './component/Header';
import { Homepage } from './Page/Homepage';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      
   <Router>
     <Header/>
     
   <Routes>
   <Route path="/" element={<Homepage/>}/>


</Routes>
{/* <Footer/> */}
   </Router>

    </div>
  );
}

export default App;
