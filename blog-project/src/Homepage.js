import { useState, useEffect } from 'react';
import BlogList from './BlogList';


const Homepage = () => {

   const [blogs, setBlogs] = useState(null)
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null)

   const [name, setName] = useState("mario")

   const handleDelete = (id) => {
     const newBlogs = blogs.filter(blog => blog.id !== id);
     setBlogs(newBlogs);
   }

   useEffect(() =>{
    fetch("http://localhost:8000/blogss")
    .then(res => {
      if(!res.ok){
        throw Error("could not fetch the data!");
      }
      return res.json()
    })
    .then((data) => {
      setBlogs(data);
      setIsPending(false);
    })
    .catch(err => {
      setIsPending(false);
      setError(err.message);
    })
   },[])

    return ( 
        <div className="content">
          { error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs!" />}
        </div>
     );
}
 
export default Homepage;