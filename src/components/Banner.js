import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () =>{
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl= {7}>
                        <span className="tagbline">Fady's Portfolio</span>
                        <h1>{`Hi I'm Fady`} <span className="wrap">The jack of all trades</span></h1>
                        <p>lorem</p>
                        <button onClick={() => console.log('hellos') }>Connect with me <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl= {5}>
                        <img src={headerImg} alt="Header" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}