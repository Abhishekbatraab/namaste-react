import React from "react";
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div", {id: 'parent'}, 
    [
        React.createElement("div", {id:"child"}, 
            [React.createElement("h1", {}, "This is Namaste React 🚀"), 
            React.createElement("h2", {}, "by Abhishek Batra")]
        ),
        React.createElement("div", 
        {id:"child"}, [React.createElement("h1", {}, "I'm a h1 tag"), 
        React.createElement("h2", {}, "I'm a h2 tag")])
    ]
);
console.log(parent); //object

//JSX -> Why JSX is introduced => to make life easier writing code or react.
 



// const heading = React.createElement("h1", { id: 'heading' }, "Hello World from React!");
// console.log(heading);//return an object
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);