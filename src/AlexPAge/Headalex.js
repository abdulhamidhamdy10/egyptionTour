import React from 'react'
import "../App.css";
import { Container, Col, Row } from "reactstrap";

function Headalex() {
  return (
    <div>
      <div className="page-headingalex">
        <div className="container">
          <div className="row">
            {/* address  */}
            <Col md="12">
              <h2 style={{ textAlign: "center", color: "white", fontSize: "40px", marginBottom: "20px", fontWeight: "bolder" }} className="animate__animated animate__heartBeat">We are in Alexandria..!!!</h2>

            </Col>
            {/* address  */}


{/* *************************************
*************************************
************************************* */}


            {/* Images  */}

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
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <div class="row">
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/alex/3995-11.jpg" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/alex/166683-3.jpg" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/alex/Allavailablesizes-Alexandria-Flickr-PhotoSharing_1283523700987.jpg" class="img-fluid" alt="" /></div></div>
                            </div>
                          </div>
                          <div class="carousel-item">
                            <div class="row">
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/alex/ce3b87cb354ff21e34128c1d88c7c10c.jpg" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/alex/e5bdb475fa51af543852a460cdf47a82.webp" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/alex/fatakat.org_160025831929621.jpg" class="img-fluid" alt="" /></div></div>
                            </div>
                          </div>
                          <div class="carousel-item">
                            <div class="row">
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/alex/166683-3.jpg" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/alex/ce3b87cb354ff21e34128c1d88c7c10c.jpg" class="img-fluid" alt="" /></div></div>
                              <div class="col-md-4"><div class="img-box"><img style={{ height: "300px" }} src="/images/places/alex/fatakat.org_160025831929621.jpg" class="img-fluid" alt="" /></div></div>
                            </div>
                          </div>
                        </div>

                        {/* control images */}
                        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                          <i class="fa fa-chevron-left"></i>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                          <i class="fa fa-chevron-right"></i>
                        </a>
                        {/* control images */}

                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/* Images  */}


{/* *************************************
*************************************
************************************* */}

            {/* article  */}
            <div class="col-lg-12">
              <div class="top-text header-text">
                <h5 className="animate__animated animate__backInLeft"
                  style={{ color: "aliceblue", marginTop: "30px", lineHeight: "30px", fontFamily: "Gill Sans", textAlign: "center" }}>
                  Alexandria is the second capital of Egypt and was its capital in the past. It is the capital of
                  the Alexandria Governorate and its largest city. It is located on the Mediterranean coast,
                  about 55 km long northwest of the Nile Delta, on an area of 2523 km². It is bordered to the north
                  by the Mediterranean Sea, and to the south by Lake Mariout up to 71 km. On the Cairo-Alexandria
                  Desert Road, it is bordered to the east by Abu Qir Bay and the city of Idku in Beheira Governorate,
                  and to the west until kilometer 36.30 on the international coastal road and Burj Al Arab Center..</h5>
                <h4 className="animate__animated animate__backInRight"
                  style={{ color: "aliceblue", marginTop: "30px", lineHeight: "30px", fontFamily: "Gill Sans" }}>
                  Let us show you where to go in Alexandria ?</h4>


              </div>
            </div>
            {/* article  */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Headalex;