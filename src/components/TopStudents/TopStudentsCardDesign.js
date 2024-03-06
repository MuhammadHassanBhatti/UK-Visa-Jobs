import React from "react";
import Card from "react-bootstrap/Card";
import Bookmark from "../../assets/static/images/bookmark.png";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUsd } from "@fortawesome/free-solid-svg-icons";

const TopStudentsCardDesign = ({ CardData }) => {
  return (
    <div className="container card-design">
      {CardData.map((item) => (
        <Card key={item.id} className="my-4">
          <div className="parent-class">
            <Card.Img
              variant="left"
              className="card-image"
              src={item.img}
              alt="Logo"
            />
            <Card.Body>
              <Card.Title className="card-tittle">
                {item.tittle}
                <div className="bookmark-container">
                  <img src={Bookmark} alt="bookmark" className="bookmark" />
                </div>
              </Card.Title>
              <Card.Text>
                <p>{item.description} </p>
                <div className="location tag">
                  <i className="fas">
                    <FontAwesomeIcon icon={faMapMarker} />
                  </i>
                  {item.location}
                </div>
                <div className="degree tag">
                  <i className="fas">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </i>
                  {item.degree}
                </div>
                <div className="salary tag">
                  <i className="fas">
                    <FontAwesomeIcon icon={faUsd} />
                  </i>
                  {item.salary}
                </div>
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TopStudentsCardDesign;
