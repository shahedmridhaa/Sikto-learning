import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const RightCard = ({ course }) => {
  const { id, c_thumb, title, author } = course;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <Card>
        <Card.Img variant="top" src={c_thumb} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Card.Text>
            <small>{author}</small>
          </Card.Text>

          <Link to={`/details/${id}`}>
            <button className="btn btn-warning btn-sm">More Details</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RightCard;
