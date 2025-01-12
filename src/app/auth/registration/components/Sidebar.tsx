const Sidebar = () => {
    return (
        <div className='bg-second-550 rounded-[22px] text-white max-h-[50rem] h-full px-8 py-16 flex flex-col justify-between mt-20'>
            <div className=''>
                <div className='text-2xl lg:text-4xl font-bold text-center mb-8 px-10'>
                    <h3 className='mb-1'>Title</h3>
                    <h3>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ipsa, assumenda.
                    </h3>
                </div>
                <div className='text-center px-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, culpa.
                </div>
            </div>
            <div className='!w-full !h-auto'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                officia saepe laboriosam sapiente error pariatur dolores
                quibusdam, voluptatibus aliquam esse.
            </div>
        </div>
    );
};

export default Sidebar;
