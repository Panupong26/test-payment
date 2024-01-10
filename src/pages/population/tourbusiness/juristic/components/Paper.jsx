import React from 'react'
import Branch from './Branch';
import MobileLogoWhite from "@/assets/images/logo/dot.png";

export default function Paper({ branchs }) {
  return (
    <>
      <div className='w-[21cm] h-[29.7cm] my-0 p-8 flex justify-center mx-auto'>
        <div className='border border-black-800 w-full h-full px-4 pb-4 relative'>
            <p className='form-text text-end pr-4 absolute right-[-10px] top-[-18px] text-[14px]'>เอกสารแนบ</p>
            <div className='absolute left-1 top-1'>
              <div className="flex items-center space-x-1 ml-3">
                <div className="logo-icon w-[45px] h-[45px] mr-0">
                  <img src={MobileLogoWhite} alt="" />
                </div>
                <div>
                  <h1 className="form-text-bold text-[14px] font-semibold text-slate-900 dark:text-slate-100">
                    กรมการท่องเที่ยว
                  </h1>
                  <p className="form-text-bold text-[14px] font-semibold text-slate-900 dark:text-slate-100">
                    Department of Tourism
                  </p>
                </div>
              </div>
            </div>
          <div className='absolute right-1/2 translate-x-1/2 font-extrabold text-xl top-1'>
            <p className='form-text-bold text-[22px]'>รายละเอียดที่ตั้งสำนักงานสาขา</p>
          </div>
          {branchs?.map((el, index) => <Branch data={el} index={index}/>)}
        </div>
      </div>
    </>
  )
}
