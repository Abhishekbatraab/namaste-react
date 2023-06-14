/** 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm a h1 tag</h1>
 *          <h2>I am a h2 tag</h2>
 *      </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 * 
 * */

const parent = React.createElement("div", {id: 'parent'}, 
    [
        React.createElement("div", {id:"child"}, 
            [React.createElement("h1", {}, "I'm a h1 tag"), 
            React.createElement("h2", {}, "I'm a h2 tag")]
        ),
        React.createElement("div", 
        {id:"child"}, [React.createElement("h1", {}, "I'm a h1 tag"), 
        React.createElement("h2", {}, "I'm a h2 tag")])
    ]
);

//JSX -> Why JSX is introduced => to make liffe easier writing code or react.
 



// const heading = React.createElement("h1", { id: 'heading' }, "Hello World from React!");
// console.log(heading);//return an object
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);