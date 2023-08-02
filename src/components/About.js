import React, { useState } from "react"
import User from "./User"
import UserClass from './UserClass';

class About extends React.Component{

    constructor(props){
        super(props);
        // console.log('parent constructor');
    }

    componentDidMount(){
        // console.log("parent did mount component");
    }

    render(){
        console.log("parent Render");
        return (<div>
            <h1>About</h1>
            <h2>This is Namaste React Web series</h2>
            <User name={"Abhishek Batra (function)"}/>
            {/* <UserClass name={"First"} location={"Delhi (class)"}/> */}
        </div>)
    }
}

// const About = () => {

//     return (<div>
//         <h1>About</h1>
//         <h2>This is Namaste React Web series</h2>
//         {/* <User name={"Abhishek Batra (function)"}/> */}
//         <UserClass name={"Abhishek Batra (classes)"} location={"Delhi (class)"}/>
//     </div>)
// }

export default About