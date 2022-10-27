// import React from "react";
// import { Link, useLoaderData } from "react-router-dom";
// import { BsFillStarFill } from "react-icons/bs";
// import { Button } from "react-bootstrap";


// const Details = () => {
//   const allDetails = useLoaderData();
//   console.log(allDetails);

//   const {d_id, d_title, d_pic, d_details, price, rating } = allDetails;

//   return (
//     <div>
//       <div className="container my-5">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="px-3 py-4 border rounded">
//               <div className="row border-bottom">
                
//                  <div className="col-lg-8 col-md-8 col-sm-12">
//                   <h3>{d_title}</h3>
//                 </div>

//                 <div className="col-lg-4 col-md-4 col-sm-12 text-end ">
//                   <Button type="button" className="btn btn-warning">
//                     Download PDF
//                   </Button>
//                 </div>
                
//               </div>
//               <div className="row my-2">
//                 <div className="col ">
//                     <img className="mx-auto rounded" src={d_pic} alt="" />
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col">
//                     <div>
//                         <p className="lead py-4">{d_details}</p>
//                     </div>

//                     <div className="my-2 d-flex justify-content-between align-items-center  border-top p-2">
//                         <div> <span>Ratings:</span> <span className="text-warning"><BsFillStarFill/></span> <span> {rating} </span> </div>

//                         <div className="">
//                             <span> Price: </span> <span> ${price}</span>
//                         </div>

//                         <div>
//                         <Link to={`/premium/${d_id}`}>
//                                  <Button variant="warning">Get Premium Access</Button>
//                           </Link>
//                          </div>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;















import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import { Mycontext } from "../../Authcontext/Authcontext";
import { useContext } from "react";
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import toast from "react-hot-toast";
import '../../Defaultcss/Default.css'

const Details = () => {
  const { darkMode } = useContext(Mycontext);

  const allDetails = useLoaderData();
  const { d_id, d_title, d_pic, d_details, price, rating } = allDetails;


  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => toast.success("print success"),
  });

 




  return (
    <div>
      <div className={`${darkMode ? "bg-white" : "bg-dark"}`}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="px-3 py-4 border rounded bg-white">
                <div className="row pb-3 border-bottom text-center">
                  <div className="col-lg-6 col-md-6 col-sm-6 ">
                    <h3>{d_title}</h3>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <button
                      onClick={handlePrint}
                      type="button"
                      className="btn btn-warning">
                      Download PDF
                    </button>
                  </div>
                </div>

                {/*  pdf */}
                <div className="row my-2">
                  <div ref={componentRef} className="col ">
                    <img className="mx-auto w-100 rounded" src={d_pic} alt="" />
                    <div>
                      <p className="lead py-4">{d_details}</p>
                    </div>
                  </div>
                </div>
             
            
                <div className="row">
                  <div className="col">
                    <div className="my-2 d-flex justify-content-between align-items-center  border-top p-2">
                      <div>
                      
                        <span>Ratings:</span>
                        <span className="text-warning">
                          <BsFillStarFill />
                        </span>
                        <span> {rating} </span>
                      </div>

                      <div className="">
                        <span> Price: </span> <span> ${price}</span>
                      </div>

                      <div>
                        <Link to={`/premium/${d_id}`}>
                          <button
                            className="btn btn-warning">
                            Get Premium Access
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
