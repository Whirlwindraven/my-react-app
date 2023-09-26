import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import managerFc from "../assets/img/manager-fc.png";
import foodForEveryone from "../assets/img/Food-for-everyone.png";
import startUpMatchMaker from "../assets/img/startup-matchmaker.png"
import gogo from "../assets/img/GoGo-Screenshot.png .png"
import joker from "../assets/img/Joker Small.png"
import mvc from "../assets/img/MVC screenshot Small.png"
import researchStudy from "../assets/img/research study Small.png"
import musicPlayer from "../assets/img/music-player.png";
import countdown from "../assets/img/countdown.png";
import tableau from "../assets/img/Tableau1.png";
import bookkeeper from "../assets/img/bookkeeper.png";
import nasa from "../assets/img/Nasa .png";
import c90 from "../assets/img/psy-c90.png";
import proposal from "../assets/img/research proposal.png";
import team from "../assets/img/Diverse team  Small.png";
import collision from "../assets/img/Collision booth Small.png";
import webNotes from "../assets/img/Screenshot for web notes project  Small.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const web_projects = [
    {
      title: "Food For Everyone",
      description: "Food For Everyone is an innovative app that helps people with dietary restrictions and allergies find restaurants that can cater to their needs.",
      imgUrl: foodForEveryone,
    },
    {
      title: "Manager FC",
      description: "Manager-FC is a fullstack application that was created for the purposes of making team management simpler and more efficient.",
      imgUrl: managerFc,
    },
    {
      title: "Startup Matchermaker",
      description: "This is a full-stack web application platform that facilitates connections between startups and investors.",
      imgUrl: startUpMatchMaker,
    },
    {
      title: "The Joker",
      description: "With just a click of button, you can hear a some of the darkest programming jokes.",
      imgUrl: joker,
    },
    {
      title: "Blog App",
      description: "This is a fullstack web application that mimics that of a technology blog where users can add their blogs and their description while also comment on the blogs of others.",
      imgUrl: mvc,
    },
    {
      title: "Nasa",
      description: "A Full stack web app utilizing spaceX APIs to retreive space launches information(MERN stack)",
      imgUrl: nasa,
       },
   
  ];

  const processFlow = [
      {
        title: "Qualitative Research Study",
        description: "Qualitative research study under the supervision of Dr.Gerald Cupchik on the psychology of emotion in athletes",
        imgUrl: c90,
      },
      {
        title: "Quantitative Research Proposal",
        description: "Quantitative research propsal on the effects of emotions on athletic performance",
        imgUrl: proposal,
      },
      {
        title: "Music Player",
        description: "This is a front end music player application done with javascript,css,& html",
        imgUrl: musicPlayer,
      },
      {
        title: "Countdown",
        description: "This is a front end application that counts down a selected date by days, hours, minutes, and seconds.",
        imgUrl: countdown,
      },
      {
        title: "Sales Data Visualization",
        description: "This project was done on Tableau desktop using MySQL & ETL protocols for business trying to track it's sales cycle",
        imgUrl: tableau,
      },
      {
        title: "Book Keeper",
        description: "This is a front end application designed to store tabs of your favorite sites",
        imgUrl: bookkeeper,
      },
      {
        title: "Web Notes",
        description: "A Node.js Note-taker that can be used to write,save, and delete notes. Very efficient to organize your thoughts and activities",
        imgUrl: webNotes,
         },
  ];

  const startUp = [
    {
        title: "GoGo",
        description: "GoGo is a digital platform that bridges the gap between Businesses, Users, and Experiences.",
        imgUrl: gogo,
      },
      {
        title: "Hypothesis testing and research",
        description: "Worked with the University of Toronto professors to validate my idea through a qualitaive research study",
        imgUrl: researchStudy,
      },
      {
          title: "My startup team",
          description: "A team of diverse and unique indiviuals ",
          imgUrl: team,
        },
        {
          title: "Collision pitch",
          description: "I was invited to exhibit my startup at the collision conference where I pitched to VCs and investors",
          imgUrl: collision,
        },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__slideInuP": ""}>
                <h2>Projects</h2>
                <p>Blending a robust foundation in human biology, psychology, and technology, I harness an unparalleled synergy of data analysis, digital marketing, web development, and 360-degree recruitment expertise, underpinned by entrepreneurial grit and a keen sense of business intelligence, positioning me uniquely at the crossroads of tech innovation, human understanding, and strategic business growth. The projects include Full stack web applications, qualitaive research, quantitative research, data visualizations, and process optimizations</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projects Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">My Startup</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          web_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          processFlow.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          startUp.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background-Img"></img>
    </section>
  )
}