import './App.css';
import DashboardLayout from './Pages/DashboardLayout';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'


function App() {
  return (
    <div >
    <Router>
<Routes>
            <Route path='/*' exact element={<DashboardLayout/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
