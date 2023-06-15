import React from "react";
import ReactDOM from 'react-dom/client';

//React.createElement => React Element => JS Object => HTMLElement(render )

// const heading = React.createElement(
//     "h1",
//     { id: 'heading' },
//     "Namaste React 🚀"
// )
// console.log(heading);

//JSX - HTML like or XML like syntax 
//JSX => Babel transpiles it to React.createElement => ReactElement-> JS Object => HTMLElement(render)

//React Element
// const heading = (
//     <h1 className="heading" tabIndex={1}>
//         Namaste React using JSX</h1>
// ); //JS can't read this directly

// const Title = () => (
//     <h1 className="head" tabIndex="">
//         Namaste React using JSX 🚀 
//     </h1>
// )

const elem = <span>React Element</span>;

const title = (
    <h1 className="head" tabIndex="">
        {elem}
        Namaste React using JSX 🚀 
    </h1>
);



//React Functional Component
const HeadingComponent = () => (
    <>
        <div id="container">
            {title}
            <h1 className="heading ">Namaste React Functional Component</h1>
        </div>
        <div id="container2"></div>
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading)// it will replace whatever we have in the root
root.render(<HeadingComponent />);
