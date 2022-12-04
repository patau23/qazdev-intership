import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    loginAsyncAction,
    registerAsyncAction
} from '../../../redux/asyncActions/userAsyncActions'

import './styles.sass';
import PageLayout from '../../PageLayout/index.jsx';
import CustomAuthForm from '../../custom/CustomAuthForm/index.jsx';
import CustomInput from '../../custom/CustomInput/index.jsx';


function AuthPage() {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        authLogin: { value: '', isValid: false },
        authPassword: { value: '', isValid: false },

        registerLogin: { value: '', isValid: false },
        registerPassword: { value: '', isValid: false },
        registerEmail: { value: '', isValid: false },

        isFormMoved: false,
    });
    const message = useSelector(state => state.user.statusMessage);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginAsyncAction(
            state.authLogin.value,
            state.authPassword.value
        ));
    }
    const handleRegist = (e) => {
        e.preventDefault();
        dispatch(registerAsyncAction(
            state.registerLogin.value,
            state.registerEmail.value,
            state.registerPassword.value
        ))
    }

    return (
        <PageLayout>
            <div className='authpage-container'>

                <div className="block">
                    <section className="block__item block-item">
                        <h2 className="block-item__title">you have an account?</h2>
                        <button
                            className="block-item__btn sign-in-btn"
                            onClick={() => {
                                setState(prev => ({
                                    ...prev, isFormMoved: true
                                }))
                            }}
                        >sign in</button>
                    </section>
                    <section className="block__item block-item">
                        <h2 className="block-item__title">you don't have an account?</h2>
                        <button
                            className="block-item__btn sign-up-btn"
                            onClick={() => {
                                setState(prev => ({
                                    ...prev, isFormMoved: false
                                }))
                            }}
                        >sign up</button>
                    </section>
                </div>

                <div className={state.isFormMoved ? 'form-box' : 'form-box active'}>
                    <div className='form_signin'>
                        <CustomAuthForm
                            className={'view'}
                            onSubmit={handleLogin}
                            label={'Login'}
                            disabled={!state.authLogin.isValid || !state.authPassword.isValid}
                        >
                            <CustomInput
                                type='text'
                                placeholder='Write ur login here'
                                value={state.authLogin.value}
                                validations={{
                                    isEmpty: true,
                                    minLength: 3,
                                    maxLength: 16,
                                }}
                                onChangeFunction={(e, inputValid) => {
                                    setState(prev => ({
                                        ...prev,
                                        authLogin: { value: e, isValid: inputValid }
                                    }))
                                }}
                            />
                            <CustomInput
                                type='password'
                                placeholder='Write ur password here'
                                value={state.authPassword.value}
                                validations={{
                                    isEmpty: true,
                                    minLength: 8,
                                    maxLength: 16,
                                    // isLatinLettersOnly: true
                                }}
                                onChangeFunction={(e, inputValid) => {
                                    setState(prev => ({
                                        ...prev,
                                        authPassword: { value: e, isValid: inputValid }
                                    }))
                                }}
                            />
                        </CustomAuthForm>
                    </div>
                    <div className='form_signup'>
                        <CustomAuthForm
                            onSubmit={handleRegist}
                            label={'Register'}
                            disabled={
                                !state.registerEmail.isValid ||
                                !state.registerLogin.isValid ||
                                !state.registerPassword.isValid
                            }
                        >
                            <CustomInput
                                type='text'
                                placeholder='Write ur username here'
                                value={state.registerLogin.value}
                                validations={{
                                    isEmpty: true,
                                    minLength: 3,
                                    maxLength: 16,
                                }}
                                onChangeFunction={(e, inputValid) => {
                                    setState(prev => ({
                                        ...prev,
                                        registerLogin: { value: e, isValid: inputValid }
                                    }))
                                }}
                            />
                            <CustomInput
                                type='email'
                                placeholder='Write ur email here'
                                value={state.registerEmail.value}
                                validations={{
                                    isEmpty: true,
                                    minLength: 3,
                                    maxLength: 36,
                                    isEmail: true,
                                }}
                                onChangeFunction={(e, inputValid) => {
                                    setState(prev => ({
                                        ...prev,
                                        registerEmail: { value: e, isValid: inputValid }
                                    }))
                                }}
                            />
                            <CustomInput
                                type='password'
                                placeholder='Write ur password here'
                                value={state.registerPassword.value}
                                validations={{
                                    isEmpty: true,
                                    minLength: 8,
                                    maxLength: 16,
                                    isLatinLettersOnly: true
                                }}
                                onChangeFunction={(e, inputValid) => {
                                    setState(prev => ({
                                        ...prev,
                                        registerPassword: { value: e, isValid: inputValid }
                                    }))
                                }}
                            />
                        </CustomAuthForm>
                    </div>
                </div>

                {message ? <p className='authpage-container__notice-message'>{message}</p> : <></>}
            </div>
        </PageLayout >
    )
}
export default AuthPage;