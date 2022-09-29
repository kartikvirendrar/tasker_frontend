import React from 'react';
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Home from './components/homepage/Home';
import AddTasks from './components/tasks/AddTask';
import Tasks from './components/tasks/Tasks';
import UpdateTasks from './components/tasks/UpdateTask';
import Team from './components/team/Team';
import Login from './components/user/Login';
import Register from './components/user/Register';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPass from './components/user/ForgotPass';
import Profile from './components/user/Profile';

export default function App() {
  return (
    <>
    <Navbar/>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/add" element={<AddTasks />} />
          <Route path="/task/:id" element={<UpdateTasks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgetpassword" element={<ForgotPass />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    <Footer/>
    </>
  );
}

ReactDOM.render(<React.StrictMode>
  <App />
</React.StrictMode>,
document.getElementById('root'));