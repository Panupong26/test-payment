import React, { useEffect, useState } from 'react';
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
import { EditTwoTone, SearchOutlined } from '@ant-design/icons';
import Warning from '@/assets/images/icon/warning.png';
import Success from '@/assets/images/icon/success.png';
import Success2 from '@/assets/images/icon/success2.png';
import Tourleaderrequest from '@/assets/images/icon/tourleaderrequest.png';
import { Link, useParams } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';
import sha256 from 'sha256';

import Payin from '@/assets/images/icon/payin.jpeg';

const { Text } = Typography;

import { ConfigProvider } from 'antd';
import th_TH from 'antd/es/locale/th_TH';

import moment from 'moment';
import 'moment/locale/th';

import Paper from './components/Paper';
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react';

// Set moment to use the Thai locale globally
moment.locale('th');
const { Step } = Steps;

const Input = (props) => <AntInput {...props} size='large' />;

const JuristicFormRequestPage = () => {
  const { step, status } = useParams();
  
  const [form] = Form.useForm();

  const [current, setCurrent] = useState(+step || 0);

  const [showUnderageAlert, setShowUnderageAlert] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  const [statusMsg, setStatusMsg] = useState();

  useEffect(() => {
    if(current === 0 && status === sha256("fail")) {
      setStatusMsg("ชำระค่าบริการล้มเหลว");
    } else if(current === 0 && status === sha256("cancle")) {
      setStatusMsg("ยกเลิกชำระค่าบริการ");
    } else {
      setStatusMsg("รอชำระค่าบริการ");
    }
  }, [current])
  

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

  const [branchs, setBranchs] = useState([]);
  const [paper, setPaper] = useState([[]]);

  useEffect(() => {
    if(branchCount > 0) {
      let oldArr = [...branchs];
      let arr = oldArr.slice(0, branchCount);


      for(let i = 1 ; i <= branchCount ; i++) {
        let branch = arr.find(e => e.branchNo === i);
        if(!branch) {
          arr.push({branchNo: i});
        }
      }

      setBranchs([...arr])
    } else {
      setBranchs([])
    }
  }, [branchCount])

  useEffect(() => {
    if(branchs.length > 0) {
      let paperArr = [];
      let branchArr = [];
      branchs.forEach((el,index) => {
        if(branchArr.length < 4) {
          branchArr.push(el);
          if((index + 1) === branchs.length) {
            paperArr.push([...branchArr]);
          }
        } else if(branchArr.length === 4) {
          paperArr.push([...branchArr]);
          branchArr = [];
          branchArr.push(el);
          if((index + 1) === branchs.length) {
            paperArr.push([...branchArr]);
          }
        } 
      })
      setPaper([...paperArr]);
    }

    console.log(branchs)
  }, [branchs])

  const handleBranchInput = (index, field, value) => {
    let branchArr = [...branchs];
    branchArr[index][field] = value;
    setBranchs([...branchArr]);
  }

  ///////////////// สั่งพิมพ์ //////////////////
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  })

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

  //////////////////////ยอมรับเอกสาร///////////////////////////////////////
  const [isCheckedacceptdata, setIsCheckedacceptdata] = useState(false);

  const handleCheckboxChangeacceptdata = (e) => {
    // e.target.checked จะเป็น true หาก checkbox ถูกเลือก, และ false ถ้าไม่ได้เลือก
    setIsCheckedacceptdata(e.target.checked);
  };

  
  const steps = [
    {
      title: 'สรุปรายการ',
      description: 'สรุปรายการคำขอและชำระค่าบริการ',
      content: (
        <div>
          <Card className='my-custom-card-body rounded-2xl'>
            <Row gutter={16}>
              <Col xs={24} sm={12} md={16}>
                <h4 className='font-bold p-2 lg:text-xl text-2xl text-slate-900 inline-block ltr:pr-4 '>
                  สรุปรายการ
                </h4>{' '}
              </Col>
              <Col xs={24} sm={12} md={8}>
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
            <br />
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
                  <div className='flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'>
                    <div>
                      <dl className='grid sm:grid-cols-3 gap-1 sm:gap-2'>
                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          สถานะ :
                        </dt>
                        <dd className={`col-start-2 col-span-2 ${status && (status === sha256("fail") || status === sha256("cancle"))? "text-red-700" : "text-blue-800"}`}>
                          {statusMsg || "รอชำระค่าบริการ"}
                        </dd>
                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          ประเภท :
                        </dt>
                        <dd className='col-start-2 col-span-2'>
                          XXX
                        </dd>
                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          เลขที่คำขอ :
                        </dt>
                        <dd className='col-start-2 col-span-2'>XXXX</dd>
                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          วันที่ยื่นคำขอ :
                        </dt>
                        <dd className='col-start-2 col-span-2'>
                          XXXX
                        </dd>

                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          สถานที่รับใบอนุญาต :
                        </dt>
                        <dd className='col-start-2 col-span-2'>
                          XXXXXXXXXXXXXXXXXXX
                        </dd>

                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          ค่าธรรมเนียม :
                        </dt>
                        <dd className='col-start-2 col-span-2'>X,XXX</dd>
                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          ค่าจัดส่ง :
                        </dt>
                        <dd className='col-start-2 col-span-2'>XX บาท</dd>
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
            <br />
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
                  <div className='w-full h-full relative'>
                    <button
                      onClick={() => alert("รอ Test")}
                      style={{ width: '300px', height: '40px' }}
                      type='button'
                      className='absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 rounded-lg border border-primary-500 bg-primary-700  text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                    >
                      กดปุ่มนี้เพื่อชำระค่าบริการ
                    </button>  
                  </div>
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
                    <img
                      src={Success2}
                      alt='Success'
                      style={{ width: '440px', height: '250px' }}
                    />
                  </span>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <div className='flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'>
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
                          XXXXXXX
                        </dd>
                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          เลขที่คำขอ :
                        </dt>
                        <dd className='col-start-2 col-span-2'>XXXXX</dd>
                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          วันที่ยื่นคำขอ :
                        </dt>
                        <dd className='col-start-2 col-span-2'>
                          XXXXXXXXX
                        </dd>

                        <dt className='sm:col-span-1 font-semibold text-gray-600 text-right'>
                          สถานที่รับใบอนุญาต :
                        </dt>
                        <dd className='col-start-2 col-span-2'>
                          XXXXXXXX
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
      <div className='bg-blue-900 sm:h-auto md:h-[70px] mb-6 flex items-center justify-center '>
        <h4 className='text-title font-bold text-center text-white '>
          ยื่นคำขอใบอนุญาต
        </h4>
      </div>

      <div className='mx-auto max-w-screen-xl px-4 pb-6 pt-4 sm:px-4 lg:px-2 lg:pt-0'>
        <Row gutter={16}>
          {/* <Col span={24}>
            <Card className=' text-body rounded-2xl'>
              <h4 className='font-bold p-2 lg:text-3xl text-2xl text-slate-900 inline-block ltr:pr-4 '>
                ยื่นคำขอใบอนุญาตประกอบธุรกิจนำเที่ยว (นิติบุคคล)
              </h4>
            </Card>
            <br />
          </Col> */}
          <Col xs={24} sm={24} md={24} lg={6}>
            <Card className=' text-step p-2 rounded-2xl mb-4'>
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
              /* onFinish={onFinish} */
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

export default JuristicFormRequestPage;
