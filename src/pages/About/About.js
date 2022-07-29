import './About.scss';
import { SiDell } from "react-icons/si";
import { GoPrimitiveDot } from "react-icons/go";
import {ABOUT_DATA} from "../../assets/data/AboutData";
import TechnologiesList from '../../components/TechnologiesList/TechnologiesList';
import { useEffect } from 'react';
import { BsArrowReturnRight } from "react-icons/bs";
function About() {

    let about = ABOUT_DATA;

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return(
        <div>
            <div className="about-headline">
                <div className="about-picture">
                    <div className="profile-photo-container"><img className="profile-photo-img" src={about.profilePhoto} alt="profile-photo"/></div>
                </div>
                <h1 className="about-title">{about?.title}</h1>
                <div class="about-text">
                    <p>I'm <b>João Moraes</b>. I was born in Porto Alegre (Brazil) and raised in a metropolitan region, in a small town called Guaíba.
                    Since my childhood, I have always been passionate about technology, and this interest extended through my whole life. </p> 
                    <p>I graduated in <b>Computer Science</b> at PUCRS and now I work as a full-time <b>Software Engineer</b> at Dell.</p>
                    <p>As a self-proclaimed <b>geek</b>, I have a lot of hobbies: I like to <span className="about-redirect-link"><a title="Steam profile" href="https://steamcommunity.com/id/jolomoju/" target="_blank">play games</a></span>, play the piano, draw, read books, etc.</p>
                    <p>I also fight for <b>diversity and inclusion</b>, believing everyone can contribute and have a place in this amazing area.</p>
                </div>
            </div>
            <div className="section align-left">
                <span><strong>What I do</strong></span>
                <p className="normal-text">There are three main areas that I like to focus professionally.</p>
                <TechnologiesList />
            </div>
            <div className="align-left">
                <span><strong>My Experience</strong></span>
                <ul className="about-list">
                    <div className="timeline-item">
                        <div className="icon-container"><SiDell className="timeline-icon" id="timeline-start0" /></div>
                        <div className="timeline-description">
                            <span className="timeline-title">Dell</span>
                            <span className="timeline-date">Ago 2018 - Present</span>
                            <span>Working as a tech lead in an internationally distributed team that creates and maintains solutions for legal practice areas. Building applications with web development, AI and using engineering practices as cybersecurity, testing, code review and CI/CD pipelines to achieve high code quality.</span>
                            {/* <span>Working as a full stack developer, using web development and artificial intelligence in an internationally distributed team and adopting agile practices.</span> */}
                        </div>
                    </div>
                    <li className="timeline-item">
                        <BsArrowReturnRight className="timeline-dot" />
                        <div className="timeline-description">
                            <span className="timeline-title">Software Engineer II</span>
                            <span className="timeline-date">May 2022 - Present</span>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <BsArrowReturnRight className="timeline-dot" />
                        <div className="timeline-description">
                            <span className="timeline-title">Software Engineer I</span>
                            <span className="timeline-date">Set 2020 - May 2022</span>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <BsArrowReturnRight className="timeline-dot" id="timeline-end0" />
                        <div className="timeline-description">
                            <span className="timeline-title">Software Engineer Internship</span>
                            <span className="timeline-date">Ago 2019 - Set 2020</span>
                        </div>
                    </li>
                </ul>
                <ul className="about-list">
                    <div className="timeline-item">
                        <div className="icon-container"><img className="timeline-icon" src={about.pucrsLogo} alt="pucrs" id="timeline-start1"/></div>
                        <div className="timeline-description">
                            <span className="timeline-title">PUCRS</span>
                            <span className="timeline-date">Ago 2018 - Ago 2019</span>
                            <span>Worked at SMArT laboratory, researching and developing an application to help blind people using Artificial Intelligence and mobile development.</span>
                        </div>
                    </div>
                    <li className="timeline-item">
                        <BsArrowReturnRight className="timeline-dot" id="timeline-end1" />
                        <div className="timeline-description">
                            <span className="timeline-title">Undergraduate Student Researcher - SMArT Lab</span>
                            <span className="timeline-date">Ago 2018 - Ago 2019</span>
                        </div>
                    </li>
                </ul>
                <span className="about-category"><strong>Education</strong></span>
                <ul className="about-list">
                    <div className="timeline-item">
                        <div className="icon-container"><img className="timeline-icon" src={about.pucrsLogo} alt="pucrs" id="timeline-star"/></div>
                        <div className="timeline-description">
                            <span className="timeline-title">PUCRS</span>
                            <span className="timeline-date">2015/2 - 2020/1</span>
                            <span>Bachelor's degree in Computer Science. Certified as top student among the 2020 graduates, by the Brazilian Computer Society.</span>
                        </div>
                    </div>
                </ul>
                <span className="about-category"><strong>Community Involvements</strong></span>
                <ul className="about-list">
                    <div className="timeline-item">
                        <div className="icon-container"><img className="timeline-icon" src={about.toastmastersLogo} alt="pucrs" id="timeline-star"/></div>
                        <div className="timeline-description">
                            <span className="timeline-title">Toastmasters - Vice President of Public Relationships</span>
                            <span className="timeline-date">Apr 2021 - Present</span>
                            <span>Toastmasters International is a nonprofit educational organization that teaches public speaking and leadership skills through a worldwide network of clubs. At Toastmasters, I do volunteering work as a vice president of public relationships.</span>
                        </div>
                    </div>
                </ul>
                <ul className="about-list">
                    <div className="timeline-item">
                        <div className="icon-container"><img className="timeline-icon" src={about.bitiLogo} alt="pucrs" id="timeline-star"/></div>
                        <div className="timeline-description">
                            <span className="timeline-title">Brazilians in Technical Interviews - Mentor</span>
                            <span className="timeline-date">Jan 2021 - Present</span>
                            <span>Managing and mentoring Brazilians in Technical Interviews (BiTI), a study group that focuses on training hard and soft skills for technical interviews.</span>
                        </div>
                    </div>
                </ul>
                <span className="about-category"><strong>And also...</strong></span>
                <div className="languages-section">
                    <div className="languages-col">
                        <span className="timeline-title">I can program in many languages</span>
                        <span>Javascript</span>
                        <span>C#</span>
                        <span>Python</span>
                        <span>C++</span>
                        <span>C</span>
                    </div>
                    <div className="languages-col">
                        <span className="timeline-title">And comunicate in some others</span>
                        <span>Portuguese - Fluent</span>
                        <span>English - Advanced</span>
                        <span>French - Basic</span>
                        <span>Spanish - Basic</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;