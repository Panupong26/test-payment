import Card from '@/components/ui/Card';
import React, { useState } from 'react';

const LicenseRegistrationPage = () => {

    return (
        <div className="relative w-full">
         
                <div className='w-full h-full bg-white dark:bg-gray-800'>
                    <div className='flex justify-between items-center py-3 px-4 border-b dark:border-gray-700'>
                        <h3 className='font-bold text-gray-800 dark:text-white'>
                            Modal title
                        </h3>
                        <button
                            type='button'
                            className='flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                            onClick={() => setShowModal(false)}
                        >
                            <span className='sr-only'>Close</span>
                            {/* SVG Icon */}
                        </button>
                    </div>
                    <div className='p-4'>
                        <p className='mt-1 text-gray-800 dark:text-gray-400'>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content.
                        </p>
                    </div>
                    <div className='flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700'>
                        <button
                            type='button'
                            className='py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50'
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                        {/* Save changes button */}
                    </div>
                </div>
            
        </div>
    );
};

export default LicenseRegistrationPage;
