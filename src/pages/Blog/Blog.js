import React from 'react';
import { useContext } from 'react';
import { Mycontext } from '../../Authcontext/Authcontext';
import '../../Defaultcss/Default.css'

const Blog = () => {

  const {darkMode} = useContext(Mycontext)
    return (
   <section className={`${darkMode ? "bg-white" : "bg-dark border-btm"}`}>
        <div className='container'>
    <div class="card my-4">
    <div class="card-header">
    <b>What is cors</b>
    </div >
    <div class="card-body">
    <p class="card-text">Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources.</p>  
      </div>
      </div>

</div>
   </section>
    );
};

export default Blog;