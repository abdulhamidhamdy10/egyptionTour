import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import "../App.css"

function Placesluxor() {
  return (
    <div>
      {/* karnak  */}
      <div className="karnak span3 wow bounce">
        <div className="container" style={{ marginTop: "100px", paddingTop: "30px", paddingBottom: "30px", borderRadius: "30px" }}>
          <div className="row">
            <div className="col-md-6">
              <div id="karnakPhoto" className="carousel slide carousel-fade img-fluid" data-mdb-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button type="button" data-mdb-target="#karnakPhoto" data-mdb-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-mdb-target="#karnakPhoto" data-mdb-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-mdb-target="#karnakPhoto" data-mdb-slide-to="2"
                    aria-label="Slide 3"></button>
                  <button type="button" data-mdb-target="#karnakPhoto" data-mdb-slide-to="3"
                    aria-label="Slide 4"></button>

                </div>
                <div className="carousel-inner" style={{ borderRadius: "50%", border: "4px solid #ffbb00 ", marginTop: "50px" }}>
                  <div className="carousel-item active">
                    <img src="./images/luxor/karnak/Karnak-Hypostyle3.jpg" className="d-block w-100 img-fluid" alt="Wild Landscape"
                      style={{ height: "500px", borderRadius: "50%" }} />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/luxor/karnak/luxor-1.jpg" className=" img-fluid" alt="Camera"
                      style={{ height: "500px", borderRadius: "50%" }} />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/luxor/karnak/luxor-and-karnak-temples-1024x684.jpg"
                      className="d-block w-100" alt="Exotic Fruits" style={{ height: "500px", borderRadius: "50%" }} />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./images/luxor/karnak/معبد-الكرنك-4.jpg"
                      className="d-block w-100" alt="Exotic Fruits" style={{ height: "500px", borderRadius: "50%" }} />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-mdb-target="#karnakPhoto"
                  data-mdb-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#karnakPhoto"
                  data-mdb-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <Col md="1"></Col>

            <div className="col-md-5" style={{ fontFamily: "serif", backgroundColor: " black", marginTop: "30px", paddingTop: "30px", paddingBottom: "30px", borderRadius: "30px", boxShadow: "10px 15px 30px 10px #ffbb00" }}>
              <h2 style={{ marginBottom: "30px", fontWeight: "bolder" }}>Karnak Temple</h2>
              <h4 style={{ lineHeight: "40px" }}>The Karnak Temple Complex, which is known as the Karnak Temple, is a group of
                temples, buildings and columns, where expansion and construction operations continued from the Pharaonic era, specifically
                the kings of the Middle Kingdom
                .</h4>

              <p className='mt-5'>
                <button style={{ backgroundColor: "#ffbb00", color: "black" }} class="btn btn-primary mb-3" type="button" data-toggle="collapse" data-target="#karnakmap" aria-expanded="false" aria-controls="collapseWidthExample">
                  Maps
                </button>
              </p>
              <div style={{ minHeight: "120px" }}>
                <div class="collapse width" id="karnakmap">
                  <div class="card card-body" style={{ width: "320px", backgroundColor: "black" }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1296.3104766158328!2d32.658254485098574!3d25.718875340490488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1449159228fec0cd%3A0xc71ae8c008c259d8!2z2KfZhNmD2LHZhtmD!5e1!3m2!1sar!2seg!4v1699618845935!5m2!1sar!2seg"
                      style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* karnak  */}


      {/* ******************************
******************************
****************************** */}

      {/* luxor musuem   */}
      <div className="museumluxor span3 wow rollIn">
        <div className="container" style={{ marginTop: "100px", paddingTop: "30px", paddingBottom: "30px", borderRadius: "30px" }}>
          <div className="row">
            <div className="col-md-5" style={{ fontFamily: "serif", backgroundColor: " black", marginTop: "30px", paddingTop: "30px", paddingBottom: "30px", borderRadius: "30px", boxShadow: "10px 15px 30px 10px #ffbb00" }}>
              <h2 style={{ marginBottom: "30px", fontWeight: "bolder" }}>Luxor Museum</h2>
              <h4 style={{ lineHeight: "40px" }}>The Luxor Museum is located on the Nile Corniche in the center of the city of Luxor,
                southern Egypt, which was known in the past as Thebes. But its assets could not in any way be compared to the exhibits
                of the Cairo Museum of Antiquities, which contains the most wonderful treasures of the ancient Egyptian civilization
                inside Egypt. Among the museum’s most wonderful exhibits Currently, there is a collection of antiques that were in
                the tomb of King Tutankhamun,
              </h4>

              <p className='mt-5'>
                <button style={{ backgroundColor: "#ffbb00", color: "black" }} class="btn btn-primary mb-3" type="button" data-toggle="collapse" data-target="#luxormuseummap" aria-expanded="false" aria-controls="collapseWidthExample">
                  Maps
                </button>
              </p>
              <div style={{ minHeight: "120px" }}>
                <div class="collapse width" id="luxormuseummap">
                  <div class="card card-body" style={{ width: "320px", backgroundColor: "black" }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1257.9112192848338!2d32.64514567955647!3d25.707134211589445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144915c41edadf61%3A0xbbd310fcbd539024!2z2YXYqtit2YEg2KfZhNij2YLYtdix!5e1!3m2!1sar!2seg!4v1699616933523!5m2!1sar!2seg"
                      style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </div>
            <Col md="1"></Col>
            <div className="col-md-6">
              <Row>
                <Col md="12">
                  <img src="./images/luxor/luxor museum/67504-سحر-المعابد-والمتاحف-والمقابر-الفرعونية-التي-يعشقها-السياح-بمختلف-دول-العالم-(15).jpg" className="d-block w-100 img-fluid span3 wow bounceInDown cente" alt="Wild Landscape"
                    style={{ borderRadius: "50%", border: "4px solid #ffbb00 ", marginTop: "50px", height: "300px" }} />

                </Col>

                <Col md="4">
                  <img src="./images/luxor/luxor museum/151013_916_1b16f.jpg" className=" img-fluid span3 wow bounceInDown cente" alt="Camera"
                    style={{ borderRadius: "50%", border: "4px solid #ffbb00 ", marginTop: "50px", height: "300px" }} />
                </Col>

                <Col md="4 mt-3">
                  <img src="./images/luxor/luxor museum/fd8a902ecbedf56eb0f8d644d47bd637.jpg"
                    className="d-block w-100 span3 wow bounceInDown cente" alt="Exotic Fruits" style={{ borderRadius: "50%", border: "4px solid #ffbb00 ", marginTop: "50px", height: "300px" }} />
                </Col>

                <Col md="4 mt-3">
                  <img
                    src="./images/luxor/luxor museum/Museum-of-Luxor-15.jpg"
                    className="d-block w-100 span3 wow bounceInDown cente" alt="Exotic Fruits" style={{ borderRadius: "50%", border: "4px solid #ffbb00 ", marginTop: "50px", height: "300px" }} />
                </Col>
              </Row>


            </div>
          </div>
        </div>

      </div>
      {/* luxor musuem   */}

      {/* ******************************
******************************
****************************** */}

      {/* der bahri  */}
      <div className="bahri span3 wow bounceInRight" >
        <div className="container" style={{ marginTop: "100px", paddingTop: "30px", paddingBottom: "30px", borderRadius: "30px" }} >
          <div className="row">
            <div className="col-md-12">
              <div id="carouselExampleCrossfade" className="carousel slide carousel-fade img-fluid" data-mdb-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="2"
                    aria-label="Slide 3"></button>
                  <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="3"
                    aria-label="Slide 4"></button>


                </div>
                <div className="carousel-inner span3 wow bounceInRight" style={{ border: "4px solid #ffbb00 ", marginTop: "50px" }}>
                  <div className="carousel-item active">
                    <img src="./images/luxor/derbahry/Luxor,_hieroglyphic_decorations_inside_the_Temple_of_Hatshepsut,_Egypt,_Oct_2004_A.jpg" className="d-block w-100 img-fluid" alt="Wild Landscape"
                      style={{ height: "500px" }} />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/luxor/derbahry/LuxorHatchepsutTemple.jpg" className=" img-fluid" alt="Camera"
                      style={{ height: "500px" }} />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/luxor/derbahry/Temple_Hatchepsout_Fresque2.jpg"
                      className="d-block w-100" alt="Exotic Fruits" style={{ height: "500px" }} />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./images/luxor/derbahry/Temple_hatchepsout.jpg"
                      className="d-block w-100" alt="Exotic Fruits" style={{ height: "500px" }} />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCrossfade"
                  data-mdb-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleCrossfade"
                  data-mdb-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <Row className='mt-2'>
                <Col md="3">
                  <img src="./images/luxor/derbahry/Luxor,_hieroglyphic_decorations_inside_the_Temple_of_Hatshepsut,_Egypt,_Oct_2004_A.jpg" className="d-block w-100 img-fluid span3 wow bounceInDown cente" alt="Wild Landscape"
                    style={{ height: "200px", border: "4px solid #ffbb00 ", marginTop: "50px" }} />
                </Col>
                <Col md="3">
                  <img src="./images/luxor/derbahry/LuxorHatchepsutTemple.jpg" className=" img-fluid span3 wow bounceInDown cente" alt="Camera"
                    style={{ height: "200px", border: "4px solid #ffbb00 ", marginTop: "50px" }} />
                </Col>
                <Col md="3">
                  <img src="./images/luxor/derbahry/Temple_Hatchepsout_Fresque2.jpg"
                    className="d-block w-100 span3 wow bounceInDown cente" alt="Exotic Fruits" style={{ height: "200px", border: "4px solid #ffbb00 ", marginTop: "50px" }} />
                </Col>
                <Col md="3">
                  <img
                    src="./images/luxor/derbahry/Temple_hatchepsout.jpg"
                    className="d-block w-100 span3 wow bounceInDown cente" alt="Exotic Fruits" style={{ height: "200px", border: "4px solid #ffbb00 ", marginTop: "50px" }} />
                </Col>
              </Row>
            </div>
            <div className="col-md-12" style={{ fontFamily: "serif", backgroundColor: " black", marginTop: "30px", paddingTop: "30px", paddingBottom: "30px", borderRadius: "30px", boxShadow: "10px 15px 30px 10px #ffbb00" }}>
              <h2 style={{ marginBottom: "30px", fontWeight: "bolder" }}>Deir el-Bahari Temple</h2>
              <h4 style={{ lineHeight: "40px" }}>Deir el-Bahri is a group of Pharaonic temples and tombs located on the west bank of the Nile
                opposite the city of Luxor in Egypt.
                The monastery was built by Queen Hatshepsut to perform rituals that would benefit her in the afterlife. The name Deir el-Bahri is
                a modern Arabic name given to this area in the seventh century AD after the Copts used this temple as their monastery. The temple
                consists of three rising terraces,
                connected by sloping platforms for ascending and descending</h4>

              <p className='mt-5'>
                <button style={{ backgroundColor: "#ffbb00", color: "black" }} class="btn btn-primary mb-3" type="button" data-toggle="collapse" data-target="#simplmap" aria-expanded="false" aria-controls="collapseWidthExample">
                  Maps
                </button>
              </p>
              <div style={{ minHeight: "120px" }}>
                <div class="collapse width" id="simplmap">
                  <div class="card card-body" style={{ width: "320px", backgroundColor: "black" }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.1487726959535!2d32.61030425984993!3d25.737260777461465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14491618e3b988d1%3A0x692c0b4a30fc99db!2z2KfZhNiv2YrYsSDYp9mE2KjYrdix2YogKNin2YTZhdi52KjYryDYp9mE2KzZhtin2KbYstmKINmE2K3Yqti02KjYs9mI2KosINmI2YXYudin2KjYryDYotiu2LHZii4uKQ!5e1!3m2!1sar!2seg!4v1699616838544!5m2!1sar!2seg"
                      style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* der bahri  */}


      {/* ******************************
******************************
****************************** */}

      {/* hotels  */}
      <div className="hotels mt-5" style={{ fontFamily: "serif" }}>
        <Container>
          <Row>
            <Col md="12" style={{ fontFamily: "serif", fontSize: "20px", marginTop: "50px", fontWeight: "bolder" }}>HOTELS</Col>
            <Col md="8" >
              {/* <!-- Carousel wrapper --> */}
              <div id="carouselDarkVariant" class="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel">
                {/* <!-- Indicators --> */}
                <div class="carousel-indicators">
                  <button
                    data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide-to="1"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide-to="2"
                    aria-label="Slide 1"
                  ></button>
                </div>

                {/* <!-- Inner --> */}
                <div class="carousel-inner" style={{ borderRadius: "30px", border: "5px solid #ffbb00 " }}>
                  {/* <!-- Single item --> */}
                  <div class="carousel-item active">
                    <img style={{ height: "600px" }} src="/images/hotels/luxor/iberotel.jpg" class="d-block w-100" alt="Motorbike Smoke" />
                    <div class="carousel-caption d-none d-md-block">
                      <h1 style={{ color: "white", backgroundColor: "#0d1421", width: "30%", borderRadius: "30px", margin: "auto" }}>IBEROTE</h1>
                    </div>
                  </div>

                  {/* <!-- Single item --> */}
                  <div class="carousel-item">
                    <img style={{ height: "600px" }} src="/images/hotels/luxor/lutas.jpg" class="d-block w-100" alt="Mountaintop" />
                    <div class="carousel-caption d-none d-md-block">
                      <h1 style={{ color: "white", backgroundColor: "#0d1421", width: "30%", borderRadius: "30px", margin: "auto" }}>LUTAS</h1>
                    </div>
                  </div>

                  {/* <!-- Single item --> */}
                  <div class="carousel-item">
                    <img style={{ height: "600px" }} src="/images/hotels/luxor/Stigin.jpg" class="d-block w-100" alt="Woman Reading a Book" />
                    <div class="carousel-caption d-none d-md-block">
                      <h1 style={{ color: "white", backgroundColor: "#0d1421", width: "30%", borderRadius: "30px", margin: "auto" }}>STIGIN</h1>
                    </div>
                  </div>
                </div>
                {/* <!-- Inner --> */}

                {/* <!-- Controls --> */}
                <button class="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              {/* <!-- Carousel wrapper --> */}
            </Col>

            <div className="col-md-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57909.460199916335!2d32.678521646045574!3d25.702435202253554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144915cf52cd95cd%3A0xe0f5dd2b8b1c0e96!2z2KfZhNij2YLYtdix2Iwg2YXYr9mK2YbYqSDYp9mE2KPZgti12LHYjCDZhdix2YPYsiDYp9mE2KPZgti12LHYjCDZhdit2KfZgdi42Kkg2KfZhNij2YLYtdix!5e1!3m2!1sar!2seg!4v1699599904256!5m2!1sar!2seg"
                width="410" height="610" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </Row>
        </Container>

      </div>
      {/* hotels  */}

    </div>
  )
}
export default Placesluxor;