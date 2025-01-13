import { Dialog, DialogContent } from '@/components/ui/alert-dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import React from 'react';

interface ViewEventProps {
    isViewOpen: boolean;
    setIsViewOpen: (open: boolean) => void;
    name: string;
    maxAttendees: number;
    date: string;
    location: string;
    createdBy: string;
}

const ViewEvent: React.FC<ViewEventProps> = ({
    isViewOpen,
    setIsViewOpen,
    name,
    maxAttendees,
    date,
    location,
    createdBy
}) => (
    <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
        <DialogTrigger asChild>
            <button className='border p-2 font-semibold rounded-[6px]'>
                View
            </button>
        </DialogTrigger>
        <DialogContent
            className='lg:max-w-[624px] bg-first-300 border-none !rounded-[12px]'
            isCustomIcon={true}
        >
            <div className='p-6 text-center text-white text-2xl font-semibold'>
                Event Details
            </div>
            <div className='flex flex-col gap-4 text-white'>
                <p className='text-base'>
                    <span className='font-bold pr-2'>Event Name:</span> {name}
                </p>
                <p className='text-base'>
                    <span className='font-bold pr-2'>Sit Remain:</span>
                    {maxAttendees}
                </p>
                <p className='text-base'>
                    <span className='font-bold pr-2'>Date:</span>
                    {date}
                </p>{' '}
                <p className='text-base'>
                    <span className='font-bold pr-2'>Location:</span>
                    {location}
                </p>{' '}
                <p className='text-base'>
                    <span className='font-bold pr-2'>Created By::</span>
                    {createdBy}
                </p>
            </div>
        </DialogContent>
    </Dialog>
);

export default ViewEvent;
