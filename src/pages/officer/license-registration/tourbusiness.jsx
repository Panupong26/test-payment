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
import { AudioOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

const { Text } = Typography;
//const Input = (props) => <AntInput {...props} size='large' />;
import moment from 'moment';
import 'moment/locale/th';

moment.locale('th');

const formatDate = (value) => {
  if (value) {
    const thaiYear = value.year() + 543;
    return value.clone().year(thaiYear).format('DD/MM/YYYY');
  }
};

const Tourbusiness = () => {
  const [form] = Form.useForm();

  /* ///////////////////////Total license table ////////////////////////*/

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const datatotallicense = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `ขยันทัวร์ ${index + 1}`,
    date: `2566-11-${index + 1 < 10 ? `0${index + 1}` : index + 1}`,
    date2: `2568-11-${index + 1 < 10 ? `0${index + 1}` : index + 1}`,
    type: index % 2 === 0 ? 'ทั่วไป' : 'นำเที่ยวจากต่างประเทศ',
    state:
      index % 2 === 0 ? (
        <span className='rounded-full bg-primary-50 px-2 py-1 text-sm font-semibold text-primary-600'>
          {' '}
          ปกติ{' '}
        </span>
      ) : (
        <span className='rounded-full bg-yellow-50 px-2 py-1 text-sm font-semibold text-yellow-600'>
          {' '}
          พักใช้ใบอนุญาต{' '}
        </span>
      ),
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
  const { Search } = Input;

  const onSearch = (value, _e, info) => console.log(info?.source, value);
  /* //////////////////// license story table //////////////////////*/

  /* ////////////////////////////////////////////////////////////// */

  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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

  /* ////////////////////////////////////////////////////////////// */

  return (
    <div>
      <Card className='rounded-2xl shadow-sm'>
        <div className='mb-4'>
          <Row gutter={[16, 8]} align='middle' justify='space-between'>
            <Col xs={24} sm={24} md={16} lg={16}>
              <div className='text-th'>
                <h5 className='font-bold text-blue-900'>
                  ทะเบียนใบอนุญาตธุรกิจนำเที่ยว
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
                  เลขที่ใบอนุญาต
                </th>
                <th className='px-4 py-4 font-medium text-gray-900'>
                  ชื่อธุรกิจนำเที่ยว
                </th>
                <th className='px-4 py-4 font-medium text-gray-900'>ประเภท</th>
                <th className='px-4 py-4 font-medium text-gray-900'>
                  วันที่ออกใบอนุญาต
                </th>
                <th className='px-4 py-4 font-medium text-gray-900'>
                  วันที่ครบกำหนด
                </th>
                <th className='px-4 py-4 font-medium text-gray-900'>
                  สถานะใบอนุญาต
                </th>
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
                        title='รายละเอียด'
                        label={
                          <span className='inline-flex overflow-hidden rounded-xl border bg-white '>
                            <Tooltip placement='top' title='รายละเอียด'>
                              <div>
                              <div
                                className='inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative'
                                
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
                              </div>
                              </div>
                            </Tooltip>
                          </span>
                        }
                        labelclassName='btn-outline-dark'
                        scrollContent
                        uncontrol
                        disableBackdrop
                      >
                        <Card className='rounded-2xl'>
                          <div>
                            <div className='border-b border-gray-200 dark:border-gray-700'>
                              <nav
                                className='flex space-x-2 text-title-page '
                                aria-label='Tabs'
                                role='tablist'
                              >
                                <div>
                                  <button
                                    type='button'
                                    onClick={() => handleTabClick('tab1')}
                                    className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap ${
                                      activeTab === 'tab1'
                                        ? 'font-semibold border-blue-900 text-blue-900'
                                        : 'border-transparent text-gray-500 hover:text-blue-700 focus:outline-none focus:text-blue-900'
                                    }`}
                                    id='tabs-with-icons-item-1'
                                    aria-controls='tabs-with-icons-1'
                                    role='tab'
                                  >
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='24'
                                      height='24'
                                      viewBox='0 0 24 24'
                                    >
                                      <g fill='currentColor'>
                                        <path
                                          fillRule='evenodd'
                                          d='M17 5H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM7 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H7Z'
                                          clipRule='evenodd'
                                        />
                                        <path d='M8 7h8v2H8V7Zm0 4h8v2H8v-2Zm0 4h5v2H8v-2Z' />
                                      </g>
                                    </svg>
                                    ข้อมูลใบอนุญาต
                                  </button>
                                </div>
                                <div className='pl-6'>
                                  <button
                                    type='button'
                                    onClick={() => handleTabClick('tab2')}
                                    className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap ${
                                      activeTab === 'tab2'
                                        ? 'font-semibold border-blue-900 text-blue-900'
                                        : 'border-transparent text-gray-500 hover:text-blue-700 focus:outline-none focus:text-blue-900'
                                    }`}
                                    id='tabs-with-icons-item-2'
                                    aria-controls='tabs-with-icons-2'
                                    role='tab'
                                  >
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='24'
                                      height='24'
                                      viewBox='0 0 24 24'
                                    >
                                      <path
                                        fill='currentColor'
                                        d='M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2.5 13.25c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9M12 12.25A2.25 2.25 0 0 0 14.25 10A2.25 2.25 0 0 0 12 7.75A2.25 2.25 0 0 0 9.75 10A2.25 2.25 0 0 0 12 12.25Z'
                                      />
                                    </svg>
                                    ข้อมูลผู้ประกอบการ
                                  </button>
                                </div>
                                <div className='pl-6'>
                                  <button
                                    type='button'
                                    onClick={() => handleTabClick('tab3')}
                                    className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap ${
                                      activeTab === 'tab3'
                                        ? 'font-semibold border-blue-900 text-blue-900'
                                        : 'border-transparent text-gray-500 hover:text-blue-700 focus:outline-none focus:text-blue-900'
                                    }`}
                                    id='tabs-with-icons-item-3'
                                    aria-controls='tabs-with-icons-3'
                                    role='tab'
                                  >
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='24'
                                      height='24'
                                      viewBox='0 0 24 24'
                                    >
                                      <path
                                        fill='currentColor'
                                        d='M20 6H4V4h16v2m-5.7 6c-.8.96-1.3 2.18-1.3 3.5c0 1.14.43 2.36 1 3.5v1H4v-6H3v-2l1-5h16l.7 3.5c-.66-.32-1.38-.5-2.14-.5l-.2-1H5.64l-.6 3h9.26M12 14H6v4h6v-4m10 1.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2Z'
                                      />
                                    </svg>
                                    ที่ตั้งสำนักงาน
                                  </button>
                                </div>
                                <div className='pl-6'>
                                  <button
                                    type='button'
                                    onClick={() => handleTabClick('tab4')}
                                    className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap ${
                                      activeTab === 'tab4'
                                        ? 'font-semibold border-blue-900 text-blue-900'
                                        : 'border-transparent text-gray-500 hover:text-blue-700 focus:outline-none focus:text-blue-900'
                                    }`}
                                    id='tabs-with-icons-item-4'
                                    aria-controls='tabs-with-icons-4'
                                    role='tab'
                                  >
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='24'
                                      height='24'
                                      viewBox='0 0 24 24'
                                    >
                                      <g fill='none' stroke='currentColor'>
                                        <path d='m18.18 8.04l.463-.464a1.966 1.966 0 1 1 2.781 2.78l-.463.464M18.18 8.04s.058.984.927 1.853s1.854.927 1.854.927M18.18 8.04l-4.26 4.26c-.29.288-.434.433-.558.592c-.146.188-.271.39-.374.606c-.087.182-.151.375-.28.762l-.413 1.24l-.134.401m8.8-5.081l-4.26 4.26c-.29.29-.434.434-.593.558c-.188.146-.39.271-.606.374c-.182.087-.375.151-.762.28l-1.24.413l-.401.134m0 0l-.401.134a.53.53 0 0 1-.67-.67l.133-.402m.938.938l-.938-.938' />
                                        <path
                                          strokeLinecap='round'
                                          strokeWidth='1.5'
                                          d='M8 13h2.5M8 9h6.5M8 17h1.5M19.828 3.172C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172c.944-.943 1.127-2.348 1.163-4.828'
                                        />
                                      </g>
                                    </svg>
                                    ประวัติการจดทะเบียน
                                  </button>
                                </div>
                                <div className='pl-6'>
                                  <button
                                    type='button'
                                    onClick={() => handleTabClick('tab5')}
                                    className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap ${
                                      activeTab === 'tab5'
                                        ? 'font-semibold border-blue-900 text-blue-900'
                                        : 'border-transparent text-gray-500 hover:text-blue-700 focus:outline-none focus:text-blue-900'
                                    }`}
                                    id='tabs-with-icons-item-5'
                                    aria-controls='tabs-with-icons-5'
                                    role='tab'
                                  >
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='24'
                                      height='24'
                                      viewBox='0 0 24 24'
                                    >
                                      <g
                                        fill='none'
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                      >
                                        <path d='M19 20H5c-1.6 0-2-1.333-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6m2 8c-.667 0-2-.4-2-2v-6m2 8c1.6 0 2-1.333 2-2v-6h-4' />
                                        <path d='M7 16h6m-1-6a2 2 0 1 1-4 0a2 2 0 0 1 4 0z' />
                                      </g>
                                    </svg>
                                    ข้อมูลหลักประกัน
                                  </button>
                                </div>
                              </nav>
                            </div>

                            <div className='mt-3 '>
                              <div
                                id='tabs-with-icons-1'
                                role='tabpanel'
                                aria-labelledby='tabs-with-icons-item-1'
                                className={activeTab === 'tab1' ? '' : 'hidden'}
                              >
                                <Card className='rounded-2xl'>
                                  <div className='flow-root pt-2 pb-4 text-body-page text-body-size rounded-lg'>
                                    <dl className='-my-3 divide-y divide-gray-100 text-sm'>
                                      <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                        <dt className='font-medium text-gray-900'>
                                          ประเภทใบอนุญาต :
                                        </dt>
                                        <dd className='text-gray-700 sm:col-span-2'>
                                          xxx
                                        </dd>
                                      </div>

                                      <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                        <dt className='font-medium text-gray-900'>
                                          ใบอนุญาตเลขที่ :
                                        </dt>
                                        <dd className='text-gray-700 sm:col-span-2'>
                                          xxx
                                        </dd>
                                      </div>

                                      <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                        <dt className='font-medium text-gray-900'>
                                          ครบกำหนดวันที่ :
                                        </dt>
                                        <dd className='text-gray-700 sm:col-span-2'>
                                          xxx
                                        </dd>
                                      </div>

                                      <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                        <dt className='font-medium text-gray-900'>
                                          ชื่อธุรกิจนำเที่ยว (Trade Name)
                                        </dt>

                                        <dd className='text-gray-700 sm:col-span-2'>
                                          xxx
                                        </dd>
                                      </div>
                                      <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                        <dt className='pl-6 font-medium text-gray-900'>
                                          ชื่อภาษาไทย :
                                        </dt>

                                        <dd className='text-gray-700 sm:col-span-2'>
                                          xxx
                                        </dd>
                                      </div>
                                      <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                        <dt className='pl-6 font-medium text-gray-900'>
                                          ชื่อภาษาอังกฤษ :
                                        </dt>
                                        <dd className='text-gray-700 sm:col-span-2'>
                                          xxx
                                        </dd>
                                      </div>
                                    </dl>
                                  </div>
                                </Card>
                              </div>

                              <div
                                id='tabs-with-icons-2'
                                role='tabpanel'
                                aria-labelledby='tabs-with-icons-item-2'
                                className={activeTab === 'tab2' ? '' : 'hidden'}
                              >
                                <Card className='rounded-2xl '>
                                  <div className='flow-root pt-2 pb-4 text-body-page text-body-size '>
                                    <dl className='-my-3 divide-y divide-gray-100 text-sm'>
                                      <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                        <dt className='font-medium text-gray-900 '>
                                          ชื่อบริษัท/ห้างหุ้นส่วนจํากัด (TH) :
                                        </dt>
                                        <dd className='text-gray-700 sm:col-span-2'>
                                          xxx
                                        </dd>
                                      </div>

                                      <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                        <dt className='font-medium text-gray-900'>
                                          ชื่อบริษัท/ห้างหุ้นส่วนจํากัด (EH) :
                                        </dt>
                                        <dd className='text-gray-700 sm:col-span-2'>
                                          xxx
                                        </dd>
                                      </div>

                                      <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                        <dt className='font-medium text-gray-900'>
                                          จดทะเบียนนิติบุคคลเลขที่ :
                                        </dt>
                                        <dd className='text-gray-700 sm:col-span-2'>
                                          xxx
                                        </dd>
                                      </div>

                                      <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                        <dt className='font-medium text-gray-900'>
                                          เมื่อวันที่ :
                                        </dt>

                                        <dd className='text-gray-700 sm:col-span-2'>
                                          xxx
                                        </dd>
                                      </div>
                                    </dl>
                                  </div>
                                </Card>
                                <div>
                                  <Col xs={24} sm={24} order={1}>
                                    <div className='pt-6 text-title-page'>
                                      <Text type='secondary'>
                                        รายชื่อกรรมการ
                                      </Text>
                                    </div>
                                    <Card className='rounded-2xl'>
                                      <div className='overflow-hidden rounded-lg'>
                                        <table className='text-body-page text-body-size w-full border-collapse bg-white text-left text-sm text-gray-500'>
                                          <thead className='bg-gray-100'>
                                            <tr>
                                              <th
                                                scope='col'
                                                className='px-6 py-4 font-medium text-gray-900'
                                              >
                                                ลำดับ
                                              </th>

                                              <th
                                                scope='col'
                                                className='px-6 py-4 font-medium text-gray-900'
                                              >
                                                ชื่อ-นามสกุล (TH)
                                              </th>
                                              <th
                                                scope='col'
                                                className='px-6 py-4 font-medium text-gray-900'
                                              >
                                                ชื่อ-นามสกุล (EN)
                                              </th>
                                              <th
                                                scope='col'
                                                className='px-6 py-4 font-medium text-gray-900'
                                              >
                                                วันเดือนปีเกิด
                                              </th>
                                              <th
                                                scope='col'
                                                className='px-6 py-4 font-medium text-gray-900'
                                              >
                                                อายุ
                                              </th>
                                              <th
                                                scope='col'
                                                className='px-6 py-4 font-medium text-gray-900'
                                              >
                                                เลขที่บัตรประจําตัวประชาชน
                                              </th>
                                              <th
                                                scope='col'
                                                className='px-6 py-4 font-medium text-gray-900'
                                              >
                                                วันที่หมดอายุบัตร
                                              </th>
                                              <th
                                                scope='col'
                                                className='px-6 py-4 font-medium text-gray-900'
                                              >
                                                มีอำนาจลงนาม
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
                                            {/* Repeat this block for each row */}
                                            <tr>
                                              <th className='px-6 py-4 font-medium text-gray-900'>
                                                xxx
                                              </th>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                            </tr>
                                            <tr>
                                              <th className='px-6 py-4 font-medium text-gray-900'>
                                                xxx
                                              </th>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                            </tr>
                                            <tr>
                                              <th className='px-6 py-4 font-medium text-gray-900'>
                                                xxx
                                              </th>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                              <td className='px-6 py-4'>xxx</td>
                                            </tr>
                                            {/* Add more rows as needed */}
                                          </tbody>
                                        </table>
                                      </div>
                                    </Card>
                                  </Col>
                                </div>
                              </div>
                              <div
                                id='tabs-with-icons-3'
                                role='tabpanel'
                                aria-labelledby='tabs-with-icons-item-3'
                                className={activeTab === 'tab3' ? '' : 'hidden'}
                              >
                                <Card className='p-0 rounded-2xl text-body-page text-body-size '>
                                  <div className='space-y-4'>
                                    <details className='group [&_summary::-webkit-details-marker]:hidden'>
                                      <summary className='flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-100 p-4 text-gray-900'>
                                        <h2 className='font-medium '>
                                          ที่ตั้งสำนักงาน
                                        </h2>

                                        <svg
                                          className='h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180'
                                          xmlns='http://www.w3.org/2000/svg'
                                          fill='none'
                                          viewBox='0 0 24 24'
                                          stroke='currentColor'
                                        >
                                          <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M19 9l-7 7-7-7'
                                          />
                                        </svg>
                                      </summary>
                                      <div className='pt-4'>
                                        <Card className='rounded-2xl p-0'>
                                          <div className='flow-root text-body-page text-body-size '>
                                            <div className='-my-3 divide-y divide-gray-100 text-sm'>
                                              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                                <div className='font-medium text-gray-900'>
                                                  บ้านเลขที่ :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  อาคาร :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  ชั้น :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                              </div>

                                              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                                <div className='font-medium text-gray-900'>
                                                  หมู่ที่ :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  ตรอก/ซอย :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  ถนน :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                              </div>

                                              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                                <div className='font-medium text-gray-900'>
                                                  รหัสไปรษณีย์ :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  จังหวัด :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  เขต/อำเภอ :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                              </div>
                                              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                                <div className='font-medium text-gray-900'>
                                                  แขวง/ตำบล :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  โทรศัพท์สำนักงาน :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  โทรศัพท์มือถือ :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                              </div>
                                              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                                <div className='font-medium text-gray-900'>
                                                  โทรสาร :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  อีเมล :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  เว็บไซต์ :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </Card>
                                      </div>
                                    </details>

                                    <details className='group [&_summary::-webkit-details-marker]:hidden'>
                                      <summary className='flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-100 p-4 text-gray-900'>
                                        <h2 className='font-medium'>
                                          ที่ตั้งสำนักงานสาขา
                                        </h2>

                                        <svg
                                          className='h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180'
                                          xmlns='http://www.w3.org/2000/svg'
                                          fill='none'
                                          viewBox='0 0 24 24'
                                          stroke='currentColor'
                                        >
                                          <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M19 9l-7 7-7-7'
                                          />
                                        </svg>
                                      </summary>
                                      <div className='pt-4'>
                                        <Card className='rounded-2xl '>
                                          <div className='flow-root text-body-page text-body-size '>
                                            <div className='-my-3 divide-y divide-gray-100 text-sm'>
                                              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                                <div className='font-medium text-gray-900'>
                                                  บ้านเลขที่ :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  อาคาร :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  ชั้น :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                              </div>

                                              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                                <div className='font-medium text-gray-900'>
                                                  หมู่ที่ :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  ตรอก/ซอย :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  ถนน :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                              </div>

                                              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                                <div className='font-medium text-gray-900'>
                                                  รหัสไปรษณีย์ :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  จังหวัด :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  เขต/อำเภอ :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                              </div>
                                              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                                <div className='font-medium text-gray-900'>
                                                  แขวง/ตำบล :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  โทรศัพท์สำนักงาน :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  โทรศัพท์มือถือ :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                              </div>
                                              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                                <div className='font-medium text-gray-900'>
                                                  โทรสาร :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  อีเมล :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                                <div className='font-medium text-gray-900'>
                                                  เว็บไซต์ :
                                                  <span className='text-gray-600 pl-4'>
                                                    xxx
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </Card>
                                      </div>
                                    </details>
                                  </div>
                                </Card>
                              </div>

                              <div
                                id='tabs-with-icons-4'
                                role='tabpanel'
                                aria-labelledby='tabs-with-icons-item-3'
                                className={activeTab === 'tab4' ? '' : 'hidden'}
                              >
                                <Card className='rounded-2xl'>
                                  <div className='overflow-hidden rounded-lg'>
                                    <table className='text-body-page text-body-size w-full border-collapse bg-white text-left text-sm text-gray-500'>
                                      <thead className='bg-gray-100'>
                                        <tr>
                                          <th
                                            scope='col'
                                            className='px-6 py-4 font-medium text-gray-900'
                                          >
                                            ลำดับ
                                          </th>

                                          <th
                                            scope='col'
                                            className='px-6 py-4 font-medium text-gray-900'
                                          >
                                            ประเภท
                                          </th>
                                          <th
                                            scope='col'
                                            className='px-6 py-4 font-medium text-gray-900'
                                          >
                                            ชื่อผู้ทำรายการ
                                          </th>
                                          <th
                                            scope='col'
                                            className='px-6 py-4 font-medium text-gray-900'
                                          >
                                            วันที่ยื่นคำขอ
                                          </th>
                                          <th
                                            scope='col'
                                            className='px-6 py-4 font-medium text-gray-900'
                                          >
                                            วันที่ออกใบอนุญาต
                                          </th>
                                          <th
                                            scope='col'
                                            className='px-6 py-4 font-medium text-gray-900'
                                          >
                                            วันที่ใบอนุญาตมีผล
                                          </th>
                                          <th
                                            scope='col'
                                            className='px-6 py-4 font-medium text-gray-900'
                                          >
                                            วันครบกำหนด
                                          </th>
                                          <th
                                            scope='col'
                                            className='px-6 py-4 font-medium text-gray-900'
                                          >
                                            เอกสารหลักฐาน
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
                                        {/* Repeat this block for each row */}
                                        <tr>
                                          <th className='px-6 py-4 font-medium text-gray-900'>
                                            xxx
                                          </th>
                                          <td className='px-6 py-4'>xxx</td>
                                          <td className='px-6 py-4'>xxx</td>
                                          <td className='px-6 py-4'>xxx</td>
                                          <td className='px-6 py-4 '>xxx</td>
                                          <td className='px-6 py-4'>xxx</td>
                                          <td className='px-6 py-4'>xxx</td>
                                          <td className='px-6 py-4 '>xxx</td>
                                        </tr>

                                        {/* Add more rows as needed */}
                                      </tbody>
                                    </table>
                                  </div>
                                </Card>
                              </div>

                              <div
                                id='tabs-with-icons-5'
                                role='tabpanel'
                                aria-labelledby='tabs-with-icons-item-5'
                                className={activeTab === 'tab5' ? '' : 'hidden'}
                              >
                                <Card className='p-0 rounded-2xl text-body-page text-body-size'>
                                  <div className='space-y-4'>
                                    <details className='group [&_summary::-webkit-details-marker]:hidden'>
                                      <summary className='flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-100 p-4 text-gray-900'>
                                        <h2 className='font-medium'>เงินสด</h2>

                                        <svg
                                          className='h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180'
                                          xmlns='http://www.w3.org/2000/svg'
                                          fill='none'
                                          viewBox='0 0 24 24'
                                          stroke='currentColor'
                                        >
                                          <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M19 9l-7 7-7-7'
                                          />
                                        </svg>
                                      </summary>
                                      <div className='p-4 pl-8 flow-root'>
                                        <dl className='-my-3 divide-y divide-gray-100 text-sm'>
                                          <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4'>
                                            <dt className='font-medium text-gray-900'>
                                              เลขที่บัญชี :
                                            </dt>
                                            <dd className='text-gray-700 sm:col-span-2'>
                                              xxx
                                            </dd>
                                          </div>
                                          <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4'>
                                            <dt className='font-medium text-gray-900'>
                                              ชื่อบัญชี :
                                            </dt>
                                            <dd className='text-gray-700 sm:col-span-2'>
                                              xxx
                                            </dd>
                                          </div>
                                          <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4'>
                                            <dt className='font-medium text-gray-900'>
                                              ธนาคาร :
                                            </dt>
                                            <dd className='text-gray-700 sm:col-span-2'>
                                              xxx
                                            </dd>
                                          </div>

                                          <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4'>
                                            <dt className='font-medium text-gray-900'>
                                              สาขา :
                                            </dt>
                                            <dd className='text-gray-700 sm:col-span-2'>
                                              xxx
                                            </dd>
                                          </div>

                                          <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4'>
                                            <dt className='font-medium text-gray-900'>
                                              จำนวนเงิน :
                                            </dt>
                                            <dd className='text-gray-700 sm:col-span-2'>
                                              xxx
                                            </dd>
                                          </div>
                                        </dl>
                                      </div>
                                    </details>

                                    <details className='group [&_summary::-webkit-details-marker]:hidden'>
                                      <summary className='flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-100 p-4 text-gray-900'>
                                        <h2 className='font-medium'>
                                          หนังสือค้ำประกันธนาคาร
                                        </h2>

                                        <svg
                                          className='h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180'
                                          xmlns='http://www.w3.org/2000/svg'
                                          fill='none'
                                          viewBox='0 0 24 24'
                                          stroke='currentColor'
                                        >
                                          <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M19 9l-7 7-7-7'
                                          />
                                        </svg>
                                      </summary>

                                      <div className='p-4 pl-8 flow-root'>
                                        <dl className='-my-3 divide-y divide-gray-100 text-sm'>
                                          <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4'>
                                            <dt className='font-medium text-gray-900'>
                                              เลขที่หนังสือค้ำประกัน :
                                            </dt>
                                            <dd className='text-gray-700 sm:col-span-2'>
                                              xxx
                                            </dd>
                                          </div>
                                          <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4'>
                                            <dt className='font-medium text-gray-900'>
                                              ชื่อบัญชี :
                                            </dt>
                                            <dd className='text-gray-700 sm:col-span-2'>
                                              xxx
                                            </dd>
                                          </div>
                                          <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4'>
                                            <dt className='font-medium text-gray-900'>
                                              ธนาคาร :
                                            </dt>
                                            <dd className='text-gray-700 sm:col-span-2'>
                                              xxx
                                            </dd>
                                          </div>

                                          <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4'>
                                            <dt className='font-medium text-gray-900'>
                                              จำนวนเงิน :
                                            </dt>
                                            <dd className='text-gray-700 sm:col-span-2'>
                                              xxx
                                            </dd>
                                          </div>
                                        </dl>
                                      </div>
                                    </details>
                                  </div>
                                </Card>
                              </div>
                              {/* Repeat for other tab contents */}
                            </div>
                          </div>
                        </Card>
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

export default Tourbusiness;
