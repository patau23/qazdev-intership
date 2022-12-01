import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

function GuestRoute(props) {
    const { children } = props;
    const { username } = useSelector(state => state.user)

    const location = useLocation()
    const url = new URLSearchParams(location.search.slice(1))

    return username ?
        (<Navigate to={url.get('redirect') || '/'} />) :
        (children)
}

export default GuestRoute;