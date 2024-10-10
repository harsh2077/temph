import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import UserList from './components/UserList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditUser from './components/EditUser';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router>
     <ToastContainer autoClose={3000} hideProgressBar={true} />
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
