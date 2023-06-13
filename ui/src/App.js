import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListUserComponent from './components/ListUserComponent';
import UserRegister from './components/UserRegister';
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<UserRegister />} />
            <Route path="/users" element={<ListUserComponent />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/edituser/:userId" element={<UserRegister />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
