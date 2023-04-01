import React from "react";
import 'boxicons';

const Skills = () => {
    return (
        <section class="skills" id="skills">
            <h2 class="heading">My <span>Skills</span></h2>
            <div class="skills-contaner">
                <div class="skill-box">
                    <box-icon size='7rem' type='logo' color='#0ef' name='java'></box-icon>
                    <h3>JAVA</h3>
                    {/* <!-- <a href="" class="btn">Know More</a> --> */}
                </div>

                <div class="skill-box">
                    <box-icon size='7rem' color='#0ef' type='logo' name='html5'></box-icon>
                    <h3>HTML</h3>
                    {/* <!-- <a href="" class="btn">Know More</a> --> */}
                </div>

                <div class="skill-box">
                    <box-icon size='7rem' color='#0ef' type='logo' name='css3'></box-icon>
                    <h3>CSS</h3>
                    {/* <!-- <a href="" class="btn">Know More</a> --> */}
                </div>

                <div class="skill-box">
                    <box-icon size='7rem' color='#0ef' type='logo' name='javascript'></box-icon>
                    <h3>JavaScript</h3>
                    {/* <!-- <a href="" class="btn">Know More</a> --> */}
                </div>

                <div class="skill-box">
                    <box-icon size='7rem' color='#0ef' type='logo' name='react'></box-icon>
                    <h3>React</h3>
                    {/* <!-- <a href="" class="btn">Know More</a> --> */}
                </div>

                <div class="skill-box">
                    <box-icon size='7rem' color='#0ef' type='logo' name='redux'></box-icon>
                    <h3>Redux</h3>
                    {/* <!-- <a href="" class="btn">Know More</a> --> */}
                </div>

                <div class="skill-box">
                    <box-icon size='7rem' color='#0ef' type='logo' name='git'></box-icon>
                    <h3>Git</h3>
                    {/* <!-- <a href="" class="btn">Know More</a> --> */}
                </div>

                <div class="skill-box">
                    <box-icon size='7rem' color='#0ef' type='logo' name='nodejs'></box-icon>
                    <h3>Node Js</h3>
                    {/* <!-- <a href="" class="btn">Know More</a> --> */}
                </div>

                <div class="skill-box">
                    <box-icon color='#0ef' size='7rem' type='logo' name='mongodb'></box-icon>
                    <h3>MongoDB</h3>
                    {/* <!-- <a href="" class="btn">Know More</a> --> */}
                </div>
            </div>
        </section>

    )
}

export default Skills