import React from 'react'
import { Container, Row, Col } from 'reactstrap';

function Validation() {
    return (
        <div >

            <div className="validation" >
                <Container >
                    <Row>
                        {/* head form  */}
                        <Col md="6" style={{ marginBottom: "100px" }}>
                            <div className='text-center' style={{ backgroundColor: "black", borderRadius: "60px" }}>
                                <h2 style={{ color: "white", fontWeight: "bolder", marginTop: "100px", fontFamily: "monospace", paddingTop: "100px", color: "#ffbb00", fontFamily: "serif" }}>EGYPTION TOUR</h2>

                                <img style={{ width: "300px" }} src="/images/Pyramid-PNG-Photos.png" />
                            </div>
                        </Col>
                        {/* head form  */}

                        {/* *******************************************
*******************************************
******************************************* */}

                        {/* body form  */}
                        <Col md="6" style={{ marginBottom: "100px" }}>
                            <div className='text-center' style={{ borderRadius: "30px" }}>



                                <div class="accordion mb-5" style={{ marginBottom: "50px", marginTop: "50px", borderRadius: "10px" }} id="accordionExample">
                                    <div class="card" style={{ width: "80%", margin: "auto" }}>
                                        <div class="card-header" style={{ backgroundColor: "#ffbb00", borderRadius: "10px" }} id="headingOne">
                                            <h2 class="mb-0">
                                                <button style={{ color: "black", fontWeight: "bolder" }} class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    LOG IN
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div class="card-body" style={{ backgroundColor: "#8d99af00", borderRadius: "30px" }}>
                                                <h6 className="text-muted"></h6>
                                                <form onsubmit="return validate()" style={{ marginBottom: "20px", marginTop: "100px" }}>
                                                    <div id="error"></div>
                                                    <input style={{ borderRadius: "30px" }} type="text" className="form-control mb-3 p-4 transparent" id="name" placeholder="username" />
                                                    <input style={{ borderRadius: "30px" }} type="text" className="form-control mb-3 p-4" id="email" placeholder="E-mail" />
                                                    <input style={{ borderRadius: "30px" }} type="password" className="form-control mb-3 p-4" id="password" placeholder="password" />
                                                    <input style={{ borderRadius: "30px" }} type="password" className="form-control mb-3 p-4" id="confirmpass" placeholder="confirmpassword" />
                                                    <input style={{ borderRadius: "30px" }} type="submit" className="btn btn-primary btn-block" placeholder="confirmpassword" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        {/* body form  */}

                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Validation;