import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftNav from "./LeftNav/LeftNav";
import RightCard from "./RightCard/RightCard";
import "./Cource.css"
import { useContext } from "react";
import {Mycontext} from "../../Authcontext/Authcontext"
import '../../Defaultcss/Default.css'

const Course = () => {
  const courses = useLoaderData();
  const {darkMode} = useContext(Mycontext)

  return (
    <div >
      <section className={`${darkMode ? "bg-white" : "bg-dark border-btm"}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 my-3">
              
              {/* leftside card */}
              {courses.map((c) => (
                <LeftNav key={c.id} course={c}></LeftNav>
              ))}
            </div>

            {/* right side card */}

            <div className="col-lg-8 col-md-8 col-sm-12 my-3">
              <div className="row">
                {courses.map((c) => (
                  <RightCard key={c.id} course={c}></RightCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
