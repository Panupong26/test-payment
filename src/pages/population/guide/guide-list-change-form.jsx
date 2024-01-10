import React, { useState } from 'react';
import {
  Form,
  Input as AntInput,
  Button,
  Steps,
  Card,
  message,
  Col,
  Row,
  Checkbox,
  Radio,
  DatePicker,
  Tag,
  Select,
  Space,
  Modal,
  Spin,
} from 'antd';
import { Link } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import th_TH from 'antd/es/locale/th_TH';



import { EditTwoTone, SearchOutlined } from '@ant-design/icons';
import Warning from '@/assets/images/icon/warning.png';
import Success from '@/assets/images/icon/success.png';
import Success2 from '@/assets/images/icon/success2.png';

import Tourleaderrequest from '@/assets/images/icon/tourleaderrequest.png';
import Payin from '@/assets/images/icon/payin.jpeg';

import moment from 'moment';
import 'moment/locale/th';

moment.locale('th');
const { Step } = Steps;

const Input = (props) => <AntInput {...props} size='large' />;

const GuideFormListChangePage = () => {
  const [form] = Form.useForm();

  const [current, setCurrent] = useState(0);

  const [activeTab, setActiveTab] = useState(0);

  ////////////////////////////////////////////////////

  const formatDate = (value) => {
    if (value) {
      const thaiYear = value.year() + 543;
      return value.clone().year(thaiYear).format('DD/MM/YYYY');
    }
  };
  ////////////////////////////////////////////////////
  const handleDateChange = (date, dateString) => {
    if (date) {
      const birthYearBE = moment(dateString, 'DD/MM/YYYY').year();

      const currentYearBE = moment().year() + 543; // Convert current Gregorian year to Buddhist year

      const age = currentYearBE - birthYearBE;

      form.setFieldsValue({ age });
    } else {
      form.setFieldsValue({ age: undefined });
    }
  };

  //////////////////////checked//////////////////////
  /*   const checkedonChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  }; */

  //////////////////Form เปลี่ยนแปลงข้อมูล//////////////////////////////////
  const [isCheckedname, setIsCheckedname] = useState(false);
  const [isCheckedtitle, setIsCheckedtitle] = useState(false);
  const [isCheckedaddress, setIsCheckedaddress] = useState(false);
  const [isCheckedcontactaddress, setIsCheckedcontactaddress] = useState(false);

  const handleCheckboxChangeName = (e) => {
    setIsCheckedname(e.target.checked);
  };

  const handleCheckboxChangeTitle = (e) => {
    setIsCheckedtitle(e.target.checked);
  };

  const handleCheckboxChangeAddress = (e) => {
    setIsCheckedaddress(e.target.checked);
  };

  const handleCheckboxChangeContactaddress = (e) => {
    setIsCheckedcontactaddress(e.target.checked);
  };

  ////////////////selected คำนำหน้า/////////////////////////////////////
  const handleChangetitle = (value) => {
    console.log(`selected ${value}`);
  };
  /////////////////////////////////////////////////////

  /*  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }; */

  ///////////////////คัดลอกที่อยู่////////////////////////////////
  const handleCopyAddress = (e) => {
    if (e.target.checked) {
      // When checkbox is checked, copy values from permanent address to contact address
      const values = form.getFieldsValue();
      form.setFieldsValue({
        contact_address_no: values.address_no,
        contact_building: values.building,
        contact_floor: values.floor,
        contact_moo: values.moo,
        contact_soi: values.soi,
        contact_road: values.road,
        contact_zipcode: values.zipcode,
        contact_province_id: values.province_id,
        contact_district_id: values.district_id,
        contact_subdistrict_id: values.subdistrict_id,
      });
    } else {
      form.resetFields([
        'contact_address_no',
        'contact_building',
        'contact_floor',
        'contact_moo',
        'contact_soi',
        'contact_road',
        'contact_zipcode',
        'contact_province_id',
        'contact_district_id',
        'contact_subdistrict_id',
      ]);
    }
  };

  /////////////////language////////////////////////////////////
  const onChangelanguage = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  const [value, setValue] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  const [otherLanguage, setOtherLanguage] = useState('');

  const onChangelanguageeng = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const onChangelanguagechina = (e) => {
    console.log('radio checked', e.target.value);
    setValue2(e.target.value);
  };

  const onChangelanguageother = (e) => {
    console.log('radio checked', e.target.value);
    setValue3(e.target.value);
  };

  const onOtherLanguageChange = (e) => {
    setOtherLanguage(e.target.value);
  };
  /////////////////////////////////////////////////////
  //////////////////แก้ไขที่อยู่จัดส่งของคุณ/////////////////////
  const [isEditable, setIsEditable] = useState(false);

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  /////////////////////////////////////////////////////
/* 
Modal
*/

const [showModal, setShowModal] = useState(false);
const [isLoading, setIsLoading] = useState(false);

const handleButtonClick = () => {
  setIsLoading(true);

  // Simulate an async action, e.g., fetching data
  setTimeout(() => {
    setShowModal(true);
    setIsLoading(false);
  }, 2000); // Adjust the timeout duration as needed
};
  //////////////////////ยอมรับเอกสาร///////////////////////////////////////
  const [isCheckedacceptdata, setIsCheckedacceptdata] = useState(false);

  const handleCheckboxChangeacceptdata = (e) => {
    // e.target.checked จะเป็น true หาก checkbox ถูกเลือก, และ false ถ้าไม่ได้เลือก
    setIsCheckedacceptdata(e.target.checked);
  };

  /////////////////////////////////////////////////////

  const steps = [
    {
      title: 'กรอกข้อมูล',
      description: 'ข้อมูลของท่าน',
      content: (
        <div>
          <Card className='my-custom-card-body rounded-2xl'>
            <Row gutter={16}>
              <Col xs={24} sm={12} md={12}>
                <h4 className='font-bold p-2 lg:text-xl text-2xl text-slate-900 inline-block ltr:pr-4 '>
                  กรอกข้อมูล
                </h4>{' '}
              </Col>
              <Col xs={24} sm={12} md={12}>
                <div className='flex flex-wrap justify-end gap-3'>
                  <button
                    onClick={() => setCurrent(current + 1)}
                    style={{ width: '100px', height: '38px' }}
                    type='button'
                    /*  disabled={!isNextButtonEnabled} */
                    className='rounded-lg border border-primary-500 bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                  >
                    ถัดไป
                  </button>
                </div>
              </Col>
            </Row>
          </Card>

          <Card className=' rounded-2xl mt-4 h-full'>
            <Row gutter={16}>
              <Col xs={24} sm={12} md={24}>
                <Button
                  name='searchdata'
                  type='dashed'
                  icon={<SearchOutlined />}
                  onClick={handleButtonClick}
                  danger
                  className='w-full mb-4'
                >
                  เลือกใบอนุญาตที่ต้องการเปลี่ยนแปลง
                  {isLoading && (
                    <div className='flex justify-center'>
                      <Spin size='large' />
                    </div>
                  )}
                </Button>
              </Col>
           
            </Row>
            <div >
              {showModal && (
                <>
                  <div className='fixed inset-0 z-10 bg-secondary-700/50'></div>
                  <div className='fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0'>
                    <div className='mx-auto overflow-hidden rounded-lg bg-white shadow-xl sm:w-full sm:max-w-xl'>
                      <div className='relative p-6'>
                        <div className='flex gap-4'>
                          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-500'>
                            {/* SVG Icon */}
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='h-6 w-6'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12'
                              />
                            </svg>
                          </div>
                          <div className='flex-1'>
                            <h3 className='text-lg font-medium text-secondary-900'>
                              เลือกใบอนุญาต
                            </h3>
                            <div className='mt-2 text-sm text-secondary-500'>
                              โปรดเลือกใบอนุญาตที่ต้องเปลี่ยนแปลงรายการ
                            </div>
                          </div>
                        </div>
                        <div className='mt-6 flex justify-end gap-3'>
                          <button
                            type='button'
                            onClick={() => setShowModal(false)}
                            className='rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
                          >
                            ยกเลิก
                          </button>
                          <button
                            type='button'
                            className='rounded-lg border border-primary-500 bg-primary-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                          >
                            ตกลง
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className='hidden sm:block overflow-auto rounded-xl border border-gray-100 bg-gray-100 p-2'>
              <ul className='flex items-center gap-2 text-sm font-medium whitespace-nowrap'>
                <li>
                  <a
                    onClick={() => setActiveTab(0)}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-white hover:text-gray-700 hover:shadow ${
                      activeTab === 0 ? 'bg-white shadow text-gray-900' : ''
                    }`}
                  >
                    ข้อมูลใบอนุญาต
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setActiveTab(1)}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-white hover:text-gray-700 hover:shadow ${
                      activeTab === 1 ? 'bg-white shadow text-gray-900' : ''
                    }`}
                  >
                    รายละเอียด
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setActiveTab(2)}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-white hover:text-gray-700 hover:shadow ${
                      activeTab === 2 ? 'bg-white shadow text-gray-900' : ''
                    }`}
                  >
                    ความประสงค์ขอเปลี่ยนแปลง
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => setActiveTab(3)}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-white hover:text-gray-700 hover:shadow ${
                      activeTab === 3 ? 'bg-white shadow text-gray-900' : ''
                    }`}
                  >
                    ความสามารถด้านภาษา
                  </a>
                </li>
              </ul>
            </div>

            {/* Dropdown for smaller screens */}
            <div className='sm:hidden'>
              <select
                name='optionlicenstitle'
                className='w-full rounded-md border-gray-200'
                value={activeTab}
                onChange={(e) => setActiveTab(parseInt(e.target.value, 10))}
              >
                <option value={0}>ข้อมูลใบอนุญาต</option>
                <option value={1}>รายละเอียด</option>
                <option value={2}>ที่อยู่ตามทะเบียนบ้าน</option>
                <option value={3}>ความสามารถด้านภาษา</option>
              </select>
            </div>
            <div className='h-150 overflow-y-scroll'>
              <div className='h-auto p-2'>
                <div className='py-3'>
                  <div style={{ display: activeTab === 0 ? 'block' : 'none' }}>
                    <div>
                      <Row gutter={16}>
                        <Col xs={24} sm={12} md={24}>
                          <Space size={[0, 8]} wrap>
                            <Tag color='#87d068'>ประเภทใบอนุญาต</Tag>
                            มัคคุเทศก์เฉพาะภูมิภาคภาคเหนือ
                          </Space>
                        </Col>
                      </Row>
                      <Row
                        gutter={16}
                        style={{
                          marginTop: 16,
                        }}
                      >
                        <Col xs={24} sm={12} md={12}>
                          <Form.Item
                            name='guide_license_no'
                            label='ใบอนุญาตเป็นมัคคุเทศก์เลขที่'
                            rules={[{ required: false }]}
                          >
                            <Input placeholder='' disabled />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12}>
                          <Form.Item
                            name='expired_date'
                            label='ครบกำหนดวันที่'
                            rules={[{ required: false }]}
                          >
                            <Input placeholder='' disabled />
                          </Form.Item>
                        </Col>
                      </Row>
                    </div>
                  </div>

                  <div style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                    <div>
                      <Row gutter={16}>
                        <Col xs={24} sm={12} md={8}>
                          <Form.Item
                            name='title_th'
                            label='คำนำหน้า (TH)'
                            rules={[{ required: false }]}
                          >
                            <Input placeholder='คำนำหน้า (TH)' />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                          <Form.Item
                            name='firstname_th'
                            label='ชื่อ (TH)'
                            rules={[{ required: false }]}
                          >
                            <Input placeholder='ชื่อ (TH)' />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                          <Form.Item
                            name='lastname_th'
                            label='นามสกุล (TH)'
                            rules={[{ required: false }]}
                          >
                            <Input
                              id='lastname_th'
                              placeholder='นามสกุล (TH)'
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col xs={24} sm={12} md={8}>
                          <Form.Item
                            name='title_en'
                            label='คำนำหน้า (EN)'
                            rules={[{ required: false }]}
                          >
                            <Input placeholder='คำนำหน้า (EN)' />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                          <Form.Item
                            name='firstname_en'
                            label='ชื่อ (EN)'
                            rules={[{ required: false }]}
                          >
                            <Input placeholder='ชื่อ (EN)' />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                          <Form.Item
                            name='lastname_en'
                            label='นามสกุล (EN)'
                            rules={[{ required: false }]}
                          >
                            <Input placeholder='นามสกุล (EN)' />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col xs={24} sm={12} md={5}>
                          <ConfigProvider locale={th_TH}>
                            <Form.Item
                              name='birthday'
                              label='วันเดือนปีเกิด'
                              rules={[{ required: false }]}
                            >
                              <DatePicker
                                format={formatDate}
                                locale={moment().locale('th')}
                                size='large'
                                style={{ width: '100%' }}
                                placeholder='วันเดือนปีเกิด'
                                onChange={handleDateChange}
                              />
                            </Form.Item>
                          </ConfigProvider>
                        </Col>
                        <Col xs={24} sm={12} md={3}>
                          <Form.Item
                            name='age'
                            label='อายุ (ปี)'
                            rules={[{ required: false }]}
                          >
                            <Input placeholder='อายุ' readOnly />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                          <Form.Item
                            name='id_card'
                            label='บัตรประจําตัวประชาชนเลขที่'
                            rules={[
                              {
                                required: false,
                              },
                            ]}
                          >
                            <Input placeholder='บัตรประจําตัวประชาชนเลขที่' />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                          <Form.Item
                            name='expiration_date'
                            label='วันที่หมดอายุบัตร'
                            rules={[{ required: false }]}
                          >
                            <DatePicker
                              format={formatDate}
                              locale={moment().locale('th')}
                              size='large'
                              style={{ width: '100%' }}
                              placeholder='วันที่หมดอายุบัตร'
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col xs={24} sm={12} md={8}>
                          <Form.Item
                            name='passport_no'
                            label='หนังสือเดินทางเลขที่'
                            rules={[{ required: false }]}
                          >
                            <Input
                              type='number'
                              placeholder='หนังสือเดินทางเลขที่'
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                          <Form.Item
                            name='telephone'
                            label='เบอร์โทรศัพท์'
                            rules={[{ required: false }]}
                          >
                            <Input type='number' placeholder='เบอร์โทรศัพท์' />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                          <Form.Item
                            name='mobile'
                            label='เบอร์โทรศัพท์มือถือ'
                            rules={[{ required: false }]}
                          >
                            <Input
                              type='number'
                              placeholder='เบอร์โทรศัพท์มือถือ'
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col xs={24} sm={12} md={8}>
                          <Form.Item
                            name='fax'
                            label='โทรสาร'
                            rules={[{ required: false }]}
                          >
                            <Input type='number' placeholder='โทรสาร' />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                          <Form.Item
                            name='email'
                            label='อีเมล'
                            rules={[{ required: false }]}
                          >
                            <Input placeholder='อีเมล' autoComplete='email' />
                          </Form.Item>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>
                    <Row gutter={16}>
                      <Col xs={24} sm={12} md={24}>
                        <div className='bg-blue-50 w-full p-2'>
                          <p>
                            มีความประสงค์ขอเปลี่ยนแปลงรายการสถานะมัคคุเทศก์
                            เนื่องจาก
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row
                      gutter={16}
                      style={{
                        marginTop: 16,
                      }}
                    >
                      <Col xs={24} sm={12} md={24}>
                        <Checkbox
                          name='changename'
                          value='changename'
                          onChange={handleCheckboxChangeName}
                        >
                          {' '}
                          เปลี่ยน (ชื่อ/สกุล)
                        </Checkbox>
                      </Col>
                    </Row>
                    {isCheckedname && (
                      <>
                        <Card>
                          <Tag color='geekblue'>โปรดระบุข้อมูลใหม่</Tag>
                          <Row gutter={16}>
                            <Col xs={24} sm={12} md={12}>
                              <Form.Item
                                name='chagefirstname_th'
                                label='ชื่อ (TH)'
                                rules={[{ required: false }]}
                              >
                                <Input placeholder='ชื่อ (TH)' />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={12}>
                              <Form.Item
                                name='chagelastname_th'
                                label='นามสกุล (TH)'
                                rules={[{ required: false }]}
                              >
                                <Input placeholder='นามสกุล (TH)' />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row gutter={16}>
                            <Col xs={24} sm={12} md={12}>
                              <Form.Item
                                name='chagefirstname_en'
                                label='ชื่อ (EN)'
                                rules={[{ required: false }]}
                              >
                                <Input placeholder='ชื่อ (EN)' />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={12}>
                              <Form.Item
                                name='chagelastname_en'
                                label='นามสกุล (EN)'
                                rules={[{ required: false }]}
                              >
                                <Input placeholder='นามสกุล (EN)' />
                              </Form.Item>
                            </Col>
                          </Row>
                        </Card>
                      </>
                    )}
                    <Row
                      gutter={16}
                      style={{
                        marginTop: 16,
                      }}
                    >
                      <Col xs={24} sm={12} md={24}>
                        <Checkbox
                          name='changtitlename'
                          value='changtitlename'
                          onChange={handleCheckboxChangeTitle}
                        >
                          {' '}
                          เปลี่ยนสถานะ สมรส/หย่าร้าง
                        </Checkbox>
                      </Col>
                    </Row>

                    {isCheckedtitle && (
                      <Card>
                        <Row gutter={16}>
                          <Col xs={24} sm={12} md={5}>
                            <Tag color='geekblue'>โปรดระบุข้อมูลใหม่</Tag>
                          </Col>
                          <Col xs={24} sm={12} md={17}>
                            <Space wrap>
                              <Select
                                id='selecttitle'
                                size='large'
                                defaultValue='นางสาว'
                                style={{
                                  width: 300,
                                }}
                                onChange={handleChangetitle}
                                options={[
                                  {
                                    value: 'นาง',
                                    label: 'นาง',
                                  },
                                  {
                                    value: 'นางสาว',
                                    label: 'นางสาว',
                                  },
                                ]}
                              />
                            </Space>
                          </Col>
                        </Row>
                      </Card>
                    )}

                    <Row
                      gutter={16}
                      style={{
                        marginTop: 16,
                      }}
                    >
                      <Col xs={24} sm={12} md={24}>
                        <Checkbox
                          name='changaddress'
                          value='changaddress'
                          onChange={handleCheckboxChangeAddress}
                        >
                          เปลี่ยนที่อยู่ตามทะเบียนบ้าน
                        </Checkbox>
                      </Col>
                    </Row>
                    {isCheckedaddress && (
                      <Card>
                        <Tag color='geekblue'>โปรดระบุข้อมูลใหม่</Tag>
                        <Row
                          gutter={16}
                          style={{
                            marginTop: 16,
                          }}
                        >
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='address_no'
                              label='บ้านเลขที่'
                              rules={[{ required: false }]}
                            >
                              <Input placeholder='บ้านเลขที่' />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='building'
                              label='อาคาร'
                              rules={[{ required: false }]}
                            >
                              <Input placeholder='อาคาร' />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='floor'
                              label='ชั้น'
                              rules={[{ required: false }]}
                            >
                              <Input placeholder='ชั้น' />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row gutter={16}>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='moo'
                              label='หมู่ที่'
                              rules={[{ required: false }]}
                            >
                              <Input type='number' placeholder='หมู่ที่' />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='soi'
                              label='ตรอก/ซอย'
                              rules={[{ required: false }]}
                            >
                              <Input placeholder='ตรอก/ซอย' />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='road'
                              label='ถนน'
                              rules={[{ required: false }]}
                            >
                              <Input placeholder='ถนน' />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row gutter={16}>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='province_id'
                              label='จังหวัด'
                              rules={[{ required: false }]}
                            >
                              <Input type='text' placeholder='จังหวัด' />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='district_id'
                              label='เขต/อำเภอ'
                              rules={[{ required: false }]}
                            >
                              <Input placeholder='เขต/อำเภอ' />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='subdistrict_id'
                              label='แขวง/ตำบล'
                              rules={[{ required: false }]}
                            >
                              <Input placeholder='แขวง/ตำบล' />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={16}>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='zipcode'
                              label='รหัสไปรษณีย์'
                              rules={[{ required: false }]}
                            >
                              <Input type='number' placeholder='รหัสไปรษณีย์' />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Card>
                    )}
                    <Row
                      gutter={16}
                      style={{
                        marginTop: 16,
                      }}
                    >
                      <Col xs={24} sm={12} md={24}>
                        <Checkbox
                          name='changcontactaddress'
                          value='changcontactaddress'
                          onChange={handleCheckboxChangeContactaddress}
                        >
                          เปลี่ยนที่อยู่ปัจจุบันที่สามารถติดต่อได้
                        </Checkbox>
                      </Col>
                    </Row>
                    {isCheckedcontactaddress && (
                      <Card>
                        <Tag color='geekblue'>โปรดระบุข้อมูลใหม่</Tag>
                        <Checkbox
                          name='copyaddress'
                          onChange={handleCopyAddress}
                          value='copyaddress'
                          style={{ marginLeft: 8 }}
                        >
                          คัดลอกจากที่อยู่ตามทะเบียนบ้าน
                        </Checkbox>
                        <Row
                          gutter={16}
                          style={{
                            marginTop: 16,
                          }}
                        >
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='contact_address_no'
                              label='บ้านเลขที่'
                              rules={[{ required: false }]}
                            >
                              <Input placeholder='บ้านเลขที่' />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='contact_building'
                              label='อาคาร'
                              rules={[{ required: false }]}
                            >
                              <Input placeholder='อาคาร' />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='contact_floor'
                              label='ชั้น'
                              rules={[{ required: false }]}
                            >
                              <Input placeholder='ชั้น' />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row gutter={16}>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='contact_moo'
                              label='หมู่ที่'
                              rules={[{ required: false }]}
                            >
                              <Input type='number' placeholder='หมู่ที่' />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='contact_soi'
                              label='ตรอก/ซอย'
                              rules={[{ required: false }]}
                            >
                              <Input placeholder='ตรอก/ซอย' />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='contact_road'
                              label='ถนน'
                              rules={[{ required: false }]}
                            >
                              <Input placeholder='ถนน' />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row gutter={16}>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='contact_province_id'
                              label='จังหวัด'
                              rules={[{ required: false }]}
                            >
                              <Input type='text' placeholder='จังหวัด' />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='contact_district_id'
                              label='เขต/อำเภอ'
                              rules={[{ required: false }]}
                            >
                              <Input placeholder='เขต/อำเภอ' />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='contact_subdistrict_id'
                              label='แขวง/ตำบล'
                              rules={[{ required: false }]}
                            >
                              <Input placeholder='แขวง/ตำบล' />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={16}>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='contact_zipcode'
                              label='รหัสไปรษณีย์'
                              rules={[{ required: false }]}
                            >
                              <Input type='number' placeholder='รหัสไปรษณีย์' />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Card>
                    )}
                  </div>
                </div>
                <div style={{ display: activeTab === 3 ? 'block' : 'none' }}>
                  <div className='text-card-body pl-0'>
                    <Checkbox.Group onChange={onChangelanguage}>
                      <Row>
                        <Col span={6}>
                          <Checkbox
                            id='english'
                            name='language'
                            className='pb-4'
                            value='english'
                          >
                            อังกฤษ
                          </Checkbox>
                        </Col>
                        <Col span={16}>
                          <Radio.Group
                            id='english_level'
                            name='english_level'
                            onChange={onChangelanguageeng}
                            value={value}
                          >
                            <Radio value={1}>ดีมาก</Radio>
                            <Radio value={2}>ดี</Radio>
                            <Radio value={3}>พอใช้</Radio>
                          </Radio.Group>
                        </Col>
                        <Col span={6}>
                          <Checkbox
                            id='china'
                            name='language'
                            className='pb-4'
                            value='china'
                          >
                            จีน
                          </Checkbox>
                        </Col>
                        <Col span={16}>
                          <Radio.Group
                            id='china_level'
                            name='china_level'
                            onChange={onChangelanguagechina}
                            value={value2}
                          >
                            <Radio value={1}>ดีมาก</Radio>
                            <Radio value={2}>ดี</Radio>
                            <Radio value={3}>พอใช้</Radio>
                          </Radio.Group>
                        </Col>
                        <Col span={6}>
                          <Checkbox
                            id='other_language'
                            name='language'
                            value='other'
                          >
                            อื่นๆ
                            <Input
                              name='other'
                              value={otherLanguage}
                              onChange={onOtherLanguageChange}
                              className='ml-4'
                              style={{ width: 120 }}
                              placeholder='ระบุ'
                            />
                          </Checkbox>
                        </Col>

                        <Col span={16}>
                          <Radio.Group
                            id='other_language_level'
                            name='other_language_level'
                            onChange={onChangelanguageother}
                            value={value3}
                          >
                            <Radio value={1}>ดีมาก</Radio>
                            <Radio value={2}>ดี</Radio>
                            <Radio value={3}>พอใช้</Radio>
                          </Radio.Group>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      title: 'อัพโหลดเอกสาร',
      description: 'อัพโหลดเอกสารที่เกี่ยวข้อง',
      content: (
        <div>
          <Card className='my-custom-card-body rounded-2xl'>
            <Row gutter={16}>
              <Col xs={24} sm={12} md={12}>
                <h4 className='font-bold p-2 lg:text-xl text-2xl text-slate-900 inline-block ltr:pr-4 '>
                  เอกสารหลักฐาน
                </h4>{' '}
              </Col>
              <Col xs={24} sm={12} md={12}>
                <div className='flex flex-wrap justify-end gap-3'>
                  <button
                    onClick={() => setCurrent(current - 1)}
                    type='button'
                    style={{ width: '100px', height: '38px' }}
                    className='rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
                  >
                    ย้อนกลับ
                  </button>
                  <button
                    onClick={() => setCurrent(current + 1)}
                    style={{ width: '100px', height: '38px' }}
                    type='button'
                    className='rounded-lg border border-primary-500 bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                  >
                    ถัดไป
                  </button>
                </div>
              </Col>
            </Row>
          </Card>
          <Card
            className='p-2 rounded-2xl'
            style={{
              marginTop: 16,
            }}
          >
            <div>
              <Checkbox
                name='acceptdata'
                className='text-body'
                onChange={handleCheckboxChangeacceptdata}
                checked={isCheckedacceptdata}
              >
                ข้าพเจ้ายินยอมให้เก็บข้อมูลและเอกสารของคุณ
              </Checkbox>
            </div>
            <Row gutter={[16, 8]}>
              <Col xs={24} sm={12} md={24}>
                <Card className='rounded-2xl border border-blue-200 shadow-sm'>
                  <ul
                    role='list'
                    class='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'
                  >
                    <li>รูปถ่าย</li>
                  </ul>
                </Card>
                <Card
                  className='rounded-2xl border border-blue-200 shadow-sm'
                  style={{
                    marginTop: 16,
                  }}
                >
                  <ul
                    role='list'
                    class='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'
                  >
                    <li>สําเนาบัตรประจําตัวประชาชน</li>
                  </ul>
                </Card>
                <Card
                  className='rounded-2xl border border-blue-200 shadow-sm'
                  style={{
                    marginTop: 16,
                  }}
                >
                  <ul
                    role='list'
                    class='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'
                  >
                    <li>สำเนาทะเบียนบ้าน</li>
                  </ul>
                </Card>
                <Card
                  className='rounded-2xl border border-blue-200 shadow-sm'
                  style={{
                    marginTop: 16,
                  }}
                >
                  <ul
                    role='list'
                    class='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'
                  >
                    <li>
                      สำเนาใบเปลียนชื่อ-สกุล ใบสมรส
                      หรือเอกสารสำคัญเปลียนชื่อ-สกุล (ถ้ามี)
                    </li>
                  </ul>
                </Card>
                <Card
                  className='rounded-2xl border border-blue-200 shadow-sm'
                  style={{
                    marginTop: 16,
                  }}
                >
                  <ul
                    role='list'
                    class='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'
                  >
                    <li>
                      สําเนาบัตรประจําตัวมัคคุเทศก์ กรณีบัตรสูญหาย
                      ยื่นหลักฐานใบแจ้งความจากสถานีตํารวจ
                    </li>
                  </ul>
                </Card>

                <Card
                  className='rounded-2xl border border-blue-200 shadow-sm'
                  style={{
                    marginTop: 16,
                  }}
                >
                  <ul
                    role='list'
                    class='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'
                  >
                    <li>
                      ใบรับรองของผู้ประกอบวิชาชีพเวชกรรม (ใบรับรองแพทย์ ไม่เกิน
                      30 วัน
                      ซึ่งรับรองว่าผู้ชอบัตรประจําตัวมัคคุเทศก์ไม่เป็นโรคพิษสุราเรื้อรังหรือติตยาเสพติตให้โทษ
                      หรือเป็นโรคติตต่อที่คณะกรรมการกําหนด
                      และประทับตราของสถานพยาบาล)
                    </li>
                  </ul>
                </Card>
              </Col>
            </Row>
          </Card>
        </div>
      ),
    },
    {
      title: 'ตรวจสอบข้อมูลของท่าน',
      description: 'ตรวจสอบข้อมูลก่อนยื่นคำขอ',
      content: (
        <div>
          <Card className='my-custom-card-body rounded-2xl'>
            <Row gutter={16}>
              <Col xs={24} sm={16} md={16}>
                <h4 className='font-bold p-2 lg:text-xl text-2xl text-slate-900 inline-block ltr:pr-4 '>
                  กรุณาตรวจสอบข้อมูลให้ครบถ้วน
                </h4>{' '}
              </Col>
              <Col xs={24} sm={8} md={8}>
                <div className='flex flex-wrap justify-end gap-3'>
                  <button
                    onClick={() => setCurrent(current - 1)}
                    type='button'
                    style={{ width: '100px', height: '38px' }}
                    className='rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
                  >
                    ย้อนกลับ
                  </button>
                  <button
                    onClick={() => setCurrent(current + 1)}
                    style={{ width: '100px', height: '38px' }}
                    type='button'
                    className='rounded-lg border border-primary-500 bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                  >
                    ถัดไป
                  </button>
                </div>
              </Col>
            </Row>
          </Card>

          <Card
            className='p-2 rounded-2xl'
            style={{
              marginTop: 16,
            }}
          >
            <Row gutter={16}>
              <Checkbox
                className='text-body'
                value='acceptfinaldata'
                //onChange={handleCopyAddress}
                style={{ marginTop: 4 }}
              >
                ข้าพเจ้ายืนยันว่าข้อมูลถูกต้องครบถ้วน
              </Checkbox>
            </Row>
            <br />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Row gutter={16}>
                <Col xs={24} sm={12} md={24}>
                  <p>
                    <img
                      src={Tourleaderrequest}
                      alt='Tourleaderrequest'
                      style={{ width: '600px', height: '810px' }}
                    />
                  </p>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
      ),
    },
    {
      title: 'เจ้าหน้าที่ตรวจสอบ',
      description: 'เจ้าหน้าที่ตรวจสอบข้อมูล',
      content: (
        <div>
          <Card className='my-custom-card-body rounded-2xl'>
            <Row gutter={16}>
              <Col xs={24} sm={12} md={12}>
                <h4 className='font-bold p-2 lg:text-xl text-2xl text-slate-900 inline-block ltr:pr-4 '>
                  เจ้าหน้าที่ตรวจสอบข้อมูล
                </h4>{' '}
              </Col>
              <Col xs={24} sm={12} md={12}>
                <div className='flex flex-wrap justify-end gap-3'>
                  <button
                    onClick={() => setCurrent(current - 1)}
                    type='button'
                    style={{ width: '100px', height: '38px' }}
                    className='rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
                  >
                    ย้อนกลับ
                  </button>
                  <button
                    onClick={() => setCurrent(current + 1)}
                    style={{ width: '100px', height: '38px' }}
                    type='button'
                    className='rounded-lg border border-primary-500 bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                  >
                    ถัดไป
                  </button>

                  <button
                    onClick={() => console.log('Submit!')}
                    style={{ width: '150px', height: '38px' }}
                    type='button'
                    className='rounded-lg border border-transparent bg-transparent px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-none transition-all hover:bg-gray-100 disabled:bg-transparent disabled:text-gray-400'
                  >
                    พิมพ์ใบรับคำขอ
                  </button>
                </div>
              </Col>
            </Row>
          </Card>

          <Card
            className='p-2 rounded-2xl'
            style={{
              height: 470,
              marginTop: 16,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Row gutter={16}>
                <Col xs={24} sm={12} md={24}>
                  <p>
                    <img
                      src={Warning}
                      alt='Status'
                      style={{ width: '80px', height: '80px' }}
                    />
                  </p>
                  {/* <p>
                      <img
                        src={Success}
                        alt='8'
                        style={{ width: '70px', height: '70px' }}
                      />
                    </p> */}
                  {/* แทรกไอคอนอื่นๆ ตามที่ต้องการ */}
                </Col>
              </Row>
            </div>
            <br />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <dl className='grid sm:grid-cols-3 gap-1 sm:gap-2'>
                <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                  สถานะ :
                </dt>
                <dd className='col-start-2 col-span-2 text-blue-800'>
                  รอเจ้าหน้าที่รับเรื่อง
                </dd>

                <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                  วันที่ยื่นคำขอ :
                </dt>
                <dd className='col-start-2 col-span-2'>16 ตุลาคม 2566</dd>

                <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                  สถานที่ :
                </dt>
                <dd className='col-start-2 col-span-2'>สำนักงานสาขากรุงเทพ</dd>

                <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                  ที่อยู่ :
                </dt>
                <dd className='col-start-2 col-span-2'>
                  อาคารรัฐประศาสนภักดี (อาคาร B) ศูนย์ราชการฯ แจ้งวัฒนะ
                </dd>
              </dl>
            </div>
          </Card>
        </div>
      ),
    },
    {
      title: 'ช่องทางการรับใบอนุญาต',
      description: 'เลือกสถานที่รับใบอนุญาต',
      content: (
        <div>
          <Card className='my-custom-card-body rounded-2xl'>
            <Row gutter={16}>
              <Col xs={24} sm={12} md={12}>
                <h4 className='font-bold p-2 lg:text-xl text-2xl text-slate-900 inline-block ltr:pr-4 '>
                  รับเอกสารใบอนุญาต
                </h4>{' '}
              </Col>
              <Col xs={24} sm={12} md={12}>
                <div className='flex flex-wrap justify-end gap-3'>
                  <button
                    onClick={() => setCurrent(current - 1)}
                    type='button'
                    style={{ width: '100px', height: '38px' }}
                    className='rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
                  >
                    ย้อนกลับ
                  </button>
                  <button
                    onClick={() => setCurrent(current + 1)}
                    style={{ width: '100px', height: '38px' }}
                    type='button'
                    className='rounded-lg border border-primary-500 bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                  >
                    ถัดไป
                  </button>
                </div>
              </Col>
            </Row>
          </Card>

          <Card
            className='p-2 rounded-2xl'
            style={{
              height: 470,
              marginTop: 16,
            }}
          >
            <fieldset className='grid grid-cols-1 gap-4'>
              <legend className='sr-only'>Delivery</legend>

              <div>
                <Input
                  type='radio'
                  name='DeliveryOption'
                  value='DeliveryStandard'
                  id='DeliveryStandard'
                  className='text-body peer hidden [&:checked_+_label_svg]:block'
                  checked
                />

                <label
                  htmlFor='DeliveryStandard'
                  className='block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
                >
                  <div className='text-body flex items-center justify-between'>
                    <p className='text-blue-900'>
                      ชำระเงินออนไลน์จัดส่งเอกสารผ่านไปรษณีย์
                    </p>

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
                  </div>
                  <hr
                    style={{
                      margin: 6,
                    }}
                  />
                  <p className='text-body mt-1 text-gray-900'>
                    ค่าจัดส่ง 50 บาท
                  </p>
                  <br />

                  <div className='flex justify-between items-center'>
                    <p className='text-body mt-1 text-gray-900'>
                      ที่อยู่จัดส่งของคุณ
                    </p>
                    <EditTwoTone
                      onClick={toggleEdit}
                      className='text-xl cursor-pointer'
                    />{' '}
                    {/* Make sure to add cursor-pointer to indicate it's clickable */}
                  </div>
                  <form>
                    <div className='relative z-0 w-full mb-6 group'>
                      <Input
                        name='floating_email'
                        id='floating_email'
                        className='text-body block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-200 focus:outline-none focus:ring-0 focus:border-blue-300 peer'
                        placeholder=' '
                        readOnly={!isEditable}
                      />
                    </div>
                  </form>
                </label>
              </div>

              <div>
                <Input
                  type='radio'
                  name='DeliveryOption'
                  value='DeliveryPriority'
                  id='DeliveryPriority'
                  className='text-body peer hidden [&:checked_+_label_svg]:block'
                />

                <label
                  htmlFor='DeliveryPriority'
                  className='block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
                >
                  <div className='text-body flex items-center justify-between'>
                    <p className='text-blue-900'>
                      รับเอกสารใบอนุญาตที่กรมการท่องเที่ยว
                    </p>

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
                  </div>

                  <p className='text-body mt-1 text-gray-900'>
                    สำนักงานสาขากรุงเทพ
                  </p>
                </label>
              </div>
            </fieldset>
          </Card>
        </div>
      ),
    },
    {
      title: 'สรุปรายการ',
      description: 'สรุปรายการคำขอและชำระค่าบริการ',
      content: (
        <div>
          <Card className='my-custom-card-body rounded-2xl'>
            <Row gutter={16}>
              <Col xs={24} sm={12} md={12}>
                <h4 className='font-bold p-2 lg:text-xl text-2xl text-slate-900 inline-block ltr:pr-4 '>
                  สรุปรายการยื่นคำขอใบอนุญาตเป็นมัคคุเทศก์
                </h4>{' '}
              </Col>
              <Col xs={24} sm={12} md={12}>
                <div className='flex flex-wrap justify-end gap-3'>
                  <button
                    onClick={() => setCurrent(current - 1)}
                    type='button'
                    style={{ width: '100px', height: '38px' }}
                    className='rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
                  >
                    ย้อนกลับ
                  </button>
                  <button
                    onClick={() => setCurrent(current + 1)}
                    style={{ width: '100px', height: '38px' }}
                    type='button'
                    className='rounded-lg border border-primary-500 bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                  >
                    ถัดไป
                  </button>
                </div>
              </Col>
            </Row>
          </Card>
          <Card
            className='p-2 rounded-2xl'
            style={{
              height: 470,
              marginTop: 16,
            }}
          >
            <div
              style={{
                /*  display: 'flex', */
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Row gutter={16}>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <span className='flex justify-center'>
                    <img
                      src={Success2}
                      alt='Success'
                      style={{ width: '440px', height: '250px' }}
                    />
                  </span>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <div class='flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'>
                    <div>
                      <dl className='grid sm:grid-cols-3 gap-1 sm:gap-2'>
                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          สถานะ :
                        </dt>
                        <dd className='col-start-2 col-span-2 text-blue-800'>
                          รอชำระค่าบริการ
                        </dd>
                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          ประเภท :
                        </dt>
                        <dd className='col-start-2 col-span-2'>
                          คำขอใบอนุญาตเป็นมัคคุเทศก์
                        </dd>
                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          เลขที่คำขอ :
                        </dt>
                        <dd className='col-start-2 col-span-2'>12345</dd>
                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          วันที่ยื่นคำขอ :
                        </dt>
                        <dd className='col-start-2 col-span-2'>
                          18 ตุลาคม 2566
                        </dd>

                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          สถานที่รับใบอนุญาต :
                        </dt>
                        <dd className='col-start-2 col-span-2'>
                          191/2 ซอยพหลโยธิน 46 แขวงลาดยาว เขตจตุจักร กทม. 10900
                        </dd>

                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          ค่าธรรมเนียม :
                        </dt>
                        <dd className='col-start-2 col-span-2'>
                          - ไม่มีค่าธรรมเนียม-
                        </dd>
                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          ค่าจัดส่ง :
                        </dt>
                        <dd className='col-start-2 col-span-2'>50 บาท</dd>
                      </dl>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
      ),
    },
    {
      title: 'ชำระเงินค่าบริการ',
      description: 'ชำระเงินค่าบริการขอใบอนุญาต',
      content: (
        <div>
          <Card className='my-custom-card-body rounded-2xl'>
            <Row gutter={16}>
              <Col xs={24} sm={12} md={12}>
                <h4 className='font-bold p-2 lg:text-xl text-2xl text-slate-900 inline-block ltr:pr-4 '>
                  ชำระค่าบริการ
                </h4>{' '}
              </Col>
              <Col xs={24} sm={12} md={12}>
                <div className='flex flex-wrap justify-end gap-3'>
                  <button
                    onClick={() => setCurrent(current - 1)}
                    type='button'
                    style={{ width: '100px', height: '38px' }}
                    className='rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
                  >
                    ย้อนกลับ
                  </button>
                  <button
                    onClick={() => setCurrent(current + 1)}
                    style={{ width: '100px', height: '38px' }}
                    type='button'
                    className='rounded-lg border border-primary-500 bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                  >
                    ถัดไป
                  </button>
                </div>
              </Col>
            </Row>
          </Card>

          <Card
            className='p-2 rounded-2xl'
            style={{
              height: 470,
              marginTop: 16,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Row gutter={16}>
                <Col xs={24} sm={12} md={24}>
                  <p>
                    <img
                      src={Payin}
                      alt='Payin'
                      style={{ width: '260px', height: '380px' }}
                    />
                  </p>
                  {/* <p>
                      <img
                        src={Success}
                        alt='8'
                        style={{ width: '70px', height: '70px' }}
                      />
                    </p> */}
                  {/* แทรกไอคอนอื่นๆ ตามที่ต้องการ */}
                </Col>
              </Row>
            </div>
          </Card>
        </div>
      ),
    },
    {
      title: 'จบกระบวนการ',
      description: '',
      content: (
        <div>
          <Card className='my-custom-card-body rounded-2xl'>
            <Row gutter={16}>
              <Col xs={24} sm={12} md={12}>
                <h4 className='font-bold p-2 lg:text-xl text-2xl text-slate-900 inline-block ltr:pr-4 '>
                  จบกระบวนการ
                </h4>{' '}
              </Col>
              <Col xs={24} sm={12} md={12}>
                <div className='flex flex-wrap justify-end gap-3'>
                  <button
                    onClick={() => setCurrent(current - 1)}
                    type='button'
                    style={{ width: '100px', height: '38px' }}
                    className='rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
                  >
                    ย้อนกลับ
                  </button>
                </div>
              </Col>
            </Row>
          </Card>

          <Card
            className='p-2 rounded-2xl'
            style={{
              height: 470,
              marginTop: 16,
            }}
          >
            <div
              style={{
                /*  display: 'flex', */
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Row gutter={16}>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <span className='flex justify-center'>
                    {' '}
                    <img
                      src={Success2}
                      alt='Success'
                      style={{ width: '440px', height: '250px' }}
                    />
                  </span>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <div class='flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'>
                    <div>
                      <dl className='grid sm:grid-cols-3 gap-1 sm:gap-2'>
                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          สถานะ :
                        </dt>
                        <dd className='col-start-2 col-span-2 text-green-400'>
                          ชำระค่าบริการสำเร็จ
                        </dd>
                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          ประเภท :
                        </dt>
                        <dd className='col-start-2 col-span-2'>
                          คำขอใบอนุญาตเป็นมัคคุเทศก์
                        </dd>
                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          เลขที่คำขอ :
                        </dt>
                        <dd className='col-start-2 col-span-2'>12345</dd>
                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          วันที่ยื่นคำขอ :
                        </dt>
                        <dd className='col-start-2 col-span-2'>
                          18 ตุลาคม 2566
                        </dd>

                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          สถานที่รับใบอนุญาต :
                        </dt>
                        <dd className='col-start-2 col-span-2'>
                          191/2 ซอยพหลโยธิน 46 แขวงลาดยาว เขตจตุจักร กทม. 10900
                        </dd>
                      </dl>
                    </div>
                    <br />
                    <Link
                      to='/profile'
                      className='mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    >
                      ติดตามสถานะคำขอ
                      <svg
                        className='flex-shrink-0 w-4 h-4'
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
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* <div>
        <div className='sticky top-0 z-50 bg-white shadow-md'>
          <h4 className='text-xl font-bold text-center p-4'>
            Fixed Header Content
          </h4>
        </div>

        <div className='h-96 overflow-y-scroll'>
          <div className='h-auto p-4'>
            {[...Array(50)].map((_, i) => (
              <p key={i} className='mb-4'>
                This is paragraph {i + 1}.
              </p>
            ))}
          </div>
        </div>
      </div> */}

      <div className='sticky top-0 z-50 shadow-md'>
        <div className='bg-blue-900 sm:h-auto md:h-[70px] mb-6 flex items-center justify-center '>
          <h4 className='text-title font-bold text-center text-white '>
            ยื่นคำขอเปลี่ยนแปลงรายการสถานะมัคคุเทศก์
          </h4>
        </div>
      </div>
      <div className='mx-auto max-w-screen-xl px-4 pb-4 pt-4 sm:px-4 lg:px-2 lg:pt-0'>
        <Row gutter={16}>
          {/*  <Col span={24}>
            <Card className=' text-body rounded-2xl'>
              <h4 className='font-bold p-2 lg:text-3xl text-2xl text-slate-900 inline-block ltr:pr-4 '>
                ยื่นคำขอเปลี่ยนแปลงรายการสถานะมัคคุเทศก์
              </h4>
            </Card>
            <br />
          </Col> */}
          <Col xs={24} sm={24} md={24} lg={6}>
            <Card className='text-step p-2 rounded-2xl mb-4'>
              <Steps current={current} direction='vertical'>
                {steps.map((item) => (
                  <Step
                    key={item.title}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </Steps>
            </Card>
          </Col>

          <Col xs={24} sm={24} md={24} lg={18}>
            <Form
              form={form}
              layout='vertical'
              /* onFinish={onFinish}  */
              validateMessages={{
                required: 'กรุณากรอกข้อมูล',
              }}
              className='text-body text-body-size text-body-input'
            >
              <div className=' steps-content'>{steps[current].content}</div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GuideFormListChangePage;
