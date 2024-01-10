import React, { useState, useEffect } from 'react';
import {
  Card,
  Checkbox,
  Input,
  Tag,
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



const GuideSuspensionLicense = () => {
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  const { TextArea } = Input;

  const [form] = Form.useForm();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <Card className='rounded-2xl shadow-sm shadow-blue-100/50'>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={12}>
            <div className='text-th'>
              <h5 className='font-bold text-blue-900'>
                พักใช้ใบอนุญาตมัคคุเทศก์
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
      <Card className='pt-5 rounded-2xl mt-4'>
        <Form
          form={form}
          className='text-body-page text-body-size'
          size='large'
        >
          <Row gutter={16}>
            <Col xs={24} sm={12} md={8}>
              <Form.Item name='company_name_th' label='เลขที่รับเรื่อง'>
                <Input placeholder='เลขที่รับเรื่อง' />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item name='company_name_en' label='วันที่รับเรื่อง'>
                <Input placeholder='วันที่รับเรื่อง' />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item name='company_name_en' label='ผู้รับเรื่อง'>
                <Input placeholder='ผู้รับเรื่อง' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card
        title={<span className='text-title-card'>ข้อมูลใบอนุญาต</span>}
        className='rounded-2xl mt-4'
      >
        <div className='flow-root pt-2 pb-4 text-body-page text-body-size rounded-lg'>
          <dl className='-my-3 divide-y divide-gray-100 text-sm'>
            <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-6 sm:gap-4'>
              <dt className='font-medium text-gray-900 '>ประเภทมัคคุเทศก์ :</dt>
              <dd className='text-gray-700 sm:col-span-2'>xxx</dd>

              <dt className='font-medium text-gray-900'>ใบอนุญาตเลขที่ :</dt>
              <dd className='text-gray-700 sm:col-span-2'>xxx</dd>
            </div>
            <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-6 sm:gap-4'>
              {' '}
              <dt className='font-medium text-gray-900'>วันที่ออกใบอนุญาต :</dt>
              <dd className='text-gray-700 sm:col-span-2'>xxx</dd>
              <dt className='font-medium text-gray-900'>วันที่ครบกำหนด :</dt>
              <dd className='text-gray-700 sm:col-span-2'>xxx</dd>
            </div>
          </dl>
        </div>
      </Card>
      <Card
        title={<span className='text-title-card'>รายละเอียดการพักใช้</span>}
        className='rounded-2xl mt-4'
      >
        <Checkbox.Group
          style={{
            width: '100%',
          }}
          onChange={onChange}
        >
          <Form form={form} layout='vertical' className='text-body-page'  size='large'>
            <Form.Item
              name='cause_suspension'
              label={
                <Tag bordered={false} color='processing'>
                  สาเหตุการพักใช้
                </Tag>
              }
              rules={[{ required: false }]}
            >
              <Row>
                <Col span={24}>
                  <Checkbox value='A'>
                    (๑) ฝ่าฝืนหรือไม่ปฏิบัติตามระเบียบที่คณะกรรมการกำหนดตามมาตรา
                    ๑๒ (๓) หรือมาตรา ๕๗
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value='B'>
                    (๒) ฝ่าฝืนหรือไม่ปฏิบัติตามมาตรา ๕๑ หรือมาตรา ๔๘
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value='C'>
                    (๓)
                    ฝ่าฝืนหรือไม่ปฏิบัติตามคำสั่งของนายทะเบียนหรือพนักงานเจ้าหน้าที่ซึ่งสั่งตามมาตรา
                    ๗๖
                  </Checkbox>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item
              name='suspension_details'
              label={
                <Tag bordered={false} color='processing'>
                  รายละเอียดการพักใช้
                </Tag>
              }
            >
              <TextArea />
            </Form.Item>

            <Row gutter={16} className='pb-2'>
              <Col xs={24} sm={24} md={24}>
                <Tag bordered={false} color='processing'>
                  ระยะเวลาที่ถูกพักใช้
                </Tag>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} sm={12} md={11}>
                <Form.Item name='month' label=''>
                  <Input type='number'  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={1}>
                <span>เดือน</span>
              </Col>
              <Col xs={24} sm={12} md={11}>
                <Form.Item name='days' label=''>
                  <Input type='number'  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={1}>
                <span>วัน</span>
              </Col>
            </Row>
          </Form>
        </Checkbox.Group>
      </Card>

     
    </div>
  );
};

export default GuideSuspensionLicense;
