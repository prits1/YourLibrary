import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Form/Login';
import Signup from './Components/Form/Signup';
import IndBooks from './Components/Main/IndBooks';
import InstBooks from './Components/Main/InstBooks';
import BookInfo from './Components/Main/BookInfo';
import Publish from './Components/Main/Publish';
import PrivateRoutes from './Components/utils/PrivateRoutes';
import { AuthProvider } from './Components/utils/AuthContext'

function App() {
  return (
    <Router>
       <AuthProvider>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element = {<PrivateRoutes />}>
        <Route path="/" element={<Navbar />} />
        <Route path="/individual" element={<IndBooks />} />
        <Route path="/institute" element={<InstBooks />} />
        <Route path="/Book" element={<BookInfo />} />
        <Route path="/publish" element={<Publish />} />      
        </Route>

      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

