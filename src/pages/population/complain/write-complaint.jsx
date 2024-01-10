import React, { useState } from 'react';
import {
  Form,
  Input as AntInput,
  Button,
  Steps,
  Card,
  message,
  Upload,
  Col,
  Row,
  Checkbox,
  Radio,
  DatePicker,
  Typography,
} from 'antd';
import { Link, NavLink } from 'react-router-dom';
import HeaderTwo from '@/pages/population/home/headertwo';

import Success from '@/assets/images/icon/success.png';
import Tourleaderrequest from '@/assets/images/icon/tourleaderrequest.png';

import th_TH from 'antd/es/locale/th_TH';

import moment from 'moment';
import 'moment/locale/th';

const { Text, Title } = Typography;

moment.locale('th');
const { Step } = Steps;

const Input = (props) => <AntInput {...props} size='large' />;

const WriteComplaintPage = () => {
  const [form] = Form.useForm();

  const [current, setCurrent] = useState(0);

  ////////////////////////////////////////////////////
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  ///////////////////คัดลอกที่อยู่////////////////////////////////
  const handleCopyAddress = (e) => {
    if (e.target.checked) {
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

  const steps = [
    {
      title: 'ข้อมูลผู้ร้องเรียน',
      description: '',
      content: (
        <div>
          <Card className='p-2 rounded-3xl'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 pb-4'>
              <div>
                <p className='text-xl grid justify-items-start'>
                  ข้อมูลผู้ร้องเรียน
                </p>
              </div>
              <div>
                <p className='text-sm text-gray-500 grid justify-items-end'>
                  วันที่เขียนคำร้อง{' '}
                  {new Date().toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
              <div className='mb-4'>
                <label
                  htmlFor='title_th'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='title_th'
                    type='text'
                    id='title_th'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg p-4'
                    placeholder='คำนำหน้า'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    คำนำหน้า
                  </span>
                </label>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='firstname_th'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='firstname_th'
                    type='text'
                    id='firstname_th'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ชื่อ'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ชื่อ
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='lastname_th'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='lastname_th'
                    type='text'
                    id='lastname_th'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='นามสกุล'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    นามสกุล
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='id_card'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='id_card'
                    type='text'
                    id='id_card'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เลขบัตรประจำตัวประชาชน'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เลขบัตรประจำตัวประชาชน
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='nationality'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='nationality'
                    type='text'
                    id='nationality'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='สัญชาติ'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    สัญชาติ
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='passport_no'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='passport_no'
                    type='text'
                    id='passport_no'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='หนังสือเดินทางเลขที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    หนังสือเดินทางเลขที่
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='email'
                    type='text'
                    id='email'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='อีเมล'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    อีเมล
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='mobile'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='mobile'
                    type='text'
                    id='mobile'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เบอร์โทรศัพท์มือถือ'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เบอร์โทรศัพท์มือถือ
                  </span>
                </label>
              </div>

              <br />

              <div>
                <p className='text-xl grid justify-items-start pb-4'>
                  ที่อยู่ตามบัตรประชาชน
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
              <div className=' mb-4 '>
                <label
                  htmlFor='address_no'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='address_no'
                    type='text'
                    id='address_no'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เลขที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เลขที่
                  </span>
                </label>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='building'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='building'
                    type='text'
                    id='building'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='อาคาร'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    อาคาร
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='moo'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='moo'
                    type='text'
                    id='moo'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='หมู่ที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    หมู่ที่
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='floor'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='floor'
                    type='text'
                    id='floor'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ชั้นที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ชั้นที่
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='soi'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='soi'
                    type='text'
                    id='soi'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ตรอก/ซอย'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ตรอก/ซอย
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='road'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='road'
                    type='text'
                    id='road'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ถนน'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ถนน
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='province_id'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='province_id'
                    type='text'
                    id='province_id'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='จังหวัด'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    จังหวัด
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='district_id'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='district_id'
                    type='text'
                    id='district_id'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='อำเภอ'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    อำเภอ
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='subdistrict_id'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='subdistrict_id'
                    type='text'
                    id='subdistrict_id'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ตำบล/แขวง'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ตำบล/แขวง
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='zipcode'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='zipcode'
                    type='text'
                    id='zipcode'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='รหัสไปรษณีย์'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    รหัสไปรษณีย์
                  </span>
                </label>
              </div>
            </div>
            <br />
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4'>
              <div className='mb-4'>
                <div className='flex items-center'>
                  <p className='text-xl pr-8'>ที่อยู่ที่สามารถติดต่อได้</p>
                  <Checkbox name='copyAddress' onChange={handleCopyAddress}>
                    คัดลอกจากที่อยู่ตามบัตรประชาชน
                  </Checkbox>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
              <div className=' mb-4 '>
                <label
                  htmlFor='contact_address_no'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='contact_address_no'
                    type='text'
                    id='contact_address_no'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เลขที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เลขที่
                  </span>
                </label>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='contact_building'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='contact_building'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='อาคาร'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    อาคาร
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='contact_moo'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='contact_moo'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='หมู่ที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    หมู่ที่
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='contact_floor'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='contact_floor'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ชั้นที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ชั้นที่
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='contact_soi'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='contact_soi'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ตรอก/ซอย'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ตรอก/ซอย
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='contact_road'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='contact_road'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ถนน'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ถนน
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='contact_province_id'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='contact_province_id'
                    type='text'
                    id='contact_province_id'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='จังหวัด'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    จังหวัด
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='contact_district_id'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='contact_district_id'
                    type='text'
                    id='contact_district_id'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='อำเภอ'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    อำเภอ
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='contact_subdistrict_id'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='contact_subdistrict_id'
                    type='text'
                    id='contact_subdistrict_id'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ตำบล/แขวง'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ตำบล/แขวง
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='contact_zipcode'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='contact_zipcode'
                    type='text'
                    id='contact_zipcode'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='รหัสไปรษณีย์'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    รหัสไปรษณีย์
                  </span>
                </label>
              </div>
            </div>

            <div
              className='flex flex-wrap justify-end gap-3'
              style={{
                marginTop: 16,
              }}
            >
              <button
                onClick={() => setCurrent(current + 1)}
                style={{ width: '100px', height: '38px' }}
                type='button'
                className='rounded-lg border border-primary-500 bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
              >
                ถัดไป
              </button>
            </div>
          </Card>
        </div>
      ),
    },
    {
      title: 'ข้อมูลผู้ถูกร้องเรียน',
      description: '',
      content: (
        <div>
          <Card className='p-2 rounded-3xl'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 pb-4'>
              <div>
                <p className='text-xl grid justify-items-start'>
                  ข้อมูลผู้ถูกร้องเรียน
                </p>
              </div>
              <div>
                <p className='text-sm text-gray-500 grid justify-items-end'>
                  วันที่เขียนคำร้อง{' '}
                  {new Date().toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 pb-4'>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>ร้องเรียนผู้ประกอบการธุรกิจนำเที่ยว</Radio>
                <Radio value={2}>ร้องเรียนมัคคุเทศก์</Radio>
                <Radio value={3}>ร้องเรียนผู้นำเที่ยว</Radio>
              </Radio.Group>
              {/*   <fieldset className='space-y-4'>
                <legend className='sr-only'>Delivery</legend>

                <div>
                  <input
                    type='radio'
                    name='DeliveryOption'
                    value='DeliveryStandard'
                    id='DeliveryStandard'
                    className='peer hidden [&:checked_+_label_svg]:block'
                    checked
                  />

                  <label
                    htmlFor='DeliveryStandard'
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

                      <p className='text-gray-700'>Standard</p>
                    </div>

                    <p className='text-gray-900'>Free</p>
                  </label>
                </div>

                <div>
                  <input
                    type='radio'
                    name='DeliveryOption'
                    value='DeliveryPriority'
                    id='DeliveryPriority'
                    className='peer hidden [&:checked_+_label_svg]:block'
                  />

                  <label
                    htmlFor='DeliveryPriority'
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

                      <p className='text-gray-700'>Next Day</p>
                    </div>

                    <p className='text-gray-900'>£9.99</p>
                  </label>
                </div>
              </fieldset> */}
              {/*  <label
                  htmlFor='hs-radio-in-form'
                  className='flex p-3  w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                >
                  <input
                    type='radio'
                    name='hs-radio-in-form'
                    className='shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
                    id='hs-radio-in-form'
                  />
                  <span className='text-sm text-gray-500 ms-3 dark:text-gray-400'>
                  ร้องเรียนผู้ประกอบการธุรกิจนำเที่ยว
                  </span>
                </label>

                <label
                  htmlFor='hs-radio-checked-in-form'
                  className='flex p-3  w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                >
                  <input
                    type='radio'
                    name='hs-radio-in-form'
                    className='shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
                    id='hs-radio-checked-in-form'
                    defaultChecked
                  />
                  <span className='text-sm text-gray-500 ms-3 dark:text-gray-400'>
                  ร้องเรียนมัคคุเทศก์
                  </span>
                </label>

                <label
                  htmlFor='hs-radio-checked-in-form'
                  className='flex p-3  w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                >
                  <input
                    type='radio'
                    name='hs-radio-in-form'
                    className='shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
                    id='hs-radio-checked-in-form'
                    defaultChecked
                  />
                  <span className='text-sm text-gray-500 ms-3 dark:text-gray-400'>
                  ร้องเรียนผู้นำเที่ยว
                  </span>
                </label> */}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ค้นหาเลขที่ใบอนุญาต/ ชื่อบริษัท/ ห้างหุ้นส่วน'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ค้นหาเลขที่ใบอนุญาต/ ชื่อบริษัท/ ห้างหุ้นส่วน
                  </span>
                </label>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เลขที่ใบอนุญาต'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เลขที่ใบอนุญาต
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ชื่อผู้ถูกร้อง'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ชื่อผู้ถูกร้อง
                  </span>
                </label>
              </div>
            </div>

            <br />

            <div className='mb-4 flex items-center '>
              <p className='text-xl'>ที่อยู่ผู้ถูกร้องเรียน</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className=' mb-4 '>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เลขที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เลขที่
                  </span>
                </label>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='อาคาร'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    อาคาร
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='หมู่ที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    หมู่ที่
                  </span>
                </label>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ชั้นที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ชั้นที่
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ตรอก/ซอย'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ตรอก/ซอย
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ถนน'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ถนน
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ตำบล/แขวง'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ตำบล/แขวง
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='อำเภอ/เขต'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    อำเภอ/เขต
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='จังหวัด'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    จังหวัด
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='รหัสไปรษณีย์'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    รหัสไปรษณีย์
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    name='Username'
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='อีเมล'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    อีเมล
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เบอร์โทรศัพท์'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เบอร์โทรศัพท์
                  </span>
                </label>
              </div>
            </div>

            <div
              className='flex flex-wrap justify-end gap-3'
              style={{
                marginTop: 16,
              }}
            >
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
          </Card>
        </div>
      ),
    },
    {
      title: 'รายละเอียด',
      description: '',
      content: (
        <div>
          <Card className='p-2 rounded-3xl'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 pb-4'>
              <div>
                <p className='text-xl grid justify-items-start'>
                  รายละเอียดการร้องเรียน
                </p>
              </div>
              <div>
                <p className='text-sm text-gray-500 grid justify-items-end'>
                  วันที่เขียนคำร้อง{' '}
                  {new Date().toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ประเทศที่เดินทางไปท่องเที่ยว'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ประเทศที่เดินทางไปท่องเที่ยว
                  </span>
                </label>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เมือง/จังหวัด'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เมือง/จังหวัด
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='วันที่เดินทาง'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    วันที่เดินทาง
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='จำนวนผู้เดินทาง'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    จำนวนผู้เดินทาง
                  </span>
                </label>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='มูลค่าความเสียหาย'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    มูลค่าความเสียหาย
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='วันที่ยกเลิกรายการนำเที่ยว (ถ้ามี)'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    วันที่ยกเลิกรายการนำเที่ยว (ถ้ามี)
                  </span>
                </label>
              </div>
            </div>

            <br />

            <div className='flex items-center '>
              <p className='text-xl'>แนบเอกสารหลักฐาน</p>
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
          </Card>

          <Card
            className='p-2 rounded-3xl'
            style={{
              marginTop: 16,
            }}
          >
            <div className='mb-4 flex items-center '>
              <p className='text-xl'>พฤติการณ์ของการร้องเรียน</p>
            </div>

            <textarea
              id='message'
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-0'
              placeholder='พฤติการณ์ของการร้องเรียน...'
            ></textarea>

            <div
              className='flex flex-wrap justify-end gap-3 '
              style={{
                marginTop: 16,
              }}
            >
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
          </Card>
        </div>
      ),
    },
    {
      title: 'ตรวจสอบข้อมูล',
      description: '',
      content: (
        <div>
          <Card className='p-2 rounded-3xl'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 pb-4'>
              <div>
                <p className='text-xl grid justify-items-start'>
                  ตรวจสอบข้อมูล
                </p>
              </div>
              <div>
                {/*  <p className='text-sm text-gray-300 grid justify-items-end'>
                  <Button >
                    พิมพ์
                  </Button>
                </p> */}
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 pb-4'>
              <div>
                <p className='text-lg grid justify-items-start'>
                  ข้อมูลผู้ร้องเรียน
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='คำนำหน้า'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    คำนำหน้า
                  </span>
                </label>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ชื่อ'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ชื่อ
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='นามสกุล'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    นามสกุล
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เลขบัตรประจำตัวประชาชน'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เลขบัตรประจำตัวประชาชน
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='สัญชาติ'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    สัญชาติ
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='หนังสือเดินทางเลขที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    หนังสือเดินทางเลขที่
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='อีเมล'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    อีเมล
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เบอร์โทรศัพท์มือถือ'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เบอร์โทรศัพท์มือถือ
                  </span>
                </label>
              </div>

              <br />

              <div>
                <p className='text-base grid justify-items-start pb-4'>
                  ที่อยู่ตามบัตรประชาชน
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
              <div className=' mb-4 '>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เลขที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เลขที่
                  </span>
                </label>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='อาคาร'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    อาคาร
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='หมู่ที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    หมู่ที่
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ชั้นที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ชั้นที่
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ตรอก/ซอย'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ตรอก/ซอย
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ถนน'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ถนน
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ตำบล/แขวง'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ตำบล/แขวง
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='อำเภอ'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    อำเภอ
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='จังหวัด'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    จังหวัด
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='รหัสไปรษณีย์'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    รหัสไปรษณีย์
                  </span>
                </label>
              </div>
            </div>
            <br />
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4'>
              <div className='mb-4'>
                <div className='flex items-center'>
                  <p className='text-base pr-8'>ที่อยู่ที่สามารถติดต่อได้</p>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
              <div className=' mb-4 '>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เลขที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เลขที่
                  </span>
                </label>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='อาคาร'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    อาคาร
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='หมู่ที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    หมู่ที่
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ชั้นที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ชั้นที่
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ตรอก/ซอย'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ตรอก/ซอย
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ถนน'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ถนน
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ตำบล/แขวง'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ตำบล/แขวง
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='อำเภอ'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    อำเภอ
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='จังหวัด'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    จังหวัด
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='รหัสไปรษณีย์'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    รหัสไปรษณีย์
                  </span>
                </label>
              </div>
            </div>

            <br />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 pb-4'>
              <div>
                <p className='text-lg grid justify-items-start'>
                  ข้อมูลผู้ถูกร้องเรียน
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ค้นหาเลขที่ใบอนุญาต/ ชื่อบริษัท/ ห้างหุ้นส่วน'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เลขที่ใบอนุญาต/ ชื่อบริษัท/ ห้างหุ้นส่วน
                  </span>
                </label>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เลขที่ใบอนุญาต'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เลขที่ใบอนุญาต
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ชื่อผู้ถูกร้อง'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ชื่อผู้ถูกร้อง
                  </span>
                </label>
              </div>
            </div>

            <br />

            <div className='mb-4 flex items-center '>
              <p className='text-base'>ที่อยู่ผู้ถูกร้องเรียน</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className=' mb-4 '>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เลขที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เลขที่
                  </span>
                </label>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='อาคาร'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    อาคาร
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='หมู่ที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    หมู่ที่
                  </span>
                </label>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ชั้นที่'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ชั้นที่
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ตรอก/ซอย'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ตรอก/ซอย
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ถนน'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ถนน
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ตำบล/แขวง'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ตำบล/แขวง
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='อำเภอ/เขต'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    อำเภอ/เขต
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='จังหวัด'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    จังหวัด
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='รหัสไปรษณีย์'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    รหัสไปรษณีย์
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='อีเมล'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    อีเมล
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เบอร์โทรศัพท์'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เบอร์โทรศัพท์
                  </span>
                </label>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ประเทศที่เดินทางไปท่องเที่ยว'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ประเทศที่เดินทางไปท่องเที่ยว
                  </span>
                </label>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เมือง/จังหวัด'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เมือง/จังหวัด
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='วันที่เดินทาง'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    วันที่เดินทาง
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='จำนวนผู้เดินทาง'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    จำนวนผู้เดินทาง
                  </span>
                </label>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='มูลค่าความเสียหาย'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    มูลค่าความเสียหาย
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='วันที่ยกเลิกรายการนำเที่ยว (ถ้ามี)'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    วันที่ยกเลิกรายการนำเที่ยว (ถ้ามี)
                  </span>
                </label>
              </div>
            </div>
          </Card>

          <Card
            className='p-2 rounded-3xl'
            style={{
              marginTop: 16,
            }}
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 pb-4'>
              <div>
                <p className='text-lg grid justify-items-start'>
                  รายละเอียดการร้องเรียน
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='ประเทศที่เดินทางไปท่องเที่ยว'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    ประเทศที่เดินทางไปท่องเที่ยว
                  </span>
                </label>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='เมือง/จังหวัด'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    เมือง/จังหวัด
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='วันที่เดินทาง'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    วันที่เดินทาง
                  </span>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='จำนวนผู้เดินทาง'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    จำนวนผู้เดินทาง
                  </span>
                </label>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='มูลค่าความเสียหาย'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    มูลค่าความเสียหาย
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Username'
                  className='relative block rounded-lg border border-gray-200  '
                >
                  <input
                    type='text'
                    id='Username'
                    className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full h-11 text-lg pl-4 pt-4 pb-2'
                    placeholder='วันที่ยกเลิกรายการนำเที่ยว (ถ้ามี)'
                  />

                  <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base'>
                    วันที่ยกเลิกรายการนำเที่ยว (ถ้ามี)
                  </span>
                </label>
              </div>
            </div>
            <br />
            <div className='mb-4 flex items-center '>
              <p className='text-lg'>พฤติการณ์ของการร้องเรียน</p>
            </div>

            <textarea
              id='message'
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-0'
              placeholder='พฤติการณ์ของการร้องเรียน...'
            ></textarea>
          </Card>

          <Card
            className='p-2 rounded-3xl'
            style={{
              marginTop: 16,
            }}
          >
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4'>
              <div className='mb-4'>
                <div className='flex items-start'>
                  <Checkbox onChange={handleCopyAddress} />
                  <p className='font-normal ml-2'>
                    ข้าพเจ้าขอรับรองว่า คำร้องเรียน
                    เอกสารหลักฐานที่ได้ยื่นร้องเรียน เป็นความจริง มิได้ทำ
                    หรือจัดการใดๆ ซึ่งเป็นการล่อลวง ขู่เข็ญ ข่มขู่ หรือให้สัญญา
                    เพื่อจูงใจให้ข้าพเจ้าร้องเรียนหรือส่งมอบเอกสารหลักฐาน
                    และข้าพเจ้าได้อ่านแล้วรับรองว่าถูกต้อง
                  </p>
                </div>
              </div>
            </div>

            <div
              className='flex flex-wrap justify-center gap-3 '
              style={{
                marginTop: 16,
              }}
            >
              <button
                onClick={() => setCurrent(current - 1)}
                type='button'
                style={{ width: '150px', height: '40px' }}
                className='rounded-lg border border-gray-300 bg-white px-5 py-2 text-center text-base font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
              >
                ย้อนกลับ
              </button>
              <button
                onClick={() => setCurrent(current + 1)}
                style={{ width: '160px', height: '40px' }}
                type='button'
                className='rounded-lg border border-primary-500 bg-primary-700 px-5 py-2 text-center text-base font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
              >
                ส่งเรื่องร้องเรียน
              </button>
            </div>
          </Card>
        </div>
      ),
    },
    {
      title: 'แจ้งเรื่องร้องเรียน',
      description: '',
      content: (
        <div>
          <Card
            className='p-2 rounded-3xl'
            style={{
              height: 575,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '48px',
              }}
            >
              <Row gutter={16}>
                <Col xs={24} sm={12} md={24}>
                  <p>
                    <img
                      src={Success}
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
              <p className='text-xl '>แจ้งเรื่องร้องเรียนสำเร็จ</p>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p className='text-blue-700'>เลขสำนวน 1001</p>
            </div>
            <div className='flex flex-wrap justify-center gap-3 pb-2 pt-8'>
              <Link to='/e-service/track-status'>
                <button
                  style={{ width: '160px', height: '40px' }}
                  type='button'
                  className='rounded-lg border border-primary-500 bg-primary-800 px-5 py-2 text-center text-base font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                >
                  ติดตามสถานะ
                </button>
              </Link>
            </div>
            <div className='flex flex-wrap justify-center gap-3 pb-2'>
              <Link to='/e-service'>
                <button
                  type='button'
                  style={{ width: '160px', height: '38px' }}
                  className='rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
                >
                  กลับสู่หน้าหลัก
                </button>
              </Link>
            </div>
          </Card>
        </div>
      ),
    },
  ];

  return (
    <>
      <HeaderTwo />
      {/*  <div>
        <Card className='bg-white'>
          <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-8 lg:px-4'>
            <div className='sm:flex sm:items-center sm:justify-between'>
              <div className='text-body text-center sm:text-left'>
                <Card className='bg-blue-50'>
                  <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
                    ยื่นคำร้องเรียน
                  </h1>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div> */}
      <div className='bg-blue-900 mt-24 sm:h-auto md:h-[70px] flex items-center justify-center '>
        <h4 className='text-title font-bold text-center text-white '>
          ยื่นเรื่องร้องเรียน
        </h4>
      </div>
      <div className='mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-4 lg:px-2 lg:pt-0'>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={24}>
            <Card className='text-body rounded-3xl mt-4 mb-4'>
              {/* <div className='bg-blue-50 w-full text-center'>
                <h4 className='p-4 lg:text-3xl text-2xl text-slate-900 inline-block ltr:pr-4'>
                  ยื่นคำร้องเรียน
                </h4>
              </div> */}
              {/*    <div className='grid grid-cols-1 gap-4 pl-36 pr-36'> */}
              <div className='custom-steps-width custom-steps-container justify-center '>
                <Steps
                  current={current}
                  labelPlacement='vertical'
                  direction='horizontal'
                  size='small'
                  percent={60}
                  className='step custom-step-size'
                >
                  {steps.map((item) => (
                    <Step
                      key={item.title}
                      title={item.title}
                      /* description={item.description} */
                    />
                  ))}
                </Steps>
              </div>
            </Card>
          </Col>
        </Row>
        {/*  <Row gutter={16}>
          <Col xs={24} sm={24}>
            <Card
              className='text-step p-2 rounded-3xl'
              style={{ marginBottom: 24 }}
            >
              <Steps current={current} direction='horizontal' size="small">
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
        </Row> */}
        <Row gutter={16}>
          <Col xs={24} sm={24} order={1}>
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
    </>
  );
};

export default WriteComplaintPage;
