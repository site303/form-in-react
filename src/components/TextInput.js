import React from 'react';

function TextInput(props) {
    return (
        <div>
            <label>{props.textValue}</label>
            <br/>
            <input placeholder={props.textPlaceHolder} type={props.textType}></input>
        </div>
    ) 
}

export default TextInput;
