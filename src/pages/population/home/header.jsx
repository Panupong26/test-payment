import React from 'react';

import Logo from '@/assets/images/logo/dot2.png';

const Header = () => {
  return (
    <div className='text-title'>
    <header className='bg-white border-b-4 border-blue-800'>
      {/*  <div className='mx-auto max-w-screen-2xl px-4 pb-4 pt-4 sm:px-6 lg:px-4 lg:pt-4 h-28'> */}
      <div className='mx-auto max-w-screen-2xl p-4 sm:px-6 lg:px-4'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='text-center sm:text-left'>
            <Link to='/e-service'>
              <div className='flex items-center justify-center text-gray-900 sm:justify-start'>
                <img
                  src={Logo}
                  alt='Description of Image'
                  style={{
                    height: '60px',
                    width: 'auto',
                    paddingRight: '10px',
                  }} // Set height to 80px and width to auto
                />
                <div>
                  {' '}
                  {/* Container for the text */}
                  <p className='font-bold text-md'>กรมการท่องเที่ยว</p>
                  <p className='font-bold text-sm'>Department of Tourism</p>
                </div>
              </div>
            </Link>
          </div>
            {/* <div className='md:flex md:items-center md:gap-12'>
              <nav aria-label='Global' className='hidden md:block'>
                <ul className='flex items-center gap-6 text-md'>
                  <li>
                    <a
                      className='text-blue-900 transition hover:text-blue-900/75'
                      href='/'
                    >
                      {' '}
                      หน้าแรก{' '}
                    </a>
                  </li>

                  <li>
                    <a
                      className='text-blue-900 transition hover:text-blue-900/75'
                      href='/'
                    >
                      {' '}
                      บริการอื่นๆ{' '}
                    </a>
                  </li>

                  <li>
                    <a
                      className='text-blue-900 transition hover:text-blue-900/75'
                      href='/'
                    >
                      {' '}
                      คำแนะนำ{' '}
                    </a>
                  </li>
                </ul>
              </nav>
            </div> */}
            <div className='mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center'>
              <button
                className='inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring'
                type='button'
              >
                <span className='text-sm font-medium'> ลงทะเบียนใช้งาน </span>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </button>

              <button
                className='block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring'
                type='button'
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
