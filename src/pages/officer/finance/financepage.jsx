
import React, { useState, useRef, useEffect } from 'react';
import {
  Card,
  Tag,
  Typography,
  Alert,
  Input,
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input as AntInput,
  Row,
  Select,
  Space,
  Tooltip,
} from 'antd';
import dataservice from '@/demoData/dataservice'; 
import dataservice1 from '@/demoData/dataservice1'; 

import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/th';

moment.locale('th');
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';

//const Input = (props) => <AntInput {...props} size='large' />;

//const { Text } = Typography;
//const Input = (props) => <AntInput {...props} size='large' />;

const formatDate = (value) => {
  if (value) {
    const thaiYear = value.year() + 543;
    return value.clone().year(thaiYear).format('DD/MM/YYYY');
  }
};

const { Option } = Select;

const FinancePage = () => {
  /* /////////////////////// Drawer ////////////////////////*/

  //const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  //const [openStories, setOpenStories] = useState(false);
  const showDrawerAdd = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  // Function to show drawer stories
  const showDrawerStories = (id) => {
    const item = dataservice.find((item) => item.id === id);
    setSelectedItem(item);
    setIsDrawerOpen(true);
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedItem(null);
  };

  /* /////////////////////// license table ////////////////////////*/
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const data = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `ขยันทัวร์ ${index + 1}`,
    date: index % 2 === 0 ? 'ผู้นำเที่ยว' : 'ธุรกิจนำเที่ยว',
    date2: `2568-11-${index + 1 < 10 ? `0${index + 1}` : index + 1}`,
    type: index % 2 === 0 ? 'ทั่วไป' : 'นำเที่ยวจากต่างประเทศ',
    state: (
      <span className='inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='h-3 w-3'
        >
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z'
            clipRule='evenodd'
          />
        </svg>
        รอรับเรื่อง
      </span>
    ),
  }));

  /* /////////////////////////////////////////////////////////////////////*/
  const pageCount = Math.ceil(dataservice1.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataservice1.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  /* ///////////////////////Total license table ////////////////////////*/
  const [currentPage2, setCurrentPage2] = useState(1);
  const itemsPerPage2 = 7;

  const pageCount2 = Math.ceil(dataservice.length / itemsPerPage2);
  const indexOfLastItem2 = currentPage2 * itemsPerPage2;
  const indexOfFirstItem2 = indexOfLastItem2 - itemsPerPage2;
  const currentItems2 = dataservice.slice(indexOfFirstItem2, indexOfLastItem2);

  const paginate2 = (pageNumber2) => setCurrentPage2(pageNumber2);
  /* /////////////////////////////////////////////////////////////////////*/

  /* //////////////////////Search//////////////////////////////////////// */

  /* ////////////////////useNavigate //////////////////////*/
  const [selectedType, setSelectedType] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleTypeChange = (value) => {
    setSelectedType(value);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleButtonClick = () => {
    if (selectedCategory === 'guide-request') {
      navigate('/guide-request');
    }
    if (selectedCategory === 'guide-renewal') {
      navigate('/guide-renewal');
    }
    if (selectedCategory === 'guide-replacing') {
      navigate('/guide-replacing');
    }
    if (selectedCategory === 'guide-list-change') {
      navigate('/guide-list-change');
    }
    if (selectedCategory === 'tourleader-list-change') {
      navigate('/tourleader-list-change');
    }
    if (selectedCategory === 'tourleader-request') {
      navigate('/tourleader-request');
    }
    if (selectedCategory === 'tourleader-replacing') {
      navigate('/tourleader-replacing');
    }
    if (selectedCategory === 'tourbusiness-request') {
      navigate('/tourbusiness-request');
    }
    if (selectedCategory === 'tourbusiness-renewal') {
      navigate('/tourbusiness-renewal');
    }
    if (selectedCategory === 'tourbusiness-replacing') {
      navigate('/tourbusiness-replacing');
    }
    if (selectedCategory === 'tourbusiness-list-change') {
      navigate('/tourbusiness-list-change');
    }
    if (selectedCategory === 'tourbusiness-business-cencel') {
      navigate('/tourbusiness-business-cencel');
    }
    if (selectedCategory === 'tourbusiness-guarantee-change') {
      navigate('/tourbusiness-guarantee-change');
    }
    if (selectedCategory === 'tourbusiness-guarantee-increase-decrease') {
      navigate('/tourbusiness-guarantee-increase-decrease');
    }
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

  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <Card className='rounded-2xl'>
        <div>
          <div className='flex flex-col sm:flex-row justify-between'>
            <div className='order-last w-full sm:w-180'>
              <div className='flex flex-col sm:flex-row justify-end ml-4 '>
                <div className=' grid justify-items-end '>
                  <div className='relative text-gray-600 w-full md:w-[22rem] py-2'>
                    <div className='justify-items-end '>
                      <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none '>
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
                        className=' bg-white p-4 ps-10 h-10 w-full px-5 pr-10 rounded-full text-md focus:outline-none border border-blue-300'
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
                  </div>
                </div>
                <div className='text-body-page ml-4 py-2 grid justify-items-end '>
                  <button
                    onClick={showDrawerAdd}
                    type='button'
                    className='rounded-full border border-primary-600 bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                  >
                    <p className='font-bold'>+ เพิ่มข้อมูล Walk in</p>
                  </button>
                </div>
              </div>
            </div>

            <Drawer
              className='text-body-page'
              title='เพิ่มข้อมูล Walk in'
              placement='right'
              onClose={onClose}
              open={open}
              footer={
                <div
                  style={{
                    textAlign: 'right',
                  }}
                >
                  <div className='flex flex-wrap justify-center gap-5'>
                    <button
                      type='button'
                      className='w-full rounded-lg border border-primary-600 bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                      onClick={handleButtonClick}
                    >
                      ดำเนินการต่อ
                    </button>
                  </div>
                </div>
              }
            >
              <Form layout='vertical'>
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      name='type'
                      label='งานทะเบียน'
                      rules={[{ required: true, message: 'โปรดระบุข้อมูล' }]}
                    >
                      <Select
                        size='large'
                        placeholder='เลือกงานทะเบียน'
                        onChange={handleTypeChange}
                      >
                        <Option className='text-body-page' value='tourbusiness'>
                          ธุรกิจนำเที่ยว
                        </Option>
                        <Option className='text-body-page' value='guide'>
                          มัคคุเทศก์
                        </Option>
                        <Option className='text-body-page' value='tourleader'>
                          ผู้นำเที่ยว
                        </Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      name='category'
                      label='ประเภทการทำรายการ'
                      rules={[{ required: true, message: 'โปรดระบุข้อมูล' }]}
                    >
                      <Select
                        size='large'
                        placeholder='เลือกประเภทการทำรายการ'
                        onChange={handleCategoryChange}
                      >
                        {selectedType === 'tourbusiness' ? (
                          <>
                            <Option
                              className='text-body-page'
                              value='tourbusiness-request'
                            >
                              คำขอใบอนุญาตประกอบธุรกิจนำเที่ยว
                            </Option>
                            <Option
                              className='text-body-page'
                              value='tourbusiness-renewal'
                            >
                              คำขอต่ออายุใบอนุญาตประกอบธุรกิจนำเที่ยว
                            </Option>
                            <Option
                              className='text-body-page'
                              value='tourbusiness-replacing'
                            >
                              คำขอใบแทนใบอนุญาตประกอบธุรกิจนำเที่ยว{' '}
                            </Option>

                            <Option
                              className='text-body-page'
                              value='tourbusiness-list-change'
                            >
                              คำขอเปลี่ยนแปลงรายการ
                            </Option>

                            <Option
                              className='text-body-page'
                              value='tourbusiness-business-cencel'
                            >
                              คำขอยกเลิกการประกอบกิจการ
                            </Option>

                            <Option
                              className='text-body-page'
                              value='tourbusiness-guarantee-change'
                            >
                              คำขอเปลี่ยนแปลงหลักประกัน
                            </Option>

                            <Option
                              className='text-body-page'
                              value='tourbusiness-guarantee-increase-decrease'
                            >
                              คำขอเพิ่มหรือขอรับคืนหลักประกัน
                            </Option>
                          </>
                        ) : null}
                        {selectedType === 'guide' ? (
                          <>
                            <Option
                              className='text-body-page'
                              value='guide-request'
                            >
                              คำขอใบอนุญาตเป็นมัคคุเทศก์
                            </Option>
                            <Option
                              className='text-body-page'
                              value='guide-renewal'
                            >
                              คำขอต่ออายุใบอนุญาตเป็นมัคคุเทศก์
                            </Option>
                            <Option
                              className='text-body-page'
                              value='guide-replacing'
                            >
                              คำขอรับใบแทนใบอนุญาตเป็นมัคคุเทศก์
                            </Option>
                            <Option
                              className='text-body-page'
                              value='guide-list-change'
                            >
                              คำขอเปลี่ยนแปลงรายการสถานะมัคคุเทศก์
                            </Option>
                          </>
                        ) : null}
                        {selectedType === 'tourleader' ? (
                          <>
                            <Option
                              className='text-body-page'
                              value='tourleader-request'
                            >
                              คําขอขึ้นทะเบียนเป็นผู้นําเที่ยว
                            </Option>
                            <Option
                              className='text-body-page'
                              value='tourleader-replacing'
                            >
                              คำขอออกบัตรประจำตัวผู้นำเที่ยวใหม่
                            </Option>
                            <Option
                              className='text-body-page'
                              value='tourleader-list-change'
                            >
                              คำขอเปลี่ยนแปลงรายการบัตรประจำตัวฯ
                            </Option>
                          </>
                        ) : null}
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Drawer>

            <div>
              <div className='border-b border-gray-50 dark:border-gray-700'>
                <nav
                  className='flex justify-between items-center text-body-page'
                  aria-label='Tabs'
                  role='tablist'
                >
                  <div className='pr-4 flex space-x-3'>
                    <button
                      type='button'
                      onClick={() => handleTabClick('tab1')}
                      className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 whitespace-nowrap ${
                        activeTab === 'tab1'
                          ? 'font-semibold border-blue-900 text-blue-900'
                          : 'border-transparent text-gray-500 hover:text-blue-700 focus:outline-none focus:text-blue-800'
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
                      งานทั้งหมด
                    </button>
                  </div>

                  <div className='pl-0 '>
                    <button
                      type='button'
                      onClick={() => handleTabClick('tab2')}
                      className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 whitespace-nowrap ${
                        activeTab === 'tab2'
                          ? 'font-semibold border-blue-900 text-blue-900'
                          : 'border-transparent text-gray-500 hover:text-blue-700 focus:outline-none focus:text-blue-800'
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
                      งานของฉัน
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className='mt-3 '>
            <div
              id='tabs-with-icons-1'
              role='tabpanel'
              aria-labelledby='tabs-with-icons-item-1'
              className={activeTab === 'tab1' ? '' : 'hidden'}
            >
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
                  <thead className='bg-gray-100 sticky top-0 '>
                    <tr
                      className='text-xs
'
                    >
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'>
                        ลำดับ
                      </th>
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'>
                        ช่องทาง
                      </th>
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'>
                        เลขที่ใบอนุญาต
                      </th>
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'>
                        ประเภทใบอนุญาต
                      </th>
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'>
                        รายการ
                      </th>
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'>
                        ชื่อผู้ยื่นคำขอ
                      </th>
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'>
                        วันที่ยื่นคำขอ
                      </th>
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'>
                        สถานะ
                      </th>
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'></th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
                    {currentItems.map((item) => (
                      <tr
                        key={item.id}
                        className='hover:bg-gray-50 font-medium text-gray-500'
                      >
                        <td className='px-4 py-4 text-sm text-center'>
                          {item.id}
                        </td>
                        <td className='px-4 py-4 text-sm'>{item.channels}</td>
                        <td className='px-4 py-4'>{item.license_no}</td>
                        <td className='px-4 py-4 text-gray-400 text-sm'>
                          {item.license_type}
                        </td>
                        <td className='px-4 py-4 text-sm'>{item.detail}</td>
                        <td className='px-4 py-4 text-sm'>{item.name}</td>
                        <td className='px-4 py-4 text-sm'>
                          <span className='rounded-full bg-gray-50 px-2 py-1 text-sm font-semibold text-gray-500'>
                            {item.created_date}
                          </span>
                        </td>
                        <td className='px-4 py-4 text-sm'>
                          {item.status_id === 1 ? (
                            <span className='inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='h-3 w-3'
                              >
                                <path
                                  fillRule='evenodd'
                                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z'
                                  clipRule='evenodd'
                                />
                              </svg>
                              {item.status}
                            </span>
                          ) : item.status_id === 2 ? (
                            <span className='inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                className='h-3 w-3'
                                viewBox='0 0 20 20'
                              >
                                <path d='M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm-.615 12.66h-1.34l-3.24-4.54l1.341-1.25l2.569 2.4l5.141-5.931l1.34.94l-5.811 8.381z' />
                              </svg>
                              {item.status}
                            </span>
                          ) : null}
                        </td>

                        <td className='px-4 py-2'>
                          <span className='inline-flex overflow-hidden rounded-xl border bg-white '>
                            <Tooltip placement='top' title='View'>
                              <button
                                className='inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative'
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
                            <Tooltip placement='top' title='Timeline'>
                              <button
                                onClick={() => showDrawerStories(item.id)}
                                /* onClick={showDrawerStories} */
                                className='inline-block p-3 text-gray-500 hover:bg-gray-50 focus:relative'
                                title='Timeline'
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='18'
                                  height='18'
                                  viewBox='0 0 24 24'
                                >
                                  <path
                                    fill='currentColor'
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='1.5'
                                    d='M12 12.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm0 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm0-16a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z'
                                  />
                                </svg>
                              </button>
                            </Tooltip>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {isDrawerOpen && selectedItem && (
                  <Drawer
                    className='text-body-page'
                    title='ประวัติการดำเนินงาน'
                    placement='right'
                    open={isDrawerOpen}
                    onClose={closeDrawer}
                    item={selectedItem}
                  >
                    <div className='scrollable-container'>
                      <div className='ps-2 my-2 first:mt-0'>
                        <h3 className='text-xs font-medium uppercase text-gray-500 dark:text-gray-400'>
                          1 Aug, 2023
                        </h3>
                      </div>

                      <div className='flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10'>
                        <a className='absolute inset-0 z-[1]' href='#'></a>

                        <div className='relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600'>
                          <div className='relative z-10 w-7 h-7 flex justify-center items-center'>
                            <div className='w-2 h-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600'></div>
                          </div>
                        </div>

                        <div className='grow p-2 pb-8'>
                          <h3 className='flex gap-x-1.5 font-semibold text-gray-800 dark:text-white'>
                            {/* SVG icon here */}
                            รับเรื่อง
                          </h3>
                          <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
                            Find more detailed instructions here.
                          </p>
                          <button
                            type='button'
                            className='mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                          >
                            <svg
                              className=' text-blue-500'
                              xmlns='http://www.w3.org/2000/svg'
                              width='16'
                              height='16'
                              viewBox='0 0 36 36'
                            >
                              <path
                                fill='currentColor'
                                d='M18 17a7 7 0 1 0-7-7a7 7 0 0 0 7 7Zm0-12a5 5 0 1 1-5 5a5 5 0 0 1 5-5Z'
                                className='clr-i-outline clr-i-outline-path-1'
                              />
                              <path
                                fill='currentColor'
                                d='M30.47 24.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37ZM29 31H7v-5.27a15.17 15.17 0 0 1 22 0Z'
                                className='clr-i-outline clr-i-outline-path-2'
                              />
                              <path fill='none' d='M0 0h36v36H0z' />
                            </svg>
                            นายสมชาย
                          </button>
                        </div>
                      </div>

                      <div className='ps-2 my-2 first:mt-0'>
                        <h3 className='text-xs font-medium uppercase text-gray-500 dark:text-gray-400'>
                          31 Jul, 2023
                        </h3>
                      </div>
                    </div>
                  </Drawer>
                )}
              </div>
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
                        currentPage === number + 1
                          ? 'bg-gray-200'
                          : 'bg-gray-50'
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

            <div
              id='tabs-with-icons-2'
              role='tabpanel'
              aria-labelledby='tabs-with-icons-item-2'
              className={activeTab === 'tab2' ? '' : 'hidden'}
            >
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
                  <thead className='bg-gray-100 sticky top-0 '>
                    <tr
                      className='text-xs
'
                    >
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'>
                        ลำดับ
                      </th>
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'>
                        ช่องทาง
                      </th>
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'>
                        เลขที่ใบอนุญาต
                      </th>
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'>
                        ประเภทใบอนุญาต
                      </th>
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'>
                        รายการ
                      </th>
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'>
                        ชื่อผู้ยื่นคำขอ
                      </th>
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'>
                        วันที่ยื่นคำขอ
                      </th>
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'>
                        สถานะ
                      </th>
                      <th className='px-4 py-4 text-sm font-bold text-gray-900'></th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
                    {currentItems2.map((item) => (
                      <tr
                        key={item.id}
                        className='hover:bg-gray-50 font-medium text-gray-500'
                      >
                        <td className='px-4 py-4 text-sm text-center'>
                          {item.id}
                        </td>
                        <td className='px-4 py-4 text-sm'>{item.channels}</td>
                        <td className='px-4 py-4'>{item.license_no}</td>
                        <td className='px-4 py-4 text-gray-400 text-sm'>
                          {item.license_type}
                        </td>
                        <td className='px-4 py-4 text-sm'>{item.detail}</td>
                        <td className='px-4 py-4 text-sm'>{item.name}</td>
                        <td className='px-4 py-4 text-sm'>
                          <span className='rounded-full bg-gray-50 px-2 py-1 text-sm font-semibold text-gray-500'>
                            {item.created_date}
                          </span>
                        </td>
                        <td className='px-4 py-4 text-sm'>
                          {item.status_id === 1 ? (
                            <span className='inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='h-3 w-3'
                              >
                                <path
                                  fillRule='evenodd'
                                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z'
                                  clipRule='evenodd'
                                />
                              </svg>
                              {item.status}
                            </span>
                          ) : item.status_id === 2 ? (
                            <span className='inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                className='h-3 w-3'
                                viewBox='0 0 20 20'
                              >
                                <path d='M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm-.615 12.66h-1.34l-3.24-4.54l1.341-1.25l2.569 2.4l5.141-5.931l1.34.94l-5.811 8.381z' />
                              </svg>
                              {item.status}
                            </span>
                          ) : null}
                        </td>

                        <td className='px-4 py-2'>
                          <span className='inline-flex overflow-hidden rounded-xl border bg-white '>
                            <Tooltip placement='top' title='View'>
                              <button
                                className='inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative'
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
                            <Tooltip placement='top' title='Timeline'>
                              <button
                                onClick={() => showDrawerStories(item.id)}
                                /* onClick={showDrawerStories} */
                                className='inline-block p-3 text-gray-500 hover:bg-gray-50 focus:relative'
                                title='Timeline'
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='18'
                                  height='18'
                                  viewBox='0 0 24 24'
                                >
                                  <path
                                    fill='currentColor'
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='1.5'
                                    d='M12 12.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm0 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm0-16a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z'
                                  />
                                </svg>
                              </button>
                            </Tooltip>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <nav className='flex items-center gap-x-1 justify-end mt-10'>
                <button
                  type='button'
                  disabled={currentPage2 === 1}
                  onClick={() => paginate2(currentPage2 - 1)}
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
                  {[...Array(pageCount2).keys()].map((number) => (
                    <button
                      key={number}
                      onClick={() => paginate2(number + 1)}
                      className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${
                        currentPage2 === number + 1
                          ? 'bg-gray-200'
                          : 'bg-gray-50'
                      } text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300`}
                    >
                      {number + 1}
                    </button>
                  ))}
                </div>
                <button
                  type='button'
                  disabled={currentPage2 === pageCount2}
                  onClick={() => paginate2(currentPage2 + 1)}
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
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FinancePage;
