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
import { CloseOutlined } from '@ant-design/icons';

const { Text } = Typography;

import { ConfigProvider } from 'antd';
import th_TH from 'antd/es/locale/th_TH';

import moment from 'moment';
import 'moment/locale/th';
import { CheckCircleTwoTone } from '@ant-design/icons';

// Set moment to use the Thai locale globally
moment.locale('th');
const { Step } = Steps;

const Input = (props) => <AntInput {...props} size='large' />;

const JuristicFormListchangePage = () => {
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

  const [isCheckedOfficerreduce, setIsCheckedOfficerreduce] = useState(false);

  //////////////////เพิ่มสาขา//////////////////////////////////
  const [showFormAdd, setShowFormAdd] = useState(false);
  //////////////////ลดสาขา//////////////////////////////////
  const [showFormReduce, setShowFormReduce] = useState(false);
  //////////////////เปลี่ยนชื่อ-สกุล กรรมการ/////////////////////
  const [showFormDirectorname, setShowFormDirectorname] = useState(false);
  //////////////////เปลี่ยนกรรมการ////////////////////////////
  const [showFormDirector, setShowFormDirector] = useState(false);
  //////////////////เปลี่ยนที่ตั้งสำนักงาน/////////////////////////
  const [showFormAddress, setShowFormAddress] = useState(false);
  //////////////////เปลี่ยนที่ตั้งสาขา////////////////////////////
  const [showFormBranch, setShowFormBranch] = useState(false);

  const [showFormOfficerreduce, setShowFormOfficerreduce] = useState(false);
  /////////////////////////////////////////////////////////
  const [isCheckedAdd, setIsCheckedAdd] = useState(false);
  const [isCheckedReduce, setIsCheckedReduce] = useState(false);
  const [isCheckedDirectorname, setIsCheckedDirectorname] = useState(false);
  const [isCheckedDirector, setIsCheckedDirector] = useState(false);
  const [isCheckedAddress, setIsCheckedAddress] = useState(false);
  const [isCheckedBranch, setIsCheckedBranch] = useState(false);

  // โหลดค่าและตั้งค่า state เมื่อ component โหลด
  useEffect(() => {
    const storedCheckedAdd = 'addCheckbox';
    const storedCheckedReduce = 'reduceCheckbox';
    const storedCheckedDirectorname = 'directornameCheckbox';
    const storedCheckedDirector = 'directorCheckbox';
    const storedCheckedAddress = 'addressCheckbox';
    const storedCheckedBranch = 'branchCheckbox';

    const storedCheckedOfficerreduce = 'officerreduceCheckbox';

    if (storedCheckedAdd) {
      const isCheckedStoredAdd = storedCheckedAdd === 'true';
      setIsCheckedAdd(isCheckedStoredAdd);
      setShowFormAdd(isCheckedStoredAdd);
    }
    if (storedCheckedReduce) {
      const isCheckedStoredReduce = storedCheckedReduce === 'true';
      setIsCheckedReduce(isCheckedStoredReduce);
      setShowFormReduce(isCheckedStoredReduce);
    }
    if (storedCheckedDirectorname) {
      const isCheckedStoredDirectorname = storedCheckedDirectorname === 'true';
      setIsCheckedDirectorname(isCheckedStoredDirectorname);
      setShowFormDirectorname(isCheckedStoredDirectorname);
    }
    if (storedCheckedDirector) {
      const isCheckedStoredDirector = storedCheckedDirector === 'true';
      setIsCheckedDirector(isCheckedStoredDirector);
      setShowFormDirector(isCheckedStoredDirector);
    }
    if (storedCheckedAddress) {
      const isCheckedStoredAddress = storedCheckedAddress === 'true';
      setIsCheckedAddress(isCheckedStoredAddress);
      setShowFormAddress(isCheckedStoredAddress);
    }
    if (storedCheckedBranch) {
      const isCheckedStoredBranch = storedCheckedBranch === 'true';
      setIsCheckedBranch(isCheckedStoredBranch);
      setShowFormBranch(isCheckedStoredBranch);
    }

    if (storedCheckedOfficerreduce) {
      const isCheckedStoredOfficerreduce =
        storedCheckedOfficerreduce === 'true';
      setIsCheckedOfficerreduce(isCheckedStoredOfficerreduce);
      setShowFormOfficerreduce(isCheckedStoredOfficerreduce);
    }
  }, []);

  const handleCheckboxChangeAdd = (e) => {
    const newCheckedStatus = e.target.checked;
    setIsCheckedAdd(newCheckedStatus);
    setShowFormAdd(newCheckedStatus);

    if (!newCheckedStatus) {
      setBranchCount(0);
    }
  };

  const handleCheckboxChangeReduce = (e) => {
    const newCheckedStatus = e.target.checked;
    setIsCheckedReduce(newCheckedStatus);
    setShowFormReduce(newCheckedStatus);

    if (!newCheckedStatus) {
      setShowFormReduce(false);
      setShowFormOfficerreduce(false);
    }
  };

  const handleCheckboxOfficerreduce = (e) => {
    const newCheckedStatus = e.target.checked;
    setIsCheckedOfficerreduce(newCheckedStatus);
    setShowFormOfficerreduce(newCheckedStatus);

    if (!newCheckedStatus) {
      setShowFormOfficerreduce(false);
    }
  };

  const handleCheckboxChangeDirectorname = (e) => {
    setIsCheckedDirectorname(e.target.checked);
    setShowFormDirectorname(e.target.checked);
  };

  const handleCheckboxChangeDirector = (e) => {
    setIsCheckedDirector(e.target.checked);
    setShowFormDirector(e.target.checked);
  };

  const handleCheckboxChangeAddress = (e) => {
    setIsCheckedAddress(e.target.checked);
    setShowFormAddress(e.target.checked);
  };

  const handleCheckboxChangeBranch = (e) => {
    setIsCheckedBranch(e.target.checked);
    setShowFormBranch(e.target.checked);
  };
  ///////////////////////////////////////////////
  //////////////////เอกสารเพิ่มสาขา//////////////////////////////////
  const [branchCount, setBranchCount] = useState(0);

  const handleBranchCountChange = (e) => {
    setBranchCount(Number(e.target.value));
  };

  /////////////////////////////////////////////////////////////
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

  const steps = [
    {
      title: 'อัพโหลดเอกสาร',
      description: 'อัพโหลดเอกสารที่เกี่ยวข้อง',
      content: (
        <>
          
        </>
      ),
    },
  ];

  return (
    <div>
      <div className='space-y-4 '>
        <Col xs={24} sm={12} md={24}>
          <details className='rounded-xl group border-s-4 border-primary-500 bg-white p-6 [&_summary::-webkit-details-marker]:hidden'>
            <summary className=' flex items-center justify-between gap-1.5'>
              <div className='text-th'>
                <h4 className='font-bold '>
                  ยื่นคำขอเปลี่ยนแปลงรายการเกี่ยวกับการประกอบธุรกิจนำเที่ยว
                  (นิติบุคคล)
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
                          โปรดเลือกใบอนุญาตที่ต้องการต่ออายุ
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
                  รายละเอียดการเปลี่ยนแปลง
                </a>
              </li>
              <li>
                <a
                  onClick={() => setActiveTab(4)}
                  className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-white hover:text-gray-700 hover:shadow ${
                    activeTab === 4 ? 'bg-white shadow text-gray-900' : ''
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
              <option value={1}>รายละเอียดนิติบุคคล</option>
              <option value={2}>ที่ตั้งสํานักงาน</option>
              <option value={3}>รายละเอียดการเปลี่ยนแปลง</option>
              <option value={4}>เอกสารหลักฐาน</option>
            </select>
          </div>

          <div className='py-3'>
            <div style={{ display: activeTab === 0 ? 'block' : 'none' }}>
              <div className='card-title'>
                <Text type='secondary'>ชื่อธุรกิจนำเที่ยว (Trade Name)</Text>
                <Form
                  form={form}
                  layout='vertical'
                  /* onFinish={onFinish} */
                  validateMessages={{
                    required: 'กรุณากรอกข้อมูล',
                  }}
                >
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
                      <Tag color='#87d068'>ประกอบธุรกิจนําเที่ยวประเภท</Tag>
                      นําเที่ยวจากต่างประเทศ (Inbound)
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
                      name='lnumber'
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
              <div>
                <div className='card-title'>
                  <Text type='secondary'>ที่ตั้งสำนักงาน</Text>
                </div>
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
                  form={form}
                  layout='vertical'
                  /* onFinish={onFinish} */
                  validateMessages={{
                    required: 'กรุณากรอกข้อมูล',
                  }}
                >
                  <Row gutter={[16, 8]}>
                    <Col xs={24} sm={12} md={24} key={index}>
                      <Card
                        className='card-title p-2 rounded-2xl'
                        title={
                          <>
                            ที่ตั้งสำนักงาน{' '}
                            <Text type='danger'>สาขาที่ {index + 1}</Text>
                          </>
                        }
                        style={{
                          marginTop: 16,
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
                      </Card>
                    </Col>
                  </Row>
                  </Form>
                ))}
              </div>
            </div>

            <div style={{ display: activeTab === 3 ? 'block' : 'none' }}>
            <div>
                
                <Card>
                  <Row gutter={16}>
                    <Col xs={24} sm={12} md={24}>
                      <fieldset className='grid  gap-4'>
                        <legend className='sr-only'>Delivery</legend>
                        <Row gutter={16}>
                          <Col xs={24} sm={24} md={24} lg={24}>
                            <div>
                              <input
                                type='checkbox'
                                name='add'
                                value='add'
                                id='add'
                                className='peer hidden [&:checked_+_label_svg]:block'
                                /* onChange={(e) => setShowFormAdd(e.target.checked)}
                                 */
                                checked={isCheckedAdd}
                                onChange={handleCheckboxChangeAdd}
                              />

                              <label
                                htmlFor='add'
                                className='flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
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
                                    เพิ่มสํานักงานสาขา
                                  </p>
                                </div>
                                <p className='text-green-400'>
                                  ค่าธรรมเนียมสาขาละ 1,000 บาท
                                </p>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <Row gutter={16}>
                          <Col xs={24} sm={24} md={24} lg={24}>
                            <div>
                              <input
                                type='checkbox'
                                name='reduce'
                                value='reduce'
                                id='reduce'
                                className='peer hidden [&:checked_+_label_svg]:block'
                                /*  onChange={(e) => setShowFormReduce(e.target.checked)} */
                                checked={isCheckedReduce}
                                onChange={handleCheckboxChangeReduce}
                              />
                              <label
                                htmlFor='reduce'
                                className='flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
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
                                    ลดสํานักงานสาขา
                                  </p>
                                </div>
                                <p className='text-green-400'>
                                  ไม่มีค่าธรรมเนียม
                                </p>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <Row gutter={16}>
                          <Col xs={24} sm={24} md={24} lg={24}>
                            <div>
                              <input
                                type='checkbox'
                                name='directorname'
                                value='directorname'
                                id='directorname'
                                className='peer hidden [&:checked_+_label_svg]:block'
                                /* onChange={(e) => setShowFormName(e.target.checked)}
                                 */
                                checked={isCheckedDirectorname}
                                onChange={handleCheckboxChangeDirectorname}
                              />

                              <label
                                htmlFor='directorname'
                                className='flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
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
                                    เปลี่ยนแปลงชื่อ-สกุล
                                  </p>
                                </div>
                                <p className='text-green-400'>
                                  ไม่มีค่าธรรมเนียม
                                </p>
                              </label>
                            </div>
                          </Col>
                        </Row>

                        {/* <Row gutter={16}>
              <Col xs={24} sm={24} md={24} lg={24}>
                <div>
                  <input
                    type='checkbox'
                    name='director'
                    value='4'
                    id='4'
                    className='peer hidden [&:checked_+_label_svg]:block'
                  
                    checked={isCheckedDirector}
                    onChange={handleCheckboxChangeDirector}
                  />

                  <label
                    htmlFor='4'
                    className='flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
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

                      <p className='text-gray-700'>เปลี่ยนแปลงกรรมการ</p>
                    </div>
                    <p className='text-green-400'>ไม่มีค่าธรรมเนียม</p>
                  </label>
                </div>
              </Col>
            </Row> 

          */}
                        <Row gutter={16}>
                          <Col xs={24} sm={24} md={24} lg={24}>
                            <div>
                              <input
                                type='checkbox'
                                name='address'
                                value='address'
                                id='address'
                                className='peer hidden [&:checked_+_label_svg]:block'
                                /* onChange={(e) => setShowFormAddress(e.target.checked)} */
                                checked={isCheckedAddress}
                                onChange={handleCheckboxChangeAddress}
                              />

                              <label
                                htmlFor='address'
                                className='flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
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
                                    เปลี่ยนแปลงที่ตั้งสำนักงาน
                                  </p>
                                </div>
                                <p className='text-green-400'>
                                  ไม่มีค่าธรรมเนียม
                                </p>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <Row gutter={16}>
                          <Col xs={24} sm={24} md={24} lg={24}>
                            <div>
                              <input
                                type='checkbox'
                                name='branch'
                                value='branch'
                                id='branch'
                                className='peer hidden [&:checked_+_label_svg]:block'
                                /*  onChange={(e) => setShowFormBranch(e.target.checked)} */
                                checked={isCheckedBranch}
                                onChange={handleCheckboxChangeBranch}
                              />

                              <label
                                htmlFor='branch'
                                className='flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
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
                                    เปลี่ยนแปลงที่ตั้งสำนักงานสาขา
                                  </p>
                                </div>
                                <p className='text-green-400'>
                                  ไม่มีค่าธรรมเนียม
                                </p>
                              </label>
                            </div>
                          </Col>
                        </Row>
                      </fieldset>
                    </Col>
                  </Row>
                </Card>

                {showFormAdd && (
                  <Card
                    style={{
                      marginTop: 24,
                    }}
                    className='p-2 rounded-2xl'
                    title={
                      <>
                        <CheckCircleTwoTone twoToneColor='#52c41a' />{' '}
                        <Typography.Text type='secondary'>
                          เพิ่มสำนักงานสาขา{' '}
                        </Typography.Text>
                      </>
                    }
                  >
                    <Form
                      form={form}
                      layout='vertical'
                      /* onFinish={onFinish} */
                      validateMessages={{
                        required: 'กรุณากรอกข้อมูล',
                      }}
                    >
                      <Form.Item
                        name='branchamount'
                        label='จำนวนสํานักงานสาขาที่เพิ่ม'
                        rules={[{ required: false }]}
                      >
                        <Input
                          type='number'
                          placeholder='จำนวนสํานักงานสาขา'
                          onChange={handleBranchCountChange}
                        />
                      </Form.Item>
                    </Form>
                    {Array.from({ length: branchCount }, (_, index) => (
                      <Row gutter={[16, 8]}>
                        <Col xs={24} sm={12} md={24} key={index}>
                          <Card
                            className=' rounded-2xl mb-4'
                            type='inner'
                            title={
                              <>
                                ที่ตั้งสำนักงาน{' '}
                                <Text type='danger'>สาขาที่ {index + 1}</Text>
                              </>
                            }
                          >
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
                                    name={`branch_${index}_address_no`}
                                    label='บ้านเลขที่'
                                    rules={[{ required: false }]}
                                  >
                                    <Input placeholder='บ้านเลขที่' />
                                  </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={8}>
                                  <Form.Item
                                    name={`branch_${index}_building`}
                                    label='อาคาร'
                                    rules={[{ required: false }]}
                                  >
                                    <Input placeholder='อาคาร' />
                                  </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={8}>
                                  <Form.Item
                                    name={`branch_${index}_floor`}
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
                                    name={`branch_${index}_moo`}
                                    label='หมู่ที่'
                                    rules={[{ required: false }]}
                                  >
                                    <Input
                                      type='number'
                                      placeholder='หมู่ที่'
                                    />
                                  </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={8}>
                                  <Form.Item
                                    name={`branch_${index}_soi`}
                                    label='ตรอก/ซอย'
                                    rules={[{ required: false }]}
                                  >
                                    <Input placeholder='ตรอก/ซอย' />
                                  </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={8}>
                                  <Form.Item
                                    name={`branch_${index}_road`}
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
                                    name={`branch_${index}_province_id`}
                                    label='จังหวัด'
                                    rules={[{ required: false }]}
                                  >
                                    <Input
                                      type='text'
                                      placeholder='จังหวัด'
                                    />
                                  </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={8}>
                                  <Form.Item
                                    name={`branch_${index}_district_id`}
                                    label='เขต/อำเภอ'
                                    rules={[{ required: false }]}
                                  >
                                    <Input placeholder='เขต/อำเภอ' />
                                  </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={8}>
                                  <Form.Item
                                    name={`branch_${index}_subdistrict_id`}
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
                                    name={`branch_${index}_zipcode`}
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
                                    name={`branch_${index}_telephone`}
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
                                    name={`branch_${index}_mobile`}
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
                                    name={`branch_${index}_fax`}
                                    label='โทรสาร'
                                    rules={[{ required: false }]}
                                  >
                                    <Input
                                      type='number'
                                      placeholder='โทรสาร'
                                    />
                                  </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={8}>
                                  <Form.Item
                                    name={`branch_${index}_email`}
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
                                    name={`branch_${index}_website`}
                                    label='เว็บไซต์'
                                    rules={[{ required: false }]}
                                  >
                                    <Input placeholder='เว็บไซต์' />
                                  </Form.Item>
                                </Col>
                              </Row>
                            </Form>
                          </Card>
                        </Col>
                      </Row>
                    ))}
                  </Card>
                )}

                {showFormReduce && (
                  <Card
                    className='p-2 rounded-2xl'
                    style={{
                      marginTop: 24,
                    }}
                    /*               type='inner'
                     */ title={
                      <>
                        <CheckCircleTwoTone twoToneColor='#52c41a' />{' '}
                        <Typography.Text type='secondary'>
                          ลดสํานักงานสาขา{' '}
                        </Typography.Text>
                      </>
                    }
                  >
                    <input
                      type='checkbox'
                      name='branch_choose'
                      value='branch_choose'
                      id='branch_choose'
                      className='peer hidden [&:checked_+_label_svg]:block'
                    />

                    <Card
                      className=' rounded-2xl'
                      title={
                        <>
                          <Checkbox
                            checked={isCheckedOfficerreduce}
                            onChange={handleCheckboxOfficerreduce}
                          >
                            เลือกสำนักงานสาขา
                          </Checkbox>
                        </>
                      }
                      type='inner'
                    >
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
                              name='address_no'
                              label='บ้านเลขที่'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='building'
                              label='อาคาร'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='floor'
                              label='ชั้น'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />
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
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='soi'
                              label='ตรอก/ซอย'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='road'
                              label='ถนน'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />
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
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='district_id'
                              label='เขต/อำเภอ'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='subdistrict_id'
                              label='แขวง/ตำบล'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />
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
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='telephone'
                              label='โทรศัพท์สำนักงาน'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='mobile'
                              label='โทรศัพท์มือถือ'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={16}>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='text'
                              label='โทรสาร'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='text'
                              label='อีเมล'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='website'
                              label='เว็บไซต์'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Form>
                    </Card>
                  </Card>
                )}

                {showFormDirectorname && (
                  <Card
                    className='p-2 rounded-2xl'
                    style={{
                      marginTop: 24,
                    }}
                    title={
                      <>
                        <CheckCircleTwoTone twoToneColor='#52c41a' />{' '}
                        <Typography.Text type='secondary'>
                          เปลี่ยนแปลงชื่อ-สกุล{' '}
                        </Typography.Text>
                      </>
                    }
                  >
                    <div className='p-4 h-58 justify-center items-center border border-dashed border-gray-200 rounded-xl'>
                      <Tag bordered={false} color='processing'>
                        *จาก*
                      </Tag>
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
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-4 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />{' '}
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='firstname_th'
                              label='ชื่อ (TH)'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-4 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />{' '}
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='lastname_th'
                              label='นามสกุล (TH)'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-4 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />{' '}
                            </Form.Item>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                    <br />
                    <div className='p-4 h-58 bg-gray-50 justify-center items-center border border-dashed border-gray-200 rounded-xl'>
                      <Tag bordered={false} color='processing'>
                        *เป็น*
                      </Tag>
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
                  </Card>
                )}

                {showFormDirector && (
                  <Card
                    className='p-2 rounded-2xl'
                    style={{
                      marginTop: 24,
                    }}
                    title={
                      <>
                        <CheckCircleTwoTone twoToneColor='#52c41a' />{' '}
                        <Typography.Text type='secondary'>
                          เปลี่ยนแปลงกรรมการ{' '}
                        </Typography.Text>
                        {/*  <Tag bordered={false} color='processing'>
          *เลือกสำนักงานสาขา*
        </Tag> */}
                      </>
                    }
                  >
                    <div className='py-3 flex items-center text-sm text-gray-600 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:after:border-gray-600'>
                      กรรมการคนที่ 1
                    </div>
                    <Tag bordered={false} color='gold'>
                      จาก
                    </Tag>

                    <div className='p-4 h-58 justify-center items-center border border-dashed border-gray-200 rounded-xl'>
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
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-4 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />{' '}
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='firstname_th'
                              label='ชื่อ (TH)'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-4 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />{' '}
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='lastname_th'
                              label='นามสกุล (TH)'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-4 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />{' '}
                            </Form.Item>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                    <br />
                    <Tag bordered={false} color='gold'>
                      เป็น
                    </Tag>
                    <div className='p-4 h-58 bg-gray-50 justify-center items-center border border-dashed border-gray-200 rounded-xl'>
                      {/* <h3 className="text-gray-500">
First content
</h3> */}
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
                    <br />
                    <div className='py-3 flex items-center text-sm text-gray-600 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:after:border-gray-600'>
                      กรรมการคนที่ 2
                    </div>
                    <Tag bordered={false} color='gold'>
                      จาก
                    </Tag>

                    <div className='p-4 h-58 justify-center items-center border border-dashed border-gray-200 rounded-xl'>
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
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-4 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />{' '}
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='firstname_th'
                              label='ชื่อ (TH)'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-4 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />{' '}
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={8}>
                            <Form.Item
                              name='lastname_th'
                              label='นามสกุล (TH)'
                              rules={[{ required: false }]}
                            >
                              <input
                                type='text'
                                className='peer py-2 pe-0 ps-4 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                placeholder=' '
                                disabled
                              />{' '}
                            </Form.Item>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                    <br />
                    <Tag bordered={false} color='gold'>
                      เป็น
                    </Tag>
                    <div className='p-4 h-58 bg-gray-50 justify-center items-center border border-dashed border-gray-200 rounded-xl'>
                      {/* <h3 className="text-gray-500">
First content
</h3> */}
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
                  </Card>
                )}

                {showFormAddress && (
                  <Card
                    className='p-2 rounded-2xl'
                    style={{
                      marginTop: 24,
                    }}
                    title={
                      <>
                        <CheckCircleTwoTone twoToneColor='#52c41a' />{' '}
                        <Typography.Text type='secondary'>
                          เปลี่ยนแปลงที่ตั้งสำนักงาน{' '}
                        </Typography.Text>
                        <Tag bordered={false} color='processing'>
                          *กรอกรายละเอียดที่ตั้งสำนักงานใหม่*
                        </Tag>
                      </>
                    }
                  >
                    <div className='p-4 h-58 bg-gray-50 justify-center items-center border border-dashed border-gray-200 rounded-xl'>
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
                      </Form>
                    </div>
                  </Card>
                )}

                {showFormBranch && (
                  <Card
                    className='p-2 rounded-2xl'
                    style={{
                      marginTop: 24,
                    }}
                    title={
                      <>
                        <CheckCircleTwoTone twoToneColor='#52c41a' />{' '}
                        <Typography.Text type='secondary'>
                          เปลี่ยนแปลงที่ตั้งสำนักงานสาขา{' '}
                        </Typography.Text>
                        {/*  <Tag bordered={false} color='processing'>
          *เลือกสำนักงานสาขา*
        </Tag> */}
                      </>
                    }
                  >
                    <Card
                      className=' rounded-2xl'
                      title={
                        <>
                          <Checkbox onChange={''}>เลือกสำนักงานสาขา</Checkbox>
                        </>
                      }
                      type='inner'
                    >
                      <Tag bordered={false} color='processing'>
                        *จาก*
                      </Tag>
                      <div className='p-4 h-58 justify-center items-center border border-dashed border-gray-200 rounded-xl'>
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
                                name='address_no'
                                label='บ้านเลขที่'
                                rules={[{ required: false }]}
                              >
                                <input
                                  type='text'
                                  className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                  placeholder=' '
                                  disabled
                                />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                              <Form.Item
                                name='building'
                                label='อาคาร'
                                rules={[{ required: false }]}
                              >
                                <input
                                  type='text'
                                  className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                  placeholder=' '
                                  disabled
                                />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                              <Form.Item
                                name='floor'
                                label='ชั้น'
                                rules={[{ required: false }]}
                              >
                                <input
                                  type='text'
                                  className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                  placeholder=' '
                                  disabled
                                />
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
                                <input
                                  type='text'
                                  className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                  placeholder=' '
                                  disabled
                                />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                              <Form.Item
                                name='soi'
                                label='ตรอก/ซอย'
                                rules={[{ required: false }]}
                              >
                                <input
                                  type='text'
                                  className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                  placeholder=' '
                                  disabled
                                />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                              <Form.Item
                                name='road'
                                label='ถนน'
                                rules={[{ required: false }]}
                              >
                                <input
                                  type='text'
                                  className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                  placeholder=' '
                                  disabled
                                />
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
                                <input
                                  type='text'
                                  className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                  placeholder=' '
                                  disabled
                                />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                              <Form.Item
                                name='district_id'
                                label='เขต/อำเภอ'
                                rules={[{ required: false }]}
                              >
                                <input
                                  type='text'
                                  className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                  placeholder=' '
                                  disabled
                                />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                              <Form.Item
                                name='subdistrict_id'
                                label='แขวง/ตำบล'
                                rules={[{ required: false }]}
                              >
                                <input
                                  type='text'
                                  className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                  placeholder=' '
                                  disabled
                                />
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
                                <input
                                  type='text'
                                  className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                  placeholder=' '
                                  disabled
                                />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                              <Form.Item
                                name='telephone'
                                label='โทรศัพท์สำนักงาน'
                                rules={[{ required: false }]}
                              >
                                <input
                                  type='text'
                                  className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                  placeholder=' '
                                  disabled
                                />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                              <Form.Item
                                name='mobile'
                                label='โทรศัพท์มือถือ'
                                rules={[{ required: false }]}
                              >
                                <input
                                  type='text'
                                  className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                  placeholder=' '
                                  disabled
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row gutter={16}>
                            <Col xs={24} sm={12} md={8}>
                              <Form.Item
                                name='text'
                                label='โทรสาร'
                                rules={[{ required: false }]}
                              >
                                <input
                                  type='text'
                                  className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                  placeholder=' '
                                  disabled
                                />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                              <Form.Item
                                name='text'
                                label='อีเมล'
                                rules={[{ required: false }]}
                              >
                                <input
                                  type='text'
                                  className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                  placeholder=' '
                                  disabled
                                />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                              <Form.Item
                                name='website'
                                label='เว็บไซต์'
                                rules={[{ required: false }]}
                              >
                                <input
                                  type='text'
                                  className='peer py-2 pe-0 ps-8 block w-full  bg-gray-100 border-transparent rounded-lg border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600'
                                  placeholder=' '
                                  disabled
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form>
                      </div>
                      <br />
                      <Tag bordered={false} color='processing'>
                        *เป็น*
                      </Tag>
                      <div className='p-4 h-58 bg-gray-50 justify-center items-center border border-dashed border-gray-200 rounded-xl'>
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
                        </Form>
                      </div>
                    </Card>
                  </Card>
                )}

                {showFormOfficerreduce && (
                  <Row gutter={[16, 8]}>
                    {/* ใช้การ loop ผ่าน Array.map เพื่อสร้าง Card สำหรับแต่ละสาขา */}
                    {[...Array(1)].map((_, index) => (
                      <Col xs={24} sm={12} md={24} key={index}>
                        <Card
                          className='p-2 rounded-2xl'
                          style={{ marginTop: 16 }}
                          title={
                            <>
                              เอกสารประกอบการลด{' '}
                              <Text type='danger'>สาขาที่ {index + 1}</Text>
                            </>
                          }
                        >
                          {/* ส่วนเนื้อหาของ Card */}
                          {/* ตัวอย่างเช่น รูปถ่าย, ข้อมูลที่เกี่ยวข้อง, ฯลฯ */}
                        </Card>
                      </Col>
                    ))}
                  </Row>
                )}
                {/* เอกสารเปลี่ยนแปลงที่ตั้งสำนักงาน */}
              
            </div>
            </div>

            <div style={{ display: activeTab === 4 ? 'block' : 'none' }}>
            <div>
            

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
                        ตามพระราชบัญญัติธุรกิจนำเที่ยวและมัคคุเทศ่ก์ พ.ศ.2561)
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
                        รับรองไว้ไม่เกิน 6 เดือน (บุคคลธรรมดาสัญชาติไทยถือหุ้น
                        51%) (กรณีไม่มีเลขประจำตัวประชาชนของผู้ถือหุ้น
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
                      <p>รับรองโดยกระทรวงพาณิชย์ รับรองไว้ไม่เกิน 6 เดือน</p>
                    </ul>
                  </Card>
                  <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                    <ul
                      role='list'
                      className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                    >
                      <li>ข้อบังคับของนิติบุคคล (ถ้ามี)</li>
                      <p>รับรองโดยกระทรวงพาณิชย์ รับรองไว้ไม่เกิน 6 เดือน</p>
                    </ul>
                  </Card>
                  <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                    <ul
                      role='list'
                      className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                    >
                      <li>รายการจดทะเบียนจัดตั้ง (บอจ.3)</li>
                      <p>รับรองโดยกระทรวงพาณิชย์ รับรองไว้ไม่เกิน 6 เดือน</p>
                    </ul>
                  </Card>
                  <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                    <ul
                      role='list'
                      className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                    >
                      <li>
                        รายการจดทะเบียนแก้ไขเพิ่มเติม และ/หรือ มติพิเศษ (บอจ.4)
                      </li>
                      <p>รับรองโดยกระทรวงพาณิชย์ รับรองไว้ไม่เกิน 6 เดือน</p>
                    </ul>
                  </Card>
                  <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
                    <ul
                      role='list'
                      className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                    >
                      <li>รายการจดทะเบียนจัดตั้งห้าง (หส.2)</li>
                      <p>รับรองโดยกระทรวงพาณิชย์ รับรองไว้ไม่เกิน 6 เดือน</p>
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
                        แผนที่ตั้งสำนักงาน ผู้ขอรับใบอนุญาตประกอบธุรกิจนำเที่ยว
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
                      </details>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Card>

            {Array.from({ length: branchCount }, (_, index) => (
              <Row gutter={[16, 8]}>
                <Col xs={24} sm={12} md={24} key={index}>
                  <Card
                    className=' p-2 rounded-2xl'
                    style={{
                      marginTop: 16,
                    }}
                    title={
                      <>
                        เอกสารหลักฐาน
                        <Text type='danger'> สาขาที่ {index + 1}</Text>
                      </>
                    }
                  >
                    <Card
                      className='rounded-2xl border border-blue-200 mt-4 shadow-sm'
                      style={{
                        marginTop: 16,
                      }}
                    >
                      <ul
                        role='list'
                        className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                      >
                        <li>รูปถ่ายด้านหน้าและด้านในสำนักงาน</li>
                      </ul>
                      <Card
                        className='rounded-2xl border border-blue-100 shadow-sm'
                        style={{
                          marginTop: 16,
                        }}
                      >
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
                      <Card
                        className='rounded-2xl border border-blue-100 shadow-sm'
                        style={{
                          marginTop: 16,
                        }}
                      >
                        <ul
                          role='list'
                          className='marker:text-blue-400 list-disc ps-5 space-y-2 text-sm text-gray-900 dark:text-gray-400'
                        >
                          <li>รูปถ่ายด้านในสำนักงาน จำนวน 2 รูป</li>
                        </ul>
                      </Card>
                    </Card>
                    <Card
                      className='rounded-2xl border border-blue-200 mt-4 shadow-sm'
                      style={{
                        marginTop: 16,
                      }}
                    >
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
                    <Card
                      className='rounded-2xl border border-blue-200 mt-4 shadow-sm'
                      style={{
                        marginTop: 16,
                      }}
                    >
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
                                สำนหนังสือรับรองของบริษัท มีอายุ่ไม่เกิน 6 เดือน
                                โดยกรรมการลงลายมือชื่อ และประทับตราบริษัท
                                (ถ้ามี)
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
                        </details>
                      </div>
                    </Card>
                  </Card>
                </Col>
              </Row>
            ))}
            <Card
              className='p-2 mt-4 rounded-2xl'
              title={
                <Checkbox onChange={handleCheckboxChange}>
                  กรณีที่ให้บริการดำน้ำแบบดำลึกโดยมีอุปกรณ์เครื่องช่วยหายใจและอุปกรณ์อื่นที่ช่วยในการดำน้ำ
                </Checkbox>
              }
            >
              {isChecked && (
                <Row gutter={[16, 8]}>
                  <Col xs={24} sm={12} md={24}>
                    <Card className='rounded-2xl border border-blue-200 mt-4 shadow-sm'>
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
                          ใบรับรองมาตรฐานอุปกรณ์ดำน้ำ ซึ่งออกให้ไม่เกิน 15 วัน
                          ก่อนวันยื่นคำขอรับใบอนุญาตประกอบธุรกิจนำเที่ยว
                        </li>
                      </ul>

                      <p className='ps-5'>
                        (1) ถังอากาศ (2) กะบอกสูบ (3) อุปกรณ์ควบคุมการสลับอากาศ
                        (4) อุปกรณ์วัดความลึกและแรงดัน (5) อุปกรณ์การทรงตัวในน้ำ
                        (6) ชุดดำน้ำ (7) หน้ากากดำน้ำ (8) รองเท้าดำน้ำ (9)
                        ครีบสำหรับรองเท้าดำน้ำ (10) อุปกรณ์ช่วยหายใจใต้น้ำ (11)
                        ตัวถ่วงน้ำหนัก (12) เข็มทิศ
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
                        <li>ใบรับรองว่ามีผู้ควบคุมการดำน้ำและผู้สอนการดำน้ำ</li>
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
                      (3) ใบรับรองว่ามีผู้ควบคุมการดำน้ำและผู้สอนการดำน้ำ <br />
                      (4) ใบรับรองว่ามีผู้สอนการดำน้ำเฉพาะในกรณีที่มีการสอนดำน้ำ{' '}
                      <br />* ให้ออกโดยหน่อยงานหรือองค์กรที่รัฐมนตรีประกาศกำหนด
                      *
                    </Text>
                  </Col>
                </Row>
              )}
            </Card>
          </div>
            </div>
          </div>
        </>
      </Card>
    </div>
  );
};

export default JuristicFormListchangePage;
