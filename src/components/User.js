import React, { useEffect, useState } from "react";

const User = ({name}) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('Namaste React OP');
        })

        return ()=>{
            console.log("useEffect return");
            clearInterval(timer);
        }
    },[])
    console.log("render");
    return <div className="user-card">
        <h1>Count: {count}</h1>
        <h1>Count2: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: https://www.linkedin.com/in/abhishek-batra-9910/</h4>
    </div>
}

export default User