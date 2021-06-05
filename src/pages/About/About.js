import './About.scss';
import { SiDell } from "react-icons/si";
import { GoPrimitiveDot } from "react-icons/go";
import {ABOUT_DATA} from "../../assets/data/AboutData";
import TechnologiesList from '../../components/TechnologiesList/TechnologiesList';
import { useEffect } from 'react';

function About() {

    let about = ABOUT_DATA;

    function getOffset( el ) {
        var rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.pageXOffset,
            top: rect.top + window.pageYOffset,
            width: rect.width || el.offsetWidth,
            height: rect.height || el.offsetHeight
        };
    }

    function connectElements() {
        document.querySelectorAll('[id^="timeline-line"]').forEach(el => {
            el?.remove();
        });
        document.querySelectorAll('[id^="timeline-start"]').forEach((el, index) => {
            document.getElementById('timeline-line')?.remove();
            var thickness = 2;
            var color= "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 2%, #e02657 20%, #e02657 100%)";
            var off1 = getOffset(document.getElementById('timeline-start' + index));
            var off2 = getOffset(document.getElementById('timeline-end' + index));
            var x1 = off1.left + off1.width/2;
            var y1 = off1.top + off1.height;
            var x2 = x1;
            var y2 = off2.top + off2.height/2;
            var length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
            var cx = ((x1 + x2) / 2) - (length / 2);
            var cy = ((y1 + y2) / 2) - (thickness / 2);
            var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
            var htmlLine = "<div id='timeline-line" + index + "' style='padding:0px; margin:0px; height:" + thickness + "px; background:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);' />";
            document.body.innerHTML += htmlLine;
        });
    }

    useEffect(() => {
        document.fonts.onloadingdone= () => {connectElements()};
        setTimeout(() =>{
            connectElements();
        }, 200);
        window.addEventListener('resize', connectElements);
    });

    return(
        <div>
            <div className="about-headline">
                <div className="profile-photo-container"><img className="profile-photo-img" src={about.profilePhoto} alt="profile-photo"/></div>
                <h1 className="about-title">{about?.title}</h1>
                <p className="about-text">{about?.description}</p>
            </div>
            <div className="section align-left">
                <span><strong>What I do</strong></span>
                <p className="normal-text">Subtitle about my work experience and about what technologies I know and use in my projects or work.</p>
                <TechnologiesList />
            </div>
            <div className="align-left">
                <span><strong>My Experience</strong></span>
                <ul className="about-list">
                    {/* <hr width="1" size="500"/> */}
                    <div className="timeline-item">
                        <div className="icon-container"><SiDell className="timeline-icon" id="timeline-start0" /></div>
                        <div className="timeline-description">
                            <span className="timeline-title">Dell</span>
                            <span className="timeline-date">Ago 2018 - Present</span>
                            <span>Working as a full stack developer, using web development and artificial intelligence in an internationally distributed team and adopting agile practices.</span>
                        </div>
                    </div>
                    <li className="timeline-item">
                        <GoPrimitiveDot className="timeline-dot" />
                        <div className="timeline-description">
                            <span className="timeline-title">Software Engineer</span>
                            <span className="timeline-date">Set 2020 - Present</span>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <GoPrimitiveDot className="timeline-dot" id="timeline-end0" />
                        <div className="timeline-description">
                            <span className="timeline-title">Software Engineer Internship</span>
                            <span className="timeline-date">Ago 2019 - Set 2020</span>
                        </div>
                    </li>
                </ul>
                <ul className="about-list">
                    <div className="timeline-item">
                        <div className="icon-container"><img className="timeline-icon" src={about.pucrsLogo} onLoad={connectElements()} alt="pucrs" id="timeline-start1"/></div>
                        <div className="timeline-description">
                            <span className="timeline-title">PUCRS</span>
                            <span className="timeline-date">Ago 2018 - Present</span>
                            <span>Working as a full stack developer, using web development and artificial intelligence in an internationally distributed team and adopting agile practices.</span>
                        </div>
                    </div>
                    <li className="timeline-item">
                        <GoPrimitiveDot className="timeline-dot" id="timeline-end1" />
                        <div className="timeline-description">
                            <span className="timeline-title">Undergraduate Student Researcher</span>
                            <span className="timeline-date">Ago 2018 - Ago 2018</span>
                        </div>
                    </li>
                </ul>
                <span className="about-category"><strong>Education</strong></span>
                <ul className="about-list">
                    <div className="timeline-item">
                        <div className="icon-container"><img className="timeline-icon" src={about.pucrsLogo} alt="pucrs" id="timeline-star"/></div>
                        <div className="timeline-description">
                            <span className="timeline-title">PUCRS</span>
                            <span className="timeline-date">Apr 2021 - Present</span>
                            <span>Working as a full stack developer, using web development and artificial intelligence in an internationally distributed team and adopting agile practices.</span>
                        </div>
                    </div>
                </ul>
                <span className="about-category"><strong>Community Involvements</strong></span>
                <ul className="about-list">
                    <div className="timeline-item">
                        <div className="icon-container"><img className="timeline-icon" src={about.toastmastersLogo} alt="pucrs" id="timeline-star"/></div>
                        <div className="timeline-description">
                            <span className="timeline-title">Toastmasters</span>
                            <span className="timeline-date">Apr 2021 - Present</span>
                            <span>Working as a full stack developer, using web development and artificial intelligence in an internationally distributed team and adopting agile practices.</span>
                        </div>
                    </div>
                </ul>
                <ul className="about-list">
                    <div className="timeline-item">
                        <div className="icon-container"><img className="timeline-icon" src={about.bitiLogo} alt="pucrs" id="timeline-star"/></div>
                        <div className="timeline-description">
                            <span className="timeline-title">Brazilians in Technical Interviews</span>
                            <span className="timeline-date">Ago 2018 - Present</span>
                            <span>Working as a full stack developer, using web development and artificial intelligence in an internationally distributed team and adopting agile practices.</span>
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