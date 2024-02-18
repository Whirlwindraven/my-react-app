import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import managerFc from "../assets/img/manager-fc.png";
import foodForEveryone from "../assets/img/Food-for-everyone.png";
import startUpMatchMaker from "../assets/img/startup-matchmaker.png";
import gogo from "../assets/img/GoGo-Screenshot.png .png";
import joker from "../assets/img/Joker Small.png";
import mvc from "../assets/img/MVC screenshot Small.png";
import researchStudy from "../assets/img/research study Small.png";
import musicPlayer from "../assets/img/music-player.png";
import cert20 from "../assets/img/cert20.png";
import cert19 from "../assets/img/cert19.png";
import cert18 from "../assets/img/cert18.png";
import cert17 from "../assets/img/cert17.png";
import cert16 from "../assets/img/cert16.png";
import cert15 from "../assets/img/cert15.png";
import cert14 from "../assets/img/cert14.png";
import cert13 from "../assets/img/cert13.png";
import cert12 from "../assets/img/cert12.png";
import cert11 from "../assets/img/cert11.png";
import cert10 from "../assets/img/cert10.png";
import cert9 from "../assets/img/cert9.png";
import cert8 from "../assets/img/cert8.png";
import cert7 from "../assets/img/cert7.png";
import cert6 from "../assets/img/cert6.png";
import cert5 from "../assets/img/cert5.png";
import cert2 from "../assets/img/cert 2.png";
import cert from "../assets/img/cert.png";
import cert4 from "../assets/img/cert4.png";
import bachelors from "../assets/img/bachelors.png";
import countdown from "../assets/img/countdown.png";
import tableau from "../assets/img/Tableau1.png";
import bookkeeper from "../assets/img/bookkeeper.png";
import sportStudy from "../assets/img/sport_research.png";
import processFlowGlobe from "..//assets/img/Support process example.png";
import retirementLeave from "../assets/img/Retirement_processflow.png";
import preOnbarding from "../assets/img/pre_onboarding.png";
import temp from "../assets/img/Temp_onboarding .png";
import excel from "../assets/img/Excel dashboard.png";
import nasa from "../assets/img/Nasa .png";
import review from "../assets/img/process_review.png";
import cert3 from "../assets/img/cert3.png";
import researchPres from "../assets/img/Undegrad_science.png";
import c90 from "../assets/img/psy-c90.png";
import columbia from "../assets/img/columbia_cert.png";
import microMasters from "../assets/img/microMasters.png";
import leaveFlow from "../assets/img/leave_workflow.png"
import proposal from "../assets/img/research proposal.png";
import team from "../assets/img/Diverse team  Small.png";
import collision from "../assets/img/Collision booth Small.png";
import dash1 from "../assets/img/Executive_dash.png";
import dash2 from "../assets/img/Exectuive_dash2.png"
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
    {
      title: "Excel Dashboard",
      description: "This is an excel dashboard done with a combination of pivot tables, slicers, and graphs",
      imgUrl: excel,
    },
    {
      title: "Onboarding Process flow for SnowGlobe",
      description: "This is an onboarding process flow visualization using Lucidchart, made as a proposal for how the movement should flow",
      imgUrl: processFlowGlobe,
      },
      {
        title: "Undergraduate Science Presentation",
        description: "This was a final year presentation done on for the course of animal locomotion in which I demonstrated the muscle effects of micro-gravity on rats",
        imgUrl: researchPres,
        },
        {
          title: "Onboarding process flow",
          description: "This was an onboarding process flow proposal done for a government client using Lucidchart",
          imgUrl: preOnbarding,
          },
          {
            title: "Evolution of sports psychology",
            description: "Undergraduate qualitative research paper done under the supervision of Dr.Gerald Cupchik",
            imgUrl: sportStudy,
            },
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
      {
        title: "Executive Dashboard sample",
        description: "This is a Sales dashboard made using Looker Studio, I utlized dummy data to create visializations",
        imgUrl: dash1,
         },
      {
        title: "Captivate Dashboard",
        description: "A Dashboard sample I created for Captivate, using pesudo data to exercise my data visualization muscles",
        imgUrl: dash2,
        },
        {
          title: "Leave Process flow",
          description: "This was a leave prcoess flow visualization done for a government client using Lucidchart",
          imgUrl: leaveFlow,
          },
       {
         title: "Retirement process flow",
         description: "This was a retirement prcoess flow visualization done for a government client using Lucidchart",
         imgUrl: retirementLeave,
         },
         {
          title: "Temp-Onboarding process flow",
          description: "This was a Temp-onbording prcoess flow proposal visualization done for a government client using Lucidchart",
          imgUrl: temp,
          },
          {
            title: "SnowGlobe Process Review",
            description: "A hypothetical process review of a global entity headquartered in Spain, on the onboarding process. What to consider and what could be optimized",
            imgUrl: review,
            },
  ];

  const startUp = [
    {
        title: "Executive Education, Programing",
        description: "Columbia University, 6 months bootcamp in full stack web development using HTML, Javascript, Node.js, CSS, express.js, handlebars, GraphQL, SQL, MySQL, Insomnia, Postman, React.js, Jquery, APIs, etc...",
        imgUrl: columbia,
      },
      {
        title: "Bachelors of Science, Life Sciences",
        description: "Honors Bachelors of Scince in life sciences, majoring in both Human Biology & Psychology while also partaking in the new venture business program",
        imgUrl: bachelors,
      },
      {
        title: "I/O Micro-Masters",
        description: "A micro-masters consisting of 5 graduate level courses in Industrial Organizational Psychology",
        imgUrl: microMasters,
      },
      {
        title: "Python Data Structures & Algorithms + LEETCODE Exercises",
        description: "Udemy Certification in data structutres, understanding binary search trees, graphs, stacks & queues, decision tress, recursion, etc...",
        imgUrl: cert,
      },
      {
        title: "Complete Data Wrangling & Data Visualisation With Python",
        description: "Udemy Certification in data manipulation using python",
        imgUrl: cert2,
      },
      {
        title: "Financial Analysis Mastery for Banking and Finance",
        description: "Udemy Certification in financial analysis where I worked on evaluting balance sheets, income statements, and cashflow statements on the SEC",
        imgUrl: cert3,
      },
    
      {
        title: "MBA ASAP Corporate Finance Fundamentals for Career Success",
        description: "Udemy Certification in the fundementals of corporate finance & accounting",
        imgUrl: cert4,
      },
      {
        title: "Statistics & Mathematics for Data Science & Data Analytics ",
        description: "Udemy Certification in the fundemental statistics required for data analysis",
        imgUrl: cert5,
      },
      {
        title: "Python for Data Science and Machine Learning Bootcamp ",
        description: "Udemy Certification in the in data analysis using python, numpy, scikitlearn, pandas, matplotlib, seaborn, cuflinks, machine learning, & data visualization",
        imgUrl: cert6,
      },
      {
        title: "The Psychology of Criminal Justice",
        description: "Online certification offered by the University of Queensland",
        imgUrl: cert7,
      },
      {
        title: "Recruiting, Hiring, and Onboarding Employees",
        description: "Online certification offered by the Univerisyt of Minnesota",
        imgUrl: cert8,
      },
      {
        title: "Neuroscience and Neuroimaging Specialization",
        description: "Online certification offered by the John Hopkins University, constituting 4 courses",
        imgUrl: cert9,
      },
      {
        title: "Managing Employee Performance",
        description: "Online certification offered by the Univerisyt of Minnesota",
        imgUrl: cert10,
      },
      {
        title: "Preparing to Manage Human Resources",
        description: "Online certification offered by the Univerisyt of Minnesota",
        imgUrl: cert11,
      },
      {
        title: "Performance and Motivation at Work",
        description: "Online certification offered by the Univerisyt of Canterbury",
        imgUrl: cert12,
      },
      {
        title: "Supporting Employee Wellbeing",
        description: "Online certification offered by the Univerisyt of Canterbury",
        imgUrl: cert13,
      },
      {
        title: "Recruiting and Selecting the Right Person",
        description: "Online certification offered by the Univerisyt of Canterbury",
        imgUrl: cert14,
      },
      {
        title: "Organizational Change & Innovation",
        description: "Online certification offered by the Univerisyt of Canterbury",
        imgUrl: cert15,
      },
      {
        title: "Leadership for Contemporary Organizations",
        description: "Online certification offered by the Univerisyt of Canterbury",
        imgUrl: cert16,
      },
      {
        title: "Google Business Intelligence",
        description: " non-credit Professional Certificate from google consisting of 3 courses, Foundations of Business Intelligence, The Path to Insights: Data Models and Pipelines Decisions, Decisions: Dashboards and Reports",
        imgUrl: cert17,
      },
      {
        title: "Complete SQL and Databases Bootcamp ",
        description: "Udemy Certificate in SQL, Postgres, & MySQL",
        imgUrl: cert18,
      },
      {
        title: "JavaScript,the Advanced Concepts",
        description: "Udemy Certificate in Javascript",
        imgUrl: cert19,
      },
      {
        title: " Complete NodeJS Developer (GraphQL, MongoDB, + more)",
        description: "Udemy Certificate in full stack web development, mostly backend",
        imgUrl: cert20,
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
                      <Nav.Link eventKey="third">Education & Certs</Nav.Link>
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