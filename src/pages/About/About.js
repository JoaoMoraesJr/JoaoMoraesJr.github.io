import './About.scss';
import { SiDell } from "react-icons/si";
import {ABOUT_DATA} from "../../assets/data/AboutData";
import TechnologiesList from '../../components/TechnologiesList/TechnologiesList';
import { useEffect } from 'react';
import { BsArrowReturnRight } from "react-icons/bs";
import ReactGA from "react-ga4";
import SimpleFooter from '../../components/SimpleFooter/SimpleFooter';

function About() {

    let about = ABOUT_DATA;

    useEffect(() => {
        window.scrollTo(0, 0);
        ReactGA.send({ hitType: "pageview", page: "/about", title:"About" });
    });

    // function sendClickSteamInfo () {
    //     ReactGA.event({
    //       category: "Click",
    //       action: "Click on Steam",
    //       label: "About"
    //     });
    // };

    return(
        <div className="about-page page-margin">
            <div className="about-headline">
                <div className="about-picture-container">
                    <div className="profile-photo-container about-picture">
                        <img className="profile-photo-img" src={about.profilePhoto} alt="profile"/>
                    </div>
                </div>
                <div>
                    <h1 className="about-title">{about?.title}</h1>
                    <div className="about-text-container">
                        <p className="about-text">I'm João Moraes, born in Porto Alegre and raised in Guaíba, Brazil. Since my childhood, technology has always played a key role in my life, driving both my career and interests. I hold a degree in <b>Computer Science</b> from PUCRS and work as a <b>Software Engineer</b>, focusing on tackling new challenges and creating impactful solutions.</p>
                        <p className="about-text">As a problem-solver driven by innovation, I’m passionate about turning ideas into practical implementations, which I have achieved multiple times through my personal projects. In addition, throughout my career, I have developed strong <b>leadership</b> skills by guiding teams through complex projects and fostering a collaborative environment. I also advocate for <b>diversity and inclusion</b>, empowering everyone to participate in solving real-world challenges.</p>
                    </div>
                </div>
            </div>
            <div className="section align-left">
                <h2>What I do</h2>
                <p className="normal-text">There are three main areas that I like to focus professionally.</p>
                <TechnologiesList />
            </div>
            <div className="align-left page-padding">
                <h2>My Experience</h2>
                <ul className="about-list">
                    <div className="timeline-item">
                        <div className="icon-container"><img className="timeline-icon" style={{borderRadius: 15, minWidth: 70, maxWidth: 70}} src={about.cbLogo} alt="pucrs" id="timeline-star"/></div>
                        <div className="timeline-description">
                            <span className="timeline-title">Coinbase</span>
                            <span className="timeline-date">Ago 2018 - Present</span>
                            <span>Working as a full-stack software engineer in an internationally distributed team.</span>
                            {/* <span>Working as a full stack developer, using web development and artificial intelligence in an internationally distributed team and adopting agile practices.</span> */}
                        </div>
                    </div>
                    <li className="timeline-bullet">
                        <BsArrowReturnRight className="timeline-dot primary-color" />
                        <div className="timeline-description">
                            <span className="timeline-title">Software Engineer</span>
                            <span className="timeline-date">Jul 2025 - Present</span>
                        </div>
                    </li>
                </ul>
                <ul className="about-list">
                    <div className="timeline-item">
                        <div className="icon-container"><SiDell className="timeline-icon" id="timeline-start0" style={{background: '#e2e5e9ff', padding: 5, borderRadius: 10, minWidth: 60, maxWidth: 60}} /></div>
                        <div className="timeline-description">
                            <span className="timeline-title">Dell</span>
                            <span className="timeline-date">Ago 2018 - Jul 2025</span>
                            <span>Worked as a tech lead in an internationally distributed team that creates and maintains solutions for legal practice areas. Leading the development of multiple full-stack software applications, with web development and AI, as well as using engineering best practices like cybersecurity scans, testing, code review and CI/CD pipelines to achieve high code quality.</span>
                            {/* <span>Working as a full stack developer, using web development and artificial intelligence in an internationally distributed team and adopting agile practices.</span> */}
                        </div>
                    </div>
                    <li className="timeline-bullet">
                        <BsArrowReturnRight className="timeline-dot primary-color" />
                        <div className="timeline-description">
                            <span className="timeline-title">Senior Software Engineer</span>
                            <span className="timeline-date">Apr 2024 - Jul 2025</span>
                        </div>
                    </li>
                    <li className="timeline-bullet">
                        <BsArrowReturnRight className="timeline-dot primary-color" />
                        <div className="timeline-description">
                            <span className="timeline-title">Software Engineer II</span>
                            <span className="timeline-date">May 2022 - Apr 2024</span>
                        </div>
                    </li>
                    <li className="timeline-bullet">
                        <BsArrowReturnRight className="timeline-dot primary-color" />
                        <div className="timeline-description">
                            <span className="timeline-title">Software Engineer I</span>
                            <span className="timeline-date">Set 2020 - May 2022</span>
                        </div>
                    </li>
                    <li className="timeline-bullet">
                        <BsArrowReturnRight className="timeline-dot primary-color" id="timeline-end0" />
                        <div className="timeline-description">
                            <span className="timeline-title">Software Engineer Internship</span>
                            <span className="timeline-date">Ago 2019 - Set 2020</span>
                        </div>
                    </li>
                </ul>
                <ul className="about-list">
                    <div className="timeline-item">
                        <div className="icon-container"><img className="timeline-icon" style={{minWidth: 70, maxWidth: 70}} src={about.pucrsLogo} alt="pucrs" id="timeline-start1"/></div>
                        <div className="timeline-description">
                            <span className="timeline-title">PUCRS</span>
                            <span className="timeline-date">Ago 2018 - Ago 2019</span>
                            <span>Worked at the SMArT Laboratory, contributing to the research and development of an AI-powered mobile application with a focus on applied intelligence and usability.</span>
                            <span>The work aimed to assist blind and visually impaired users through intelligent accessibility solutions.</span>
                        </div>
                    </div>
                    <li className="timeline-bullet">
                        <BsArrowReturnRight className="timeline-dot primary-color" id="timeline-end1" />
                        <div className="timeline-description">
                            <span className="timeline-title">Undergraduate Student Researcher - SMArT Lab</span>
                            <span className="timeline-date">Ago 2018 - Ago 2019</span>
                        </div>
                    </li>
                </ul>
                <h2>Education</h2>
                <ul className="about-list">
                <div className="timeline-item">
                        <div className="icon-container"><img className="timeline-icon" style={{marginTop: 10}} src={about.xpeLogo} alt="xpe" id="timeline-star"/></div>
                        <div className="timeline-description">
                            <span className="timeline-title">XPE</span>
                            <span className="timeline-date">Feb 2024 - Jan 2025</span>
                            <span>Postgraduate Diploma in Software and Solutions Architecture.</span>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="icon-container"><img className="timeline-icon" style={{minWidth: 70, maxWidth: 70}} src={about.pucrsLogo} alt="pucrs" id="timeline-star"/></div>
                        <div className="timeline-description">
                            <span className="timeline-title">PUCRS</span>
                            <span className="timeline-date">Aug 2015 - Jul 2020</span>
                            <span>Bachelor's degree in Computer Science. Certified as top student among the 2020 graduates, by the Brazilian Computer Society.</span>
                        </div>
                    </div>
                </ul>
                <h2>Community Involvements</h2>
                <ul className="about-list">
                    <div className="timeline-item">
                        <div className="icon-container"><img className="timeline-icon" src={about.toastmastersLogo} alt="toastmasters" id="timeline-star"/></div>
                        <div className="timeline-description">
                            <span className="timeline-title">Toastmasters - Vice President of Public Relationships</span>
                            <span className="timeline-date">Apr 2021 - Jun 2023</span>
                            <span>Toastmasters International is a nonprofit educational organization that teaches public speaking and leadership skills through a worldwide network of clubs. At Toastmasters, I volunteered as Vice President of Public Relations.</span>
                        </div>
                    </div>
                </ul>
                <ul className="about-list">
                    <div className="timeline-item">
                        <div className="icon-container"><img className="timeline-icon" src={about.bitiLogo} alt="biti" id="timeline-star"/></div>
                        <div className="timeline-description">
                            <span className="timeline-title">Brazilians in Technical Interviews - Mentor</span>
                            <span className="timeline-date">Jan 2021 - Jan 2022</span>
                            <span>Managed and mentored Brazilians in Technical Interviews (BiTI), a study group that focused on training hard and soft skills for technical interviews</span>
                        </div>
                    </div>
                </ul>
                <h2>And also...</h2>
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
                        <span>English - Fluent</span>
                        <span>Portuguese - Fluent</span>
                        <span>French - Basic</span>
                        <span>Spanish - Basic</span>
                    </div>
                </div>
            </div>
            <SimpleFooter></SimpleFooter>
        </div>
    )
}

export default About;
