import React from "react";
import { logo } from "../../assets/images";
import {
    FacebookIcon,
    InstagramIcon,
    YouTubeIcon,
    TelegramIcon,
    TwitterIcon,
    
  } from "../../assets/icons";

import { Link } from "gatsby";

const Footer = () => {
  return (
   
<footer className="bg-light text-center ">
 
  <div className="container p-4">

   
  <div style={{display:"flex",justifyContent:"space-evenly",width:"200px",margin:"10px auto"}}>
            <div>
              <a href="https://www.facebook.com/SwamiJitendranandJee">
                <FacebookIcon color="primary" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/swamijitendranand/">
                <InstagramIcon color="secondary" />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/c/SwamiJitendranandSarswati">
                <YouTubeIcon color="warning" />
              </a>
            </div>
            <div>
              <a href="https://t.me/SwamiJitendranandJi">
                <TelegramIcon color="primary"/>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/SJitendranand_">
                <TwitterIcon color="primary"/>
              </a>
            </div>
          </div>


    <section className="">
      <form action="">
       
        <div className="row d-flex justify-content-center">
      
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
        
          <div className="col-md-5 col-12">
    
            <div className="form-outline mb-4" >
              <input type="email" id="form5Example2" className="form-control" style={{border:"1px solid black"}}/>
              
            </div>
          </div>
          
          <div className="col-auto">

        
            <button type="submit" className="btn btn-primary mb-4">
              Subscribe
            </button>
          </div>
         
        </div>
    
      </form>
    </section>
 
    <section className="mb-4">
      <p>
        Gharwapasi is the mission of hindus to make the peoples back to their orignal root where they feel connected India
      </p>
    </section>



   
    <section className="">
     
      <div className="row">
     
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <p className="section__heading">Help Section</p>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-dark">Apply Gharwapasi</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Marriage Consultaion</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Report Victim</a>
            </li>
           
          </ul>
        </div>
      
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <p className="section__heading">Legals</p>

          <ul className="mb-0">
            <li>
              <a href="#!" className="text-dark">Privacy Policy</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Terms & Condition</a>
            </li>
            <li>
              <a href="#!" className="text-dark">About Us</a>
            </li>
            
          </ul>
        </div>
        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <p className="section__heading">Data Collection</p>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-dark">All Cases</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Love Jihad</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Halala</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Mutah</a>
            </li>
          </ul>
        </div>
        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <p className="section__heading">Services</p>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-dark">Blogs</a>
            </li>
            <li>
              <a href="#!" className="text-dark">News</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Announcements</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Clubs</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Join Mission</a>
            </li>
          </ul>
        </div>
        
      </div>
      
    </section>
    

  </div>
  


  <div className="text-center p-3" style={{backgroundColor:"rgba(255,0,0,0.2)"}}>
    © 2022 Copyright:
    <a className="text-dark" href="#">Gharwapasi.in</a>
  </div>
  

</footer>

  );
};

export default Footer;
