import React from 'react'
import { Container, Col, Row } from "reactstrap";

function Headaswan() {
  return (
    <div>
      <div className="page-headingaswan">
        <div className="container">
          <div className="row">
            {/* adddress */}
            <Col md="12">
              <h2 style={{ textAlign: "center", color: "white", fontSize: "40px", marginBottom: "20px", fontWeight: "bolder" }} className="animate__animated animate__heartBeat">We are in Aswan..!!!</h2>

            </Col>
            {/* adddress */}

            {/* ******************************
******************************
****************************** */}

            {/* images show  */}
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
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/aswan/16-09-13_03-51-40.jpg" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/aswan/18-05-10_03-16-55.jpg" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/aswan/150434439_10216763019102639_7020020985283155214_n.jpg" class="img-fluid" alt="" /></div></div>
                            </div>
                          </div>
                          <div class="carousel-item">
                            <div class="row">
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/aswan/1602688779Aswan 4.jpg" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/aswan/6060971841549390304.webp" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/aswan/6060971841549390304.webp" class="img-fluid" alt="" /></div></div>
                            </div>
                          </div>
                          <div class="carousel-item">
                            <div class="row">
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/aswan/movenpick.jpg" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/aswan/السياحة-فى-اسوان-1-810x372.webp" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/aswan/16-09-13_03-51-40.jpg" class="img-fluid" alt="" /></div></div>
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
                  Aswan in the Old Kingdom era, when it represented the southern border of the country. It was also
                  the center of the gathering of armies in the Middle Ages of the kings as they attempted to extend
                  their rule south. It also played a decisive role in fighting the Hyksos. The island of Philae,
                  the home of the god Isis, also attracted the attention of the Ptolemies, so they completed its
                  great temple. The Romans also built temples in the Pharaonic style to get closer to the Egyptians.
                  An example of these temples is a small temple on the island of Philae, erected by Emperor Trajan.</h5>
                <h4 className="animate__animated animate__backInRight"
                  style={{ color: "aliceblue", marginTop: "30px", lineHeight: "30px", fontFamily: "Gill Sans" }}>
                  Let us show you where to go in Aswan ?</h4>


              </div>
            </div>
            {/* article  */}

          </div>
        </div>
      </div>
    </div>
  )
}
export default Headaswan;