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
} from 'antd';

import { CloseOutlined } from '@ant-design/icons';

const { Text } = Typography;

import { ConfigProvider } from 'antd';
import th_TH from 'antd/es/locale/th_TH';

import moment from 'moment';
import 'moment/locale/th';

// Set moment to use the Thai locale globally
moment.locale('th');

const Input = (props) => <AntInput {...props} size='large' />;

const JuristicRequestPage = () => {
  const [form] = Form.useForm();

  const [current, setCurrent] = useState(0);

  const [showUnderageAlert, setShowUnderageAlert] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  ////////////////////////////////////////////////////

  const formatDate = (value) => {
    if (value) {
      const thaiYear = value.year() + 543;
      return value.clone().year(thaiYear).format('DD/MM/YYYY');
    }
  };

  
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


  return (
    <div>
      <div className='space-y-4 '>
        <Col xs={24} sm={12} md={24}>
          <details className='rounded-xl group border-s-4 border-primary-500 bg-white p-6 [&_summary::-webkit-details-marker]:hidden'>
          <summary className='flex flex-col sm:flex-row items-end justify-between gap-1.5'>
              <div className='text-th'>
                <h4 className='font-bold '>
                  ยื่นคำขอใบอนุญาตประกอบธุรกิจนำเที่ยว (นิติบุคคล)
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

      <div>
        <Card className=' rounded-2xl mt-4 text-body-page text-body-size'>
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
                    รายละเอียดนิติบุคคล
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setActiveTab(1)}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-white hover:text-gray-700 hover:shadow ${
                      activeTab === 1 ? 'bg-white shadow text-gray-900' : ''
                    }`}
                  >
                    รายละเอียดธุรกิจ
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setActiveTab(2)}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-white hover:text-gray-700 hover:shadow ${
                      activeTab === 2 ? 'bg-white shadow text-gray-900' : ''
                    }`}
                  >
                    ที่ตั้งสํานักงาน
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setActiveTab(3)}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-white hover:text-gray-700 hover:shadow ${
                      activeTab === 3 ? 'bg-white shadow text-gray-900' : ''
                    }`}
                  >
                    เอกสารหลักฐาน
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
                <option value={0}>รายละเอียดนิติบุคคล</option>
                <option value={1}>รายละเอียดธุรกิจ</option>
                <option value={2}>ที่ตั้งสํานักงาน</option>
                <option value={3}>เอกสารหลักฐาน</option>
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

                  <div>
                    รายชื่อกรรมการ
                    <Form form={form} name='company_director' layout='vertical'>
                      <Form.List name='items'>
                        {(fields, { add, remove }) => (
                          <>
                            {fields.map((field) => (
                              <Card
                                className='my-4'
                                title={
                                  <div
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                    }}
                                  >
                                    <Text type='secondary'>
                                      กรรมการคนที่ {field.name + 1}
                                    </Text>
                                    <Checkbox
                                      name={[
                                        field.name,
                                        'authorized_signatory',
                                      ]}
                                      style={{ marginLeft: 8 }}
                                    >
                                      มีอำนาจลงนาม
                                    </Checkbox>
                                  </div>
                                }
                                key={field.key}
                                extra={
                                  <CloseOutlined
                                    onClick={() => {
                                      remove(field.name);
                                    }}
                                  />
                                }
                              >
                                <Row gutter={16} key={form.id}>
                                  <Col xs={24} sm={12} md={8}>
                                    <Form.Item
                                      name={[field.name, 'title_th']}
                                      label='คำนำหน้า (TH)'
                                      rules={[{ required: false }]}
                                    >
                                      <Input placeholder='คำนำหน้า (TH)' />
                                    </Form.Item>
                                  </Col>
                                  <Col xs={24} sm={12} md={8}>
                                    <Form.Item
                                      name={[field.name, 'firstname_th']}
                                      label='ชื่อ (TH)'
                                      rules={[{ required: false }]}
                                    >
                                      <Input placeholder='ชื่อ (TH)' />
                                    </Form.Item>
                                  </Col>
                                  <Col xs={24} sm={12} md={8}>
                                    <Form.Item
                                      name={[field.name, 'lastname_th']}
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
                                      name={[field.name, 'title_en']}
                                      label='คำนำหน้า (EN)'
                                      rules={[{ required: false }]}
                                    >
                                      <Input placeholder='คำนำหน้า (EN)' />
                                    </Form.Item>
                                  </Col>
                                  <Col xs={24} sm={12} md={8}>
                                    <Form.Item
                                      name={[field.name, 'firstname_en']}
                                      label='ชื่อ (EN)'
                                      rules={[{ required: false }]}
                                    >
                                      <Input placeholder='ชื่อ (EN)' />
                                    </Form.Item>
                                  </Col>
                                  <Col xs={24} sm={12} md={8}>
                                    <Form.Item
                                      name={[field.name, 'lastname_en']}
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
                                        name={[field.name, 'birthday']}
                                        label='วันเดือนปีเกิด'
                                        rules={[{ required: false }]}
                                      >
                                        <DatePicker
                                          name={[field.name, 'datepicker']}
                                          format={formatDate}
                                          locale={moment().locale('th')}
                                          size='large'
                                          style={{ width: '100%' }}
                                          placeholder='วันเดือนปีเกิด'
                                          onChange={(date, dateString) =>
                                            handleDateChange(
                                              field,
                                              date,
                                              dateString
                                            )
                                          }
                                        />
                                      </Form.Item>
                                    </ConfigProvider>
                                    {/*  <Space
                                      direction='vertical'
                                      style={{
                                        width: '100%',
                                      }}
                                    >
                                      {showUnderageAlert && (
                                        <Alert
                                          message='อายุน้อยกว่า 20 ปี'
                                          type='warning'
                                          showIcon
                                          closable
                                        />
                                      )}
                                    </Space> */}
                                  </Col>
                                  <Col xs={24} sm={12} md={3}>
                                    <Form.Item
                                      name={[field.name, 'age']}
                                      label='อายุ (ปี)'
                                      /*  rules={[{ required: false }]} */
                                    >
                                      <Input placeholder='อายุ' />
                                    </Form.Item>
                                  </Col>
                                  <Col xs={24} sm={12} md={8}>
                                    <Form.Item
                                      name={[field.name, 'id_card']}
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
                                      name={[field.name, 'expiration_date']}
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
                              </Card>
                            ))}

                            <Button type='dashed' onClick={() => add()} block>
                              <Text type='danger'>+ เพิ่มกรรมการ</Text>
                            </Button>
                          </>
                        )}
                      </Form.List>
                    </Form>
                  </div>
                </div>
              </div>
              <div style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                <div>
                  <div>
                    <Checkbox
                      name='diving'
                      onChange={handleCheckboxChange}
                      className='mb-4'
                    >
                      ให้บริการดำน้ำ
                    </Checkbox>
                  </div>
                  <div className='bg-blue-100 w-full p-2 rounded-lg'>
                    <Text>ประกอบธุรกิจนําเที่ยวประเภท</Text>
                  </div>
                  <div className='pb-4'>
                    <fieldset className='grid gap-4 text-medium pt-4'>
                      <legend className='sr-only'>Delivery</legend>
                      <Row gutter={16}>
                        <Col xs={24} sm={24} md={24} lg={12}>
                          <div>
                            <input
                              type='radio'
                              name='DeliveryOption'
                              value='Local'
                              id='Local'
                              className='peer hidden [&:checked_+_label_svg]:block'
                            />

                            <label
                              htmlFor='Local'
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
                                <p className='text-gray-700 text-small'>
                                  เฉพาะพื้นที่ (Local){' '}
                                </p>
                              </div>
                              <p className='text-blue-800 text-sm font-medium'>
                                หลักประกัน 3,000 บาท
                              </p>
                            </label>
                          </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12}>
                          <div>
                            <input
                              type='radio'
                              name='DeliveryOption'
                              value='Domesdic'
                              id='Domesdic'
                              className='peer hidden [&:checked_+_label_svg]:block'
                            />

                            <label
                              htmlFor='Domesdic'
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
                                  ในประเทศ (Domesdic){' '}
                                </p>
                              </div>

                              <p className='text-blue-800 text-sm font-medium'>
                                หลักประกัน 15,000 บาท
                              </p>
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col xs={24} sm={24} md={24} lg={12}>
                          <div>
                            <input
                              type='radio'
                              name='DeliveryOption'
                              value='Inbound'
                              id='Inbound'
                              className='peer hidden [&:checked_+_label_svg]:block'
                            />

                            <label
                              htmlFor='Inbound'
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
                                  นำเที่ยวจากต่างประเทศ (Inbound)
                                </p>
                              </div>

                              <p className='text-blue-800 text-sm font-medium'>
                                หลักประกัน 30,000 บาท
                              </p>
                            </label>
                          </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12}>
                          <div>
                            <input
                              type='radio'
                              name='DeliveryOption'
                              value='Outbound'
                              id='Outbound'
                              className='peer hidden [&:checked_+_label_svg]:block'
                            />

                            <label
                              htmlFor='Outbound'
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
                                  ทั่วไป (Outbund)
                                </p>
                              </div>

                              <p className='text-blue-800 text-sm font-medium'>
                                หลักประกัน 60,000 บาท
                              </p>
                            </label>
                          </div>
                        </Col>
                      </Row>
                    </fieldset>
                  </div>

                  <div className='bg-blue-50 w-full p-2 rounded-lg'>
                    <Text>ชื่อธุรกิจนำเที่ยว (Trade Name)</Text>
                  </div>
                  <Form
                    name='tradename'
                    form={form}
                    layout='vertical'
                    /* onFinish={onFinish} */
                    validateMessages={{
                      required: 'กรุณากรอกข้อมูล',
                    }}
                  >
                    <Row gutter={16} className='pt-4'>
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
                      <Col xs={24} sm={12} md={12}>
                        <Form.Item
                          name='main_tourist_groups'
                          label='กลุ่มนักท่องเที่ยวหลัก'
                          rules={[{ required: false }]}
                        >
                          <Input type='' placeholder='กลุ่มนักท่องเที่ยวหลัก' />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12} md={12}>
                        <Form.Item
                          name='number_of_branches'
                          label='จำนวนสํานักงานสาขา'
                          rules={[{ required: false }]}
                        >
                          <Input
                            type='number'
                            placeholder='จำนวนสํานักงานสาขา'
                            onChange={handleBranchCountChange}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
              <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>
                <div>
                  <div className='card-title'>
                    <Text type='secondary'>ที่ตั้งสำนักงาน</Text>
                  </div>
                  <Form
                    name='address'
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
                      <Col xs={24} sm={12} md={8}>
                        <Form.Item
                          name='telephone'
                          label='โทรศัพท์สำนักงาน'
                          rules={[{ required: false }]}
                        >
                          <Input type='number' placeholder='โทรศัพท์สำนักงาน' />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12} md={8}>
                        <Form.Item
                          name='mobile'
                          label='โทรศัพท์มือถือ'
                          rules={[{ required: false }]}
                        >
                          <Input type='number' placeholder='โทรศัพท์มือถือ' />
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
                      <Col xs={24} sm={12} md={8}>
                        <Form.Item
                          name='website'
                          label='เว็บไซต์'
                          rules={[{ required: false }]}
                        >
                          <Input placeholder='เว็บไซต์' />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                  {Array.from({ length: branchCount }, (_, index) => (
                    <Form
                      key={`branchForm_${index}`}
                      form={form}
                      layout='vertical'
                      /* onFinish={onFinish} */
                      validateMessages={{
                        required: 'กรุณากรอกข้อมูล',
                      }}
                      className='text-body-page text-body-size'
                    >
                      <Row gutter={[16, 8]}>
                        <Col xs={24} sm={12} md={24} key={index}>
                          <Card
                            className='card-title p-2 rounded-2xl mt-4'
                            title={
                              <>
                                ที่ตั้งสำนักงาน{' '}
                                <Text type='danger'>สาขาที่ {index + 1}</Text>
                              </>
                            }
                          >
                            <Row gutter={16}>
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
                                  <Input
                                    type='number'
                                    placeholder='รหัสไปรษณีย์'
                                  />
                                </Form.Item>
                              </Col>
                              <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                  name='telephone'
                                  label='โทรศัพท์สำนักงาน'
                                  rules={[{ required: false }]}
                                >
                                  <Input
                                    type='number'
                                    placeholder='โทรศัพท์สำนักงาน'
                                  />
                                </Form.Item>
                              </Col>
                              <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                  name='mobile'
                                  label='โทรศัพท์มือถือ'
                                  rules={[{ required: false }]}
                                >
                                  <Input
                                    type='number'
                                    placeholder='โทรศัพท์มือถือ'
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
                                  <Input
                                    placeholder='อีเมล'
                                    autoComplete='email'
                                  />
                                </Form.Item>
                              </Col>
                              <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                  name='website'
                                  label='เว็บไซต์'
                                  rules={[{ required: false }]}
                                >
                                  <Input placeholder='เว็บไซต์' />
                                </Form.Item>
                              </Col>
                            </Row>
                          </Card>
                        </Col>
                      </Row>
                    </Form>
                  ))}
                </div>
              </div>
              <div style={{ display: activeTab === 3 ? 'block' : 'none' }}>
                <Card className='p-2 mt-4 rounded-2xl'>
                
                  <Row gutter={[16, 8]}>
                    <Col xs={24} sm={12} md={24}>
                      <Card className='rounded-2xl border border-blue-200 shadow-sm'>
                        <ul
                          role='list'
                          className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                        >
                          <li>หนังสือรับรองว่าบริษัทได้จดทะเบียน</li>
                          <p>
                            ตามประมวลกฎหมายแพ่งและพาณิชย์ พร้อมวัตถุประสงค์
                            รับรองไว้ไม่เกิน 6 เดือน
                            (กรรมการไทยเกินกึ่งหนึ่งและกรรมการไทยเป็นผู้มีอำนาจลงลายมือชื่อและประทับตราบริษัท
                            ตามพระราชบัญญัติธุรกิจนำเที่ยวและมัคคุเทศ่ก์
                            พ.ศ.2561)
                          </p>
                        </ul>
                      </Card>

                      <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                        {' '}
                        <ul
                          role='list'
                          className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                        >
                          <li>บัญชีรายชื่อผู้ถือหุ้น (บอจ.5)</li>
                          <p>
                            ฉบับประชุมผู้ถือหุ้นปีปัจจุบัน
                            และแสดงรายชื่อสัญชาติและภูมิลำเนาของผู้ถือหุ้นปีปัจจุบันทุกคนรับรองโดยกระทรวงพาณิชย์
                            รับรองไว้ไม่เกิน 6 เดือน
                            (บุคคลธรรมดาสัญชาติไทยถือหุ้น 51%)
                            (กรณีไม่มีเลขประจำตัวประชาชนของผู้ถือหุ้น
                            แนบสำเนาบัตรประจำตัวประชาชน)
                          </p>
                        </ul>
                      </Card>
                      <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                        <ul
                          role='list'
                          className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                        >
                          <li>หนังสือบริคณห์สนธิ (บอจ.2)</li>
                          <p>
                            รับรองโดยกระทรวงพาณิชย์ รับรองไว้ไม่เกิน 6 เดือน
                          </p>
                        </ul>
                      </Card>
                      <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                        <ul
                          role='list'
                          className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                        >
                          <li>ข้อบังคับของนิติบุคคล (ถ้ามี)</li>
                          <p>
                            รับรองโดยกระทรวงพาณิชย์ รับรองไว้ไม่เกิน 6 เดือน
                          </p>
                        </ul>
                      </Card>
                      <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                        <ul
                          role='list'
                          className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                        >
                          <li>รายการจดทะเบียนจัดตั้ง (บอจ.3)</li>
                          <p>
                            รับรองโดยกระทรวงพาณิชย์ รับรองไว้ไม่เกิน 6 เดือน
                          </p>
                        </ul>
                      </Card>
                      <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                        <ul
                          role='list'
                          className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                        >
                          <li>
                            รายการจดทะเบียนแก้ไขเพิ่มเติม และ/หรือ มติพิเศษ
                            (บอจ.4)
                          </li>
                          <p>
                            รับรองโดยกระทรวงพาณิชย์ รับรองไว้ไม่เกิน 6 เดือน
                          </p>
                        </ul>
                      </Card>
                      <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                        <ul
                          role='list'
                          className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                        >
                          <li>รายการจดทะเบียนจัดตั้งห้าง (หส.2)</li>
                          <p>
                            รับรองโดยกระทรวงพาณิชย์ รับรองไว้ไม่เกิน 6 เดือน
                          </p>
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
                          <li>ตัวอย่างรอยประทับ 2 ตรา</li>
                        </ul>
                      </Card>
                      <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                        <ul
                          role='list'
                          className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                        >
                          <li>ใบนำส่งหลักประกัน จำนวน 2 แผ่น</li>
                        </ul>
                      </Card>
                      <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                        <ul
                          role='list'
                          className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                        >
                          <li>
                            สำเนากรมธรรม์ประกันภัย
                            ประกันอุบัติเหตุให้กับนักท่องเที่ยว มัคคุเทศก์
                            และผู้นำเที่ยวในระหว่างเดินทางท่องเที่ยวโดยมีจำนวนเงินเอาประกันภัยกรณีเสียชีวิต
                            สูญเสียอวัยวะหรือทุพพลภาพไม่ต่ำกว่าหนึ่งล้านบาทต่อคนและกรณีบาดเจ็บไม่ต่ำกว่าห้าแสนบาทต่อคน
                            และต้องมีอายุกรมธรรม์ไม่น้อยกว่าหกเดือน
                            นับแต่วันยื่นคำขอรับใบอนุญาตประกอบกิจการนำเที่ยว
                            (ต้องคุ้มครองนักท่องเที่ยวทุกคนไม่จำกัดอายุ)
                          </li>
                        </ul>
                      </Card>
                      <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                        <ul
                          role='list'
                          className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                        >
                          <li>รูปถ่ายด้านหน้าและด้านในสำนักงาน</li>
                        </ul>
                        <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              รูปถ่ายด้านหน้าสำนักงาน เห็นตัวอาคารทั้งหลัง
                              โดยแสดงเลขที่ตั้งสำนักงานและป้ายชื่อภาษาไทยชัดเจน
                              (มีลักษณะคงทนถาวร) จำนวน 2 รูป
                            </li>
                          </ul>
                        </Card>
                        <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>รูปถ่ายด้านในสำนักงาน จำนวน 2 รูป</li>
                          </ul>
                        </Card>
                      </Card>
                      <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                        <ul
                          role='list'
                          className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                        >
                          <li>
                            แผนที่ตั้งสำนักงาน
                            ผู้ขอรับใบอนุญาตประกอบธุรกิจนำเที่ยว
                          </li>
                        </ul>
                      </Card>
                      <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                        <ul
                          role='list'
                          className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                        >
                          <li>
                            หลักฐานแสดงกรรมสิทธิ์หรือสิทธิครอบครองสถานที่ที่ใช้เป็นสำนักงาน
                          </li>
                        </ul>
                      </Card>
                      <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                        <div className='space-y-4'>
                          <details className='group [&_summary::-webkit-details-marker]:hidden'>
                            <summary className='flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900'>
                              <ul
                                role='list'
                                className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                              >
                                <li>กรณีใช้สถานที่ของผู้อื่นเป็นสำนักงาน</li>
                              </ul>

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

                            <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                              <ul
                                role='list'
                                className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                              >
                                <li>
                                  หนังสือยินยอมให้ใช้สถานที่ตั้งสำนักงาน
                                  ของเจ้าบ้านลงลายมือชื่อ
                                </li>
                              </ul>
                            </Card>
                            <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                              <ul
                                role='list'
                                className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                              >
                                <li>
                                  สำเนาบัตรประจำตัวประชาชนของเจ้าบ้าน
                                  ลงลายมือชื่อรับรองสำเนาถูกต้อง
                                </li>
                              </ul>
                            </Card>
                            <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                              <ul
                                role='list'
                                className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                              >
                                <li>
                                  สำเนาทะเบียนบ้านของเจ้าบ้าน
                                  โดยเจ้าบ้านลงลายมือชื่อรับรองสำเนาถูกต้อง
                                </li>
                              </ul>
                            </Card>
                          </details>

                          <details className='group [&_summary::-webkit-details-marker]:hidden'>
                            <summary className='flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900'>
                              <ul
                                role='list'
                                className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                              >
                                <li>กรณีเป็นสัญญาเช่า/สัญญาซื้อขาย</li>
                              </ul>

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

                            <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                              <ul
                                role='list'
                                className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                              >
                                <li>
                                  หนังสือยินยอมให้ใช้สถานที่
                                  ผู้มีกรรมสิทธิ์ลงลายมือชื่อและประทับตราบริษัท
                                  (ถ้ามี)
                                </li>
                              </ul>
                            </Card>
                            <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                              <ul
                                role='list'
                                className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                              >
                                <li>
                                  สำเนาสัญญาซื้อขาย ระบุเลขที่อาคาร
                                  ผู้ซื้อลงลายมือชื่อและประทับตราบริษัท (ถ้ามี)
                                  /สำเนาสัญญาเช่า (ระบุเลขที่ตั้งอาคาร,
                                  ระยะเวลาเช่า,เช่าทำกิจการใด)
                                  ผู้มีกรรมสิทธิ์ลงลายมือชื่อ และประทับตราบริษัท
                                  (ถ้ามี) ถ้าเป็นบุคคลธรรมดา
                                  สำนหนังสือรับรองของบริษัท มีอายุ่ไม่เกิน 6
                                  เดือน โดยกรรมการลงลายมือชื่อ
                                  และประทับตราบริษัท (ถ้ามี)
                                  (ถ้าสัญญาเช่าเป็นภาษาอังกฤษต้องมีฉบับแปลภาษาไทย
                                  กรรมการลงลายมือชื่อและประทับตราบริษัท (ถ้ามี)
                                  )
                                </li>
                              </ul>
                            </Card>
                            <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                              <ul
                                role='list'
                                className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                              >
                                <li>
                                  เอกสารหลักฐานแสดงกรรมสิทธิ์หรือสิทธิครอบครองของผู้มีกรรมสิทธิ์ให้ใช้สถานที่ที่ใช้เป็นสำนักงาน
                                  เช่น โฉนด์ที่ดิน ,
                                  ทะเบียนบ้านที่ระบุสถานภาพเป็นเจ้าบ้าน
                                </li>
                              </ul>
                            </Card>
                            <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                              <ul
                                role='list'
                                className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                              >
                                <li>
                                  สำเนาบัตรประจำตัวประชาชน /สำเนาหนังสือเดินทาง
                                  (passport)
                                  ของผู้มีกรรมสิทธิ์ลงลายมือชื่อรับรองสำเนาถูกต้อง
                                </li>
                              </ul>
                            </Card>
                            <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                              <ul
                                role='list'
                                className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                              >
                                <li>
                                  สำเนาทะเบียนบ้านของผู้มีกรรมสิทธิ์งลายมือชื่อและประทับตราบริษัท
                                  (ถ้ามี)
                                </li>
                              </ul>
                            </Card>
                          </details>
                        </div>
                      </Card>

                      {/* <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                    {' '}
                    <Checkbox onChange={handleCheckboxChangeother}>
                      กรณีใช้สถานที่ของผู้อื่นเป็นสำนักงาน
                    </Checkbox>
                   
                    {isCheckedother && (
                      <>
                        <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              หนังสือยินยอมให้ใช้สถานที่ตั้งสำนักงาน
                              ของเจ้าบ้านลงลายมือชื่อ
                            </li>
                          </ul>
                        </Card>
                        <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              สำเนาบัตรประจำตัวประชาชนของเจ้าบ้าน
                              ลงลายมือชื่อรับรองสำเนาถูกต้อง
                            </li>
                          </ul>
                        </Card>
                        <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              สำเนาทะเบียนบ้านของเจ้าบ้าน
                              โดยเจ้าบ้านลงลายมือชื่อรับรองสำเนาถูกต้อง
                            </li>
                          </ul>
                        </Card>
                      </>
                    )}
                  </Card>

                  <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                    <Checkbox onChange={handleCheckboxChangehire}>
                      กรณีเป็นสัญญาเช่า/สัญญาซื้อขาย
                    </Checkbox>

                    {isCheckedhire && (
                      <>
                        <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              หนังสือยินยอมให้ใช้สถานที่
                              ผู้มีกรรมสิทธิ์ลงลายมือชื่อและประทับตราบริษัท
                              (ถ้ามี)
                            </li>
                          </ul>
                        </Card>
                        <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              สำเนาสัญญาซื้อขาย ระบุเลขที่อาคาร
                              ผู้ซื้อลงลายมือชื่อและประทับตราบริษัท (ถ้ามี)
                              /สำเนาสัญญาเช่า (ระบุเลขที่ตั้งอาคาร,
                              ระยะเวลาเช่า,เช่าทำกิจการใด)
                              ผู้มีกรรมสิทธิ์ลงลายมือชื่อ และประทับตราบริษัท
                              (ถ้ามี) ถ้าเป็นบุคคลธรรมดา
                              สำนหนังสือรับรองของบริษัท มีอายุ่ไม่เกิน 6 เดือน
                              โดยกรรมการลงลายมือชื่อ และประทับตราบริษัท (ถ้ามี)
                              (ถ้าสัญญาเช่าเป็นภาษาอังกฤษต้องมีฉบับแปลภาษาไทย
                              กรรมการลงลายมือชื่อและประทับตราบริษัท (ถ้ามี) )
                            </li>
                          </ul>
                        </Card>
                        <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              เอกสารหลักฐานแสดงกรรมสิทธิ์หรือสิทธิครอบครองของผู้มีกรรมสิทธิ์ให้ใช้สถานที่ที่ใช้เป็นสำนักงาน
                              เช่น โฉนด์ที่ดิน ,
                              ทะเบียนบ้านที่ระบุสถานภาพเป็นเจ้าบ้าน
                            </li>
                          </ul>
                        </Card>
                        <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              สำเนาบัตรประจำตัวประชาชน /สำเนาหนังสือเดินทาง
                              (passport)
                              ของผู้มีกรรมสิทธิ์ลงลายมือชื่อรับรองสำเนาถูกต้อง
                            </li>
                          </ul>
                        </Card>
                        <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              สำเนาทะเบียนบ้านของผู้มีกรรมสิทธิ์งลายมือชื่อและประทับตราบริษัท
                              (ถ้ามี)
                            </li>
                          </ul>
                        </Card>
                      </>
                    )}
                  </Card> */}
                    </Col>
                  </Row>
                </Card>

                {Array.from({ length: branchCount }, (_, index) => (
                  <Row gutter={[16, 8]} key={`branchRow_${index}`}>
                    <Col xs={24} sm={12} md={24} key={index}>
                      <Card
                        className=' p-2 mt-4 rounded-2xl'
                        title={
                          <>
                            เอกสารหลักฐาน
                            <Text type='danger'> สาขาที่ {index + 1}</Text>
                          </>
                        }
                      >
                        <Card className='rounded-2xl border border-blue-200 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>รูปถ่ายด้านหน้าและด้านในสำนักงาน</li>
                          </ul>
                          <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                            <ul
                              role='list'
                              className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                            >
                              <li>
                                รูปถ่ายด้านหน้าสำนักงาน เห็นตัวอาคารทั้งหลัง
                                โดยแสดงเลขที่ตั้งสำนักงานและป้ายชื่อภาษาไทยชัดเจน
                                (มีลักษณะคงทนถาวร) จำนวน 2 รูป
                              </li>
                            </ul>
                          </Card>
                          <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                            <ul
                              role='list'
                              className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                            >
                              <li>รูปถ่ายด้านในสำนักงาน จำนวน 2 รูป</li>
                            </ul>
                          </Card>
                        </Card>
                        <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              แผนที่ตั้งสำนักงาน
                              ผู้ขอรับใบอนุญาตประกอบธุรกิจนำเที่ยว
                            </li>
                          </ul>
                        </Card>
                        <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              หลักฐานแสดงกรรมสิทธิ์หรือสิทธิครอบครองสถานที่ที่ใช้เป็นสำนักงาน
                            </li>
                          </ul>
                        </Card>

                        <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                          <div className='space-y-4'>
                            <details className='group [&_summary::-webkit-details-marker]:hidden'>
                              <summary className='flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900'>
                                <ul
                                  role='list'
                                  className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                                >
                                  <li>กรณีใช้สถานที่ของผู้อื่นเป็นสำนักงาน</li>
                                </ul>

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

                              <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                                <ul
                                  role='list'
                                  className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                                >
                                  <li>
                                    หนังสือยินยอมให้ใช้สถานที่ตั้งสำนักงาน
                                    ของเจ้าบ้านลงลายมือชื่อ
                                  </li>
                                </ul>
                              </Card>
                              <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                                <ul
                                  role='list'
                                  className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                                >
                                  <li>
                                    สำเนาบัตรประจำตัวประชาชนของเจ้าบ้าน
                                    ลงลายมือชื่อรับรองสำเนาถูกต้อง
                                  </li>
                                </ul>
                              </Card>
                              <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                                <ul
                                  role='list'
                                  className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                                >
                                  <li>
                                    สำเนาทะเบียนบ้านของเจ้าบ้าน
                                    โดยเจ้าบ้านลงลายมือชื่อรับรองสำเนาถูกต้อง
                                  </li>
                                </ul>
                              </Card>
                            </details>

                            <details className='group [&_summary::-webkit-details-marker]:hidden'>
                              <summary className='flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900'>
                                <ul
                                  role='list'
                                  className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                                >
                                  <li>กรณีเป็นสัญญาเช่า/สัญญาซื้อขาย</li>
                                </ul>

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

                              <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                                <ul
                                  role='list'
                                  className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                                >
                                  <li>
                                    หนังสือยินยอมให้ใช้สถานที่
                                    ผู้มีกรรมสิทธิ์ลงลายมือชื่อและประทับตราบริษัท
                                    (ถ้ามี)
                                  </li>
                                </ul>
                              </Card>
                              <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                                <ul
                                  role='list'
                                  className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                                >
                                  <li>
                                    สำเนาสัญญาซื้อขาย ระบุเลขที่อาคาร
                                    ผู้ซื้อลงลายมือชื่อและประทับตราบริษัท
                                    (ถ้ามี) /สำเนาสัญญาเช่า
                                    (ระบุเลขที่ตั้งอาคาร,
                                    ระยะเวลาเช่า,เช่าทำกิจการใด)
                                    ผู้มีกรรมสิทธิ์ลงลายมือชื่อ
                                    และประทับตราบริษัท (ถ้ามี)
                                    ถ้าเป็นบุคคลธรรมดา สำนหนังสือรับรองของบริษัท
                                    มีอายุ่ไม่เกิน 6 เดือน
                                    โดยกรรมการลงลายมือชื่อ และประทับตราบริษัท
                                    (ถ้ามี)
                                    (ถ้าสัญญาเช่าเป็นภาษาอังกฤษต้องมีฉบับแปลภาษาไทย
                                    กรรมการลงลายมือชื่อและประทับตราบริษัท
                                    (ถ้ามี) )
                                  </li>
                                </ul>
                              </Card>
                              <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                                <ul
                                  role='list'
                                  className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                                >
                                  <li>
                                    เอกสารหลักฐานแสดงกรรมสิทธิ์หรือสิทธิครอบครองของผู้มีกรรมสิทธิ์ให้ใช้สถานที่ที่ใช้เป็นสำนักงาน
                                    เช่น โฉนด์ที่ดิน ,
                                    ทะเบียนบ้านที่ระบุสถานภาพเป็นเจ้าบ้าน
                                  </li>
                                </ul>
                              </Card>
                              <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                                <ul
                                  role='list'
                                  className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                                >
                                  <li>
                                    สำเนาบัตรประจำตัวประชาชน
                                    /สำเนาหนังสือเดินทาง (passport)
                                    ของผู้มีกรรมสิทธิ์ลงลายมือชื่อรับรองสำเนาถูกต้อง
                                  </li>
                                </ul>
                              </Card>
                              <Card className='rounded-2xl border border-blue-100 mt-4 shadow-sm'>
                                <ul
                                  role='list'
                                  className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                                >
                                  <li>
                                    สำเนาทะเบียนบ้านของผู้มีกรรมสิทธิ์งลายมือชื่อและประทับตราบริษัท
                                    (ถ้ามี)
                                  </li>
                                </ul>
                              </Card>
                            </details>
                          </div>
                        </Card>
                      </Card>
                    </Col>
                  </Row>
                ))}

                {isChecked && (
                  <Card
                    className='p-2 mt-4 rounded-2xl'
                    title='กรณีที่ให้บริการดำน้ำแบบดำลึกโดยมีอุปกรณ์เครื่องช่วยหายใจและอุปกรณ์อื่นที่ช่วยในการดำน้ำ'
                  >
                    <Row gutter={[16, 8]}>
                      <Col xs={24} sm={12} md={24}>
                        <Card className='rounded-2xl border border-blue-200 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>ใบทะเบียนเรือไทย</li>
                          </ul>

                          <p className='ps-5'>
                            ตามกฏหมายว่าด้วยเรือไทย
                            และใบสำคัญรับรองการตรวจเรือตามกฏหมายว่าด้วยการเดินเรือในน่านน้ำไทยของเรือที่จะใช้ในการให้บริการดำน้ำนั้น
                          </p>
                        </Card>
                        <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              ใบอนุญาตให้ใช้เครื่องวิทยุคมนาคมตามกฏหมายว่าด้วยวิทยุคมนาคม
                            </li>
                          </ul>
                        </Card>
                        <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              ใบอนุญาตให้เข้าไปดำเนินกิจการท่องเที่ยวและพักอาศัยในอุทยานแห่งชาติ
                            </li>
                          </ul>

                          <p className='ps-5'>
                            สำหรับการบริการนำเที่ยวแก่นักท่องเที่ยวในอุทยานแห่งชาติตามกฏหมายว่าด้วยอุทยานแห่งชาติเฉพาะกรณีมีการนำเที่ยวในเขตอุทยานแห่งชาติ
                          </p>
                        </Card>
                        <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              ใบรับรองมาตรฐานอุปกรณ์ดำน้ำ ซึ่งออกให้ไม่เกิน 15
                              วัน ก่อนวันยื่นคำขอรับใบอนุญาตประกอบธุรกิจนำเที่ยว
                            </li>
                          </ul>

                          <p className='ps-5'>
                            (1) ถังอากาศ (2) กะบอกสูบ (3)
                            อุปกรณ์ควบคุมการสลับอากาศ (4)
                            อุปกรณ์วัดความลึกและแรงดัน (5) อุปกรณ์การทรงตัวในน้ำ
                            (6) ชุดดำน้ำ (7) หน้ากากดำน้ำ (8) รองเท้าดำน้ำ (9)
                            ครีบสำหรับรองเท้าดำน้ำ (10) อุปกรณ์ช่วยหายใจใต้น้ำ
                            (11) ตัวถ่วงน้ำหนัก (12) เข็มทิศ
                          </p>
                        </Card>
                        <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              ใบรับรองว่ามีพนักงานสามารถดูแลตรวจสอบอุปกรณ์ดำน้ำเบื้องต้น
                            </li>
                          </ul>
                        </Card>
                        <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              ใบรับรองว่ามีผู้ควบคุมการดำน้ำและผู้สอนการดำน้ำ
                            </li>
                          </ul>
                        </Card>
                        <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>
                              ใบรับรองว่ามีผู้สอนการดำน้ำเฉพาะในกรณีที่มีการสอนดำน้ำ
                            </li>
                          </ul>
                        </Card>
                        <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                          <ul
                            role='list'
                            className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                          >
                            <li>สำเนากรมธรรม์ประกันภัย</li>
                          </ul>
                          <p className='ps-5'>
                            ประกันอุบัติเหตุจากการดำน้ำให้กับนักท่องเที่ยว
                            มัคคุเทศก์ และผู้นำเที่ยวในระหว่างเดินทางท่องเที่ยว
                            โดยมีจำนวนเงินเอาประกันภัยกรณีเสียชีวิต
                            สูญเสียอวัยวะหรือทุพพลภาพไม่ต่ำกว่าหนึ่งล้านบาทต่อคนและกรณีบาดเจ็บไม่ต่ำกว่าห้าแสนบาทต่อคน
                            และต้องมีอายุกรมธรรม์ไม่น้อยกว่าหนึ่งปี
                            นับแต่วันยื่นคำขอรับใบอนุญาตประกอบธุรกิจนำเที่ยว
                          </p>
                        </Card>

                        <br />
                        <Text type='danger'>
                          หมายเหตุ <br />
                          (1) ใบรับรองมาตรฐานอุปกรณ์ดำน้ำ <br />
                          (2)
                          ใบรับรองว่ามีพนักงานสามารถดูแลตรวจสอบอุปกรณ์ดำน้ำเบื้องต้น{' '}
                          <br />
                          (3) ใบรับรองว่ามีผู้ควบคุมการดำน้ำและผู้สอนการดำน้ำ{' '}
                          <br />
                          (4)
                          ใบรับรองว่ามีผู้สอนการดำน้ำเฉพาะในกรณีที่มีการสอนดำน้ำ{' '}
                          <br />*
                          ให้ออกโดยหน่อยงานหรือองค์กรที่รัฐมนตรีประกาศกำหนด *
                        </Text>
                      </Col>
                    </Row>
                  </Card>
                )}
              </div>
            </div>
          </>
        </Card>
      </div>
    </div>
  );
};

export default JuristicRequestPage;
