import React, { useState, useEffect } from 'react';
import {
  Form,
  Input as AntInput,
  Button,
  Steps,
  Card,
  Col,
  Row,
  Checkbox,
  Radio,
  DatePicker,
  Space,
  Tag,
  Upload,
  Typography,
  Select,
  Skeleton,
} from 'antd';
import { Modal } from 'antd';
import HeaderTwo from '@/pages/population/home/headertwo';

import {
  MailOutlined,
  MobileOutlined,
  PhoneOutlined,
  GlobalOutlined,
  EditOutlined,
  FileTextOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { CaretRightOutlined } from '@ant-design/icons';

const Input = (props) => <AntInput {...props} size='large' />;

//import { ConfigProvider } from 'antd';
const { Text, Title } = Typography;

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

  ///////////////////////////////
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // You can also add form submit logic here
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
    <HeaderTwo />
{/*     <div className='bg-blue-900 mt-24 sm:h-auto md:h-[70px] flex items-center justify-center '>
 */}
      <div className='mx-auto max-w-screen-2xl p-4 pt-32 sm:h-auto md:h-[70px] '>
        <Row gutter={16}>
          <Col span={18} push={6}>
            <Card
              className='p-2 rounded-2xl text-body'
              title={<p className='text-xl '>รายการยื่นคำขอ</p>}
            >
              <div className='overflow-x-auto rounded-xl'>
                <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
                  <thead className='ltr:text-left rtl:text-right bg-gray-50'>
                    <tr>
                      <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-700'>
                        เลขที่คำขอ
                      </th>
                      <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-700'>
                        ประเภท
                      </th>
                      <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-700'>
                        วันที่ยื่นคำขอ
                      </th>
                      <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-700'>
                        ชื่อผู้ยื่นคำขอ
                      </th>
                      <th className='px-4 py-2'></th>
                    </tr>
                  </thead>

                  <tbody className='divide-y divide-gray-200'>
                    <tr>
                      <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                        10000
                      </td>
                      <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                        ยื่นคำขอเปลี่ยนแปลงรายการสถานะมัคคุเทศก์
                      </td>
                      <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                        1/11/2566
                      </td>
                      <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                        นายรักไทย
                      </td>
                      <td className='whitespace-nowrap px-4 py-2'>
                        <button type='button'>
                          <span class='rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-600'>
                            {' '}
                            พิมพ์ใบเสร็จ{' '}
                          </span>
                        </button>
                        <button type='button'>
                          <span class='rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-600'>
                            {' '}
                            ติดตามสถานะ{' '}
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <Card
              className='p-0 rounded-2xl text-body'
              style={{
                marginTop: 12,
              }}
            >
              <div>
                <ul className='flex items-center gap-2 text-xl font-medium'>
                  <li>
                    <button
                      className={`relative inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 ${
                        activeTab === 0
                          ? 'bg-primary-100 text-primary-700'
                          : 'hover:bg-primary-50 hover:text-primary-700'
                      }`}
                      onClick={() => setActiveTab(0)}
                    >
                      <FileTextOutlined />
                      <h2 className='text-lg font-medium text-gray-600'>
                        ข้อมูลใบอนุญาต
                      </h2>
                    </button>
                  </li>
                  <li>
                    <button
                      className={`relative inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 ${
                        activeTab === 1
                          ? 'bg-primary-100 text-primary-700'
                          : 'hover:bg-primary-50 hover:text-primary-700'
                      }`}
                      onClick={() => setActiveTab(1)}
                    >
                      <UserOutlined />
                      <h2 className='text-lg font-medium text-gray-600'>
                        ข้อมูลส่วนตัว
                      </h2>
                    </button>
                  </li>
                </ul>
              </div>
            </Card>

            <div className='py-3'>
              {activeTab === 0 && (
                <div>
                  <Card className='p-2 rounded-2xl text-body'>
                    ข้อมูลใบอนุญาต
                  </Card>
                </div>
              )}

              {activeTab === 1 && (
                <Card className='p-0 rounded-2xl text-body'>
                  <div className='space-y-4'>
                    <details className='group [&_summary::-webkit-details-marker]:hidden'>
                      <summary className='flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900'>
                        <h2 className='font-medium'>รายละเอียด</h2>

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
                          <div className='flow-root'>
                            <div className='-my-3 divide-y divide-gray-100 text-sm'>
                              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                <div className='font-medium text-gray-900'>
                                  ชื่อ-นามสกุล (TH) :
                                  <span className='text-gray-600 pl-4'>
                                    xxx
                                  </span>
                                </div>
                              </div>

                              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                <div className='font-medium text-gray-900'>
                                  ชื่อ-นามสกุล (EN) :
                                  <span className='text-gray-600 pl-4'>
                                    xxx
                                  </span>
                                </div>
                              </div>

                              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                <div className='font-medium text-gray-900'>
                                  วันเดือนปีเกิด :
                                  <span className='text-gray-600 pl-4'>
                                    xxx
                                  </span>
                                </div>
                              </div>
                              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                                <div className='font-medium text-gray-900'>
                                  อายุ :
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
                      <summary className='flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900'>
                        <h2 className='font-medium'>ที่อยู่ตามทะเบียนบ้าน</h2>

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
                          <div className='flow-root '>
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
                      <summary className='flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900'>
                        <h2 className='font-medium'>
                          ที่อยู่ปัจจุบันที่สามารถติดต่อได้
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
                          <div className='flow-root'>
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
              )}
              {/* ... other tab contents ... */}
            </div>
          </Col>

          <Col span={6} pull={18}>
            <div className='bg-white rounded-2xl  '>
              <span className='relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 h-full '>
                {/* รายละเอียดและเนื้อหาอื่นๆ */}
                <span className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'></span>
                <div>
                  <div className='flex justify-center items-center mb-4'>
                    <img
                      alt='Paul Clapton'
                      src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
                      className='h-20 w-20 rounded-lg object-cover shadow-sm'
                    />
                  </div>
                  <div className='text-center text-title'>
                    <h3 className='text-sm font-bold text-gray-900 sm:text-xl'>
                      นายรักไทย เกิดเมืองไทย{' '}
                    </h3>
                  </div>
                </div>
                <hr className='p-3' style={{ marginTop: 24 }}></hr>
                <Text className='text-title-profile' type='secondary'>
                  ความสามารถภาษาต่างประเทศ
                </Text>
                <div className='p-3 text-body-profile'>
                  <Tag color='geekblue'>จีน</Tag>
                  <Tag color='geekblue'>อังกฤษ</Tag>
                </div>

                <hr className='p-3 ' style={{ marginTop: 16 }}></hr>
                <Text className='text-title-profile' type='secondary'>
                  ความสนใจ
                </Text>
                <div className='p-3 text-body-profile'>
                  {/*  <Tag color='geekblue'>จีน</Tag>
                <Tag color='geekblue'>อังกฤษ</Tag> */}
                </div>

                <hr className='p-3' style={{ marginTop: 16 }}></hr>
                <div className='flex justify-between items-center'>
                  <Text className='text-title-profile' type='secondary'>
                    ข้อมูลติดต่อ
                  </Text>
                  <div className='flex items-center text-title-profile'>
                    <span
                      className='ml-2'
                      style={{ color: '#9ca3af', cursor: 'pointer' }}
                      onClick={showModal}
                    >
                      <EditOutlined /> แก้ไข
                    </span>
                  </div>
                </div>

                <div>
                  <Modal
                    className='text-body-profile'
                    title='แก้ไขข้อมูลติดต่อ'
                    open={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                      <Button key='back' onClick={handleCancel}>
                        ยกเลิก
                      </Button>,
                      <Button key='submit' onClick={handleOk}>
                        ตกลง
                      </Button>,
                    ]}
                  >
                    <Form name='contactInfo' layout='vertical'>
                      <Form.Item
                        name='อีเมล'
                        label='อีเมล'
                        rules={[{ required: true, message: 'โปรดกรอกข้อมูล' }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name='โทรศัพท์สำนักงาน'
                        label='โทรศัพท์สำนักงาน'
                        rules={[
                          {
                            required: true,
                            message: 'โปรดกรอกข้อมูล',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name='โทรศัพท์มือถือ'
                        label='โทรศัพท์มือถือ'
                        rules={[
                          {
                            required: true,
                            message: 'โปรดกรอกข้อมูล',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name='เว็บไซต์'
                        label='เว็บไซต์'
                        rules={[
                          {
                            required: true,
                            message: 'โปรดกรอกข้อมูล',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Form>
                  </Modal>
                </div>
                <div className='p-3 text-body'>
                  <Text>
                    <MailOutlined
                      className='pr-3'
                      style={{ color: '#9ca3af' }}
                    />{' '}
                    email
                  </Text>
                  <br />
                  <Text>
                    <PhoneOutlined
                      className='pr-3'
                      style={{ color: '#9ca3af' }}
                    />{' '}
                    โทรศัพท์สำนักงาน
                  </Text>
                  <br />
                  <Text>
                    <MobileOutlined
                      className='pr-3'
                      style={{ color: '#9ca3af' }}
                    />{' '}
                    โทรศัพท์มือถือ
                  </Text>
                  <br />
                  <Text>
                    <GlobalOutlined
                      className='pr-3'
                      style={{ color: '#9ca3af' }}
                    />{' '}
                    เว็บไซต์
                  </Text>
                </div>
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Profile;
