import React from "react";
import { Button, Form, Toast } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useLoaderData } from "react-router-dom";
import toast from 'react-hot-toast';

import "./Premium.css"

const Premium = () => {
  const premium = useLoaderData();
  const { d_hours, d_id, d_pic, d_title, price, rating } = premium;

  const notify = () => toast.success('Successfully Enroll!'); 


  return (
    <div className="premium-cource">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
          <Card className="my-5">
              <Card.Img variant="top" src={d_pic} />
              <Card.Body>
                <Card.Title>{d_title}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <b>Book id :</b> 0{d_id}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Total :</b> {d_hours} hours
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Rating :</b> {rating}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Price :</b> {price} Taka
                </ListGroup.Item>
              </ListGroup>
            </Card>

          </div>
          <div className="col-lg-3"></div>
          <div className="col-lg-5 ">
           <div className="py-5 my-5 border rounded px-5 shadow-lg bg-white">
            <h3 className="text-centr fw-bold">CheckOut</h3>
                <Form >
                  <Form.Group className="mb-3">
                    <Form.Label> Full Name </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" Your Full Name"
                    /> </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label> Your Email </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=" Your Email " />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder=" Your Password"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" Your City"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" Your State"
                    />
                  </Form.Group>
                  <Button onClick={notify} variant="warning">Enroll Now</Button>
           </Form>
    </div>
</div>
        </div>
        </div>     
          
        </div>
   
  );
};

export default Premium;
