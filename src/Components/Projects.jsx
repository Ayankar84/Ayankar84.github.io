import React from "react";
import unsplash from "../images/Unsplash.png";
import zostel from "../images/Zostel.png";
import overstock from "../images/Overstock.png";

const Projects = () => {
    return (
        <section class="projects" id="projects">
            <h2 class="heading"><span>My</span> Projects</h2>
            <div class="projects-contaner">
                <div class="project-box">
                    <img src={overstock} alt="" />
                        <div class="project-layer">
                            <h4>Overstock Clone</h4>
                            <p><b>Tech Stack:</b> HTML, CSS, JS, VSCode, Git, Local Storage</p>
                            <div class="projecti">
                                <a href="https://playful-starburst-806a16.netlify.app/" target="_blank"><box-icon color="#2a303b" name='link-external'></box-icon></a>
                                <a href="https://github.com/Ajay-bhagal/team_12" target="_blank"><box-icon color="#2a303b" name='github' type='logo' ></box-icon></a>
                            </div>
                        </div>
                </div>

                <div class="project-box">
                    <img src={unsplash} alt="" />
                        <div class="project-layer">
                            <h4>Unsplash Clone</h4>
                            <p><b>Tech Stack:</b> HTML, CSS, JS, VSCode, Git, Local Storage, API</p>
                            <div class="projecti">
                                <a href="https://soft-cucurucho-b7b394.netlify.app/" target="_blank"><box-icon color="#2a303b" name='link-external'></box-icon></a>
                                <a href="https://github.com/Ajay-bhagal/team_6" target="_blank"><box-icon color="#2a303b" name='github' type='logo' ></box-icon></a>
                            </div>
                        </div>
                </div>

                <div class="project-box">
                    <img src={zostel} alt="" />
                        <div class="project-layer">
                            <h4>Zostel Clone</h4>
                            <p><b>Tech Stack:</b> HTML, CSS, JS, React, Context-Api, VSCode, Git, Local Storage, API</p>
                            <div class="projecti">
                                <a href="https://zostelreactclone.vercel.app/" target="_blank"><box-icon color="#2a303b" name='link-external'></box-icon></a>
                                <a href="https://github.com/rachnarajaka040/Zostel.com_clone" target="_blank"><box-icon color="#2a303b" name='github' type='logo' ></box-icon></a>
                            </div>
                        </div>
                </div>
            </div>
        </section>

    )
}

export default Projects