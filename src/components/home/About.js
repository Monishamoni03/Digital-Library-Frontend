import React, { Component } from "react";
// import about from "../assets/images/aboutLibrary.jpg";
import Footer from "../shared/Footer";
import '../../assets/css/About.css';

class About extends Component { 
 render() { 
    return (
        <div>
            <section className = "content-section container">
                <h2 className = "about-section-header">ABOUT US</h2>
                {/* <img src = {about} alt = "about" className = "about-image"></img> */}
                <p className = "about-para"><b>'Digital Library!' - </b> We are excited to introduce our Online Library Management System.Online Library Management System is an Automated Library System that handles the various functions of the library. It provides a complete solution to the library management software.The online library gives you access to quality-assured and trusted resources that are selected and assessed by subject specialists and academics.A library management system is used to maintain library records. It tracks the records of the number of books in the library, how many books are issued, or how many books have been returned or renewed or late fine charges, etc.</p>
            </section>

            <Footer />
        </div>
    )
 }
} 

export default About;