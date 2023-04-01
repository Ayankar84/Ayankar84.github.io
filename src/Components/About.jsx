import React from "react";
import pic from "../images/about_pic.png"

const About = () => {
    return (
        <section class="about" id="about">
            <div class="about-img">
                <img src={pic} alt="" />
            </div>
            <div class="about-content">
                <h2 class="heading">About <span>Me</span></h2>
                <p>
                    As a full stack web developer fresher, I am a recent graduate who has completed training in web
                    development, and i am now seeking opportunities to apply my skills and gain real-world experience.
                    I have a strong understanding of both front-end and back-end web development technologies, including
                    HTML, CSS, JavaScript, and popular frameworks such as React, Node.js, and Express.
                    I am also familiar with database management, API integration, version control systems like Git, and
                    Agile methodologies.
                    As a full stack web developer, I am capable of building fully functional web applications from start to
                    finish, working on both the client-side and server-side of the application.
                </p>
                <a href="#about" class="btn">Read More</a>
            </div>
        </section>
    )
}

export default About