import React from 'react'
import { Container, Row, Col } from 'reactstrap';

function Placesalex() {
  return (
    <div >
      {/* bey  */}
      <div className="BeyCitadel span3 wow bounceInLeft">
        <div className="container" style={{ marginTop: "100px", paddingTop: "30px", paddingBottom: "30px", borderRadius: "30px", color: "white" }}>
          <div className="row">

            <div className="col-md-6 " style={{ fontFamily: "serif" }}>
              <div id="caetbyPhotos" className="carousel slide carousel-fade img-fluid mt-5" data-mdb-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button type="button" data-mdb-target="#caetbyPhotos" data-mdb-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-mdb-target="#caetbyPhotos" data-mdb-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-mdb-target="#caetbyPhotos" data-mdb-slide-to="2"
                    aria-label="Slide 3"></button>
                  <button type="button" data-mdb-target="#caetbyPhotos" data-mdb-slide-to="3"
                    aria-label="Slide 4"></button>

                </div>
                <div className="carousel-inner" style={{ borderRadius: "30px", border: "2px solid #ffbb00 " }}>
                  <div className="carousel-item active">
                    <img src="./images/BeyCitadel/0f170a169960ef9fe508acbe3f601037.jpg" className="d-block w-100 img-fluid" alt="Wild Landscape"
                      style={{ height: "500px", }} />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/BeyCitadel/28443895283_d20c73f336_b.jpg" className=" img-fluid" alt="Camera"
                      style={{ height: "500px" }} />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/BeyCitadel/560d9f32784fa25063d9b37294b7d16b.jpg"
                      className="d-block w-100" alt="Exotic Fruits" style={{ height: "500px" }} />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./images/BeyCitadel/أين_توجد_قلعة_قايتباي.jpg"
                      className="d-block w-100" alt="Exotic Fruits" style={{ height: "500px" }} />
                  </div>

                </div>
                <button className="carousel-control-prev" type="button" data-mdb-target="#caetbyPhotos"
                  data-mdb-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#caetbyPhotos"
                  data-mdb-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div style={{ backgroundColor: " black", marginTop: "10px", paddingTop: "30px", borderRadius: "30px", boxShadow: "10px 15px 30px 10px #ffbb00" }}>
                <h2 style={{ marginBottom: "30px", fontWeight: "bolder", textAlign: "center" }}>BeyCitadel</h2>
                <h4 style={{ lineHeight: "40px", textAlign: "center" }}>Qaitbay Castle is located at the end of Pharos Island in the far west of
                  Alexandria. It was built in the place of the old Alexandria Lighthouse,
                  which was demolished in the year 702 AH as a result of the devastating earthquake that occurred
                  during the reign of Sultan Al-Nasir Muhammad bin Qalawun </h4>

                <p className='mt-5'>
                  <button style={{ backgroundColor: "#ffbb00", color: "black", marginLeft: "20px" }} class="btn btn-primary mb-3" type="button" data-toggle="collapse" data-target="#baymap" aria-expanded="false" aria-controls="collapseWidthExample">
                    Maps
                  </button>
                </p>
                <div style={{ minHeight: "120px" }}>
                  <div class="collapse width" id="baymap">
                    <div class="card card-body" style={{ width: "320px", backgroundColor: "black" }}>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170028.27562048944!2d30.07370711174697!3d31.130224821255734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3ff1b30e255%3A0xc201e7869ae9971f!2z2YLZhNi52Ycg2YLYp9mK2KrYqNin2Yo!5e1!3m2!1sar!2seg!4v1699598735330!5m2!1sar!2seg"
                        style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-6  " style={{ fontFamily: "serif" }}>
              <div id="lightPhotos" className="carousel slide carousel-fade img-fluid mt-5" data-mdb-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button type="button" data-mdb-target="#lightPhotos" data-mdb-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-mdb-target="#lightPhotos" data-mdb-slide-to="1"
                    aria-label="Slide 2"></button>


                </div>
                <div className="carousel-inner" style={{ borderRadius: "30px", border: "2px solid #ffbb00 " }}>
                  <div className="carousel-item active">
                    <img src="./images/Lighthouse of Alexandria/4941256656_85aec313bc_b.jpg " className="d-block w-100 img-fluid" alt="Wild Landscape"
                      style={{ height: "500px", }} />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/Lighthouse of Alexandria/Lighthouse-of-Alexandria. (1).jpg " className=" img-fluid" alt="Camera"
                      style={{ height: "500px" }} />
                  </div>


                </div>
                <button className="carousel-control-prev" type="button" data-mdb-target="#lightPhotos"
                  data-mdb-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#lightPhotos"
                  data-mdb-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div style={{ backgroundColor: " black", marginTop: "10px", paddingTop: "30px", borderRadius: "30px", boxShadow: "10px 15px 30px 10px #ffbb00" }}>
                <h2 style={{ marginBottom: "30px", fontWeight: "bolder", textAlign: "center" }}>Lighthouse of Alexandria</h2>
                <h4 style={{ lineHeight: "40px", textAlign: "center" }}>As one of the Seven Wonders of the Ancient World, the Lighthouse of
                  Alexandria was a remarkable feat of engineering. For centuries, it stood as a symbol of human progress
                  and achievement. But by the mid-19th century, the lighthouse had fallen into ruin. The Lighthouse of
                  Alexandria</h4>

                <p className='mt-5'>
                  <button style={{ backgroundColor: "#ffbb00", color: "black", marginLeft: "20px" }} class="btn btn-primary mb-3" type="button" data-toggle="collapse" data-target="#lightmap" aria-expanded="false" aria-controls="collapseWidthExample">
                    Maps
                  </button>
                </p>
                <div style={{ minHeight: "120px" }}>
                  <div class="collapse width" id="lightmap">
                    <div class="card card-body" style={{ width: "320px", backgroundColor: "black" }}>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170028.47045455108!2d30.073213602585184!3d31.130116113605798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c1cf9ba3ba2b%3A0xcf81e16646b2af84!2z2KfZhNmF2YbYp9ix2Yc!5e1!3m2!1sar!2seg!4v1699598956221!5m2!1sar!2seg"
                        style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bey  */}

{/* *************************
*************************
************************* */}

      {/* Roman  */}
      <div className="romantheatre span3 wow bounceInRight mb-5 ">
        <div className="container" style={{ marginTop: "100px", paddingTop: "30px", paddingBottom: "30px", color: "white" }}>
          <div className="row">
            <div className="col-md-6 ">
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
                <div className="carousel-inner" style={{ borderRadius: "30px", border: "2px solid #ffbb00 " }}>
                  <div className="carousel-item active">
                    <img src="./images/Roman theater/18-AlexandriaAmphitheatre-1024x689.jpg " className="d-block w-100 img-fluid" alt="Wild Landscape"
                      style={{ height: "500px", width: "max-content" }} />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/Roman theater/18_full.jpg" className=" img-fluid" alt="Camera"
                      style={{ height: "500px" }} />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/Roman theater/rome-theatre-703951.jpg"
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
            </div>

            <div className="col-md-6" style={{ textAlign: "center", fontFamily: "serif" }}>
              <div style={{ backgroundColor: " black", marginTop: "10px", paddingTop: "30px", borderRadius: "30px", boxShadow: "10px 15px 30px 10px #ffbb00" }}>
                <h2 style={{ marginBottom: "30px", fontWeight: "bolder" }}>RomanTheatere</h2>
                <h4 style={{ lineHeight: "40px" }}>The Roman Theater is an ancient Roman theater located in the Kom El-Dikka
                  area in the middle of the city of Alexandria in Egypt. It is one of the monuments of the Roman era and
                  was built at the beginning of the fourth century AD.
                  steps.</h4>
                <p className='mt-5'>
                  <button style={{ backgroundColor: "#ffbb00", color: "black", marginLeft: "20px" }} class="btn btn-primary mb-3" type="button" data-toggle="collapse" data-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    Maps
                  </button>
                </p>
                <div style={{ minHeight: "120px" }}>
                  <div class="collapse width" id="collapseWidthExample">
                    <div class="card card-body" style={{ width: "320px", backgroundColor: "black" }}>

                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.464916390041!2d29.90659465966769!3d31.194645574471494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3eb59fbc5c3%3A0xf53cf227d8ca06e4!2z2KfZhNmF2LPYsditINin2YTYsdmI2YXYp9mG2YogLSDYp9mE2KXYs9mD2YbYr9ix2YrYqQ!5e1!3m2!1sar!2seg!4v1699599070114!5m2!1sar!2seg"
                        style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Roman  */}

      {/* *************************
*************************
************************* */}

      {/* Hotels  */}
      <div className="hotels mt-5" >
        <Container>
          <Row>
            <Col md="12" style={{ color: "white", fontFamily: "serif", fontSize: "20px", marginTop: "50px", fontWeight: "bolder" }}>HOTELS</Col>
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
                    <img style={{ height: "600px" }} src="/images/hotels/alex/Cecil.jpg" class="d-block w-100" alt="Motorbike Smoke" />
                    <div class="carousel-caption d-none d-md-block">
                      <h1 style={{ color: "white", backgroundColor: "#0d1421", width: "30%", borderRadius: "30px", margin: "auto" }}>CECIL</h1>
                    </div>
                  </div>

                  {/* <!-- Single item --> */}
                  <div class="carousel-item" >
                    <img style={{ height: "600px" }} src="/images/hotels/alex/radisn blou.jpg" class="d-block w-100" alt="Mountaintop" />
                    <div class="carousel-caption d-none d-md-block">
                      <h1 style={{ color: "white", backgroundColor: "#0d1421", width: "30%", borderRadius: "30px", margin: "auto" }}>RADISN BLUO</h1>
                    </div>
                  </div>

                  {/* <!-- Single item --> */}
                  <div class="carousel-item">
                    <img style={{ height: "600px" }} src="/images/hotels/alex/Tolip.jpg" class="d-block w-100" alt="Woman Reading a Book" />
                    <div class="carousel-caption d-none d-md-block">
                      <h1 style={{ color: "white", backgroundColor: "#0d1421", width: "30%", borderRadius: "30px", margin: "auto" }}>TOLIP</h1>
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417607.2439553421!2d30.17475621641037!3d31.21408550918313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2z2KfZhNil2LPZg9mG2K_YsdmK2KnYjCDZhdit2KfZgdi42Kkg2KfZhNil2LPZg9mG2K_YsdmK2Kk!5e1!3m2!1sar!2seg!4v1699599326366!5m2!1sar!2seg"
                width="410" height="610" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </Row>
        </Container>

      </div>
      {/* Hotels  */}

    </div>
  )
}
export default Placesalex;