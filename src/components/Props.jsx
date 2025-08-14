import React from 'react'

const button = ({
    type
})
function Buttons(){
function smallTypes(){
    switch (button.id) {
    case navigationButton:
        return <button id="navigationButton"></button>;
    case utilityButton:
        return <button id="utilityButton"></button>;
    case actionButton:
        return <button id="actionButton"></button>;
    }
}
function largeTypes(){
    switch (button.id) {
        case flashyButton:
            return <button id="flashyButton"></button>;
        case superButton:
            return <button id="superButton"></button>;
        case megaButton:
            return <button id="megaButton"></button>;
    }
}

function handleButtons() {
  if(button.classList.contains('largeButton')) {
    return largeTypes;
  } else if(button.classList.contains('smallButton')) {
    return smallTypes;
  }
};
}



export default Buttons;