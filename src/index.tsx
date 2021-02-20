import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { App } from './App';
import 'normalize.css';
import './static/styles/global.scss';
import { store } from './store';
import { ReduxProvider } from './components/utils/Redux.provider';

ReactDOM.render(
    <React.StrictMode>
        <ReduxProvider reduxStore={store}>
            <App />
        </ReduxProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
