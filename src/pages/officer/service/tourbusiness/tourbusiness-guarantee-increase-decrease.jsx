import React, { useState } from 'react';
import {
  Card,
  Col,
  Row
} from 'antd';
import { useNavigate } from 'react-router-dom';

const TourbusinessGuaranteeIncreaseDecrease = () => {

  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleRadioSelect = (value) => {
    setSelectedOption(value);
  };

  const handleOkClick = () => {
    if (selectedOption === 'Individual') {
      navigate('/individual-guarantee-increase-decrease');
    } else if (selectedOption === 'Juristic') {
      navigate('/juristic-guarantee-increase-decrease');
    }
  };

  return (
    <div>
      <Card className='rounded-2xl shadow-sm shadow-blue-100/50'>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={12}>
            <div className='text-th'>
              <h5 className='font-bold text-blue-900'>เลือกประเภท</h5>
            </div>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <div className='flex flex-wrap justify-end gap-3 text-body-page text-body-size'>
              <button
                onClick={handleOkClick}
                style={{ width: '140px', height: '40px' }}
                type='button'
                className='rounded-lg border border-primary-500 bg-primary-700 px-5 text-center text-lg font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300'
              >
                ตกลง
              </button>
            </div>
          </Col>
        </Row>
      </Card>

      <Card
        className='p-2 mt-4 rounded-2xl text-body-page shadow-sm shadow-blue-100/50'
        style={{
          height: 530,
        }}
      >
        <fieldset className='grid  gap-4'>
          <legend className='sr-only'>Delivery</legend>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <div>
                <input
                  type='radio'
                  name='DeliveryOption'
                  value='Individual'
                  id='Individual'
                  className='peer hidden [&:checked_+_label_svg]:block '

                  onChange={() => handleRadioSelect('Individual')}

                />

                <label
                  htmlFor='Individual'
                  className='flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-lg font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
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
                    <p className='text-gray-700 text-lg'>บุคคลธรรมดา</p>
                  </div>
                  <p className='text-blue-800'></p>
                </label>
              </div>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <div>
                <input
                  type='radio'
                  name='DeliveryOption'
                  value='Juristic'
                  id='Juristic'
                  className='peer hidden [&:checked_+_label_svg]:block'
                  onChange={() => handleRadioSelect('Juristic')}

                />

                <label
                  htmlFor='Juristic'
                  className='flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-lg font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'
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

                    <p className='text-gray-700 text-lg'>นิติบุคคล</p>
                  </div>

                  <p className='text-blue-800'></p>
                </label>
              </div>
            </Col>
          </Row>
        </fieldset>
      </Card>
    </div>
  );
};

export default TourbusinessGuaranteeIncreaseDecrease;
