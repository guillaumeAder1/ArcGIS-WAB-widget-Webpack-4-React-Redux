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
//     ReactDOM.render(<App {...props} />, document.getElementById("react-react-redux-widget"));
// }
/**END REACT ONLY */

const App = (props) => {
    return (
        <A {...props} />
    )
};
App.load = (props) => {
    ReactDOM.render(
        <Provider store={store}>
            <App {...props} />
        </Provider>,
        document.getElementById("react-react-redux-widget"));
}

export default App
