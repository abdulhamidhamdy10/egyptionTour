import React from 'react'
import "../App.css";
import { Container, Row, Col } from 'reactstrap';
function Placescairo() {
  return (
    <div>

      {/* Pyramids  */}
      <div class="pyramids span3 wow rollIn">
        <div class="container" style={{  marginTop: "100px", paddingTop: "30px", paddingBottom: "30px", borderRadius: "30px" ,color: "white" , fontFamily: "serif"}}>
          <div class="row">
            <div class="col-md-6" style={{ backgroundColor: " black", marginTop: "100px", paddingTop: "30px", paddingBottom: "30px", borderRadius: "30px", boxShadow: "10px 15px 30px 10px #ffbb00" }}>
              <div id="carouselExampleCrossfade" class="carousel slide carousel-fade img-fluid" data-mdb-ride="carousel" 
              >
                <div class="carousel-indicators">
                  <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="2"
                    aria-label="Slide 3"></button>
                  <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="3"
                    aria-label="Slide 4"></button>
                  <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="4"
                    aria-label="Slide 5"></button>
                  <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="5"
                    aria-label="Slide 6"></button>
                  <button type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide-to="6"
                    aria-label="Slide 7"></button>
                </div>
                <div class="carousel-inner" style={{borderRadius : "30px" , border: "2px solid #ffbb00 "}}>
                  <div class="carousel-item active">
                    <img src="./images/pyramids/3807-5.jpg" class="d-block w-100 img-fluid" alt="Wild Landscape"
                      style={{ height: "500px", }} />
                  </div>
                  <div class="carousel-item">
                    <img src="./images/pyramids/Egypt Pyramids Photos (36).jpg" class=" img-fluid" alt="Camera"
                      style={{ height: "500px" }} />
                  </div>
                  <div class="carousel-item">
                    <img src="./images/pyramids/low-angle-shot-two-egyptian-pyramids-each-other.jpg"
                      class="d-block w-100" alt="Exotic Fruits" style={{ height: "500px" }} />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="./images/pyramids/majestic-pyramid-shape-awe-inspiring-ancient-civilization-monument-generated-by-ai.jpg"
                      class="d-block w-100" alt="Exotic Fruits" style={{ height: "500px" }} />
                  </div>
                  <div class="carousel-item">
                    <img src="./images/pyramids/maxresdefault.jpg" class="d-block w-100" alt="Exotic Fruits"
                      style={{ height: "500px" }} />
                  </div>
                  <div class="carousel-item">
                    <img src="./images/pyramids/shot-historic-sphinx-middle-typical-egyptian-scenery-clear-sky.jpg"
                      class="d-block w-100" alt="Exotic Fruits" style={{ height: "500px" }} />
                  </div>
                  <div class="carousel-item">
                    <img src="./images/pyramids/young-man-walking-towards-great-sphinx-giza.jpg"
                      class="d-block w-100" alt="Exotic Fruits" style={{ height: "500px" }} />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCrossfade"
                  data-mdb-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden-pyramids">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCrossfade"
                  data-mdb-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden-pyramids" >Next</span>
                </button>
              </div>
            </div>
            <Col md="1"></Col>
            <div class="col-md-5 articlepyramids" style={{ marginTop: "150px" }}>
              <h2 style={{ marginBottom: "30px", fontWeight: "bolder;" , color : "#ffbb00"}}>Pyramids</h2>
              <h4 style={{ lineHeight: "40px;" }}>The complex is located on the edge of the Western Desert,
                about 9 kilometers (5.6 mi) west of the Nile River in Giza,
                and about 13 kilometers (8 mi) southwest of downtown Cairo. The complex is located on the edge of the Western Desert,
                about 9 kilometers (5.6 mi) west of the Nile River in Giza,
                and about 13 kilometers (8 mi) southwest of downtown Cairo.</h4>

              <p className='mt-5'>
                <button style={{backgroundColor: "#ffbb00" , color : "black"}} class="btn btn-primary mb-3" type="button" data-toggle="collapse" data-target="#pyramidsmap" aria-expanded="false" aria-controls="collapseWidthExample">
                  Maps
                </button>
              </p>
              <div style={{ minHeight: "120px" }}>
                <div class="collapse width" id="pyramidsmap">
                  <div class="card card-body" style={{ width: "320px", backgroundColor: "black" }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51414.47992058908!2d31.176915756446416!3d29.972635949593013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584f7de239bbcd%3A0xca7474355a6e368b!2z2KPZh9ix2KfZhdin2Kog2KfZhNis2YrYstip!5e1!3m2!1sar!2seg!4v1699597103487!5m2!1sar!2seg"
                      style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pyramids  */}

            {/* ******************************
******************************
****************************** */}

{/* musuem  */}
      <div class="musem span3 wow bounceInDown center">
        <div class="container" style={{  marginTop: "100px", paddingTop: "30px", paddingBottom: "", borderRadius: "30px" }}>
          <div class="row">
          <div class="col-md-5" style={{ marginTop: "150px " ,fontFamily : "serif"  }}>
              <h2 style={{  fontWeight: "bolder;" , color : "#ffbb00", marginBottom : "30px"}}>Egyptian Museum</h2>
              <h4 style={{ lineHeight: "40px" , color : "white" }}>The Egyptian Museum is considered one of the first museums in the world
                that was established as a public museum, unlike the museums that preceded it. The museum includes more
                than 180,000 artifacts, the most important of which are the archaeological collections that were found
                in the tombs of the kings and the royal entourage of the Middle Dynasty in Dahshur in 1894. The museum
                now includes the largest
                collection Archaeological sites in the world that express all stages of ancient Egyptian history.</h4>

              <p className='mt-5'>
                <button style={{backgroundColor: "#ffbb00" , color : "black"}} class="btn btn-primary mb-3" type="button" data-toggle="collapse" data-target="#museummap" aria-expanded="false" aria-controls="pyramidsmap">
                  Maps
                </button>
              </p>
              <div style={{ minHeight: "120px" }}>
                <div class="collapse width" id="museummap">
                  <div class="card card-body" style={{ width: "320px", backgroundColor: "black" }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.406698478148!2d31.236236959708755!3d30.048316675025934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815a8fe456ae1%3A0x82caa4e28e23685f!2z2KfZhNmF2KrYrdmB!5e1!3m2!1sar!2seg!4v1699598266982!5m2!1sar!2seg"
                      style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </div>

            <Col md="1"></Col>

            <div class="col-md-6" style={{ backgroundColor: " black", marginTop: "100px", paddingTop: "30px", borderRadius: "30px", boxShadow: "10px 15px 30px 10px #ffbb00" }}>
              <div id="museumPhoto" class="carousel slide carousel-fade img-fluid" data-mdb-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button type="button" data-mdb-target="#museumPhoto" data-mdb-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-mdb-target="#museumPhoto" data-mdb-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-mdb-target="#museumPhoto" data-mdb-slide-to="2"
                    aria-label="Slide 3"></button>
                  <button type="button" data-mdb-target="#museumPhoto" data-mdb-slide-to="3"
                    aria-label="Slide 4"></button>
                  <button type="button" data-mdb-target="#museumPhoto" data-mdb-slide-to="4"
                    aria-label="Slide 5"></button>

                </div>
                <div class="carousel-inner" style={{borderRadius : "30px" , border: "2px solid #ffbb00 "}}>
                  <div class="carousel-item active" >
                    <img src="./images/egyption musuem/148.jpg" class="d-block w-100 img-fluid" alt="Wild Landscape"
                      style={{ height: "500px", width: "max-content" }} />
                  </div>
                  <div class="carousel-item">
                    <img src="./images/egyption musuem/DSCN1288.jpg" class=" img-fluid" alt="Camera"
                      style={{ height: "500px" }} />
                  </div>
                  <div class="carousel-item">
                    <img src="./images/egyption musuem/EgyptianMuseum.jpg"
                      class="d-block w-100" alt="Exotic Fruits" style={{ height: "500px" }} />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="./images/egyption musuem/inside-egyptian-museum-cairo-1.jpg"
                      class="d-block w-100" alt="Exotic Fruits" style={{ height: "500px" }} />
                  </div>
                  <div class="carousel-item">
                    <img src="./images/egyption musuem/The-Egyptian-Museum-Cairo-Stopover-Tour-Trips-In-Egypt_1600x1067.jpg" class="d-block w-100" alt="Exotic Fruits"
                      style={{ height: "500px" }} />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-mdb-target="#museumPhoto"
                  data-mdb-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden-musem">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-mdb-target="#museumPhoto"
                  data-mdb-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden-musem" >Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* musuem  */}

            {/* ******************************
******************************
****************************** */}

{/* salaheldin  */}
      <div class="salah_elsin span3 wow lightSpeedIn">
        <div class="container" style={{  marginTop: "150px", paddingTop: "30px", paddingBottom: "30px", borderRadius: "30px" }}>
          <div class="row">
            <div class="col-md-6" style={{ backgroundColor: " black", marginTop: "100px", paddingTop: "30px", borderRadius: "30px", boxShadow: "10px 15px 30px 10px #ffbb00" }}>
              <div id="salaheldinPhoto" class="carousel slide carousel-fade img-fluid" data-mdb-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button type="button" data-mdb-target="#salaheldinPhoto" data-mdb-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-mdb-target="#salaheldinPhoto" data-mdb-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-mdb-target="#salaheldinPhoto" data-mdb-slide-to="2"
                    aria-label="Slide 3"></button>
                  <button type="button" data-mdb-target="#salaheldinPhoto" data-mdb-slide-to="3"
                    aria-label="Slide 4"></button>


                </div>
                <div class="carousel-inner" style={{borderRadius : "30px" , border: "2px solid #ffbb00 "}}>
                  <div class="carousel-item active">
                    <img src="./images/salah eldin/226a_97.jpg" class="d-block w-100 img-fluid" alt="Wild Landscape"
                      style={{ height: " 500px" }} />
                  </div>
                  <div class="carousel-item">
                    <img src="./images/salah eldin/a005f5b48a232741aea8ca42232425d1.jpg" class=" img-fluid" alt="Camera"
                      style={{ height: "500px" }} />
                  </div>
                  <div class="carousel-item">
                    <img src="./images/salah eldin/Citadel-Egypt.png"
                      class="d-block w-100" alt="Exotic Fruits" style={{ height: "500px" }} />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="./images/salah eldin/the-mosque.jpg"
                      class="d-block w-100" alt="Exotic Fruits" style={{ height: "500px" }} />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-mdb-target="#salaheldinPhoto"
                  data-mdb-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden-salah">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-mdb-target="#salaheldinPhoto"
                  data-mdb-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden-salah">Next</span>
                </button>
              </div>
            </div>

            <Col md="1"></Col>
            <div class="col-md-5" style={{ marginTop: "150px " ,fontFamily : "serif" }}>
              <h2 style={{  fontWeight: "bolder;" , color : "#ffbb00"}}>Salah El-Din  Citadel</h2>
              <h4 style={{ lineHeight: "40px" , color : "white" }}>salah al-Din al-Ayyubi Citadel in Cairo is considered one of the
                most luxurious military castles built in the Middle Ages. Its strategic location is first-class,
                as this site provides defensive importance because it controls the cities of Cairo and Fustat. It
                also forms a high natural barrier between the two cities,
                and with this location it is possible to provide communication between... The castle and the city</h4>

              <p className='mt-5'>
                <button style={{backgroundColor: "#ffbb00" , color : "black"}} class="btn btn-primary mb-3" type="button" data-toggle="collapse" data-target="#musem" aria-expanded="false" aria-controls="musem">
                  Maps
                </button>
              </p>
              <div style={{ minHeight: "120px" }}>
                <div class="collapse width" id="musem">
                  <div class="card card-body" style={{ width: "320px", backgroundColor: "black" }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.127300188268!2d31.26355400970939!3d30.0291886750357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840ab1d1ed589%3A0x89926f31052af18!2zMjdINStGWE3YjCDYp9mE2KPYqNin2KzZitip2Iwg2YLYs9mFINin2YTYrtmE2YrZgdip2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCsIDQyNTIzNjA!5e1!3m2!1sar!2seg!4v1699598381014!5m2!1sar!2seg"

                      style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* salaheldin  */}


      {/* *************************
*************************
************************* */}


{/* Hotels  */}
      <div className="hotels mt-5" style={{fontFamily : "serif"}}>
        <Container>
          <Row>
            <Col md="12" style={{ color: "white", fontFamily: "serif", fontSize: "20px", marginTop: "50px", fontWeight: "bolder"  }}>HOTELS</Col>
            <Col md="8"  >
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
                <div class="carousel-inner" style={{ borderRadius : "30px" , border: "5px solid #ffbb00 "  }}>
                  {/* <!-- Single item --> */}
                  <div class="carousel-item active">
                    <img style={{height : "600px"}} src="/images/hotels/cairo/Kimpanski.jpg" class="d-block w-100" alt="Motorbike Smoke" />
                    <div class="carousel-caption d-none d-md-block">
                      <h1 style={{color : "white", backgroundColor : "#0d1421" , width: "30%", borderRadius : "30px" , margin : "auto"}}>Kimpanski</h1>
                    </div>
                  </div>

                  {/* <!-- Single item --> */}
                  <div class="carousel-item">
                    <img style={{height : "600px"}} src="/images/hotels/cairo/almasa_hotel.jpg" class="d-block w-100" alt="Mountaintop" />
                    <div class="carousel-caption d-none d-md-block">
                      <h1 style={{color : "white", backgroundColor : "#0d1421", width: "30%" , borderRadius : "30px", margin : "auto"}}>ALMASA</h1>
                    </div>
                  </div>

                  {/* <!-- Single item --> */}
                  <div class="carousel-item">
                    <img style={{height : "600px"}} src="/images/hotels/cairo/pyramids-hotel-cairo-1-768x512.jpg" class="d-block w-100" alt="Woman Reading a Book" />
                    <div class="carousel-caption d-none d-md-block">
                      <h1 style={{color : "white" , backgroundColor : "#0d1421", width: "30%", borderRadius : "30px", margin : "auto"}}>PYRAMIDS</h1>
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


            <Col md ="4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82854.12600685077!2d31.315244902847247!3d30.04815660271217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e1!3m2!1sar!2seg!4v1699599776789!5m2!1sar!2seg"
              width="410" height="610" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
          </Row>
        </Container>

      </div>
{/* Hotels  */}

    </div>









  )
}
export default Placescairo;