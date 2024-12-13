
import React, {useState} from "react"
import './App.css';

import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
//https://v5.reactrouter.com/web/example/basic last line import in this web site

const App = () => {
    const [user, setLoginUser] = useState({});
  
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              element={user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />}
            />
            <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
        
      </div>
    );
  };
  

export default App;