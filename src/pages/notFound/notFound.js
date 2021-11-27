import React from 'react';

import ErrorContainer from '../../components/containers/error';

import notFound from '../../assets/page-not-found.png';

const NotFound = () => {
    return (
        <section>
            <ErrorContainer src={notFound} message='Your going the wrong way!' />
        </section>
    );
};

export default NotFound;