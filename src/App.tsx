import React, { useContext, useState } from 'react';
import './App.css';
import HeartContext from "./context";
import { HeartIcon } from "./heart";
import { FancyButton } from "./fancyButton";

function App() {
    const [colorMode, setColorMode] = useState(true);
    const context = useContext(HeartContext);

    function setHeartColors(color: string, borderColor: string) {
        context?.setHeartColor(color);
        context?.setHeartBorderColor(borderColor);
        setColorMode(!colorMode);
    }

    return (
        <div className="App">
              <header className="App-header">
                  {context && (
                      <HeartIcon
                          width={240}
                          height={240}
                          borderColor={context?.heartBorderColor}
                          color={context?.heartColor}
                      />
                  )}
                  <FancyButton onPress={setHeartColors} colorMode={colorMode} />
              </header>
        </div>
    );
}

export default App;
