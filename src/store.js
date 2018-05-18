import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index";
import { createLogger } from 'redux-logger';


const initialState = {};
const enhancers = [];
const middleware = [createLogger(), thunk];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }

}
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(rootReducer, initialState, composedEnhancers);


// // original
// const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         createLogger(),
//         thunk
//     )
// );

// export default store;