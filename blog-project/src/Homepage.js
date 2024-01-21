import { useState, useEffect } from 'react';
import BlogList from './BlogList';


const Homepage = () => {

   const [blogs, setBlogs] = useState([
    {title: "My new website", body: "lorem ipsum...", author: "mario", id: 1},
    {title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2},
    {title: "Web dev top tips", body: "lorem ipsum...", author: "luigi", id: 3}
   ])

   const [name, setName] = useState("mario")

   const handleDelete = (id) => {
     const newBlogs = blogs.filter(blog => blog.id !== id);
     setBlogs(newBlogs);
   }

   useEffect(() =>{
    console.log("use effect ran");
   },[name])

    return ( 
        <div className="content">
            <BlogList blogs = {blogs} title = "All Blog" handleDelete = {handleDelete}/>
            <BlogList blogs = {blogs.filter((blog) => blog.author === "mario")} handleDelete = {handleDelete} title = "Mario's Blog" />
            <button onClick = {() => setName("luigi")}>change name</button>
            <h2>Hi {name}</h2>
        </div>
     );
}
 
export default Homepage;