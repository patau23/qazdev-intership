import React, { useState, useEffect } from 'react';


const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isLatinLettersOnly, setIsLatinLettersOnly] = useState(false);

    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;

                case 'minLength':
                    value.length < validations[validation] ?
                        setMinLengthError(true) : setMinLengthError(false)
                    break;

                case 'maxLength':
                    value.length > validations[validation] ?
                        setMaxLengthError(true) : setMaxLengthError(false)
                    break;

                case 'isEmail':
                    let reEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                    reEmail.test(String(value).toLowerCase()) ? setIsEmail(false) : setIsEmail(true)
                    break;

                case 'isLatinLettersOnly':
                    let reLetters = /([A-Za-z]+[0-9]+|[0-9]+[A-Za-z]+)/gm;
                    reLetters.test(value) ? setIsLatinLettersOnly(false) : setIsLatinLettersOnly(true)
                    break;

                default:
                    break;
            }
        }
    }, [value]);

    useEffect(() => {
        if (isEmail || minLengthError || isEmpty || isLatinLettersOnly || maxLengthError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmail, minLengthError, maxLengthError, isEmpty, isLatinLettersOnly]);

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        isEmail,
        isLatinLettersOnly,
        inputValid
    };
}

export default useValidation;