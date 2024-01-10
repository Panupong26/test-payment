import React, { useState } from 'react';
import {
  Form,
  Input as AntInput,
  Button,
  Steps,
  Card,
  message,
  Upload,
  Col,
  Row,
  Checkbox,
  Radio,
  DatePicker,
  Typography,
} from 'antd';
import { Link } from 'react-router-dom';

import HeaderTwo from '@/pages/population/home/headertwo';

const TrackStatusPage = () => {
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the modal display
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [showModalstatus, setShowModalstatus] = useState(false);

  // Function to toggle the modal display
  const toggleModalstatus = () => {
    setShowModalstatus(!showModalstatus);
  };

  return (
    <>
      <HeaderTwo />

      <div className='pt-32 h-96 bg-white'>
        <div className='mx-auto max-w-screen-2xl px-4 pb-6 pt-16 sm:px-4 lg:px-2 lg:pt-0'>
          <p className='text-title pl-8 pb-12 lg:text-3xl text-slate-700 ltr:pr-4 '>
            ติดตามสถานะการร้องเรียน
          </p>{' '}
          <div className='grid justify-items-center'>
            <div className='p-4'>
              <p className='text-2xl text-title'>ค้นหาเรื่องร้องเรียน</p>
            </div>
          </div>
          <div className=''>
            <Row justify='center'>
              <Col xs={24} sm={24} md={24} lg={12}>
                <div className='text-title'>
                  <div className=''>
                    <label
                      htmlFor='hs-trailing-button-add-on-with-icon-and-button'
                      className='sr-only '
                    >
                      Label
                    </label>
                    <div className='relative flex rounded-lg border border-gray-200 shadow-sm'>
                      <input
                        type='text'
                        id='hs-trailing-button-add-on-with-icon-and-button'
                        name='hs-trailing-button-add-on-with-icon-and-button'
                        className='w-full  py-3 px-4 ps-11 block border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
                        placeholder='เลขบัตรประจำตัวประชาชน/เลขสำนวน'
                      />
                      <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4'>
                        <svg
                          className='flex-shrink-0 h-4 w-4 text-gray-400'
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <circle cx='11' cy='11' r='8' />
                          <path d='m21 21-4.3-4.3' />
                        </svg>
                      </div>
                      <button
                        type='button'
                        className='py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                      >
                        ค้นหา
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-4 lg:px-2 lg:pt-0'>
        <div className='pt-4 justify-center sm:p-4'>
          <Row justify='center'>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Card className='rounded-2xl text-title'>
                <div className='flex justify-between '>
                  <div className='flex justify-start w-12'>
                    <svg
                      className='w-6 h-6 text-gray-600 dark:text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='currentColor'
                        d='m19.414 8.414l-5.829-5.828a.493.493 0 0 0-.049-.04a.626.626 0 0 1-.036-.03a2.072 2.072 0 0 0-.219-.18a.652.652 0 0 0-.08-.044l-.048-.024l-.05-.029c-.054-.031-.109-.063-.166-.087a1.977 1.977 0 0 0-.624-.138a.56.56 0 0 1-.059-.007a.605.605 0 0 0-.082-.007H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6.81a6.518 6.518 0 0 1-1.078-1.5H6a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v1.076a6.452 6.452 0 0 1 1.5.422v-1.67a2 2 0 0 0-.586-1.414M13.5 4.621L17.378 8.5H14a.5.5 0 0 1-.5-.5zM10.75 17.5H11c0 .516.06 1.018.174 1.5h-.424a.75.75 0 0 1 0-1.5m.424-1.5c.125-.528.314-1.03.558-1.5h-.982a.75.75 0 0 0 0 1.5zm1.636-3a6.511 6.511 0 0 1 2.186-1.5H10.75a.75.75 0 0 0 0 1.5zm-5.06-1.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M7 15.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m0 3a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m16-.75a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0m-5.78.418a.5.5 0 0 1-.219-.489L17 13.5a.5.5 0 1 1 1 0l.001 3.5h2.496a.5.5 0 0 1 0 1H17.56a.507.507 0 0 1-.34-.082'
                      />
                    </svg>
                  </div>
                  <div className='text-gray-600 w-3/4'>
                    <p className='mb-2'>ผู้ถูกร้องเรียน :</p>

                    <p className='mb-2'>ผู้ร้องเรียน :</p>

                    <p className='mb-2'>สถานะการดำเนินการ :</p>

                    <p className='mb-2'>วันที่ส่งคำร้อง :</p>
                  </div>
                  <div className='w-1/4'>
                    {' '}
                    <button
                      onClick={toggleModal}
                      type='button'
                      className='w-full mb-2 rounded-lg border border-primary-100 bg-primary-100 px-5 py-2.5 text-center text-sm font-medium text-primary-600 transition-all hover:border-primary-200 hover:bg-primary-200 focus:ring focus:ring-primary-50 disabled:border-primary-50 disabled:bg-primary-50 disabled:text-primary-400'
                    >
                      ถอนเรื่องร้องเรียน
                    </button>
                    <br />
                    <Link to='/e-service/appeal'>
                      <button
                        type='button'
                        className='w-full rounded-lg bg-gray-50 px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
                      >
                        ยื่นอุทธรณ์
                      </button>{' '}
                    </Link>
                  </div>
                </div>

                <Button
                  onClick={toggleModalstatus}
                  className='bg-blue-50 text-blue-400 text-title'
                  type='dashed'
                  block
                >
                  ติดตามสถานะ
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      {showModal && (
        <>
          <div className='fixed inset-0 z-10 bg-secondary-700/50'></div>
          <div className='fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0'>
            <div className='mx-auto w-full overflow-hidden rounded-lg bg-white shadow-xl sm:max-w-sm'>
              <div className='relative p-5'>
                <div className='text-center text-title'>
                  <div className='mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-500'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-secondary-700'>
                      ยืนยันการถอนเรื่องร้องเรียน
                    </h3>
                  </div>
                </div>
                <div className='text-title mt-5 flex justify-end gap-3'>
                  <button
                    type='button'
                    onClick={() => setShowModal(false)}
                    className='flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
                  >
                    ยกเลิก
                  </button>

                  <button
                    type='button'
                    onClick={toggleModal}
                    className='flex-1 rounded-lg border border-primary-500 bg-primary-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                  >
                    ตกลง
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {showModalstatus && (
        <>
          <div className='fixed inset-0 z-10 bg-secondary-700/50'></div>
          <div className='fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0'>
            <div className='mx-auto w-full overflow-hidden rounded-lg bg-white shadow-xl sm:max-w-sm'>
              <div className='space-y-5 text-title'>
                <div className='relative mx-auto max-w-[600px] rounded-xl border border-secondary-50 bg-white p-4 text-sm shadow-lg'>
                  <button
                    onClick={() => setShowModalstatus(false)}
                    className='absolute top-4 right-4 ml-auto text-secondary-500 hover:text-secondary-900'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='h-5 w-5'
                    >
                      <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
                    </svg>
                  </button>
                  <div className='pt-8 '>
                    <p className='text-base'>เลขสำนวน :</p>
                  </div>
                  <div>
                    <p className='text-base'>ชื่อเจ้าของสำนวนสำนวน :</p>
                  </div>
                  <div className='flex space-x-4'>
                    <div>
                      <div className='ps-2 my-2 pt-4 first:mt-0'>
                        <h3 className='text-xs font-medium uppercase text-gray-500 dark:text-gray-400'>
                          1 Aug, 2023
                        </h3>
                      </div>

                      <div className='flex gap-x-3'>
                        {/* Icon */}
                        <div className='relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700'>
                          <div className='relative z-10 w-7 h-7 flex justify-center items-center'>
                            <div className='w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600'></div>
                          </div>
                        </div>
                        {/* End Icon */}

                        {/* Right Content */}
                        <div className='grow pt-0.5 pb-8'>
                          <p className='flex gap-x-1.5 font-semibold text-gray-800 dark:text-white'>
                            {/* SVG icon goes here */}
                            Created "Preline in React" task
                          </p>
                          <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
                            Find more detailed instructions here.
                          </p>
                          <button
                            type='button'
                            className='mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                          >
                            {/* Image and name */}
                          </button>
                        </div>
                        {/* End Right Content */}
                      </div>
                    </div>
                  </div>

                  <div className='flex space-x-4'>
                    <div>
                      <div className='ps-2 my-2 first:mt-0'>
                        <h3 className='text-xs font-medium uppercase text-gray-500 dark:text-gray-400'>
                          1 Aug, 2023
                        </h3>
                      </div>

                      <div className='flex gap-x-3'>
                        {/* Icon */}
                        <div className='relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700'>
                          <div className='relative z-10 w-7 h-7 flex justify-center items-center'>
                            <div className='w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600'></div>
                          </div>
                        </div>
                        {/* End Icon */}

                        {/* Right Content */}
                        <div className='grow pt-0.5 pb-8'>
                          <p className='flex gap-x-1.5 font-semibold text-gray-800 dark:text-white'>
                            {/* SVG icon goes here */}
                            Created "Preline in React" task
                          </p>
                          <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
                            Find more detailed instructions here.
                          </p>
                          <button
                            type='button'
                            className='mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                          >
                            {/* Image and name */}
                          </button>
                        </div>
                        {/* End Right Content */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TrackStatusPage;
