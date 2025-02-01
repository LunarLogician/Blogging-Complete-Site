import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import HeroSection from './Components/Hero'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import BlogList from './Components/Handler'
import LoginPage from './Components/Login'
import Register from './Components/Register' // Assuming you have a Register component
import DetailCard from './Components/DetailCard' // Assuming you have a Register component
import BlogDetail from './Components/BlogDet';
import BlogCard from './Components/BlogCard';
import CreateBlog from './Components/CreateBlog';
import UpdateCard from './Components/UpdateCard';
import AboutPage from './Components/About';

function App() {
  const path = window.location.pathname;

  if (path === '/register') {
    return <Register />;  // Return the Register component when on '/register' page
  } 
  if (path === '/login') {
    return <LoginPage />;  // Return the LoginPage component when on '/login' page
  }
  if (path === '/blog/:id') {
    console.log('path:', path);
    return <BlogDetail/>;  // Return the LoginPage component when on '/login' page
  }
  return (
    <Router>
      <div className='bg-[#213555]'>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/update/:id" element={<UpdateCard />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
