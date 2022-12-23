import React from 'react';

import './styles.sass';


const CustomAuthForm = ({
    label,
    children,
    onSubmit = function (e) { },
    disabled = false,
}) => {
    return (
        <form
            className='form'
            onSubmit={onSubmit}
        >
            <h3 className='form__title'>
                {label}
            </h3>
            {children}
            <input
                className={disabled ? 'button form__btn' : 'button form__btn active'}
                type="submit"
                disabled={disabled}
            />
        </form>
    )
};
export default CustomAuthForm;