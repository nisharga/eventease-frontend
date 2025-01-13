'use client';
import React, { Suspense } from 'react';
import VerifyEmail from './components/VerifyEmail';
import Loading from '../components/Loading';

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <VerifyEmail />
        </Suspense>
    );
};

export default page;
