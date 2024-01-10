import React, { useState, useRef, useEffect } from 'react';
import {
  Form,
  Input as AntInput,
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
  Table,
  Tooltip,
} from 'antd';
const { Text } = Typography;

const BranchwriteComplaint = () => {
  const [form] = Form.useForm();
  const Input = (props) => <AntInput {...props} size='large' />;

  ////////////////////////////////////////////////////
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <Card className='rounded-2xl shadow-sm shadow-blue-100/50'>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={12}>
            <div className='text-th'>
              <h5 className='font-bold text-blue-900'>เพิ่มเรื่องร้องเรียน</h5>
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
      <Card
        title={<span className='text-title-card'>ข้อมูลผู้ร้องเรียน</span>}
        className='rounded-2xl mt-4 shadow-sm'
      >
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

            <div className='mb-4'>
              <Text className='text-lg' type='secondary'>ที่อยู่ตามบัตรประชาชน</Text>{' '}
            </div>
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
              <Col xs={24} sm={12} md={4}>
                <Form.Item
                  name='floor'
                  label='ชั้น'
                  rules={[{ required: false }]}
                >
                  <Input placeholder='ชั้น' />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={4}>
                <Form.Item
                  name='moo'
                  label='หมู่ที่'
                  rules={[{ required: false }]}
                >
                  <Input type='number' placeholder='หมู่ที่' />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
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
              <Col xs={24} sm={12} md={8}>
                <Form.Item
                  name='province_id'
                  label='จังหวัด'
                  rules={[{ required: false }]}
                >
                  <Input type='text' placeholder='จังหวัด' />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
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

            <div>
              <Text className='text-lg mr-2' type='secondary'>ที่อยู่ตามบัตรประชาชน</Text>{' '}
              <Checkbox
                name='copyaddress'
                className='text-body-page text-body-size mb-6'
                /*  onChange={handleCopyAddress} */
              >
                <span className='text-lg'>คัดลอกจากที่อยู่ตามทะเบียนบ้าน</span>
                
              </Checkbox>
            </div>
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

            

          </Form>
        </div>
      </Card>

      <Card
        title={<span className='text-title-card'>ข้อมูลผู้ถูกร้องเรียน</span>}
        className='rounded-2xl mt-4 shadow-sm'
      >
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
            <div className='mb-4'>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>ร้องเรียนผู้ประกอบการธุรกิจนำเที่ยว</Radio>
                <Radio value={2}>ร้องเรียนมัคคุเทศก์</Radio>
                <Radio value={3}>ร้องเรียนผู้นำเที่ยว</Radio>
              </Radio.Group>
            </div>
            <Row gutter={16}>
              <Col xs={24} sm={12} md={8}>
                <Form.Item
                  name='title_th'
                  label='ค้นหาเลขที่ใบอนุญาต/ ชื่อบริษัท/ ห้างหุ้นส่วน'
                  rules={[{ required: false }]}
                >
                  <Input placeholder='ค้นหาเลขที่ใบอนุญาต/ ชื่อบริษัท/ ห้างหุ้นส่วน' />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Form.Item
                  name='firstname_th'
                  label='เลขที่ใบอนุญาต'
                  rules={[{ required: false }]}
                >
                  <Input placeholder='เลขที่ใบอนุญาต' />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Form.Item
                  name='lastname_th'
                  label='ชื่อผู้ถูกร้อง'
                  rules={[{ required: false }]}
                >
                  <Input placeholder='ชื่อผู้ถูกร้อง' />
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

            <div className='mb-4'>
              <Text className='text-lg' type='secondary'>ที่อยู่ผู้ถูกร้องเรียน</Text>{' '}
            </div>
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
              <Col xs={24} sm={12} md={4}>
                <Form.Item
                  name='floor'
                  label='ชั้น'
                  rules={[{ required: false }]}
                >
                  <Input placeholder='ชั้น' />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={4}>
                <Form.Item
                  name='moo'
                  label='หมู่ที่'
                  rules={[{ required: false }]}
                >
                  <Input type='number' placeholder='หมู่ที่' />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
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
              <Col xs={24} sm={12} md={8}>
                <Form.Item
                  name='province_id'
                  label='จังหวัด'
                  rules={[{ required: false }]}
                >
                  <Input type='text' placeholder='จังหวัด' />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
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
      </Card>

      <Card
        title={<span className='text-title-card'>รายละเอียดการร้องเรียน</span>}
        className='rounded-2xl mt-4 shadow-sm'
      >
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
                  label='ประเทศที่เดินทางไปท่องเที่ยว'
                  rules={[{ required: false }]}
                >
                  <Input placeholder='ประเทศที่เดินทางไปท่องเที่ยว' />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Form.Item
                  name='firstname_th'
                  label='เมือง/จังหวัด'
                  rules={[{ required: false }]}
                >
                  <Input placeholder='เมือง/จังหวัด' />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Form.Item
                  name='lastname_th'
                  label='วันที่เดินทาง'
                  rules={[{ required: false }]}
                >
                  <Input placeholder='วันที่เดินทาง' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} sm={12} md={8}>
                <Form.Item
                  name='title_en'
                  label='จำนวนผู้เดินทาง'
                  rules={[{ required: false }]}
                >
                  <Input placeholder='จำนวนผู้เดินทาง' />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Form.Item
                  name='firstname_en'
                  label='ความเสียหายที่ผู้ร้องเรียนได้รับ'
                  rules={[{ required: false }]}
                >
                  <Input placeholder='ความเสียหายที่ผู้ร้องเรียนได้รับ' />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Form.Item
                  name='lastname_en'
                  label='วันที่ยกเลิกรายการนำเที่ยว (ถ้ามี)'
                  rules={[{ required: false }]}
                >
                  <Input placeholder='วันที่ยกเลิกรายการนำเที่ยว (ถ้ามี)' />
                </Form.Item>
              </Col>
            </Row>

           
            <div>
              <Text className='text-lg' type='secondary'>แนบเอกสารหลักฐาน</Text>{' '}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4'>
              <div className=' mb-4 '>
                <div>
                  <Card className='rounded-2xl mt-4 border border-blue-200 shadow-sm'>
                    <ul
                      role='list'
                      className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'
                    >
                      <li>สําเนาบัตรประจําตัวประชาชน</li>
                    </ul>
                  </Card>
                  <Card className='rounded-2xl mt-4 border border-blue-200 shadow-sm'>
                    <ul
                      role='list'
                      className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'
                    >
                      <li>รายการนำเที่ยว</li>
                    </ul>
                  </Card>
                  <Card className='rounded-2xl mt-4 border border-blue-200 shadow-sm'>
                    <ul
                      role='list'
                      className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'
                    >
                      <li>ใบเสร็จรับเงินหรือหลักฐานการโอนเงิน</li>
                    </ul>
                  </Card>
                  <Card className='rounded-2xl mt-4 border border-blue-200 shadow-sm'>
                    <ul
                      role='list'
                      className='marker:text-blue-800 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'
                    >
                      <li>เอกสารหลักฐานอื่นๆ</li>
                    </ul>
                  </Card>
                </div>
                <div></div>
              </div>
            </div>
        

            <div className='mb-4'>
              <Text className='text-lg' type='secondary'>พฤติการณ์ของการร้องเรียน</Text>{' '}
            </div>
            <textarea
              id='message'
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-0'
              placeholder='พฤติการณ์ของการร้องเรียน...'
            ></textarea>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default BranchwriteComplaint;
