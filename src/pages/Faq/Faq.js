import React from 'react';
import { useContext } from 'react';
import Accordion from "react-bootstrap/Accordion";
import { Mycontext } from '../../Authcontext/Authcontext';


const Faq = () => {

    const {darkMode} = useContext(Mycontext)
    return (
        <section className={`${darkMode ? "my-5 py-5" : "bg-black  py-5"}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-12"></div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12"></div>
          </div>
        </div>
      </section>
    );
};

export default Faq;