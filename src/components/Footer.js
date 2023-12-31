import { Container, Row, Col } from "react-bootstrap";
import rocky from "../assets/img/Rocky.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import gitHub from "../assets/img/github.svg";
import gmail from "../assets/img/icons8-gmail.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={rocky} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/fady-khalil-721b7b194/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Whirlwindraven"><img src={gitHub} alt="Icon" /></a>
              <a href="mailto:fadysherif1998@gmail.com"><img src={gmail} alt="icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}