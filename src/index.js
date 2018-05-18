import A from './A.js'
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";


/**REACT ONLY */
// const App = (props) => {
//     return (
//         <A {...props} />
//     )
// };
// App.load = (props) => {
//     ReactDOM.render(<App {...props} />, document.getElementById("react-legend"));
// }
/**END REACT ONLY */

const App = (props) => {
    return (
        <Provider store={store}>
            <A {...props} />
        </Provider>
    )
};
App.load = (props) => {
    ReactDOM.render(
        // <Provider store={store}>
        <App {...props} />,
        // </Provider>,
        document.getElementById("react-legend"));
}

export default App
