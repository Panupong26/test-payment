import React, { useState } from 'react';

import Logo from '@/assets/images/logo/dot2.png';
import { Link, NavLink } from 'react-router-dom';

const HeaderTwo = () => {
  const [open, setOpen] = useState(false);

  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className='text-title'>
      <header className='bg-white border-b-4 border-blue-800 fixed w-full z-20 top-0 start-0'>
        {/* <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'> */}
        {/*  <div className='mx-auto max-w-screen-2xl px-4 pb-4 pt-4 sm:px-6 lg:px-4 lg:pt-4 h-28'> */}
        <div className='mx-auto max-w-screen-2xl p-4 sm:px-6 lg:px-4'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <div className='text-center sm:text-left'>
              <NavLink to='/e-service'>
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
              </NavLink>
            </div>

            <div className='flex h-auto justify-center'>
              <div className='inline-flex gap-60'>
                {/* Right Dropdown */}
                <div className='relative inline-block'>
                  <button
                    onClick={() => setRightOpen(!rightOpen)}
                    aria-expanded={rightOpen}
                    type='button'
                    className='inline-flex gap-2 rounded-lg  bg-white px-4 py-2 text-center text-md font-medium text-gray-700 transition-all'
                  >
                    นายรักไทย เกิดเมืองไทย
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 text-gray-700'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                  {rightOpen && (
                    <div className='absolute right-0 z-10 mt-2 w-60 divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white text-left text-sm shadow-lg'>
                      <div className='p-1'>

                        <NavLink
                          to='/e-service/profile'
                          className='flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='h-4 w-4'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                            />
                          </svg>
                          ข้อมูลของฉัน
                        </NavLink>
                        <NavLink
                          to='profile'
                          className='flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='h-4 w-4'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
                            />
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                          </svg>
                          เปลี่ยนรหัสผ่าน
                        </NavLink>
                      </div>

                      <div className='p-1'>
                        <NavLink
                          to='profile'
                          className='flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='h-4 w-4'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
                            />
                          </svg>
                          ออกจากระบบ
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>
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
          </div>
        </div>
        {/* </div> */}
      </header>
    </div>
  );
};

export default HeaderTwo;
