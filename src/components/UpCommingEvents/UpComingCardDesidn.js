import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CardSubtitle from "react-bootstrap/esm/CardSubtitle";

const UpComingCardDesidn = ({ EventsData }) => {
  return (
    <Container>
      <Row>
        {EventsData.map((item) => (
          <Col xs={12} sm={12} md={6} lg={6} key={item.key}>
            <Card className="my-2">
              <div>
                <Card.Body>
                  <CardSubtitle className="virtual mb-1 text-muted ">
                    Virtual Interviews
                  </CardSubtitle>
                  <Card.Title className="upComingCardTitle">
                    {item.tittle}
                  </Card.Title>
                  <Card.Subtitle className="virtual mb-2 text-muted">
                    {item.calender} {item.date}@{item.timeDuration}
                  </Card.Subtitle>
                  <Card.Text>{item.description}</Card.Text>
                  <Button className="btn-Register">Register Now</Button>
                </Card.Body>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UpComingCardDesidn;

// style={{ width: "18rem" }}
