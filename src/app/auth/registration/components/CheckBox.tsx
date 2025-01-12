/* eslint-disable @typescript-eslint/no-explicit-any */
import FormInput from '@/shared/FormInput';
import Link from 'next/link';
import React from 'react';

const CheckBox = ({ form }: any) => {
    return (
        <div className='flex items-center'>
            <div className='flex items-center justify-start gap-2'>
                <FormInput
                    form={form}
                    type='checkbox'
                    name='acceptCondition'
                    className='!w-5 !h-5 rounded-[4px] bg-[#AAA9A9] '
                    formItemClassName='inline-block !w-5'
                />
                <label
                    htmlFor='acceptCondition'
                    className='text-black text-sm font-medium pt-2'
                >
                    I have agreed with
                </label>
            </div>
            <div className='pt-2'>
                <Link
                    href='/'
                    target='_blank'
                    className='text-second-550 ml-1 text-sm font-medium underline'
                >
                    Terms and Conditions
                </Link>
            </div>
        </div>
    );
};

export default CheckBox;
