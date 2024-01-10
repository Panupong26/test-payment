import React, { useState } from 'react';
import {
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
const Input = (props) => <AntInput {...props} size='large' />;

const SetCalendarPage = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <Button onClick={showDrawer}>
        Open
      </Button>
      <Drawer
      className='text-body-page'
        title='เพิ่มค่าธรรมเนียม'
        placement='right'
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>ยกเลิก</Button>
            <Button onClick={onClose} >
              ตกลง
            </Button>
          </Space>
        }
      >
        <Form layout='vertical' hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name='name'
                label='ประเภท'
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder='Please enter user name' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name='name'
                label='จำนวนเงิน'
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder='Please enter user name' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name='type'
                label='สถานะ'
                rules={[
                  {
                    required: true,
                    message: 'โปรดกรอกข้อมูล',
                  },
                ]}
              >
                <Select size='large' placeholder='สถานะการใช้งาน'>
                  <Option value='private'>ใช้งาน</Option>
                  <Option value='public'>ไม่ใช้งาน</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name='dateTime'
                label='วันเดือนปี'
                rules={[
                  {
                    required: true,
                    message: 'Please choose the dateTime',
                  },
                ]}
              >
                <DatePicker
                  size='large'
                  style={{
                    width: '100%',
                  }}
                  onChange={onChange}
                  placeholder='วันที่เริ่มใช้'
                />

                <DatePicker
                  size='large'
                  style={{
                    width: '100%',
                    marginTop: '10px',
                  }}
                  onChange={onChange}
                  placeholder='วันที่สิ้นสุด'
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        
      </Drawer>
    </>
  );
};
export default SetCalendarPage;
