import { Container, Row } from "react-bootstrap"

export const Banner = () =>{
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl= {7}>
                        <span className="tagbline">Fady's Portfolio</span>
                        <h1>{`Hi I'm Fady`} <span className="wrap">The jack of all trades</span></h1>
                        <p>lorem</p>
                        <button onClick={() => }>Connect with me </button>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}