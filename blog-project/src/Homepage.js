import { useState } from 'react';

const Homepage = () => {

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(18);

    const handleClick = () => {
        setName('luigi');
        setAge(20);
    }

    return ( 
        <div className="content">
            <h1>Homepage</h1>
            <p> {name} is {age} years old </p>
            <button onClick = {handleClick}>Click Me!</button>
        </div>
     );
}
 
export default Homepage;