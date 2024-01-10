import Logo from '@/assets/images/logo/dot2.png';
import { NavLink } from 'react-router-dom';

import React, { useEffect, Suspense, Fragment, useRef } from 'react';

import { Link } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '@/pages/population/home/header';
import Loading from '@/components/Loading';
import { ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import Home_Presentation from '@/assets/images/Home_Presentation.png';

const HomeComplainPage = () => {
  return (
    <>
      <div className='text-title'>
        <header className='bg-white border-b-4 border-blue-800'>
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
                <NavLink to='login2'>
                  <button
                    className='block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring'
                    type='button'
                  >
                    เข้าสู่ระบบ
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </header>
        <div
          style={{
            backgroundImage: `url(${Home_Presentation})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', // Ensures the background covers the entire div
            backgroundPosition: 'center', // Centers the background image
            height: '91vh', // Full viewport height
            width: '100vw', // Full viewport width
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <div className='pb-28'>
            <NavLink
              to='/e-service/write-complaint'
              className='text-white transition hover:text-white-700/75'
            >
              <button
                type='button'
                className='mr-8 rounded-lg bg-[#fafafa] px-8 py-4 text-center text-lg font-medium text-gray-600 shadow-sm transition-all hover:border-primary-400 hover:bg-primary-200 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
              >
                แจ้งเรื่องร้องเรียน
              </button>
            </NavLink>

            <NavLink
              to='/e-service/track-status'
              className='text-white transition hover:text-white-700/75'
            >
              <button
                type='button'
                className='rounded-lg bg-[#fafafa] px-8 py-4 text-center text-lg font-medium text-gray-600 shadow-sm transition-all hover:border-primary-400 hover:bg-primary-200 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
              >
                ติดตามเรื่องร้องเรียน
              </button>
            </NavLink>
          </div>
        </div>

        {/* <section className='bg-white-900 text-gray-100 '>
        <div className='mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-10'>
          <div className='max-w-xl'>
            <h2 className='text-3xl font-bold sm:text-4xl'>
              What makes us special
            </h2>

            <p className='mt-4 text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              dolores iure fugit totam iste obcaecati. Consequatur ipsa quod
              ipsum sequi culpa delectus, cumque id tenetur quibusdam, quos fuga
              minima.
            </p>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
            <div className='flex items-start gap-4'>
              <span className='shrink-0 rounded-lg bg-gray-800 p-4'>
                <svg
                  className='h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                  <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className='text-lg font-bold'>Lorem, ipsum dolor.</h2>

                <p className='mt-1 text-sm text-gray-800'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <span className='shrink-0 rounded-lg bg-gray-800 p-4'>
                <svg
                  className='h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                  <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className='text-lg font-bold'>Lorem, ipsum dolor.</h2>

                <p className='mt-1 text-sm text-gray-800'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <span className='shrink-0 rounded-lg bg-gray-800 p-4'>
                <svg
                  className='h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                  <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className='text-lg font-bold'>Lorem, ipsum dolor.</h2>

                <p className='mt-1 text-sm text-gray-800'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <span className='shrink-0 rounded-lg bg-gray-800 p-4'>
                <svg
                  className='h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                  <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className='text-lg font-bold'>Lorem, ipsum dolor.</h2>

                <p className='mt-1 text-sm text-gray-800'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <span className='shrink-0 rounded-lg bg-gray-800 p-4'>
                <svg
                  className='h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                  <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className='text-lg font-bold'>Lorem, ipsum dolor.</h2>

                <p className='mt-1 text-sm text-gray-800'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <span className='shrink-0 rounded-lg bg-gray-800 p-4'>
                <svg
                  className='h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                  <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className='text-lg font-bold'>Lorem, ipsum dolor.</h2>

                <p className='mt-1 text-sm text-gray-800'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
 */}
      </div>
    </>
  );
};

export default HomeComplainPage;
