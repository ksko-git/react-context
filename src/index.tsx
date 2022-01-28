import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeartContext from "./context";

function MainInterface() {
    const [heartColor, setHeartColor] = useState('#D5A6BD');
    const [heartBorderColor, setHeartBorderColor] = useState('#AA8497');

    return (
        <React.StrictMode>
            <HeartContext.Provider value={{
                heartColor,
                setHeartColor,
                heartBorderColor,
                setHeartBorderColor
            }}>
                <App />
            </HeartContext.Provider>
        </React.StrictMode>
    );
}

ReactDOM.render(
  <MainInterface />,
  document.getElementById('root')
);

reportWebVitals();
