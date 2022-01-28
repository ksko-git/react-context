import React from "react";

export const FancyButton =  (props: {
    onPress: (color: string, borderColor: string) => void,
    colorMode: boolean
}) => {
    const colors = props.colorMode
        ? {color: '#61DAFB', borderColor: '#4398AF'}
        : {color: '#D5A6BD', borderColor: '#AA8497'};
    return (
        <button onClick={() => props.onPress(colors.color, colors.borderColor)}>
            Кнопка нереалка
        </button>
    );
}