import React, { useState, useEffect } from 'react';
// 
import './styles.sass';
// 

function Modal({ children, active, setActive, title }) {
    return (
        <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? 'modal__content active' : 'modal__content'}
                onClick={e => e.stopPropagation()}
            >
                <div className="modal__header">
                    <p className="modal__title">
                        {title.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ")}
                    </p>
                    <button
                        className="button modal__close-button"
                        onClick={() => setActive(false)}
                >x</button>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;