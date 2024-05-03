import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { CartProvider, useCart } from 'react-use-cart';
import Navbar from '../HomePage/Navbar';
import Foothome from '../HomePage/Foothome';
function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart,
        totalItems,
        cartTotal,
    } = useCart();
    
    {/* ******************************
******************************
****************************** */}

    // table empty 
    if (isEmpty) {
        return (
            <h3 className="text-center" style={{ fontWeight: "bolder", marginTop: "100px", color: "red", marginBottom: "225px" }}>there is not booking !!</h3>
        );
    }
    // table empty 

    {/* ******************************
****************************** 
****************************** */}

    return (
        <div style={{}}>
            <Container style={{ backgroundColor: "#8d99af", marginTop: "50px", borderRadius: "30px", marginTop: "100px" }} >
                <Row>
                    <Col md="12">
                        {/* Adress  */}
                        <h1 style={{ marginTop: "30px", marginBottom: "30px" }} className="text-center" >Booking ({totalUniqueItems})
                            <button
                                style={{ fontSize: "30px", backgroundColor: "red", color: "white", marginLeft: "30px", borderRadius: "30px", padding: "20px 30px" }}
                                onClick={() =>
                                    emptyCart()}>
                                Delete All Bookings</button>
                        </h1>
                        {/* Adress  */}


                        {/* ******************************
******************************
****************************** */}

                        {/* table  */}
                        <table className="table table-dark text-center " style={{}}>
                            <thead>
                                <tr>
                                    <th scope="col">HOTEL</th>
                                    <th scope="col">ROOMS</th>
                                    <th scope="col">TOTEL_PRICE</th>
                                    <th scope="col">OPEARATION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((hotel) => (
                                    <tr key={hotel.id}>

                                        <td>{hotel.name}</td>
                                        {/* <td>{hotel.quantity} x {hotel.name}</td> */}
                                        <td>{hotel.quantity}</td>
                                        <td>${hotel.quantity * hotel.price} </td>

                                        <td>
                                            <button
                                                onClick={() => updateItemQuantity(hotel.id, hotel.quantity - 1)}
                                            >
                                                -
                                            </button>
                                            <button
                                                onClick={() => updateItemQuantity(hotel.id, hotel.quantity + 1)}
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() => removeItem(hotel.id)}>&times;
                                            </button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>

                        </table>
                        {/* table  */}


                        {/* ******************************
******************************
****************************** */}

                        {/* result  */}
                        <div className="text-center m-auto"
                            style={{ backgroundColor: "black", width: "40%", borderRadius: "30px", color: "white" }}>
                            <h3 className='mb-2 mt-5 pt-5' style={{ fontWeight: "bolder", paddingLeft: "50px", paddingRight: "50px", color: "#ffbb00" }}><i className="fa-solid fa-bed" style={{ marginRight: "20px" }}></i>Total Rooms : {totalItems}</h3>
                            <h3 className='mb-5 pb-5' style={{ fontWeight: "bolder", paddingLeft: "20px", paddingRight: "20px", color: "#ffbb00" }}>Total Costs : $ {cartTotal}</h3>
                        </div>
                        {/* result  */}

                    </Col>
                </Row>
            </Container>

        </div>
    );
}
function Table() {
    return (
        <div style={{ backgroundColor: " #2f3537", paddingBottom: "100px" }}>
            <CartProvider>

                <Navbar />
                <div className=" pt-5" style={{}}></div>
                <Cart />
                <Foothome />
            </CartProvider>
        </div>
    )
}
export default Table;
