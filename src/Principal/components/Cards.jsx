import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function HotelCard(props) {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Link href="#">Ver detalles</Card.Link>
        </Card.Body>
      </Card>
    );
  }
  
  function HotelList(props) {
    const [filteredHotels, setFilteredHotels] = useState(props.hotels);
  
    const handleSearch = (event) => {
      event.preventDefault();
      const searchTerm = event.target.elements.searchTerm.value;
      const filteredHotels = props.hotels.filter((hotel) =>
        hotel.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredHotels(filteredHotels);
    };
  
    return (
      <Container>
        <Row>
          <Col>
            <h1>Busca hoteles en tu próximo destino</h1>
            <form onSubmit={handleSearch}>
              <label>
                Destino:
                <input type="text" name="searchTerm" />
              </label>
              <button type="submit">Buscar</button>
            </form>
          </Col>
        </Row>
        <Row>
          {filteredHotels.map((hotel) => (
            <Col md={4} key={hotel.id}>
              <HotelCard
                title={hotel.title}
                description={hotel.description}
                image={hotel.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  
  export default HotelList;