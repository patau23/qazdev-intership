import React, { useState } from 'react';

import useValidation from '../useValidation/index.js';


const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);

    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onBlur = (e) => setIsDirty(true)
    // const onFocus = (e) => setIsDirty(false)

    return {
        value,
        setValue,
        onChange,
        onBlur,
        // onFocus,
        isDirty,
    }
}

export default useInput;