import React from "react";
import ReactDOM from "react-dom/client";

import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 * - Header will have logo, 
 * - nav items - links to home, about, sign in/sign up
 * - cart menu options where users can check what's in their cart.
 * Body
 * - Search Input 
 * - RestaurantContainer
 *      - Restaurant Cards
 * Footer
 *  - copyright
 *  - Links
 *  - Address
 *  - Contact Me
 */
const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

//React Element Starting
// const jsxHeading = (
// <h1 className="head">
//   Namaste React using JSX🚀
//   </h1>
// );
//React Element Ending

//Only difference between react elements and react components are react elements are Objects and React components are functions which return JSX which is at the end of the day a react object.
/*
  const jsxHeading = {
    <h1>This is a react element</h1>
  }

  const JsxHeading = () => <h1> This is a react component </h1>
*/

//This is a Title component
const Title = () => (
    <h1 className="head" tabIndex="5">
    Namaste React using JSX
    </h1>
)
const number = 100;
//React Functional Component
const Headingcomponent = () => (
  //How to render the Title component inside the HeadingComponent? 
  <div id="container">
    <button>{number}</button>
    <Title />
    <h1 className="heading">Namaste Functional Component</h1> 
  </div>
)

// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headingcomponent />);

/*
        To create a structure like this follow the below code:
        <div id="parent">
          <div id="child1">
            <h1>I'm a h1 tag</h1>
            <h2>I'm the sibling of h1 tag</h2> h1 and h2 are both children of child div.
          </div>
          <div id="child2">
            <h1>I'm a h1 tag</h1>
            <h2>I'm the sibling of h1 tag</h2> h1 and h2 are both children of child div.
          </div>  
        </div>
        Below is the code for the above commented out html structure. in pure react you create the structure something like this.
        const parent = React.createElement("div", { id: "parent" }, [
            React.createElement("div", { id: "child1" }, [
              React.createElement("h1", { key: "1" }, "I'm a h1 tag"),
              React.createElement(
                "h2",
                { key: "2" },
                "I'm the sibling of h1 tag"
              ),
            ]),
            React.createElement("div", { id: "child2" }, [
              React.createElement("h1", { key: "1" }, "I'm a h1 tag"),
              React.createElement(
                "h2",
                { key: "2" },
                "I'm the sibling of h1 tag"
              ),
            ]),
          ]);
          const element = React.createElement('h1', {id: "heading"}, "Hello from React!");
          console.log(parent);
          
          const root = ReactDOM.createRoot(document.getElementById("root"));
          
          root.render(parent);
*/
