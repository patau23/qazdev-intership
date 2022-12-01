import React from 'react';
import { Link } from 'react-router-dom';

import './styles.sass';
import PageLayout from '../../PageLayout/index.jsx';


function NotFoundPage() {
    return (
        <PageLayout>
            <Link to={'/'}>go back</Link>
            <div>
                <h1>404</h1>
                <h3>page not found</h3>
            </div>
        </PageLayout>
    );
}

export default NotFoundPage;