import React from 'react';
import { useContext } from 'react';
import { Mycontext } from '../../Authcontext/Authcontext';
import '../../Defaultcss/Default.css'

const Blog = () => {

  const {darkMode} = useContext(Mycontext)
    return (
   <section className={`${darkMode ? "bg-white" : "bg-dark border-btm"}`}>
        <div className='container'>


</div>
   </section>
    );
};

export default Blog;