import Link from 'next/link';
import React, { FC } from 'react';

interface IProps {
    className?: string;
}

const Logo: FC<IProps> = ({ className }) => {
    return (
        <Link
            href={'/user/dashboard'}
            className={`!w-full !h-full ${className}`}
        >
            Event-Ease
        </Link>
    );
};
export default Logo;
