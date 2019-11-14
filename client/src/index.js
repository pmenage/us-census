import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import personReducer from './redux/reducers/person.reducer';
import apiMiddleware from "./redux/middleware/apiMiddleware";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import * as serviceWorker from './serviceWorker';


const rootReducer = combineReducers({
    person: personReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(apiMiddleware)
);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
