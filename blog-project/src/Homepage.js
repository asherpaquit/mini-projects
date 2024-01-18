const Homepage = () => {

    const handleClick = () => {
        console.log("Hello World");
    }

    return ( 
        <div className="content">
            <h1>Homepage</h1>
            <button onClick = {handleClick}>Click Me!</button>
        </div>
     );
}
 
export default Homepage;