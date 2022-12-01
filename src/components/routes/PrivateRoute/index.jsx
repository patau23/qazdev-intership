import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute(props) {

    const username = useSelector(state => state.user.username);

    const location = useLocation()
    const url = new URLSearchParams()
    url.set('redirect', location.pathname + location.search)


    return username ? (
        props.children
    ) : (
        <Navigate
            to={{
                pathname: '/auth',
                search: url.toString()
            }}
        />
    )
}
export default PrivateRoute;