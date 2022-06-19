import React from 'react';
import "./global.css";
import Navbar from '../ui/Navbar';
import Footer from '../ui/footer';
import Seo from '../seo/seo'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  
  return (
    <div>
     
      <Seo/>
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}

export default Layout