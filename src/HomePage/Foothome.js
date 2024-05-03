import React from "react";
import { Container, Row, Col } from "reactstrap";


function Foothome() {
  return (
    <div style={{}}>
      <hr></hr>
      <div class="footer" style={{ marginTop: "50px" }}>
        <Container>
          <Row>
            <Col md="4 mt-5">
            </Col>
          </Row>

          {/* location  */}
          <Row>
            <Col md="4 text-center">
              <i class="fa-solid fa-location-dot" style={{  marginBottom: "20px" }}></i>
              <h3 style={{  marginBottom: "20px" }}>ADDRESS</h3>
              <h5>Nasr City,Cairo,Egypt</h5>
            </Col>
            <Col md="4 text-center">
              <i class="fa-solid fa-envelope" style={{  marginBottom: "20px" }}></i>
              <h3 style={{ marginBottom: "20px" }}>EMAIL</h3>
              <h5>egyptionTour@yahoo.com</h5>
            </Col>
            <Col md="4 text-center">
              <i class="fa-solid fa-mobile-screen" style={{  marginBottom: "20px" }}></i>
              <h3 style={{  marginBottom: "20px" }}>PHONE</h3>
              <h5>+1 (555) 902-8832</h5>
            </Col>
          </Row>
          {/* location  */}

{/* ***********************************
***********************************
*********************************** */}

{/* social media  */}
          <Row>
            <Col md="12 mt-5 mb-5 text-center">

              <i class="fa-brands fa-facebook "
                style={{ color: "#000000", backgroundColor: "#ffbb00", padding: "3px", borderRadius: "50%", marginRight: "30px" }}></i>
              <i class="fa-brands fa-twitter"
                style={{ color: "#000000", backgroundColor: "#ffbb00", padding: "3px", borderRadius: "50%", marginRight: "30px" }}></i>
              <i class="fa-brands fa-instagram"
                style={{ color: "#000000", backgroundColor: "#ffbb00", padding: "3px", borderRadius: "50%", marginRight: "30px" }}></i>
            </Col>
          </Row>
{/* social media  */}

{/* ***********************************
***********************************
*********************************** */}
          <hr className="m-auto" style={{ width: "50%" }}></hr>

          
          <Row>
            <Col md="12 mt-2 mb-2 text-center">
              <m>Copyright © 2084 Company Name</m>
            </Col>
          </Row>
        </Container>
      </div>


    </div>
  )
}
export default Foothome;