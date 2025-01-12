import { redirect } from 'next/navigation';
import * as React from 'react';

const page: React.FunctionComponent = () => {
    redirect('/auth/login');
};

export default page;
