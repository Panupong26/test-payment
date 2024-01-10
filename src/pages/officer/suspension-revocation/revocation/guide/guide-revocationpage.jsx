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
  Radio,
  Select,
  Tooltip,
  Drawer,
} from 'antd';
import Modal from '@/components/ui/Modal';
import { EditOutlined } from '@ant-design/icons';

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

const TourBusinessRevocationPage = () => {
  const [form] = Form.useForm();

  const { TextArea } = Input;
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
          เพิกถอนใบอนุญาต{' '}
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

  /* /////////////////////// Drawer ////////////////////////*/

  //const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  //const [openStories, setOpenStories] = useState(false);
  const showDrawerAdd = () => {
    setSize('large');
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  /* ///////////////////////เลือกใบอนุญาตที่ต้องการเพิกถอน/////////////////////////////////////// */
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  /* ////////////////////////////////////////////////////////////// */

  //////////////////Form selected////////////////////////
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  //////////////////Form selected Response////////////////////////
  const handleChangecorrespondence = (value) => {
    console.log(`selected ${value}`);
  };

  ////////////////////ค้นหาสถานะการเพิกถอน/////////////////////////////////

  const handleChangestatus = (value) => {
    console.log(`selected ${value}`);
  };

  ////////////////////สถานะการเพิกถอน/////////////////////////////////
  const [value, setValue] = useState(1);
  const onChangestatus = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  /////////////////////////////////////////////////////
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onFinish = (values) => {
    // Process the form values
    console.log('Received values from form: ', values);
    // You can then send these values to an API, use them in your component, etc.
  };


  return (
    <div>
      <Card className='rounded-2xl shadow-sm shadow-blue-100/50'>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={18}>
            <div className='text-th'>
              <h5 className='font-bold text-blue-900'>
                รายการเพิกถอนใบอนุญาตมัคคุเทศก์
              </h5>
            </div>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <div className='grid justify-items-end'>
              <button
                onClick={showDrawerAdd}
                type='button'
                className='w-62 text-body-page rounded-full border border-primary-600 bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
              >
                <span className='font-bold '>+ เพิ่มข้อมูลเพิกถอนใบอนุญาต</span>
              </button>
            </div>
          </Col>
        </Row>
      </Card>

      <Card className='rounded-2xl shadow-sm mt-4'>
        <div className='mb-4'>
          <Row gutter={[16, 8]} className='flex justify-end'>
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
                  value={searchTerm}
                  onChange={handleSearchChange}
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
                    <span>
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
                    </span>
                  </button>
                  {isOpenRight && (
                    <div className='absolute right-0 z-10 mt-2 rounded-lg border border-gray-200 bg-gray-50 text-left text-sm shadow-lg'>
                      <div className='p-4'>
                        <div className='w-full md:w-[38rem]'>
                          <Form
                            layout='vertical'
                            onFinish={onFinish}
                            size='large'
                            className='text-body-page text-body-size'
                          >
                            <Row gutter={16}>
                              <Col xs={24} sm={12} md={12}>
                                <Form.Item
                                  name='receiving_date'
                                  label='วันที่รับเรื่อง'
                                >
                                  <DatePicker
                                    format={formatDate}
                                    locale={moment().locale('th')}
                                    style={{ width: '100%' }}
                                    getPopupContainer={(trigger) =>
                                      trigger.parentElement
                                    }
                                  />
                                </Form.Item>
                              </Col>
                              <Col xs={24} sm={12} md={12}>
                                <Form.Item name='end_date' label='ถึงวันที่'>
                                  <DatePicker
                                    format={formatDate}
                                    locale={moment().locale('th')}
                                    style={{ width: '100%' }}
                                    getPopupContainer={(trigger) =>
                                      trigger.parentElement
                                    }
                                  />
                                </Form.Item>
                              </Col>
                            </Row>{' '}
                            <Row gutter={16}>
                              <Col xs={24} sm={12} md={12}>
                                <Form.Item
                                  name='business_license_no'
                                  label='เลขที่ใบอนุญาต'
                                >
                                  <Input />
                                </Form.Item>
                              </Col>
                              <Col xs={24} sm={12} md={12}>
                                <Form.Item
                                  name='company_name_th'
                                  label='เลขบัตรประจำตัวประชาชน'
                                >
                                  <Input />
                                </Form.Item>
                              </Col>
                            </Row>{' '}
                            <Row gutter={16}>
                              <Col xs={24} sm={12} md={12}>
                                <Form.Item
                                  name='juristic_no'
                                  label='ชื่อ'
                                >
                                  <Input />
                                </Form.Item>
                              </Col>
                              <Col xs={24} sm={12} md={12}>
                                <Form.Item
                                  name='person_requesting_license'
                                  label='นามสกุล'
                                >
                                  <Input />
                                </Form.Item>
                              </Col>
                            </Row>{' '}
                            <Row gutter={16}>
                              <Col xs={24} sm={12} md={12}>
                                <Form.Item
                                  name='lawobjective'
                                  label='นิติกรผู้รับผิดชอบ'
                                >
                                  <Select
                                    name='selectobjective'
                                    size='large'
                                    /*   defaultValue='รายชื่อนิติกร' */
                                    className='w-full'
                                    onChange={handleChange}
                                    getPopupContainer={(trigger) =>
                                      trigger.parentElement
                                    }
                                  >
                                    <Select.Option
                                      value='รายชื่อนิติกร'
                                      className='custom-select-option'
                                    >
                                      รายชื่อนิติกร
                                    </Select.Option>
                                  </Select>
                                </Form.Item>
                              </Col>
                              <Col xs={24} sm={12} md={12}>
                                <Form.Item
                                  name='status_license'
                                  label='สถานะใบอนุญาต'
                                >
                                  <Select
                                    name='select_status_license'
                                    size='large'
                                    /*  defaultValue='เพิกถอนใบอนุญาต' */
                                    className='w-full'
                                    onChange={handleChangestatus}
                                    getPopupContainer={(trigger) =>
                                      trigger.parentElement
                                    }
                                  >
                                    {/* <Select
                                    name='select_status_license'
                                    size='large'
                                    defaultValue='เพิกถอนใบอนุญาต'
                                    className='w-full'
                                    onChange={handleChangestatus}
                                  > */}
                                    <Select.Option
                                      value='เพิกถอนใบอนุญาต'
                                      className='custom-select-option'
                                    >
                                      เพิกถอนใบอนุญาต
                                    </Select.Option>
                                    <Select.Option
                                      value='ยกเลิกการเพิกถอน'
                                      className='custom-select-option'
                                    >
                                      ยกเลิกการเพิกถอน
                                    </Select.Option>
                                    <Select.Option
                                      value='ครบกำหนดการเพิกถอน'
                                      className='custom-select-option'
                                    >
                                      ครบกำหนดการเพิกถอน
                                    </Select.Option>
                                    <Select.Option
                                      value='อยู่ระหว่างการดำเนินการเพิกถอน'
                                      className='custom-select-option'
                                    >
                                      อยู่ระหว่างการดำเนินการเพิกถอน
                                    </Select.Option>
                                  </Select>
                                </Form.Item>
                              </Col>
                            </Row>
                          </Form>

                          <Row gutter={16}>
                            <Col span={24}>
                              <div className='flex justify-end mb-4 text-body-page'>
                                <div>
                                  {' '}
                                  <button
                                    type='button'
                                    className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                                  >
                                    ยกเลิก
                                  </button>
                                </div>
                                <div className='ml-4'>
                                  {' '}
                                  <button
                                    type='button'
                                    className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                                  >
                                    ค้นหา
                                  </button>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <Drawer
          className='text-body-page'
          title='ค้นหาข้อมูลใบอนุญาต'
          placement='right'
          size={size}
          onClose={onClose}
          open={open}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <div className=''>
                <Link to='/guide-revocationpage-license'>
                  <button
                    type='button'
                    className='w-full rounded-lg border border-primary-600 bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                    /* onClick={handleButtonClick} */
                  >
                    <span>ดำเนินการต่อ</span>
                  </button>
                </Link>
              </div>
            </div>
          }
        >
          <Form layout='vertical' size='large'>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name='province_id'
                  label='ประเภทใบอนุญาต'
                  rules={[{ required: false }]}
                >
                  <Input type='text' placeholder='มัคคุเทศก์' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name='province_id'
                  label='เลขที่ใบอนุญาต'
                  rules={[{ required: false }]}
                >
                  <Input type='text' placeholder='เลขที่ใบอนุญาต' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name='province_id'
                  label='ชื่อ'
                  rules={[{ required: false }]}
                >
                  <Input type='text' placeholder='ชื่อ' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name='province_id'
                  label='นามสกุล'
                  rules={[{ required: false }]}
                >
                  <Input type='text' placeholder='นามสกุล' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name='province_id'
                  label='เลขบัตรประจำตัวประชาชน'
                  rules={[{ required: false }]}
                >
                  <Input type='text' placeholder='เลขบัตรประจำตัวประชาชน' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <div className='flex justify-end mb-4'>
                  <div>
                    {' '}
                    <button
                      type='button'
                      className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    >
                      ยกเลิก
                    </button>
                  </div>
                  <div className='ml-4'>
                    {' '}
                    <button
                      type='button'
                      className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    >
                      ค้นหา
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Form>

          <div className='relative overflow-x-auto shadow-sm sm:rounded-lg'>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='p-4'></th>
                  <th scope='col' className='px-6 py-3'>
                    เลขที่ใบอนุญาต
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    ชื่อมัคคุเทศก์
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    สถานะ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                  <td className='w-4 p-4'>
                    <div className='flex items-center'>
                      <Checkbox onChange={onChange}></Checkbox>
                    </div>
                  </td>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    123000
                  </th>
                  <td className='px-6 py-4'>ขยันทัวร์</td>
                  <td className='px-6 py-4'>ปกติ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Drawer>

        <div
          className='rounded-lg max-h-[800px] overflow-y-auto [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-slate-700
            dark:[&::-webkit-scrollbar-thumb]:bg-slate-500'
        >
          <table className='text-body-page text-body-size w-full border-collapse bg-white text-left text-sm text-gray-800'>
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
                  วันที่เพิกถอน
                </th>
                <th className='px-4 py-4 font-medium text-gray-900'>
                  ถึงวันที่
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
                      <span className='inline-flex overflow-hidden rounded-xl border bg-white '>
                        <Modal
                          title='รายละเอียด'
                          label={
                            <Tooltip placement='top' title='แก้ไข'>
                              <div className='inline-block p-3 text-gray-500 hover:bg-gray-50 focus:relative'>
                                <EditOutlined />
                              </div>
                            </Tooltip>
                          }
                          labelclassName='btn-outline-dark'
                          scrollContent
                          uncontrol
                          disableBackdrop
                        >
                          <Card className='rounded-2xl mb-14'>
                            {' '}
                            {/* ใช้ overflow-y-auto เพื่อทำให้เนื้อหาเป็น scrollable */}
                            <div>
                              <Form
                                form={form}
                                className='text-body-page text-body-size'
                                size='large'
                              >
                                <Row gutter={16}>
                                  <Col xs={24} sm={12} md={8}>
                                    <Form.Item
                                      name='company_name_th'
                                      label='เลขที่รับเรื่อง'
                                    >
                                      <Input
                                        placeholder='เลขที่รับเรื่อง'
                                        disabled
                                      />
                                    </Form.Item>
                                  </Col>
                                  <Col xs={24} sm={12} md={8}>
                                    <Form.Item
                                      name='company_name_en'
                                      label='วันที่รับเรื่อง'
                                    >
                                      <Input
                                        placeholder='วันที่รับเรื่อง'
                                        disabled
                                      />
                                    </Form.Item>
                                  </Col>
                                  <Col xs={24} sm={12} md={8}>
                                    <Form.Item
                                      name='company_name_en'
                                      label='ผู้รับเรื่อง'
                                    >
                                      <Input
                                        placeholder='ผู้รับเรื่อง'
                                        disabled
                                      />
                                    </Form.Item>
                                  </Col>
                                </Row>
                              </Form>

                              <div className='flex justify-between'>
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
                                          ข้อมูลใบอนุญาต
                                        </button>
                                      </div>
                                      <div className='pl-6'>
                                        <div>
                                          <button
                                            type='button'
                                            onClick={() =>
                                              handleTabClick('tab2')
                                            }
                                            className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap ${
                                              activeTab === 'tab2'
                                                ? 'font-semibold border-blue-900 text-blue-900'
                                                : 'border-transparent text-gray-500 hover:text-blue-700 focus:outline-none focus:text-blue-900'
                                            }`}
                                            id='tabs-with-icons-item-1'
                                            aria-controls='tabs-with-icons-1'
                                            role='tab'
                                          >
                                            รายละเอียดการเพิกถอน
                                          </button>
                                        </div>
                                      </div>
                                      <div className='pl-6'>
                                        <div>
                                          <button
                                            type='button'
                                            onClick={() =>
                                              handleTabClick('tab3')
                                            }
                                            className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap ${
                                              activeTab === 'tab3'
                                                ? 'font-semibold border-blue-900 text-blue-900'
                                                : 'border-transparent text-gray-500 hover:text-blue-700 focus:outline-none focus:text-blue-900'
                                            }`}
                                            id='tabs-with-icons-item-2'
                                            aria-controls='tabs-with-icons-2'
                                            role='tab'
                                          >
                                            เอกสารคำสั่งการเพิกถอนใบอนุญาต
                                          </button>
                                        </div>
                                      </div>
                                    </nav>
                                  </div>
                                </div>

                                <div className=''>
                                  <div className='mt-4'>
                                    <Row gutter={16}>
                                      <Col xs={24} sm={12} md={24}>
                                        <div className='flex flex-wrap justify-center text-body-page text-body-size'>
                                          <div>
                                            <button
                                              type='button'
                                              style={{
                                                width: '150px',
                                                height: '40px',
                                              }}
                                              className='mr-4 rounded-lg border border-gray-300 bg-white px-5 py-2 text-center text-base font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
                                            >
                                              ยกเลิก
                                            </button>
                                            <button
                                              /* onClick={handleOkClick} */
                                              style={{
                                                width: '140px',
                                                height: '40px',
                                              }}
                                              type='button'
                                              className='rounded-lg border border-primary-500 bg-primary-700 px-5 text-center text-base font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                                            >
                                              บันทึกข้อมูล
                                            </button>
                                          </div>
                                        </div>
                                      </Col>
                                    </Row>
                                  </div>
                                </div>
                              </div>

                              <div className='mt-3 '>
                                <div
                                  id='tabs-with-icons-1'
                                  role='tabpanel'
                                  aria-labelledby='tabs-with-icons-item-1'
                                  className={
                                    activeTab === 'tab1' ? '' : 'hidden'
                                  }
                                >
                                  <Card className='rounded-2xl mt-4 shadow-sm'>
                                    <div className='flow-root pt-2 pb-4 text-body-page text-body-size rounded-lg'>
                                      <dl className='-my-3 divide-y divide-gray-100 text-sm'>
                                        <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-6 sm:gap-4'>
                                          <dt className='font-medium text-gray-900 '>
                                            ประเภทใบอนุญาต :
                                          </dt>
                                          <dd className='text-gray-700 sm:col-span-2'>
                                            xxx
                                          </dd>

                                          <dt className='font-medium text-gray-900'>
                                            ใบอนุญาตเลขที่ :
                                          </dt>
                                          <dd className='text-gray-700 sm:col-span-2'>
                                            xxx
                                          </dd>
                                        </div>
                                        <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-6 sm:gap-4'>
                                          {' '}
                                          <dt className='font-medium text-gray-900'>
                                            วันที่ออกใบอนุญาต :
                                          </dt>
                                          <dd className='text-gray-700 sm:col-span-2'>
                                            xxx
                                          </dd>
                                          <dt className='font-medium text-gray-900'>
                                            วันที่ครบกำหนด :
                                          </dt>
                                          <dd className='text-gray-700 sm:col-span-2'>
                                            xxx
                                          </dd>
                                        </div>

                                        <div className='grid grid-cols-1 gap-1 py-3 sm:grid-cols-3'>
                                          <dt className='font-medium text-gray-900 '>
                                            ชื่อมัคคุเทศก์
                                          </dt>
                                        </div>

                                        <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-6 sm:gap-4'>
                                          <dt className='font-medium text-gray-900'>
                                            ชื่อภาษาไทย :
                                          </dt>

                                          <dd className='text-gray-700 sm:col-span-2'>
                                            xxx
                                          </dd>

                                          <dt className='font-medium text-gray-900'>
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
                                  id='tabs-with-icons-1'
                                  role='tabpanel'
                                  aria-labelledby='tabs-with-icons-item-1'
                                  className={
                                    activeTab === 'tab2' ? '' : 'hidden'
                                  }
                                >
                                  <Card className='rounded-2xl mt-4 shadow-sm'>
                                    <Form
                                      form={form}
                                      layout='vertical'
                                      className='text-body-page'
                                      size='large'
                                    >
                                      <Form.Item
                                        name='cause_suspension'
                                        label={
                                          <Tag
                                            bordered={false}
                                            color='processing'
                                          >
                                            สาเหตุการเพิกถอน
                                          </Tag>
                                        }
                                      >
                                        <Checkbox.Group
                                          style={{
                                            width: '100%',
                                          }}
                                          /*   onChange={onChange} */
                                        >
                                          <Row>
                                            <Col span={24}>
                                              <Checkbox value='A'>
                                                (๑)
                                                ฝ่าฝืนหรือไม่ปฏิบัติตามระเบียบที่คณะกรรมการกำหนดตามมาตรา๑๒
                                                (๓)
                                              </Checkbox>
                                            </Col>
                                            <Col span={24}>
                                              <Checkbox value='B'>
                                                (๒) ฝ่าฝืนหรือไม่ปฏิบัติตามมาตรา
                                                ๓๐ มาตรา ๓๑ มาตรา ๓๒ หรือมาตรา
                                                ๓๓
                                              </Checkbox>
                                            </Col>
                                            <Col span={24}>
                                              <Checkbox value='C'>
                                                (๓)
                                                ไม่ชำระค่าธรรมเนียมประกอบธุรกิจนำเที่ยวและเงินเพิ่มจนพันกำหนดสามเดือน
                                                นับแต่วันที่กำหนดให้ชำระค่าธรรมเนียมตามมาตรา๓๔
                                                วรรคสอง
                                              </Checkbox>
                                            </Col>
                                            <Col span={24}>
                                              <Checkbox value='D'>
                                                (๔)
                                                ไม่วางหลักประกันเพิ่มจนครบถ้วนเกินหกเดือนนับแต่วันครบกำหนดเวลาตามมาตรา๔๒
                                                หรือมาตรา๔๔ (๑)
                                              </Checkbox>
                                            </Col>
                                            <Col span={24}>
                                              <Checkbox value='E'>
                                                (๕)
                                                ฝ่าฝืนหรือไม่ปฏิบัติตามคำสั่งของนายทะเบียนหรือพนักงานเจ้าหน้าที่ซึ่งสั่งตามมาตรา
                                                ๗๖
                                              </Checkbox>
                                            </Col>
                                          </Row>
                                        </Checkbox.Group>
                                      </Form.Item>

                                      <Row gutter={16} className='pb-2'>
                                        <Col xs={24} sm={24} md={24}>
                                          <Form.Item
                                            name='suspension_details'
                                            label={
                                              <Tag
                                                bordered={false}
                                                color='processing'
                                              >
                                                รายละเอียดการเพิกถอน
                                              </Tag>
                                            }
                                          >
                                            <TextArea />
                                          </Form.Item>
                                        </Col>
                                      </Row>
                                      <Row gutter={16} className='pb-2'>
                                        <Col xs={24} sm={24} md={24}>
                                          <Tag
                                            bordered={false}
                                            color='processing'
                                          >
                                            ระยะเวลาที่ถูกเพิกถอน
                                          </Tag>
                                        </Col>
                                      </Row>
                                      <Row gutter={16}>
                                        <Col xs={24} sm={12} md={11}>
                                          <Form.Item name='month' label=''>
                                            <Input type='number' disabled />
                                          </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12} md={1}>
                                          <span>เดือน</span>
                                        </Col>
                                        <Col xs={24} sm={12} md={11}>
                                          <Form.Item name='days' label=''>
                                            <Input type='number' disabled />
                                          </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12} md={1}>
                                          <span>วัน</span>
                                        </Col>
                                      </Row>
                                    </Form>
                                  </Card>

                                  <Card className='rounded-2xl mt-4 shadow-sm'>
                                    <Form
                                      form={form}
                                      layout='vertical'
                                      className='text-body-page'
                                      size='large'
                                    >
                                      <div className='card-title'>
                                        <Text>
                                          การแจ้งเตือนทางจดหมายลงทะเบียน
                                        </Text>
                                      </div>
                                      <Row gutter={16}>
                                        <Col xs={24} sm={12} md={12}>
                                          <Form.Item
                                            name='send_date'
                                            label={
                                              <Tag
                                                bordered={false}
                                                color='orange'
                                              >
                                                วันที่แจ้ง
                                              </Tag>
                                            }
                                          >
                                            <DatePicker
                                              format={formatDate}
                                              locale={moment().locale('th')}
                                              style={{ width: '100%' }}
                                              getPopupContainer={(trigger) =>
                                                trigger.parentElement
                                              }
                                            />
                                          </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12} md={12}>
                                          <Form.Item
                                            name='answer_date'
                                            label={
                                              <Tag
                                                bordered={false}
                                                color='orange'
                                              >
                                                วันที่ตอบรับ
                                              </Tag>
                                            }
                                          >
                                            <DatePicker
                                              format={formatDate}
                                              locale={moment().locale('th')}
                                              style={{ width: '100%' }}
                                              getPopupContainer={(trigger) =>
                                                trigger.parentElement
                                              }
                                            />
                                          </Form.Item>
                                        </Col>
                                      </Row>

                                      <Row gutter={16}>
                                        <Col xs={24} sm={12} md={12}>
                                          <Form.Item
                                            name='start_date'
                                            label={
                                              <Tag
                                                bordered={false}
                                                color='orange'
                                              >
                                                วันที่เริ่มเพิกถอน
                                              </Tag>
                                            }
                                          >
                                            <DatePicker
                                              format={formatDate}
                                              locale={moment().locale('th')}
                                              style={{ width: '100%' }}
                                              getPopupContainer={(trigger) =>
                                                trigger.parentElement
                                              }
                                            />
                                          </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12} md={12}>
                                          <Form.Item
                                            name='end_date'
                                            label={
                                              <Tag
                                                bordered={false}
                                                color='orange'
                                              >
                                                เพิกถอนถึงวันที่
                                              </Tag>
                                            }
                                          >
                                            <DatePicker
                                              format={formatDate}
                                              locale={moment().locale('th')}
                                              style={{ width: '100%' }}
                                              getPopupContainer={(trigger) =>
                                                trigger.parentElement
                                              }
                                            />
                                          </Form.Item>
                                        </Col>
                                      </Row>
                                      <Row gutter={16}>
                                        <Col xs={24} sm={12} md={12}>
                                          <Form.Item
                                            name='celect_correspondence'
                                            label={
                                              <Tag
                                                bordered={false}
                                                color='orange'
                                              >
                                                การตอบรับ
                                              </Tag>
                                            }
                                          >
                                            <Select
                                              name='celect_correspondence'
                                              size='large'
                                              /*  defaultValue='รอการตอบรับ' */
                                              className='w-full'
                                              onChange={
                                                handleChangecorrespondence
                                              }
                                              getPopupContainer={(trigger) =>
                                                trigger.parentElement
                                              }
                                            >
                                              <Select.Option
                                                value='รอการตอบรับ'
                                                className='custom-select-option'
                                              >
                                                รอการตอบรับ
                                              </Select.Option>
                                              <Select.Option
                                                value='ตอบรับแล้ว'
                                                className='custom-select-option'
                                              >
                                                ตอบรับแล้ว
                                              </Select.Option>
                                            </Select>
                                          </Form.Item>
                                        </Col>
                                      </Row>
                                      <Row gutter={16}>
                                        <div className='p-2'>
                                          <Form.Item
                                            name='tatus'
                                            label={
                                              <Tag
                                                bordered={false}
                                                color='orange'
                                              >
                                                สถานะการเพิกถอน
                                              </Tag>
                                            }
                                          >
                                            <Radio.Group
                                              onChange={onChangestatus}
                                              value={value}
                                            >
                                              <Space direction='vertical'>
                                                <Radio value={1}>
                                                  เพิกถอนใบอนุญาต
                                                </Radio>
                                                <Radio value={2}>
                                                  ยกเลิกการเพิกถอน
                                                </Radio>
                                                <Radio value={3}>
                                                  ครบกำหนดการเพิกถอน
                                                </Radio>
                                                <Radio value={4}>
                                                  อยู่ระหว่างการดำเนินการเพิกถอนการเพิกถอน
                                                </Radio>
                                              </Space>
                                            </Radio.Group>
                                          </Form.Item>
                                        </div>
                                      </Row>
                                    </Form>
                                  </Card>
                                </div>

                                <div
                                  id='tabs-with-icons-2'
                                  role='tabpanel'
                                  aria-labelledby='tabs-with-icons-item-2'
                                  className={
                                    activeTab === 'tab3' ? '' : 'hidden'
                                  }
                                >
                                  <Card className='rounded-2xl mt-4 shadow-sm'>
                                    <div className='grid justify-items-end mb-3 text-body-page'>
                                      <div>
                                        {' '}
                                        <Button
                                          size='large'
                                          type='dashed'
                                          danger
                                        >
                                          + เพิ่มเอกสาร
                                        </Button>
                                      </div>
                                    </div>
                                    <div className='relative overflow-x-auto shadow-sm sm:rounded-lg'>
                                      <table className='text-body-page w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                                        <thead className='text-gray-900 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
                                          <tr>
                                            <th
                                              scope='col'
                                              className='p-4'
                                            ></th>
                                            <th
                                              scope='col'
                                              className='px-6 py-3'
                                            >
                                              ชื่อเอกสาร
                                            </th>
                                            <th
                                              scope='col'
                                              className='px-6 py-3'
                                            >
                                              วันที่เพิ่มเอกสาร
                                            </th>
                                            <th
                                              scope='col'
                                              className='px-6 py-3'
                                            >
                                              action
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                            <td className='w-4 p-4'>
                                              <span>
                                                <button>
                                                  <svg
                                                    className='h-6 w-6'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='512'
                                                    height='512'
                                                    viewBox='0 0 512 512'
                                                  >
                                                    <path
                                                      fill='#DCE2E2'
                                                      d='M433.694 507.594H78.306c-11.929 0-21.6-9.671-21.6-21.6V25.317c0-11.929 9.671-21.6 21.6-21.6h263.026l113.961 112.739v369.538c.001 11.929-9.67 21.6-21.599 21.6'
                                                    />
                                                    <path
                                                      fill='#96A9B2'
                                                      d='M298.976 79.728h-74.642a7.904 7.904 0 0 1 0-15.808h74.642a7.904 7.904 0 0 1 0 15.808m-20.594 46.49a7.904 7.904 0 0 0-7.904-7.904h-46.144a7.904 7.904 0 0 0 0 15.808h46.144a7.904 7.904 0 0 0 7.904-7.904m116.577 54.394a7.904 7.904 0 0 0-7.904-7.904H224.333a7.904 7.904 0 0 0 0 15.808h162.721a7.905 7.905 0 0 0 7.905-7.904m-17.603 54.393a7.904 7.904 0 0 0-7.904-7.904H106.557a7.904 7.904 0 0 0 0 15.808h262.896a7.903 7.903 0 0 0 7.903-7.904M271.69 289.399a7.904 7.904 0 0 0-7.904-7.904H106.557a7.904 7.904 0 0 0 0 15.808h157.229a7.903 7.903 0 0 0 7.904-7.904m123.269 54.394a7.904 7.904 0 0 0-7.904-7.904H106.557a7.904 7.904 0 0 0 0 15.808h280.498a7.904 7.904 0 0 0 7.904-7.904m0 54.394a7.904 7.904 0 0 0-7.904-7.904H106.557a7.904 7.904 0 0 0 0 15.808h280.498a7.904 7.904 0 0 0 7.904-7.904m0 54.393a7.904 7.904 0 0 0-7.904-7.904H106.557a7.904 7.904 0 0 0 0 15.808h280.498a7.904 7.904 0 0 0 7.904-7.904'
                                                    />
                                                    <path
                                                      fill='#B9C5C6'
                                                      d='m341.333 3.717l112.739 112.739h-88.776c-13.235 0-23.963-10.729-23.963-23.963z'
                                                    />
                                                    <path
                                                      fill='#00B1FF'
                                                      d='M106.207 64.821h84.582a8.128 8.128 0 0 1 8.127 8.127v106.54a8.128 8.128 0 0 1-8.127 8.127h-84.582a8.128 8.128 0 0 1-8.127-8.127V72.948a8.128 8.128 0 0 1 8.127-8.127'
                                                    />
                                                  </svg>
                                                </button>
                                              </span>
                                            </td>
                                            <th
                                              scope='row'
                                              className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                                            >
                                              123000
                                            </th>
                                            <td className='px-6 py-4'>
                                              20/12/2566
                                            </td>
                                            <td className='px-6 py-4'>
                                              <span>
                                                <button>
                                                  <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='24'
                                                    height='24'
                                                    viewBox='0 0 24 24'
                                                  >
                                                    <g fill='none'>
                                                      <path d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
                                                      <path
                                                        fill='currentColor'
                                                        d='M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07A1.01 1.01 0 0 1 4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929zM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m.28-6H9.72l-.333 1h5.226z'
                                                      />
                                                    </g>
                                                  </svg>
                                                </button>
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </Card>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </Modal>

                        {/* <Tooltip placement='top' title='รายละเอียด'>
                          <div
                            className='inline-block p-3 text-gray-500 hover:bg-gray-50 focus:relative'
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
                          </div>
                        </Tooltip> */}
                      </span>
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

export default TourBusinessRevocationPage;
