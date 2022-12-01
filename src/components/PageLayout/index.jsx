import React from 'react';
import { useSelector } from 'react-redux';

import './styles.sass'
import LoadingSpinner from '../ui/LoadingSpinner/index.jsx';


function PageLayout(props) {
    const LSisLoading = useSelector(state => state.localStorageStatement.isLoading)
    const userIsLoading = useSelector(state => state.user.isLoading);
    return LSisLoading || userIsLoading ?
        (
            // TODO: сделать LoadingScreen, убрать LoadingSpinner и добавить его в этот скрин
            <LoadingSpinner />
        ) : (
            <div className='wrapper'>
                {props.children}
            </div>
        );
}
export default PageLayout;