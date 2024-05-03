import { CartProvider, useCart } from "react-use-cart";
import { Container, Row, Col } from "reactstrap";

function Page() {
    const { addItem } = useCart();

    const products = [
        {
            "id": 1,
            "location": "Giza St., Dokki, Cairo, Egypt",
            "name": "PYRAMISA SUITS",
            "source_url": "http://www.101cookbooks.com/archives/001199.html",
            "recipe_id": "47746",
            "image_url": "./images/hotels/cairo/pyramids-hotel-cairo-1-768x512.jpg",
            "price": 2500,
            "rooms": "2 Beds",
            "bath_room": "2 bathroom",
            "location_url": "http://www.101cookbooks.com"
        },
        {
            "id": 2,
            "location": "Nasr City,Cairo,Egypt",
            "name": "AL MASA",
            "source_url": "http://thepioneerwoman.com/cooking/2012/01/fruit-pizza/",
            "rooms": "2 Beds",
            "bath_room": "2 bathroom",
            "image_url": "/images/hotels/cairo/almasa_hotel.jpg",
            "price": 2500,
            "location_url": "http://thepioneerwoman.com"
        },
        {
            "id": 3,
            "location": "Garden City, Cairo, Egypt",
            "name": "KEMPANSKI",
            "source_url": "http://www.closetcooking.com/2011/03/pizza-dip.html",
            "rooms": "2 Beds",
            "bath_room": "2 bathroom",
            "recipe_id": "35477",
            "image_url": "/images/hotels/cairo/Kimpanski.jpg",
            "price": 2500,
            "location_url": "http://closetcooking.com"

        },
        {
            "id": 4,
            "location": " Raml Station, Alexandria, Egypt",
            "name": "CECIL",
            "source_url": "http://www.closetcooking.com/2013/02/catableiflower-pizza-crust-with-bbq.html",
            "recipe_id": "41470",
            "rooms": "2 Beds",
            "bath_room": "1 bathroom",
            "image_url": "/images/hotels/alex/Cecil.jpg",
            "price": 1500,
            "location_url": "http://closetcooking.com"
        },
        {
            "id": 5,
            "location": "Corniche Road, Alexandria, Egypt",
            "name": "TOLIP",
            "source_url": "http://www.closetcooking.com/2012/11/pizza-quesadillas-aka-pizzadillas.html",
            "recipe_id": "35478",
            "rooms": "2 Beds",
            "bath_room": "1 bathroom",
            "image_url": "/images/hotels/alex/Tolip.jpg",
            "price": 1000,
            "location_url": "http://closetcooking.com"
        },
        {
            "id": 6,
            "location": "Al-Taamir Axis, Alexandria, Egypt",
            "name": "RADISSON BLU",
            "source_url": "http://www.twopeasandtheirpod.com/sweet-potato-kale-pizza-with-rosemary-red-onion/",
            "recipe_id": "54454",
            "rooms": "2 Beds",
            "bath_room": "1 bathroom",
            "image_url": "/images/hotels/alex/radisn blou.jpg",
            "price": 2000,
            "location_url": "http://www.twopeasandtheirpod.com"
        },
        {
            "id": 7,
            "location": "Khaled bin Al-Walid, Luxor, Egypt",
            "name": "STEIGENBERGER",
            "source_url": "http://www.mybakingaddiction.com/pizza-dip/",
            "recipe_id": "2ec050",
            "rooms": "2 Beds",
            "bath_room": "1 bathroom",
            "image_url": "/images/hotels/luxor/Stigin.jpg",
            "price": 1500,
            "location_url": "http://www.mybakingaddiction.com"
        },
        {
            "id": 8,
            "location": "Khaled bin Al-Walid, Luxor, Egypt",
            "name": "LBERTOL",
            "source_url": "http://thepioneerwoman.com/cooking/2013/04/pizza-potato-skins/",
            "recipe_id": "6fab1c",
            "rooms": "2 Beds",
            "bath_room": "1 bathroom",
            "image_url": "/images/hotels/luxor/iberotel.jpg",
            "price": 2000,
            "location_url": "http://thepioneerwoman.com"
        },
        {
            "id": 9,
            "location": "Khaled bin Al-Walid, Luxor, Egypt",
            "name": "LOTUS",
            "source_url": "http://www.bonappetit.com/recipes/2012/03/no-knead-pizza-dough",
            "recipe_id": "49346",
            "rooms": "2 Beds",
            "bath_room": "1 bathroom",
            "image_url": "/images/hotels/luxor/lutas.jpg",
            "price": 1500,
            "location_url": "http://www.bonappetit.com"
        },
        {
            "id": 10,
            "location": "Corniche El Nil, Aswan, Egypt",
            "name": "PYRAMISA ILAND",
            "source_url": "http://www.simplyrecipes.com/recipes/homemade_pizza/",
            "recipe_id": "36453",
            "rooms": "2 Beds",
            "bath_room": "1 bathroom",
            "image_url": "/images/hotels/aswan/pyramisailand.jpg",
            "price": 2000,
            "location_url": "http://simplyrecipes.com"
        },
        {
            "id": 11,
            "location": "Cornish Al Nile, Aswan, Egypt",
            "name": "CITYMAX",
            "source_url": "http://www.closetcooking.com/2012/08/taco-quesadilla-pizza.html",
            "recipe_id": "35626",
            "rooms": "2 Beds",
            "bath_room": "1 bathroom",
            "image_url": "/images/hotels/aswan/citymax.jpg",
            "price": 1500,
            "location_url": "http://closetcooking.com"
        },
        {
            "id": 12,
            "location": "All Recipes",
            "name": "HAPI",
            "source_url": "http://allrecipes.com/Recipe/Jays-Signature-Pizza-Crust/Detail.aspx",
            "recipe_id": "17796",
            "rooms": "2 Beds",
            "bath_room": "1 bathroom",
            "image_url": "/images/hotels/aswan/Margaritaville Beach Hotel.jpeg",
            "price": 1000,
            "location_url": "http://allrecipes.com"
        }
    ];

    return (
        <div className="Booking" >
            <div style={{ paddingBottom: "100px" }} ></div>
            {/* Api  */}
            <Container style={{ paddingTop: "20px" }}>
                <div>
                    {/* Address Api */}
                    <Row className="top-text header-text text-center" >

                        <h2 style={{ marginBottom: "40px", fontWeight: "bolder", color: "#ffbb00" }}>Book your hotel Now !! </h2>
                    </Row>
                    {/* Address Api */}

                    {/* **************************************
**************************************
************************************** */}

                    {/* items Api  */}
                    <Row className="text-center" style={{}}>
                        {products.map((p) => (
                            <Col  md="4"  key={p.id} >
                                <div style={{ boxShadow: "5px 5px 15px 1px #ffbb00" }} className="Api span3 wow bounceInUp center wow pulse animated">

                                <h2 style={{ fontFamily: "monospace", fontWeight: "bolder" }}>{p.name}</h2>
                                <h6 style={{ marginTop: "20px" }}>
                                    <i class="fa-solid fa-star" style={{ color: "#ffbb00" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#ffbb00" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#ffbb00" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#ffbb00" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#ffbb00", marginRight: "10px" }}></i><br />
                                    <i className="fa-solid fa-location-dot" style={{ color: "#1e6bf1", marginRight: "10px", marginTop: "10px" }}></i>{p.location}
                                </h6>
                                <img src={p.image_url} className='img-fluid' style={{ height: "300px", marginTop: "20px" }}></img>



                                <h3 style={{ marginTop: "20px", color: "blue" }}>${p.price} <span style={{ color: "black", fontSize: "15px" }}>For Night</span></h3>

                                <h3 style={{ marginTop: "20px" }}><i className="fa-solid fa-bed" style={{ marginRight: "20px" }}></i>{p.rooms}</h3>

                                <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>{p.bath_room}</h3>
                                <button onClick={() => addItem(p)}>Booking</button>
                                </div>

                            </Col>
                        ))}

                    </Row>
                    {/* items Api  */}

                </div>
            </Container>
            {/* Api  */}

        </div>
    );
}



function Booking() {
    return (
        <CartProvider>
            <Page />
        </CartProvider>
    );
}
export default Booking;