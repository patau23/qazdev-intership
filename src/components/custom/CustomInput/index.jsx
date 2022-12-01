import React, { useState, useEffect } from 'react';

import useInput from '../../../hooks/useInput/index.js';
import useValidation from '../../../hooks/useValidation/index.js';
import './styles.sass'


function CustomInput({
    type = 'text',
    value = '',
    placeholder = '',
    validations = {},
    onChangeFunction = function (e, inputValid) { }
}) {
    const inputState = useInput(value);
    const {
        isEmpty,
        minLengthError,
        maxLengthError,
        isEmail,
        isLatinLettersOnly,
        inputValid
    } = useValidation(inputState.value, validations)

    useEffect(() => {
        onChangeFunction(inputState.value, inputValid)
    }, [inputState.value, inputValid]);

    return (
        <div className='block-input'>
            <input
                type={type}
                className='block-input__field'
                placeholder={placeholder}
                value={inputState.value}
                onChange={(e) => {
                    inputState.setValue(e.target.value)
                }}
                onBlur={(e) => inputState.onBlur(e)}
            />
            {inputState.isDirty && isEmpty &&
                <div className='block-input__message'>Field must not be empty</div>}
            {inputState.isDirty && minLengthError &&
                <div className='block-input__message'>Min length allowed: {validations.minLength}</div>}
            {inputState.isDirty && maxLengthError &&
                <div className='block-input__message'>Max length allowed: {validations.maxLength}</div>}
            {inputState.isDirty && isLatinLettersOnly &&
                <div className='block-input__message'>Allowed only latin letter and rome numbers</div>}
            {inputState.isDirty && isEmail &&
                <div className='block-input__message'>Invalid Email</div>}
        </div>
    );
}

export default CustomInput;