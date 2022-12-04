import React from 'react';

import './styles.sass'

function CustomAccordion({
    children,
    title,
    isActive,
    setIsActive,
    customRef
}) {
    return (
        <section
            className={isActive ? "accordion_active" : "accordion"}
            ref={customRef}
        >
            <div className="accordion__header" >
                {isActive ? <p className='accordion__title'>{title}</p> : null}
                <button
                    className='accordion__openbtn button'
                    onClick={() => {
                        setIsActive(!isActive)
                    }}>
                    {isActive ? '-' : '+'}
                </button>
            </div>
            {isActive && <div className='accordion__content'>{children}</div>}
        </section>
    );
}

export default CustomAccordion;