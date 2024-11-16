import React from "react";
import ReactDOM from "react-dom/client";

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
        */
        //Below is the code for the above commented out html structure. in pure react you create the structure something like this.
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
          // const element = React.createElement('h1', {id: "heading"}, "Hello from React!");
          console.log(parent);
  
          const root = ReactDOM.createRoot(document.getElementById("root"));
  
          root.render(parent);