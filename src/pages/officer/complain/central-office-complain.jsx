import React, { useState, useRef, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  Col,
  Row,
  Checkbox,
  DatePicker,
  Space,
  Tag,
  Typography,
  Alert,
  Table,
  Tooltip,
} from 'antd';
import Modal from '@/components/ui/Modal';

import moment from 'moment';
import 'moment/locale/th';

moment.locale('th');

const formatDate = (value) => {
  if (value) {
    const thaiYear = value.year() + 543;
    return value.clone().year(thaiYear).format('DD/MM/YYYY');
  }
};

const CentralofficecomplainPage = () => {
  const [form] = Form.useForm();

  /* ///////////////////////Total license table ////////////////////////*/

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const datatotallicense = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `ขยันทัวร์ ${index + 1}`,
    date: `2566-11-${index + 1 < 10 ? `0${index + 1}` : index + 1}`,
    date2: `2568-11-${index + 1 < 10 ? `0${index + 1}` : index + 1}`,
    type: index % 2 === 0 ? 'ทั่วไป' : 'นำเที่ยวจากต่างประเทศ',
    state: ( <span className='rounded-full bg-yellow-50 px-2 py-1 text-sm font-semibold text-yellow-600'>
    {' '}
    รอรับเรื่อง{' '}
  </span>),
   
  }));

  const pageCount = Math.ceil(datatotallicense.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datatotallicense.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  /* /////////////////////////////////////////////////////////////////////*/

  /* //////////////////////Search//////////////////////////////////////// */

  /* ////////////////////////////////////////////////////////////// */
  const [showModal, setShowModal] = useState(false);

  
  /* ////////////////////////////////////////////////////////////// */
  const [isOpenRight, setIsOpenRight] = useState(false);
  const ref = useRef();
  const buttonRightRef = useRef(null);

  // Toggle function for the right dropdown
  const toggleRight = () => {
    setIsOpenRight(!isOpenRight);
    if (!isOpenRight) {
      buttonRightRef.current.focus();
    }
  };

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpenRight(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  /* ////////////////////////////////////////////////////////////// */



  return (
    <div>
      <Card className='rounded-2xl shadow-sm'>
        <div className='mb-4'>
          <Row gutter={[16, 8]} align='middle' justify='space-between'>
            <Col xs={24} sm={24} md={16} lg={16}>
              <div className='text-th'>
                <h5 className='font-bold text-blue-900'>
                  รายการเรื่องร้องเรียน
                </h5>
              </div>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className='relative text-gray-600 w-full '>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                  <svg
                    className='w-4 h-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                </div>

                <input
                  /* type='search' */
                  name='serch'
                  placeholder='ค้นหา'
                  className='bg-white p-4 ps-10 h-10 w-full px-5 pr-10 rounded-full text-md focus:outline-none border border-blue-300'
                />
                <div ref={ref}>
                  <button
                    ref={buttonRightRef}
                    onClick={toggleRight}
                    aria-expanded={isOpenRight}
                    type='submit'
                    className='absolute gap-2 inset-y-0 flex ps-3 end-2 items-center rounded-lg px-4 py-2 text-center text-sm font-medium text-gray-700 transition-all disabled:cursor-not-allowed '
                  >
                    {' '}
                    <svg
                      className='w-6 h-6 text-gray-500 dark:text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <g transform='rotate(90 12 12)'>
                        <g
                          fill='none'
                          stroke='currentColor'
                          strokeLinecap='round'
                        >
                          <path d='M5 12V4m14 16v-3M5 20v-4m14-3V4m-7 3V4m0 16v-9' />
                          <circle cx='5' cy='14' r='2' />
                          <circle cx='12' cy='9' r='2' />
                          <circle cx='19' cy='15' r='2' />
                        </g>
                      </g>
                    </svg>
                  </button>
                  {isOpenRight && (
                    <div className='absolute right-0 z-10 mt-2 rounded-lg border border-gray-200 bg-gray-50 text-left text-sm shadow-lg'>
                      <div className='p-4'>
                        <div className='w-full md:w-[38rem]'>
                          <Form
                            layout='vertical'
                            /* onFinish={onFinish} */

                            className='text-body-page text-body-size'
                          >
                            <Row gutter={16}>
                              <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                  name='study'
                                  label='เลขที่รับเรื่อง'
                                  rules={[{ required: false }]}
                                >
                                  <Input />
                                </Form.Item>
                              </Col>
                              <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                  name='study_graduation_date'
                                  label='วันที่รับเรื่อง'
                                  rules={[{ required: false }]}
                                >
                                  <DatePicker
                                    format={formatDate}
                                    locale={moment().locale('th')}
                                    style={{ width: '100%' }}
                                  />
                                </Form.Item>
                              </Col>
                              <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                  name='study_graduation_date'
                                  label='ถึงวันที่'
                                  rules={[{ required: false }]}
                                >
                                  <DatePicker
                                    format={formatDate}
                                    locale={moment().locale('th')}
                                    style={{ width: '100%' }}
                                  />
                                </Form.Item>
                              </Col>
                            </Row>{' '}
                            <Row gutter={16}>
                              <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                  name='study'
                                  label='ชื่อผู้ขอใบอนุญาต'
                                  rules={[{ required: false }]}
                                >
                                  <Input />
                                </Form.Item>
                              </Col>
                              <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                  name='study'
                                  label='ประเภทงานทะเบียน'
                                  rules={[{ required: false }]}
                                >
                                  <Input />
                                </Form.Item>
                              </Col>
                              <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                  name='study'
                                  label='ประเภทการทำรายการ'
                                  rules={[{ required: false }]}
                                >
                                  <Input />
                                </Form.Item>
                              </Col>
                            </Row>{' '}
                            <Row gutter={16}>
                              <Col xs={24} sm={12} md={24}>
                                <div className=''>
                                  <Button type='dashed'>ค้นหา</Button>
                                </div>
                              </Col>
                            </Row>
                          </Form>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div
          className='rounded-lg max-h-[800px] overflow-y-auto [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-slate-700
            dark:[&::-webkit-scrollbar-thumb]:bg-slate-500'
        >
          <table className=' text-body-page text-body-size w-full border-collapse bg-white text-left text-sm text-gray-800'>
            <thead className='bg-gray-100 sticky top-0'>
              <tr>
                <th className='px-4 py-4 font-medium text-gray-900'>ลำดับ</th>
                <th className='px-4 py-4 font-medium text-gray-900'>
                  เลขสำนวน
                </th>
                <th className='px-4 py-4 font-medium text-gray-900'>ช่องทาง</th>
                <th className='px-4 py-4 font-medium text-gray-900'>
                  ผู้ถูกร้องเรียน
                </th>
                <th className='px-4 py-4 font-medium text-gray-900'>
                  ผู้ร้องเรียน
                </th>
                <th className='px-4 py-4 font-medium text-gray-900'>
                  วันที่ยื่นคำร้อง
                </th>
                <th className='px-4 py-4 font-medium text-gray-900'>สถานะ</th>
                <th className='px-4 py-4 font-medium text-gray-900'></th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
              {currentItems.map((item) => (
                <tr key={item.id} className='hover:bg-gray-50 font-light'>
                  <td className='px-4 py-4'>{item.id}</td>
                  <td className='px-4 py-4'>{item.id}</td>
                  <td className='px-4 py-4'>{item.name}</td>
                  <td className='px-4 py-4'>{item.type}</td>
                  <td className='px-4 py-4'>{item.date}</td>
                  <td className='px-4 py-4'>{item.date2}</td>
                  <td className='px-4 py-4'>{item.state}</td>
                  <td className='px-4 py-2'>
                    <div>
                      <Modal
                        title='รายละเอียดเรื่องร้องเรียน'
                        label={
                          <span className='inline-flex overflow-hidden rounded-xl border bg-white '>
                            <Tooltip placement='top' title='View'>
                              <button
                                className='inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative'
                                title='View'
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='18'
                                  height='18'
                                  viewBox='0 0 32 32'
                                >
                                  <path
                                    fill='currentColor'
                                    d='M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68ZM16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25Z'
                                  />
                                  <path
                                    fill='currentColor'
                                    d='M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z'
                                  />
                                </svg>
                              </button>
                            </Tooltip>
                          </span>
                        }
                        labelclassName='btn-outline-dark'
                        scrollContent
                        uncontrol
                        disableBackdrop
                      >
                        <Card className='rounded-2xl'>
                          <div className='text-body-page ml-4 py-2 grid justify-items-end '>
                            <button
                              onClick={() => setShowModal(!showModal)}
                              type='button'
                              className='rounded-full border border-primary-600 bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                            >
                              <p className='font-bold'>ส่งต่อ</p>
                            </button>
                          </div>
                        </Card>

                        {showModal && (
                          <div className='fixed inset-0 z-10 bg-secondary-700/50'>
                            <div className='fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0'>
                              <div className='mx-auto overflow-hidden rounded-lg bg-white shadow-xl sm:w-full sm:max-w-xl'>
                                <div className='relative p-6'>
                                  <button
                                    onClick={() => setShowModal(false)}
                                    className='absolute top-4 right-4 rounded-lg p-1 text-center font-medium text-secondary-500 transition-all hover:bg-secondary-100'
                                  >
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 20 20'
                                      fill='currentColor'
                                      class='h-6 w-6'
                                    >
                                      <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
                                    </svg>
                                  </button>
                                  <div className='flex justify-center'>
                                    <h3 className='text-xl font-medium text-secondary-900'>
                                      เลือกสาขา
                                    </h3>
                                  </div>
                                  <div className='flex justify-center mt-2 text-md text-secondary-500'>
                                    สาขาที่ดำเนินการเรื่องร้องเรียน
                                  </div>

                                  <fieldset className='space-y-4'>
                                    <legend className='sr-only'>
                                      Delivery
                                    </legend>

                                    <div>
                                      <input
                                        type='radio'
                                        name='DeliveryOption'
                                        value='DeliveryStandard'
                                        id='DeliveryStandard'
                                        className='peer hidden [&:checked_+_label_svg]:block'
                                        checked
                                      />

                                      <label
                                        htmlFor='DeliveryStandard'
                                        className='flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
                                      >
                                        <div className='flex items-center gap-2'>
                                          <svg
                                            className='hidden h-5 w-5 text-blue-600'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                          >
                                            <path
                                              fillRule='evenodd'
                                              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                              clipRule='evenodd'
                                            />
                                          </svg>

                                          <p className='text-gray-700'>
                                            สาขากรุงเทพมหานคร
                                          </p>
                                        </div>
                                      </label>
                                    </div>

                                    <div>
                                      <input
                                        type='radio'
                                        name='DeliveryOption'
                                        value='DeliveryPriority'
                                        id='DeliveryPriority'
                                        className='peer hidden [&:checked_+_label_svg]:block'
                                      />

                                      <label
                                        htmlFor='DeliveryPriority'
                                        className='flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
                                      >
                                        <div className='flex items-center gap-2'>
                                          <svg
                                            className='hidden h-5 w-5 text-blue-600'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                          >
                                            <path
                                              fillRule='evenodd'
                                              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                              clipRule='evenodd'
                                            />
                                          </svg>

                                          <p className='text-gray-700'>
                                            สาขาภาคเหนือ (เชียงใหม่)
                                          </p>
                                        </div>
                                      </label>
                                    </div>

                                    <div>
                                      <input
                                        type='radio'
                                        name='DeliveryOption'
                                        value='DeliveryPriority'
                                        id='DeliveryPriority'
                                        className='peer hidden [&:checked_+_label_svg]:block'
                                      />

                                      <label
                                        htmlFor='DeliveryPriority'
                                        className='flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
                                      >
                                        <div className='flex items-center gap-2'>
                                          <svg
                                            className='hidden h-5 w-5 text-blue-600'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                          >
                                            <path
                                              fillRule='evenodd'
                                              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                              clipRule='evenodd'
                                            />
                                          </svg>

                                          <p className='text-gray-700'>
                                            สาขาภาคตะวันออกเฉียงเหนือ
                                            (นครราชสีมา)
                                          </p>
                                        </div>
                                      </label>
                                    </div>

                                    <div>
                                      <input
                                        type='radio'
                                        name='DeliveryOption'
                                        value='DeliveryPriority'
                                        id='DeliveryPriority'
                                        className='peer hidden [&:checked_+_label_svg]:block'
                                      />

                                      <label
                                        htmlFor='DeliveryPriority'
                                        className='flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
                                      >
                                        <div className='flex items-center gap-2'>
                                          <svg
                                            className='hidden h-5 w-5 text-blue-600'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                          >
                                            <path
                                              fillRule='evenodd'
                                              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                              clipRule='evenodd'
                                            />
                                          </svg>

                                          <p className='text-gray-700'>
                                            สาขาภาคตะวันออก (ชลบุรี)
                                          </p>
                                        </div>
                                      </label>
                                    </div>

                                    <div>
                                      <input
                                        type='radio'
                                        name='DeliveryOption'
                                        value='DeliveryPriority'
                                        id='DeliveryPriority'
                                        className='peer hidden [&:checked_+_label_svg]:block'
                                      />

                                      <label
                                        htmlFor='DeliveryPriority'
                                        className='flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
                                      >
                                        <div className='flex items-center gap-2'>
                                          <svg
                                            className='hidden h-5 w-5 text-blue-600'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                          >
                                            <path
                                              fillRule='evenodd'
                                              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                              clipRule='evenodd'
                                            />
                                          </svg>

                                          <p className='text-gray-700'>
                                            สาขาภาคใต้ เขต 1 (สุราษฎร์ธานี)
                                          </p>
                                        </div>
                                      </label>
                                    </div>

                                    <div>
                                      <input
                                        type='radio'
                                        name='DeliveryOption'
                                        value='DeliveryPriority'
                                        id='DeliveryPriority'
                                        className='peer hidden [&:checked_+_label_svg]:block'
                                      />

                                      <label
                                        htmlFor='DeliveryPriority'
                                        className='flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
                                      >
                                        <div className='flex items-center gap-2'>
                                          <svg
                                            className='hidden h-5 w-5 text-blue-600'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                          >
                                            <path
                                              fillRule='evenodd'
                                              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                              clipRule='evenodd'
                                            />
                                          </svg>

                                          <p className='text-gray-700'>
                                            สาขาภาคใต้ เขต 1 (สาขาย่อยหาดใหญ่)
                                          </p>
                                        </div>
                                      </label>
                                    </div>

                                    <div>
                                      <input
                                        type='radio'
                                        name='DeliveryOption'
                                        value='DeliveryPriority'
                                        id='DeliveryPriority'
                                        className='peer hidden [&:checked_+_label_svg]:block'
                                      />

                                      <label
                                        htmlFor='DeliveryPriority'
                                        className='flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
                                      >
                                        <div className='flex items-center gap-2'>
                                          <svg
                                            className='hidden h-5 w-5 text-blue-600'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                          >
                                            <path
                                              fillRule='evenodd'
                                              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                              clipRule='evenodd'
                                            />
                                          </svg>

                                          <p className='text-gray-700'>
                                            สาขาภาคใต้ เขต 2 (ภูเก็ต)
                                          </p>
                                        </div>
                                      </label>
                                    </div>
                                  </fieldset>
                                </div>
                                <div className='flex justify-end gap-3 bg-secondary-50 px-6 py-3'>
                                  <button
                                    onClick={() => setShowModal(false)}
                                    className='rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
                                  >
                                    ยกเลิก
                                  </button>
                                  <button
                                    onClick={() => setShowModal(false)}
                                    className='rounded-lg border border-primary-500 bg-primary-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                                  >
                                    ตกลง
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Modal>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <nav className='flex items-center gap-x-1 justify-end mt-10'>
            <button
              type='button'
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
              className='min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10'
            >
              <svg
                className='flex-shrink-0 w-3.5 h-3.5'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                //strokeLidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='m15 18-6-6 6-6' />
              </svg>
              <span>Previous</span>
            </button>
            <div className='flex items-center gap-x-1'>
              {[...Array(pageCount).keys()].map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number + 1)}
                  className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${
                    currentPage === number + 1 ? 'bg-gray-200' : 'bg-gray-50'
                  } text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300`}
                >
                  {number + 1}
                </button>
              ))}
            </div>
            <button
              type='button'
              disabled={currentPage === pageCount}
              onClick={() => paginate(currentPage + 1)}
              className='min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10'
            >
              <span>Next</span>
              <svg
                className='flex-shrink-0 w-3.5 h-3.5'
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
                <path d='m9 18 6-6-6-6' />
              </svg>
            </button>
          </nav>
        </div>
      </Card>
    </div>
  );
};

export default CentralofficecomplainPage;
