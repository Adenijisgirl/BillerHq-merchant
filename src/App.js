import React from 'react';
import './App.css';
import DashboardLayout from './Pages/DashboardLayout';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import LogIn from './Pages/LogIn';


function App() {
  return (
    <div >
    <Router>
<Routes>
            <Route  index exact element={<LogIn/>} />
            <Route path='/*' exact element={<DashboardLayout/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
