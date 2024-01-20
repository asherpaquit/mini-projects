const Homepage = () => {

<<<<<<< Updated upstream
    const handleClick = () => {
        console.log("Hello World");
    }

    return ( 
        <div className="content">
            <h1>Homepage</h1>
            <button onClick = {handleClick}>Click Me!</button>
=======
   const [blogs, setBlogs] = useState([
    {title: "My new website", body: "lorem ipsum...", author: "mario", id: 1},
    {title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2},
    {title: "Web dev top tips", body: "lorem ipsum...", author: "luigi", id: 3}
   ])

    return ( 
        <div className="content">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </div>
            ))}
>>>>>>> Stashed changes
        </div>
     );
}
 
export default Homepage;