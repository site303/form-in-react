import React from 'react';
import TextInput from './TextInput';

function Mail() {
    return (
        <form>
            <TextInput textValue="First Name" textPlaceHolder="Имя" textType="text"></TextInput>
            <TextInput textValue="Second Name" textPlaceHolder="Фамилия" textType="text"></TextInput>
            <TextInput textValue="Mail" textPlaceHolder="mail@ex.ru" textType="mail"></TextInput>
            <TextInput textValue="Phone" textPlaceHolder="(999)-999-99-99" textType="tel"></TextInput>
            <button>Отправить</button>
        </form>
    );
}

export default Mail;