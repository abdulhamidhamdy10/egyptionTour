import React from "react";
import { Link } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";
// import 'owl.carousel/dist/assets/owl.carousel.css';
import { Col, Container, Row } from "reactstrap";


function Navbar() {
  const { totalItems } = useCart();
  return (
    <CartProvider >

      <Container>

        <Row>
        
          <nav class="navbar navbar-expand-lg navbar-light fixed-top" >
          <Link to="/" ><img src="./images/Pyramid-PNG-Photos.png" style={{ height: "50px", width: "200px", marginTop: "" }} /></Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar">

              
              <Col md="8" style={{ margin: "auto" }}>
                <ul class="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxHeight: "100px" }}>

                  <li style={{ marginRight: "20px", fontSize: "20px", fontFamily: "serif", fontFamily: "bolder" }} class="nav-item"><Link class="nav-link" to="/AllCairoPage">Cairo</Link></li>
                  <li style={{ marginRight: "20px", fontSize: "20px", fontFamily: "serif", fontFamily: "bolder" }} class="nav-item"><Link class="nav-link" to="/AllAlexPage">Alexandria</Link></li>
                  <li style={{ marginRight: "20px", fontSize: "20px", fontFamily: "serif", fontFamily: "bolder" }} class="nav-item"><Link class="nav-link" to="/AllAswanPage">Aswan</Link></li>
                  <li style={{ marginRight: "20px", fontSize: "20px", fontFamily: "serif", fontFamily: "bolder" }} class="nav-item"><Link class="nav-link" to="/AllLuxorPage">Louxor</Link></li>
                  <li style={{ marginRight: "20px", fontSize: "20px", fontFamily: "serif", fontFamily: "bolder" }} class="nav-item"><Link class="nav-link" to="/AllBookingTravel">Travel Booking</Link></li>
                  <li className="login" style={{ marginRight: "20px", fontSize: "20px", fontFamily: "serif", fontFamily: "bolder" }} class="nav-item"><Link class="nav-link" to="/AllValidation"><i class="fa-solid fa-user" style={{ color: "#0d1421", fontSize: "20px" }}></i> Log in</Link></li>
                  <li className=" card" style={{ marginRight: "20px", fontSize: "20px", fontFamily: "serif", fontFamily: "bolder" }} class="nav-item"><Link class="nav-link" to="/Table"><i class="fa-solid fa-cart-shopping" style={{ color: "black;", fontSize: "20px" }}></i>({totalItems})</Link></li>


                </ul>
              </Col>


            </div>
          </nav>
        </Row>

 

      </Container>



    </CartProvider >
  )
}
export default Navbar;