import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index";
import { createLogger } from 'redux-logger';

const store = createStore(
    rootReducer,
    applyMiddleware(
        createLogger(),
        thunk
    )
);

// const store = createStore(rootReducer);
export default store;