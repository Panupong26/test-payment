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
import { Link } from 'react-router-dom';

import HeaderTwo from '@/pages/population/home/headertwo';
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const AppealPage = () => {
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the modal display
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <HeaderTwo />

      <div className='h-48 bg-white sm:pt-32 lg:px-34'>
        <div className='mx-auto max-w-screen-2xl px-4 pb-6 pt-16 sm:px-4 lg:px-2 lg:pt-0'>
          <p className='text-title pl-8 lg:text-3xl text-slate-700 ltr:pr-4 '>
            ยื่นอุทธรณ์
          </p>{' '}
        </div>

        <div>
            <div className=' pt-4 grid justify-items-center sm:p-4 '>
              <Row gutter={16}>
                <Col xs={24} sm={12} md={24}>
                  <Card className='p-2 rounded-3xl text-title '>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 pb-4'>
                      <div>
                        <p className='text-lg grid justify-items-start'>
                          บันทึกข้อมูลการอุทธรณ์
                        </p>
                      </div>
                      <div>
                        <p className='text-sm text-gray-500 grid justify-items-end'>
                          วันที่ยื่นอุทธรณ์{' '}
                          {new Date().toLocaleDateString('th-TH', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-16'>
                      <div className='mb-4 '>
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
                            อุทธรณ์คำสั่งนายทะเบียนที่
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
                            ลงวันที่
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
                            ชื่อผู้อุทธรณ์
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 pb-4 '>
                      <div>
                        <p className='text-lg grid justify-items-start'>
                          อธิบายเหตุผลการอุทธรณ์
                        </p>
                      </div>
                    </div>
                    <div className='mb-4 px-16'>
                      <textarea
                        id='message'
                        rows='4'
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-0'
                        placeholder='เขียนเหตุผล...'
                      ></textarea>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 pb-4 '>
                      <div>
                        <p className='text-lg grid justify-items-start'>
                          แนบเอกสารอุทธรณ์
                        </p>
                      </div>
                    </div>
                    <div className='mb-4 px-16'>
                      <p className='text-gray-600 text-md grid justify-items-start'>
                        เอกสารที่เกี่ยวข้อง
                      </p>
                    </div>
                    <>
                      <Dragger {...props}>
                        <p className='ant-upload-drag-icon'>
                          <InboxOutlined />
                        </p>
                        <p className='ant-upload-text'>
                          Click or drag file to this area to upload
                        </p>
                        <p className='ant-upload-hint'>
                          Support for a single or bulk upload. Strictly
                          prohibited from uploading company data or other banned
                          files.
                        </p>
                      </Dragger>
                    </>
                    <div
                      className='flex flex-wrap justify-center gap-3 '
                      style={{
                        marginTop: 16,
                      }}
                    >
                      <Link to='/e-service/track-status'>
                        <button
                          onClick={() => setCurrent(current - 1)}
                          type='button'
                          style={{ width: '150px', height: '40px' }}
                          className='rounded-lg border border-gray-300 bg-white px-5 py-2 text-center text-base font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
                        >
                          ย้อนกลับ
                        </button>
                      </Link>
                      <button
                        onClick={toggleModal}
                        style={{ width: '160px', height: '40px' }}
                        type='button'
                        className='rounded-lg border border-primary-500 bg-primary-700 px-5 py-2 text-center text-base font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                      >
                        ส่งเรื่องอุทธรณ์
                      </button>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
   
      {showModal && (
        <>
          <div className='fixed inset-0 z-10 bg-secondary-700/50'></div>
          <div className='fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0'>
            <div className='mx-auto w-full overflow-hidden rounded-lg bg-white shadow-xl sm:max-w-sm'>
              <div className='relative p-5'>
                <div className='text-center text-title'>
                  <div className='mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-500'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      class='h-6 w-6'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-secondary-700'>
                      ยืนยันการส่งเรื่องอุทธรณ์
                    </h3>
                  </div>
                </div>
                <div className='text-title mt-5 flex justify-end gap-3'>
                  <button
                    type='button'
                    onClick={() => setShowModal(false)}
                    className='flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400'
                  >
                    ยกเลิก
                  </button>

                  <button
                    type='button'
                    onClick={toggleModal}
                    className='flex-1 rounded-lg border border-primary-500 bg-primary-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
                  >
                    ตกลง
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppealPage;
