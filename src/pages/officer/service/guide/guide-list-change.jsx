import React, { useState } from 'react';
import {
  Form,
  Input as AntInput,
  Button,
  Select,
  Card,
  Col,
  Row,
  Checkbox,
  Radio,
  DatePicker,
  Tabs,
  Modal,
  Typography,
  Spin,
  Tag,
  Space,
} from 'antd';

import { Link } from 'react-router-dom';
import th_TH from 'antd/es/locale/th_TH';
import { SearchOutlined } from '@ant-design/icons';

import { ConfigProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/th';

moment.locale('th');

const { Text } = Typography;

const Input = (props) => <AntInput {...props} size='large' />;

const GuideListChange = () => {
  const [form] = Form.useForm();

  const [current, setCurrent] = useState(0);

  ////////////////////////////////////////////////////

  const [activeTab, setActiveTab] = useState(0);

  const formatDate = (value) => {
    if (value) {
      const thaiYear = value.year() + 543;
      return value.clone().year(thaiYear).format('DD/MM/YYYY');
    }
  };
  /* --------------------Date----------------------- */
  const handleDateChange = (date, dateString) => {
    if (date) {
      const birthYearBE = moment(dateString, 'DD/MM/YYYY').year();

      const currentYearBE = moment().year() + 543;

      const age = currentYearBE - birthYearBE;

      form.setFieldsValue({ age });
    } else {
      form.setFieldsValue({ age: undefined });
    }
  };

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

  //////////////////Form selected////////////////////////
  const handleChange = (value) => {
    console.log(`selected ${value}`);
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

  /////////////////////////////////////////////////////

  return (
    <div>
        <div className='space-y-4 '>
          <Col xs={24} sm={12} md={24}>
            <details className='rounded-xl group border-s-4 border-primary-500 bg-white p-6 [&_summary::-webkit-details-marker]:hidden'>
              <summary className=' flex items-center justify-between gap-1.5'>
                <div className='text-th'>
                  <h4 className='font-bold '>
                    ยื่นคำขอเปลี่ยนแปลงรายการสถานะมัคคุเทศก์
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

        <Card className='rounded-2xl mt-4 '>
          <Row gutter={16}>
            <Col xs={24} sm={12} md={24}>
              <Button
                type='dashed'
                icon={<SearchOutlined />}
                onClick={handleButtonClick}
                danger
                className='w-full mb-4 text-body-page text-body-size'
              >
                เลือกใบอนุญาต
                {isLoading && (
                  <div className='flex justify-center '>
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
                    <div className='relative p-6 text-body-page text-body-size'>
                      <div className='flex gap-4 '>
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
                            โปรดเลือกใบอนุญาต
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
            <div className='hidden sm:block overflow-auto rounded-xl border border-gray-100 bg-gray-100 p-2 mb-2'>
              <ul className='text-body-page  flex items-center gap-2 text-sm  whitespace-nowrap'>
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
                    ที่อยู่ตามทะเบียนบ้าน
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setActiveTab(3)}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-white hover:text-gray-700 hover:shadow ${
                      activeTab === 3 ? 'bg-white shadow text-gray-900' : ''
                    }`}
                  >
                    ที่อยู่ปัจจุบันที่สามารถติดต่อได้
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => setActiveTab(4)}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-white hover:text-gray-700 hover:shadow ${
                      activeTab === 4 ? 'bg-white shadow text-gray-900' : ''
                    }`}
                  >
                    ความสามารถด้านภาษา
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setActiveTab(5)}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-white hover:text-gray-700 hover:shadow ${
                      activeTab === 5 ? 'bg-white shadow text-gray-900' : ''
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
                <option value={0}>ข้อมูลใบอนุญาต</option>
                <option value={1}>รายละเอียด</option>
                <option value={2}>ที่อยู่ตามทะเบียนบ้าน</option>
                <option value={3}>ที่อยู่ปัจจุบันที่สามารถติดต่อได้</option>
                <option value={4}>ความสามารถด้านภาษา</option>
                <option value={5}>เอกสารหลักฐาน</option>
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
                    className='text-body-page text-body-size'
                  >
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
                    className='text-body-page text-body-size'
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
                  </Form>
                </div>
              </div>
              <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>
                <div>
                  <Form
                    form={form}
                    layout='vertical'
                    /* onFinish={onFinish} */
                    validateMessages={{
                      required: 'กรุณากรอกข้อมูล',
                    }}
                    className='text-body-page text-body-size'
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
                    </Row>
                  </Form>
                </div>
              </div>
              <div style={{ display: activeTab === 3 ? 'block' : 'none' }}>
                <div>
                  <Checkbox
                    name='copyaddress'
                    className='text-body-page text-body-size mb-6'
                    onChange={handleCopyAddress}
                  >
                    คัดลอกจากที่อยู่ตามทะเบียนบ้าน
                  </Checkbox>
                </div>
                <Form
                  form={form}
                  layout='vertical'
                  /* onFinish={onFinish} */
                  validateMessages={{
                    required: 'กรุณากรอกข้อมูล',
                  }}
                  className='text-body-page text-body-size'
                >
                  <Row gutter={16}>
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
                        <Input placeholder='จังหวัด' />
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
                </Form>
              </div>
            </div>

            <div style={{ display: activeTab === 4 ? 'block' : 'none' }}>
              <div className='text-body-page text-body-size pl-4'>
                <Checkbox.Group onChange={onChangelanguage}>
                  <Row>
                    <Col span={8}>
                    <Checkbox id='english' name='language' className='pb-4' value='english'>
                        อังกฤษ
                      </Checkbox>
                    </Col>
                    <Col span={16}>
                    <Radio.Group id='english_level' name='english_level' onChange={onChangelanguageeng} value={value}>
                        <Radio value={1}>ดีมาก</Radio>
                        <Radio value={2}>ดี</Radio>
                        <Radio value={3}>พอใช้</Radio>
                      </Radio.Group>
                    </Col>
                    <Col span={8}>
                    <Checkbox id='china' name='language' className='pb-4' value='china'>
                        จีน
                      </Checkbox>
                    </Col>
                    <Col span={16}>
                    <Radio.Group id='china_level' name='china_level' onChange={onChangelanguagechina} value={value2}>

                        <Radio value={1}>ดีมาก</Radio>
                        <Radio value={2}>ดี</Radio>
                        <Radio value={3}>พอใช้</Radio>
                      </Radio.Group>
                    </Col>
                    <Col span={8}>
                    <Checkbox id='other_language' name='language' value='other'>
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
                    <Radio.Group id='other_language_level' name='other_language_level' onChange={onChangelanguageother} value={value3}>

                        <Radio value={1}>ดีมาก</Radio>
                        <Radio value={2}>ดี</Radio>
                        <Radio value={3}>พอใช้</Radio>
                      </Radio.Group>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>
            </div>

            <div style={{ display: activeTab === 5 ? 'block' : 'none' }}>
              <div className='text-body-page text-body-size'>
                <Row gutter={24}>
                  <Col xs={24} sm={12} md={24}>
                    <Card className='rounded-2xl border border-blue-200 shadow-sm'>
                      <ul
                        role='list'
                        className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'
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
                        className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'
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
                        className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'
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
                        className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'
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
                        className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'
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
                        className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'
                      >
                        <li>
                          ใบรับรองของผู้ประกอบวิชาชีพเวชกรรม (ใบรับรองแพทย์
                          ไม่เกิน 30 วัน
                          ซึ่งรับรองว่าผู้ชอบัตรประจําตัวมัคคุเทศก์ไม่เป็นโรคพิษสุราเรื้อรังหรือติตยาเสพติตให้โทษ
                          หรือเป็นโรคติตต่อที่คณะกรรมการกําหนด
                          และประทับตราของสถานพยาบาล)
                        </li>
                      </ul>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </>
        </Card>
      </div>
  );
};

export default GuideListChange;
