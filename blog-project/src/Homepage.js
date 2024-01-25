import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

// bad coding documentation :((
// bro just followed the whole tutorial without any documentation comments

const Homepage = () => {
  
  const {error, isPending, blogs} = useFetch("http://localhost:3000/blogs")

   const [name, setName] = useState("mario")

  //  const handleDelete = (id) => {
  //    const newBlogs = blogs.filter(blog => blog.id !== id);
  //    setBlogs(newBlogs);
  //    // Deleting a blog
  //  }
    
  

    return ( 
        <div className="content">
          { error && <div> {error} </div> /* this will output a error and checking it by the .catch category*/} 
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs!"  /* conditional rendering patter check in What I learn in React no. *//>}
        </div>
     );
}
 
export default Homepage;