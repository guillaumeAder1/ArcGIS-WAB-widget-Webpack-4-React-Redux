import A from './A.js'
import React from "react";
import ReactDOM from "react-dom";

const App = (props) => {
    return (
        <A {...props} />
    )
};

App.load = (props) => {
    ReactDOM.render(<App {...props} />, document.getElementById("react-legend"));
}

export default App;
