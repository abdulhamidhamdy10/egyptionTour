import React from 'react'
import "../App.css";
import { Container, Col, Row } from "reactstrap";

function Headluxor() {
  return (
    <div>
      <div className="page-headinglouxr">
        <div className="container">
          <div className="row">
            {/* Address  */}
            <Col md="12">
              <h2 style={{ textAlign: "center", color: "white", fontSize: "40px", marginBottom: "20px", fontWeight: "bolder" }} className="animate__animated animate__heartBeat">We are in Luxor..!!!</h2>
              {/* Address  */}


              {/* ******************************
******************************
****************************** */}

              {/* images show  */}
            </Col>
            <div className="col-md-12 animate__animated animate__backInRight">
              <div class="container-xl">
                <div class="row">
                  <div class="col-md-12  mx-auto">
                    <div className="carsol">
                      <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">


                        <ol class="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                          <li data-target="#myCarousel" data-slide-to="1"></li>
                          <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        {/* <!-- Wrapper for carousel items --> */}
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <div class="row">
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/cairo/visit-the-best-in-cairo.jpg" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/cairo/th.jpg" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/aswan/150434439_10216763019102639_7020020985283155214_n.jpg" class="img-fluid" alt="" /></div></div>
                            </div>
                          </div>
                          <div class="carousel-item">
                            <div class="row">
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/aswan/1602688779Aswan 4.jpg" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/aswan/movenpick.jpg" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/alex/e5bdb475fa51af543852a460cdf47a82.webp" class="img-fluid" alt="" /></div></div>
                            </div>
                          </div>
                          <div class="carousel-item">
                            <div class="row">
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/alex/3995-11.jpg" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/alex/166683-3.jpg" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/alex/fatakat.org_160025831929621.jpg" class="img-fluid" alt="" /></div></div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Carousel controls --> */}
                        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                          <i class="fa fa-chevron-left"></i>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                          <i class="fa fa-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/* images show  */}


            {/* ******************************
******************************
****************************** */}

            {/* article  */}

            <div class="col-lg-12">
              <div class="top-text header-text">
                <h5 className="animate__animated animate__backInLeft"
                  style={{ color: "aliceblue", marginTop: "30px", lineHeight: "30px", fontFamily: "Gill Sans", textAlign: "center" }}>
                  Luxor is called the City of Hundred Gates or the City of the Sun. It was previously known as Thebes.
                  It is the capital of Egypt in the Pharaonic era. It is located on the banks of the Nile River, which
                  divides it into two parts: the eastern mainland and the western mainland. It is the capital of Luxor
                  Governorate in southern Egypt. It is located between latitudes 25-26 north. 32-33 east,
                  and is about 670 km away from the Egyptian capital, Cairo.</h5>
                <h4 className="animate__animated animate__backInRight"
                  style={{ color: "aliceblue", marginTop: "30px", lineHeight: "30px", fontFamily: "Gill Sans" }}>
                  Let us show you where to go in Luxor ?</h4>


              </div>
            </div>
            {/* article  */}

          </div>
        </div>
      </div>
    </div>
  )
}
export default Headluxor;