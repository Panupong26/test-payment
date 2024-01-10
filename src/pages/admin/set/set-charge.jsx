import React, { useState } from 'react';
import {
  Card,
  Tag,
  Typography,
  Alert,
  Radio,
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input as AntInput,
  Row,
  Select,
  Space,
} from 'antd';
import moment from 'moment';
import 'moment/locale/th';

moment.locale('th');

const formatDate = (value) => {
  if (value) {
    const thaiYear = value.year() + 543;
    return value.clone().year(thaiYear).format('DD/MM/YYYY');
  }
};
const Input = (props) => <AntInput {...props} size='large' />;

//const Input = (props) => <AntInput {...props} size='large' />;

const SetChargePage = () => {
  /* /////////////////////// Drawer ////////////////////////*/
  const [opentimeline, setOpentimeline] = useState(false);
  const showDrawertimeline = () => {
    setOpentimeline(true);
  };
  const onClosetimeline = () => {
    setOpentimeline(false);
  };

  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  /* /////////////////////// license table ////////////////////////*/
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const data = Array.from({ length: 1 }, (_, index) => ({
    id: index + 1,
    name: 'ค่าธรรมเนียมใบอนุญาตเป็นมัคคุเทศก์',
    name2: '200',
    date: '1/10/2566',
    date2: (
      <span className='inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-sm font-semibold text-yellow-600'>
        ใช้งาน
      </span>
    ),
    type: index % 2 === 0 ? 'ทั่วไป' : 'นำเที่ยวจากต่างประเทศ',
    state: 'จนกว่าจะมีประกาศเปลี่ยนแปลง    ',
  }));

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const [isDatePickerDisabled, setIsDatePickerDisabled] = useState(false);

  const handleRadioChange = (e) => {
    setIsDatePickerDisabled(e.target.value === 'untilAnnounced');
  };

  return (
    <div>
      <Card className='rounded-2xl'>
        <div className='flex items-center justify-between '>
          <div className='text-th'>
            <h4 className='font-bold text-blue-900'>กำหนดค่าธรรมเนียม</h4>
          </div>
          <div className='text-body-page'>
            <button
              onClick={showDrawer}
              type='button'
              className='rounded-full border border-primary-600 bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
            >
              <p className='font-bold'>เพิ่มค่าธรรมเนียม</p>
            </button>
          </div>
        </div>
      </Card>
      <Drawer
        className='text-body-page'
        title='เพิ่มค่าธรรมเนียม'
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
                onClick={''}
              >
                ตกลง
              </button>
            </div>
          </div>
        }
      >
        <Form layout='vertical' hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name='name'
                label='ประเภท'
                rules={[
                  {
                    required: true,
                    message: 'โปรดระบุข้อมูล',
                  },
                ]}
              >
                <Input placeholder='โปรดระบุข้อมูล' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name='name'
                label='จำนวนเงิน'
                rules={[
                  {
                    required: true,
                    message: 'โปรดระบุข้อมูล',
                  },
                ]}
              >
                <Input placeholder='โปรดระบุข้อมูล' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name='type'
                label='สถานะ'
                rules={[
                  {
                    required: true,
                    message: 'โปรดกรอกข้อมูล',
                  },
                ]}
              >
                <Select size='large' placeholder='สถานะการใช้งาน'>
                  <Option className='text-body-page' value='private'>
                    <p className='pl-2'> ใช้งาน</p>
                  </Option>
                  <Option className='text-body-page' value='public'>
                    <p className='pl-2'> ไม่ใช้งาน</p>
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name='dateTime'
                label='วันเดือนปี'
                rules={[
                  {
                    required: true,
                    message: 'Please choose the dateTime',
                  },
                ]}
              >
                <DatePicker
                format={formatDate}
                locale={moment().locale('th')}
                  size='large'
                  style={{
                    width: '100%',
                  }}
                  onChange={onChange}
                  placeholder='วันที่เริ่มใช้'
                />
                <div>
                  <Radio.Group onChange={handleRadioChange}>
                    <Radio value='untilAnnounced' className='mt-4'>
                      จนกว่าจะมีประกาศเปลี่ยนแปลง
                    </Radio>
                    <Radio value='specificDate'>เลือกวันที่สิ้นสุด</Radio>
                  </Radio.Group>
                  <DatePicker
                  format={formatDate}
                  locale={moment().locale('th')}
                    size='large'
                    style={{
                      width: '100%',
                      marginTop: '10px',
                    }}
                    onChange={onChange}
                    placeholder='วันที่สิ้นสุด'
                    disabled={isDatePickerDisabled} // ใช้สถานะเพื่อกำหนดค่า disabled
                  />
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
      <Card className='rounded-2xl mt-4'>
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
                <th className='px-6 py-4 font-bold text-gray-900'>ลำดับ</th>
                <th className='px-6 py-4 font-bold text-gray-900'>
                  รายการค่าธรรมเนียม
                </th>
                <th className='px-6 py-4 font-bold text-gray-900'>จำนวนเงิน</th>
                <th className='px-6 py-4 font-bold text-gray-900'>สถานะ</th>
                <th className='px-6 py-4 font-bold text-gray-900'>
                  วันที่เริ่มใช้
                </th>
                <th className='px-6 py-4 font-bold text-gray-900'>
                  วันที่สิ้นสุด
                </th>
                <th className='px-6 py-4 font-bold text-gray-900'></th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
              {currentItems.map((item) => (
                <tr key={item.id} className='hover:bg-gray-50 font-light'>
                  <td className='px-6 py-4'>{item.id}</td>
                  <td className='px-6 py-4'>{item.name}</td>
                  <td className='px-6 py-4'>{item.name2}</td>
                  <td className='px-6 py-4'>{item.date2}</td>
                  <td className='px-6 py-4'>{item.date}</td>
                  <td className='px-6 py-4'>{item.state}</td>
                  <td className='px-6 py-4'>
                    <span className='inline-flex overflow-hidden rounded-xl border bg-white shadow-sm'>
                      <div
                        className='inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative'
                        title='Edit Charge'
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
                            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                          />
                        </svg>
                      </div>

                      <button
                        onClick={showDrawertimeline}
                        className='inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative'
                        title='View Charge'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='18'
                          height='18'
                          viewBox='0 0 48 48'
                        >
                          <g
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeWidth='3'
                          >
                            <path d='M24 36c11.046 0 20-12 20-12s-8.954-12-20-12S4 24 4 24s8.954 12 20 12Z' />
                            <path d='M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z' />
                          </g>
                        </svg>
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Drawer
          className='text-body-page'
          title='ประวัติการเปลี่ยนแปลงค่าธรรมเนียม'
          placement='right'
          onClose={onClosetimeline}
          open={opentimeline}
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
                  เพิ่มค่าธรรมเนียม
                </h3>
                <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
                  ใบอนุญาตเป็นมัคคุเทศก์
                </p>
                <button
                  type='button'
                  className='mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                >
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    โดย
                  </p>
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
                  แก้ไขค่าธรรมเนียม
                </h3>
                <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
                  ใบอนุญาตเป็นมัคคุเทศก์
                </p>
                <button
                  type='button'
                  className='mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                >
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    โดย
                  </p>
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
          </div>
        </Drawer>
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
      </Card>
    </div>
  );
};

export default SetChargePage;
