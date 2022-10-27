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
      <div class="card my-4">
<div class="card-header">
 <b>Why are you using firebase ? What other option do you have implement authentication?</b>
</div >
<div class="card-body">
 <p class="card-text">The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br />
 Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>  
  </div>
  </div>
  <div class="card my-4">
<div class="card-header">
 <b>How does the private route work</b>
</div >
<div class="card-body">
 <p class="card-text">The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>  
  </div>
  </div>

  <div class="card my-4">
<div class="card-header">
 <b>What is node? How does Node work? </b>
</div >
<div class="card-body">
 <p class="card-text">Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests <br /> It is a used as backend service where javascript works on the server-side of the application.</p>  
  </div>
  </div>

</div>
   </section>
    );
};

export default Blog;