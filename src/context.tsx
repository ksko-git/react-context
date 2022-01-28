import React from "react";

interface IContext {
    heartColor: string,
    setHeartColor: any,
    heartBorderColor: string,
    setHeartBorderColor: any
}

const HeartContext = React.createContext<IContext | undefined>(undefined);

export default HeartContext;