import { useState } from "react";

const Home = () => {

    // useState hooks
    const [name,setName] = useState("Ajay");
    const [age, setAge] = useState("20");
    const handleClick = () => {
        setName("Nova");
        setAge(21);
    }

    return (
        <div className="home">
            <h1>Homepage</h1>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;