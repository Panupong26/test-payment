import React, { useState } from 'react';
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
  Alert,
  Spin,
} from 'antd';
import { EditTwoTone, SearchOutlined } from '@ant-design/icons';
import Warning from '@/assets/images/icon/warning.png';
import Success from '@/assets/images/icon/success.png';
import Success2 from '@/assets/images/icon/success2.png';
import Tourleaderrequest from '@/assets/images/icon/tourleaderrequest.png';
import { Link } from 'react-router-dom';

import Payin from '@/assets/images/icon/payin.jpeg';

const { Text } = Typography;

import { ConfigProvider } from 'antd';
import th_TH from 'antd/es/locale/th_TH';

import moment from 'moment';
import 'moment/locale/th';

// Set moment to use the Thai locale globally
moment.locale('th');
const { Step } = Steps;

const Input = (props) => <AntInput {...props} size='large' />;

const JuristicFormBusinesscencelPage = () => {
  const [form] = Form.useForm();

  const [current, setCurrent] = useState(0);

  //const [showUnderageAlert, setShowUnderageAlert] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  ////////////////////////////////////////////////////

  const formatDate = (value) => {
    if (value) {
      const thaiYear = value.year() + 543;
      return value.clone().year(thaiYear).format('DD/MM/YYYY');
    }
  };
  /////////////////date//age/////////////////////////////////
  /*  const handleDateChange = (date, dateString) => {
    if (date) {
      const birthYearBE = moment(dateString, 'DD/MM/YYYY').year();

      const currentYearBE = moment().year() + 543; 

      const age = currentYearBE - birthYearBE;

      form.setFieldsValue({ age });
    } else {
      form.setFieldsValue({ age: undefined });
    }
  }; */
  const handleDateChange = (field, date, dateString) => {
    if (date) {
      const birthYearBE = moment(dateString, 'DD/MM/YYYY').year();
      const currentYearBE = moment().year() + 543;
      const age = currentYearBE - birthYearBE;

      form.setFieldsValue({
        items: form
          .getFieldValue('items')
          .map((item, index) =>
            index === field.name ? { ...item, age: age } : item
          ),
      });
      if (age < 20) {
        setShowUnderageAlert(true);
      } else {
        setShowUnderageAlert(false);
      }
    } else {
      form.setFieldsValue({
        items: form
          .getFieldValue('items')
          .map((item, index) =>
            index === field.name ? { ...item, age: undefined } : item
          ),
      });
    }
  };

  //////////////////////checked//////////////////////
  /*  const checkedonChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  }; */

  //////////////////Form input///////////////////////

  /*   const [formList, setFormList] = useState([{ id: uuidv4() }]);
   */
  /* const addForm = () => {
    setFormList([...formList, { id: uuidv4() }]);
  }; */

  //////////////////Form ตรวจสอบ///////////////////////
  //const [value, setValue] = useState(1);
  /* 
  const onChangeradiotype = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  }; */
  /////////////////////////////////////////////////////
  /* const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }; */

  //////////////////แก้ไขที่อยู่จัดส่งของคุณ/////////////////////
  const [isEditable, setIsEditable] = useState(false);

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  //////////////////เพิ่มสาขา///////////////////////////////////

  const [branchCount, setBranchCount] = useState(0);

  const handleBranchCountChange = (e) => {
    setBranchCount(Number(e.target.value));
  };
  //////////////////เพิ่มดำน้ำ///////////////////////////////////
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  //////////////////กรณีใช้สถานที่ของผู้อื่นเป็นสำนักงาน/////////////////
  const [isCheckedother, setIsCheckedother] = useState(false);

  const handleCheckboxChangeother = (e) => {
    setIsCheckedother(e.target.checked);
  };

  /////////////////กรณีเป็นสัญญาเช่า/สัญญาซื้อขาย////////////////////
  const [isCheckedhire, setIsCheckedhire] = useState(false);

  const handleCheckboxChangehire = (e) => {
    setIsCheckedhire(e.target.checked);
  };
  /////////////////////////////////////////////////////////////
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  const optionsWithDisabled = [
    {
      label: 'ปกติ',
      value: 'ปกติ',
    },
    {
      label: 'หมดอายุตามกฎหมาย',
      value: 'หมดอายุตามกฎหมาย',
    },
    {
      label: 'ถูกเพิกถอน',
      value: 'ถูกเพิกถอน',
      disabled: false,
    },
  ];
  /////////////////////////////////////////////////////////////
  const [value1, setValue1] = useState(1);
  const onChange1 = (e) => {
    console.log('First radio group checked', e.target.value);
    setValue1(e.target.value);
  };
  // State และ handler สำหรับชุดที่สอง
  const [value2, setValue2] = useState(1);
  const onChange2 = (e) => {
    console.log('Second radio group checked', e.target.value);
    setValue2(e.target.value);
  };

  const [value3, setValue3] = useState(1);
  const onChange3 = (e) => {
    console.log('Second radio group checked', e.target.value);
    setValue3(e.target.value);
  };
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

  return (
    <div>
      <div className='space-y-4 '>
        <Col xs={24} sm={12} md={24}>
          <details className='rounded-xl group border-s-4 border-primary-500 bg-white p-6 [&_summary::-webkit-details-marker]:hidden'>
            <summary className=' flex items-center justify-between gap-1.5'>
              <div className='text-th'>
                <h4 className='font-bold '>
                  ยื่นคำขอยกเลิกการประกอบกิจการและขอรับหลักประกันคืน (นิติบุคคล)
                </h4>
              </div>
              <div className='flex flex-wrap justify-end gap-3 text-body-page text-body-size'>
                <button
                  onClick={() => setCurrent(current + 1)}
                  style={{ width: '160px', height: '40px' }}
                  type='button'
                  className='rounded-lg border border-primary-500 bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                >
                  บันทึกและส่งต่อ
                </button>
              </div>
            </summary>
          </details>
        </Col>
      </div>

      <Card className=' rounded-2xl mt-4 text-body-page text-body-size'>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={24}>
            <Button
              type='dashed'
              icon={<SearchOutlined />}
              onClick={handleButtonClick}
              danger
              className='w-full mb-4'
            >
              เลือกใบอนุญาตประกอบธุรกิจนำเที่ยว
              {isLoading && (
                <div className='flex justify-center'>
                  <Spin size='large' />
                </div>
              )}
            </Button>
          </Col>
        </Row>
        <div>
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
                          โปรดเลือกใบอนุญาตที่ต้องการยกเลิกการประกอบกิจการ
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

        <>
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
                  รายละเอียดนิติบุคคล
                </a>
              </li>
              <li>
                <a
                  onClick={() => setActiveTab(2)}
                  className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-white hover:text-gray-700 hover:shadow ${
                    activeTab === 2 ? 'bg-white shadow text-gray-900' : ''
                  }`}
                >
                  เอกสารหลักฐาน
                </a>
              </li>
            </ul>
          </div>

          <div className='sm:hidden'>
            <select
              name='optionlicenstitle'
              className='w-full rounded-md border-gray-200'
              value={activeTab}
              onChange={(e) => setActiveTab(parseInt(e.target.value, 10))}
            >
              <option value={0}>ข้อมูลใบอนุญาต</option>
              <option value={1}>รายละเอียดนิติบุคคล</option>
              <option value={2}>เอกสารหลักฐาน</option>
            </select>
          </div>

          <div className='py-3'>
            <div style={{ display: activeTab === 0 ? 'block' : 'none' }}>
              <div>
                <Form
                  form={form}
                  layout='vertical'
                  /* onFinish={onFinish} */
                  validateMessages={{
                    required: 'กรุณากรอกข้อมูล',
                  }}
                >
                  <Row gutter={16}>
                    <Col xs={24} sm={12} md={24}>
                      <Space size={[0, 8]} wrap>
                        <Tag color='#87d068'>ประกอบธุรกิจนําเที่ยวประเภท</Tag>
                        นําเที่ยวจากต่างประเทศ (Inbound)
                      </Space>
                    </Col>
                  </Row>
                  <br />

                  <Row gutter={16}>
                    <Col xs={24} sm={12} md={12}>
                      <Form.Item
                        name='license_type_id'
                        label='ใบอนุญาตเลขที่'
                        rules={[{ required: false }]}
                      >
                        <Input placeholder='ใบอนุญาตเลขที่' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12}>
                      <Form.Item
                        name='expired_date'
                        label='ครบกำหนดวันที่'
                        rules={[{ required: false }]}
                      >
                        <Input placeholder='ครบกำหนดวันที่' />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Text type='secondary'>ชื่อธุรกิจนำเที่ยว (Trade Name)</Text>
                  <br />
                  <Row gutter={16}>
                    <Col xs={24} sm={12} md={12}>
                      <Form.Item
                        name='company_name_th'
                        label='ชื่อภาษาไทย'
                        rules={[{ required: false }]}
                      >
                        <Input placeholder='ชื่อภาษาไทย' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12}>
                      <Form.Item
                        name='company_name_en'
                        label='ชื่อภาษาอังกฤษ'
                        rules={[{ required: false }]}
                      >
                        <Input placeholder='ชื่อภาษาอังกฤษ' />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col xs={24} sm={12} md={24}>
                      <Space size={[0, 8]} wrap>
                        <Tag color='#87d068'>สถานะใบอนุญาต</Tag>
                        <Checkbox.Group
                          options={optionsWithDisabled}
                          disabled
                          defaultValue={['ปกติ']}
                          onChange={onChange}
                        />
                      </Space>
                    </Col>
                  </Row>
                </Form>
                <Form
                  form={form}
                  layout='vertical'
                  /* onFinish={onFinish} */
                  validateMessages={{
                    required: 'กรุณากรอกข้อมูล',
                  }}
                >
                  <Row gutter={16}>
                    <Col xs={24} sm={12} md={24}>
                      <Form.Item
                        name='cancellation_reason'
                        label='*กรณีสถานะใบอนุญาตปกติ มีความประสงค์ขอเลิกประกอบธุรกิจนำเที่ยว เนื่องจาก'
                        rules={[{ required: false }]}
                      >
                        <Radio.Group onChange={onChange1} value={value1}>
                          <Space direction='vertical'>
                            <Radio value={1}>ขาดทุน</Radio>
                            <Radio value={2}>
                              เปลี่ยนแปลงประเภทธุรกิจนำเที่ยว
                            </Radio>
                            <Radio value={3}>ไปประกอบอาชีพอื่น</Radio>
                            <Radio value={4}>
                              อื่นๆ
                              {value1 === 4 ? (
                                <Input style={{ width: 200, marginLeft: 10 }} />
                              ) : null}
                            </Radio>
                          </Space>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} sm={12} md={24}>
                      <Form.Item
                        name='return_collateral'
                        label={
                          <Text type='secondary'>*ขอคืนหลักประกันประเภท</Text>
                        }
                        rules={[{ required: false }]}
                      >
                        <Radio.Group onChange={onChange2} value={value2}>
                          <Space direction='vertical'>
                            <Radio value={3}>
                              {' '}
                              เงินสด (บัญชีออมทรัพย์ธนาคารกรุงไทย)
                            </Radio>
                            <Radio value={4}>
                              หนังสือค้ำประกันของธนาคาร
                              {value2 === 4 ? (
                                <Input style={{ width: 200, marginLeft: 10 }} />
                              ) : null}
                            </Radio>
                          </Space>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12}></Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} sm={12} md={24}>
                      <Form.Item
                        name='dissolution_business'
                        label={
                          <Text type='secondary'>
                            ภายหลังจากการแจ้งเลิกประกอบกิจการ
                          </Text>
                        }
                        rules={[{ required: false }]}
                      >
                        <Radio.Group onChange={onChange3} value={value3}>
                          <Space direction='vertical'>
                            <Radio value={3}>
                              ไม่มีข้อผูกพันต่อนักท่องเที่ยว
                            </Radio>
                            <Radio value={4}>
                              ยังมีหน้าที่ดำเนินการตามข้อผูกพันที่มีอยู่กับนักท่องเที่ยว
                            </Radio>
                            {value3 === 4 && (
                              <Row gutter={16} align='middle'>
                                <Col>
                                  <p>เป็นเวลา</p>
                                </Col>
                                <Col>
                                  <Input style={{ width: 100, height: 30 }} />
                                </Col>
                                <Col>
                                  <p>เดือน</p>
                                </Col>
                                <Col>
                                  <p>โดยมีจำนวนนักท่องเที่ยว</p>
                                </Col>
                                <Col>
                                  <Input style={{ width: 100, height: 30 }} />
                                </Col>
                                <Col>
                                  <p>ราย</p>
                                </Col>
                              </Row>
                            )}
                          </Space>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
            <div style={{ display: activeTab === 1 ? 'block' : 'none' }}>
              <div>
                <Form
                  form={form}
                  layout='vertical'
                  /* onFinish={onFinish} */
                  validateMessages={{
                    required: 'กรุณากรอกข้อมูล',
                  }}
                >
                  <Row gutter={16}>
                    <Col xs={24} sm={12} md={24}>
                      <Form.Item
                        name='compay_partnership_th'
                        label='ชื่อบริษัท/ห้างหุ้นส่วนจํากัด (TH)'
                        rules={[{ required: false }]}
                      >
                        <Input placeholder='ชื่อบริษัท/ห้างหุ้นส่วนจํากัด (TH)' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={24}>
                      <Form.Item
                        name='compay_partnership_en'
                        label='ชื่อบริษัท/ห้างหุ้นส่วนจํากัด (EH)'
                        rules={[{ required: false }]}
                      >
                        <Input placeholder='ชื่อบริษัท/ห้างหุ้นส่วนจํากัด (EH)' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12}>
                      <Form.Item
                        name='business_registration_no'
                        label='จดทะเบียนนิติบุคคลเลขที่'
                        rules={[{ required: false }]}
                      >
                        <Input placeholder='จดทะเบียนนิติบุคคลเลขที่' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12}>
                      <Form.Item
                        name='date_at'
                        label='เมื่อวันที่'
                        rules={[{ required: false }]}
                      >
                        <Input placeholder='เมื่อวันที่' />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
              <div className='card-title'>
                <Text type='secondary'>รายชื่อกรรมการ (ผู้มีอำนาจลงนาม)</Text>
              </div>
              <div>
                <Form
                  form={form}
                  layout='vertical'
                  /* onFinish={onFinish} */
                  validateMessages={{
                    required: 'กรุณากรอกข้อมูล',
                  }}
                >
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
                        <Input placeholder='นามสกุล (TH)' />
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
                </Form>
              </div>
            </div>
            <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>
              <Card className='p-2 rounded-2xl'>
                <Row gutter={[16, 8]}>
                  <Col xs={24} sm={12} md={24}>
                    <Card className='rounded-2xl border border-blue-200 shadow-sm'>
                      <ul
                        role='list'
                        className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                      >
                        <li>
                          ใบอนุญาตประกอบธุรกิจนำเที่ยว
                          และใบอนุญาตประกอบธุรกิจนำเที่ยวสาขา (ถ้ามี)
                        </li>
                        <p>
                          พร้อมสำเนาใบอนุญาตประกอบธุรกิจนำเที่ยว
                          กรรมการลงลายมือชื่อและประทับตราบริษัท
                          (หรือใบแจ้งความกรณีสูญหาย)
                        </p>
                      </ul>
                    </Card>
                    <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                      <ul
                        role='list'
                        className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                      >
                        <li>
                          หนังสือรับรองนิติบุคคลจากกระทรวงพาณิชย์ อายุไม่เกิน 1
                          เดือน ขอคัดจากกระทรวงพาณิชย์ หรือธนาคารเท่านั้น
                        </li>
                      </ul>
                    </Card>

                    <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                      <ul
                        role='list'
                        className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                      >
                        <li>สำเนาบัตรประชาชนของกรรมการทุกท่าน</li>
                        <p>
                          กรณีมีกรรมการต่างชาติ สำเนาหนังสือเดินทาง (passport)
                        </p>
                      </ul>
                    </Card>
                    <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                      <ul
                        role='list'
                        className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                      >
                        <li>สำเนาทะเบียนบ้านของกรรมการทุกท่าน</li>
                      </ul>
                    </Card>
                    <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                      <ul
                        role='list'
                        className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                      >
                        <li>
                          สำเนาเอกสารสำคัญเปลียนชื่อ - สกุล ของกรรมการ (ถ้ามี)
                        </li>
                      </ul>
                    </Card>
                    <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                      <ul
                        role='list'
                        className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                      >
                        <li>
                          เอกสารนำส่งหลักประกันธุรกิจนำเที่ยว
                          (หรือใบแจ้งความกรณีสูญหาย)
                        </li>
                      </ul>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </div>
          </div>
        </>
      </Card>
    </div>
  );
};

export default JuristicFormBusinesscencelPage;
