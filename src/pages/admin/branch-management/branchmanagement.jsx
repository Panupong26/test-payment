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
//import provinceOptions from '@/admin/branch-management/province-options.json';
import OPTIONS from '@/pages/admin/branch-management/province-options'; // ตรวจสอบเส้นทางให้ถูกต้อง

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

//const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

const BranchManagementPage = () => {
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
          พักใช้ใบอนุญาต{' '}
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

  /* /////////////////////// Drawer ////////////////////////*/
  const [isOpen, setIsOpen] = useState(false);

  // Function เพื่อเปิด Modal
  const openModal = () => {
    setIsOpen(true);
  };

  /* ///////////////////////เลือกใบอนุญาตที่ต้องการพักใช้/////////////////////////////////////// */
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

  const onFinish = (values) => {
    // Process the form values
    console.log('Received values from form: ', values);
    // You can then send these values to an API, use them in your component, etc.
  };

  ////////////////////ค้นหาจังหวัดพื้นที่รับผิดชอบ/////////////////////////////////

  const onChangeprovince = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearchprovince = (value) => {
    console.log('search:', value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  ////////////////////ค้นหาจังหวัดพื้นที่รับผิดชอบ/////////////////////////////////

  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <div>
      <Card className='rounded-2xl shadow-sm shadow-blue-100/50'>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={18}>
            <div className='text-th '>
              <h5 className='font-bold text-blue-900'>จัดการสำนักงานสาขา</h5>
            </div>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <div className='grid justify-items-end'>
              <div>
                <Modal
                  title=''
                  label={
                    <a className='w-62 text-body-page rounded-full border border-primary-600 bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'>
                      <span> + เพิ่มข้อมูลสาขา </span>
                    </a>
                  }
                  uncontrol
                  scrollContent
                >
                  <Card className='rounded-2xl shadow-sm shadow-blue-100/50'>
                    <Row gutter={16}>
                      <Col xs={24} sm={12} md={12}>
                        <div className='text-th'>
                          <h5 className='font-bold text-blue-900'>
                            เพิ่มข้อมูลสาขา
                          </h5>
                        </div>
                      </Col>
                      <Col xs={24} sm={12} md={12}>
                        <div className='flex flex-wrap justify-end gap-3 text-body-page text-body-size'>
                          <button
                            onClick={() => setCurrent(current - 1)}
                            type='button'
                            style={{ width: '150px', height: '40px' }}
                            className='rounded-lg border border-gray-300 bg-white px-5 py-2 text-center text-base font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
                          >
                            ยกเลิก
                          </button>
                          <button
                            /* onClick={handleOkClick} */
                            style={{ width: '140px', height: '40px' }}
                            type='button'
                            className='rounded-lg border border-primary-500 bg-primary-700 px-5 text-center text-base font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                          >
                            บันทึกข้อมูล
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                  <Card className='rounded-2xl mt-4'>
                    <Form
                      layout='vertical'
                      onFinish={onFinish}
                      size='large'
                      className='text-body-page text-body-size'
                    >
                      <Row gutter={16}>
                        <Col xs={24} sm={12} md={12}>
                          <Form.Item
                            name='business_license_no'
                            label='ชื่อสำนักงานสาขา'
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12}>
                          <Form.Item name='company_name_th' label='จัดหวัดสาขา'>
                            <Select
                              showSearch
                              placeholder='เลือกจังหวัด'
                              optionFilterProp='children'
                              onChange={onChangeprovince}
                              onSearch={onSearchprovince}
                              filterOption={filterOption}
                              getPopupContainer={(trigger) =>
                                trigger.parentNode
                              }
                              style={{ width: '100%' }}
                              options={OPTIONS}
                            />

                           
                          </Form.Item>
                        </Col>
                      </Row>{' '}
                      <Row gutter={16}>
                        <Col xs={24} sm={12} md={12}></Col>
                      </Row>{' '}
                      <Row gutter={16}>
                        <Col xs={24} sm={12} md={24}>
                          <Form.Item
                            name='lawobjective'
                            label='พื้นที่รับผิดชอบ'
                          >
                            <Select
                              getPopupContainer={(trigger) =>
                                trigger.parentNode
                              }
                              mode='multiple'
                              placeholder='เลือกจังหวัด'
                              value={selectedItems}
                              onChange={setSelectedItems}
                              style={{ width: '100%' }}
                              showSearch
                              filterOption={(input, option) =>
                                option.label
                                  .toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                              options={OPTIONS}
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </Card>

                  <Card className='rounded-2xl mt-4 mb-14'>
                    <div>
                      <div className='card-title'>
                        <Text type='secondary'>ที่ตั้งสำนักงานสาขา</Text>
                      </div>
                      <Form
                        layout='vertical'
                        onFinish={onFinish}
                        size='large'
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
                      </Form>
                    </div>
                  </Card>
                </Modal>
              </div>
            </div>
          </Col>
        </Row>
      </Card>

      <Card className='rounded-2xl shadow-sm mt-4'>
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
                  วันที่พักใช้
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
                  <td className='px-4 py-4'>{item.state}</td>
                  <td className='px-4 py-2'>
                    <div>
                      <span className='inline-flex overflow-hidden rounded-xl border bg-white '>
                        <Modal
                          title='แก้ไขข้อมูลสาขา'
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
                          <Card className='rounded-2xl mb-14'></Card>
                        </Modal>
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

export default BranchManagementPage;
