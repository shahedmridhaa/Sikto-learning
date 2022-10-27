import React from "react";
import "./Home.css";
import { AiTwotoneTrophy } from "react-icons/ai";
import { Button } from "react-bootstrap";
import student from "../../asset/sutdent.jpg";
import { useContext } from "react";
import { Mycontext } from "../../Authcontext/Authcontext";
import { Link } from "react-router-dom";

const Home = () => {
  const {darkMode} = useContext(Mycontext)


  return (
    <div>
      {/* banner section */}
      <section className="home-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12"></div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="my-6 py-6">
                <h1 className="fs-1 fw-bolder text-white">
                  A Briliant Way <br /> Improve Cariere
                </h1>

                <Link to='/course'>
            <button  type="button" className="btn btn-outline-warning ">
                  Learn More
                </button>
                </Link>
                </div>
                </div>
                </div>
                </div>
         </section>


      <section className="home-card text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card-box1 my-2 ">
                <h1 className="fs-1 fw-bold">Latest Top Skills</h1>
                <p className=" my-3 lead">
                  Create your free account now and get immediate access to 100s
                  of courses.
                </p>
                <Link to='/course'>
            <button  type="button" className="btn btn-secondary ">
                  Learn More
                </button>
            </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card-box2 my-2 ">
                <h1 className="fs-1 fw-bold">Learn in Online</h1>
                <p className=" my-3 lead">
                  Both day and boarding students benefit from the resources of
                  master.
                </p>
            <Link to='/course'>
            <button  type="button" className="btn btn-secondary ">
                  Learn More
                </button>
            </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card-box3 my-2 ">
                <h1 className="fs-1 fw-bold">Latest Top Skills</h1>
                <p className=" my-3 lead">
                  There is one principle of organization that every human should
                  adhere.
                </p>
                <Link to='/course'>
            <button  type="button" className="btn btn-secondary ">
                  Learn More
                </button>
            </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${darkMode ? "bg-yellow" : "bg-dark"}`}>
        <div className="container bg-light p-5 rounded rounded-lg ">
          <div className="row">
            <div className="col-lg-8 pe-5">
              <div>
                <h2 className="fs-1 fw-bolder">Jane Herbert</h2>
                <p className="py-4">
                  Whether you work in machine learning or finance, or are
                  pursuing a career in web development or data science, Python
                  is one of the most important skills you can learn.{" "}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <div className="exp">
                  <div className="won-icon">
                    <AiTwotoneTrophy />
                  </div>
                  <div className="ms-3">
                    <h1 className="fs-2 fw-bold">19 Years</h1>
                    <p>Experience</p>
                  </div>
                </div>
                <div>
                  <Button variant="outline-warning">All reviews </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className=" testimonial-img">
                <img
                  className="w-100 rounded shadow-lg rounded "
                  src={student}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
