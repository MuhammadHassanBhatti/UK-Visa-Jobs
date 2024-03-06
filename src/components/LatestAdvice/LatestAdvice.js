import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lawCard1 from "../../assets/static/images/Rectangle 1399.png";
import lawCard2 from "../../assets/static/images/Rectangle 1401.png";
import lawCard3 from "../../assets/static/images/Rectangle 1403.png";

const LatestAdvice = () => {
  const AdviceData = [
    {
      id: 1,
      img: lawCard1,
      tittle: "Accounting,Audit & Tax",
      description:
        " The pharmaceuticals sector is the scaffolding supporting themedical world, drip-feeding hospitals,pharmacies and patients.",
    },
    {
      id: 2,
      img: lawCard2,
      tittle: "Investment Management",
      description:
        " The pharmaceuticals sector is the scaffolding supporting themedical world, drip-feeding hospitals,pharmacies and patients.",
    },
    {
      id: 3,
      img: lawCard3,
      tittle: "Comercial Law",
      description:
        " The pharmaceuticals sector is the scaffolding supporting themedical world, drip-feeding hospitals,pharmacies and patients.",
    },
  ];
  return (
    <div className="container">
      <h3 className="feature-events">News</h3>
      <h2 className="Students-tittle">Latest Advice</h2>
      <div className="container Advice_Cards">
        <Row>
          {AdviceData.map((item) => (
            <Col xs={12} sm={6} md={6} lg={4} key={item.key}>
              <div className="my-2">
                <Card style={{ minHeight: "400px" }}>
                  <div className="container my-2">
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.tittle}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Button variant="primary" className="btn-Advice">
                        Read More
                      </Button>
                    </Card.Body>
                  </div>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default LatestAdvice;
