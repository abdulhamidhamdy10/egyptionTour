import React from "react";
import { Container, Col, Row } from "reactstrap";
import "../App.css";

function Headcairo() {

  return (
    <div>

      <div class="page-heading">
        <div class="container">
          <div class="row">
            {/* address  */}
            <Col md="12">
              <h2 style={{ textAlign: "center", color: "white", fontSize: "40px", marginBottom: "20px", fontWeight: "bolder" }} className="animate__animated animate__heartBeat">We are in Cairo..!!!</h2>

            </Col>
            {/* address  */}


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
                      {/* <!-- Carousel indicators --> */}
                   
                      <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                      </ol>
                      {/* <!-- Wrapper for carousel items --> */}
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div class="row">
                            <div class="col-md-4"><div class="img-box"><img style={{height : "300px"}} src="/images/places/cairo/0-123.jpg" class="img-fluid" alt="" /></div></div>
                            <div class="col-md-4"><div class="img-box"><img style={{height : "300px"}} src="/images/places/cairo/Azhar_Park_Cairo_View.jpg" class="img-fluid" alt="" /></div></div>
                            <div class="col-md-4"><div class="img-box"><img style={{height : "300px"}} src="/images/places/cairo/visit-the-best-in-cairo.jpg" class="img-fluid" alt="" /></div></div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="row">
                            <div class="col-md-4"><div class="img-box"><img style={{height : "300px"}} src="/images/places/cairo/خروجات القاهرة.jpg" class="img-fluid" alt="" /></div></div>
                            <div class="col-md-4"><div class="img-box"><img style={{height : "300px"}} src="/images/places/cairo/th.jpg" class="img-fluid" alt="" /></div></div>
                            <div class="col-md-4"><div class="img-box"><img style={{height : "300px"}} src="/images/places/cairo/visit-the-best-in-cairo.jpg" class="img-fluid" alt="" /></div></div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="row">
                            <div class="col-md-4"><div class="img-box"><img style={{height : "300px"}} src="/images/places/cairo/th.jpg" class="img-fluid" alt="" /></div></div>
                            <div class="col-md-4"><div class="img-box"><img style={{height : "300px"}} src="/images/places/cairo/visit-the-best-in-cairo.jpg" class="img-fluid" alt="" /></div></div>
                            <div class="col-md-4"><div class="img-box"><img style={{height : "300px"}} src="/images/places/cairo/القاهرة.jpg" class="img-fluid" alt="" /></div></div>
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
                  Cairo is an ancient city that has kept pace with development until it has also
                  become a modern capital. It is considered one of the largest cities in the Middle
                  East and has traffic and noise problems to prove it. But as long as you're not
                  looking for isolation, Cairo - the city of a
                  thousand minarets - is a great place to explore Egyptian history and civilization.</h5>
                <h4 className="animate__animated animate__backInRight"
                  style={{ color: "aliceblue", marginTop: "30px", lineHeight: "30px", fontFamily: "Gill Sans" }}>
                  Let us show you where to go in Cairo ?</h4>


              </div>
            </div>
{/* article  */}



          </div>
        </div>
      </div>
    </div>
  )
}
export default Headcairo;