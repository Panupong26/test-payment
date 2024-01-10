import React from 'react'

export default function Branch({ data, index }) {
  return (
    <div className='text-black-800'> 
        <div className={`flex h-4 ${index > 0? "mt-2" : "mt-16"}`}>
            <span className='h-fit ml-1 form-text-bold text-[21px] font-thin my-auto pt-1'>
                สาขาที่
            </span>
            <span className='form-text text-[18px] mt-[7px] h-5 border-b-[0.5px] w-[100px] border-black-800 border-dotted text-center'>{data.branchNo || ''}</span>
        </div>

        <div className='flex h-4 mt-[18px]'>
            <span className='ml-4 items-end form-text text-[21px] font-thin'>
            ที่ตั้งสำนักงาน
            </span>
        </div>

        <div className='flex h-fit mt-[6px] mb-0 content-end p-0'>
            <span className='h-fit ml-4 form-text text-[21px] font-thin my-auto pt-1'>
            อาคาร
            </span>
            <span className='form-text text-[18px] mt-[7px] h-5 border-b-[0.5px] w-[250px] border-black-800 border-dotted text-center'>{data.building || ''}</span>
            <span className='h-fit form-text text-[21px] font-thin my-auto pt-1'>
            เลขที่
            </span>
            <span className='form-text text-[18px] mt-[7px] h-5 border-b-[0.5px] w-[150px] border-black-800 border-dotted text-center'>{data.addressNo || ''}</span>
            <span className='h-fit form-text text-[21px] font-thin my-auto pt-1'>
            หมู่ที่
            </span>
            <span className='form-text text-[18px] mt-[7px] h-5 border-b-[0.5px] w-[70px] border-black-800 border-dotted text-center'>{data.moo || ''}</span>
            <span className='h-fit form-text text-[21px] font-thin my-auto pt-1'>
            ชั้นที่
            </span>
            <span className='form-text text-[18px] mt-[7px] h-5 border-b-[0.5px] w-[70px] border-black-800 border-dotted text-center'>{data.floor || ''}</span>
        </div>

        <div className='flex h-fit mt-[-10px] mb-0 content-end p-0'>
            <span className='h-fit ml-4 form-text text-[21px] font-thin my-auto pt-1'>
            ตรอก/ซอย
            </span>
            <span className='form-text text-[18px] mt-[7px] h-5 border-b-[0.5px] w-[226px] border-black-800 border-dotted text-center'>{data.soi || ''}</span>
            <span className='h-fit form-text text-[21px] font-thin my-auto pt-1'>
            ถนน
            </span>
            <span className='form-text text-[18px] mt-[7px] h-5 border-b-[0.5px] w-[346px] border-black-800 border-dotted text-center'>{data.road || ''}</span>
        </div>

        <div className='flex h-fit mt-[-10px] mb-0 content-end p-0'>
            <span className='h-fit ml-4 form-text text-[21px] font-thin my-auto pt-1'>
            ตำบล/แขวง
            </span>
            <span className='form-text text-[18px] mt-[7px] h-5 border-b-[0.5px] w-[220px] border-black-800 border-dotted text-center'>{data.subdistrictId || ''}</span>
            <span className='h-fit form-text text-[21px] font-thin my-auto pt-1'>
            อำเภอ/เขต
            </span>
            <span className='form-text text-[18px] mt-[7px] h-5 border-b-[0.5px] w-[310px] border-black-800 border-dotted text-center'>{data.districtId || ''}</span>
        </div>

        <div className='flex h-fit mt-[-10px] mb-0 content-end p-0'>
            <span className='h-fit ml-4 form-text text-[21px] font-thin my-auto pt-1'>
            จังหวัด
            </span>
            <span className='form-text text-[18px] mt-[7px] h-5 border-b-[0.5px] w-[248px] border-black-800 border-dotted text-center'>{data.provinceId || ''}</span>
            <span className='h-fit form-text text-[21px] font-thin my-auto pt-1'>
            รหัสไปรษณีย์
            </span>
            <span className='form-text text-[18px] mt-[7px] h-5 border-b-[0.5px] w-[298px] border-black-800 border-dotted text-center'>{data.zipCode || ''}</span>
        </div>

        <div className='flex h-fit mt-[-10px] mb-0 content-end p-0'>
            <span className='h-fit ml-4 form-text text-[21px] font-thin my-auto pt-1'>
            โทรศัพท์สำนักงาน
            </span>
            <span className='form-text text-[18px] mt-[7px] h-5 border-b-[0.5px] w-[160px] border-black-800 border-dotted text-center'>{data.telephone || ''}</span>
            <span className='h-fit form-text text-[21px] font-thin my-auto pt-1'>
            โทรศัพท์มือถือ
            </span>
            <span className='form-text text-[18px] mt-[7px] h-5 border-b-[0.5px] w-[155px] border-black-800 border-dotted text-center'>{data.mobile || ''}</span>
            <span className='h-fit form-text text-[21px] font-thin my-auto pt-1'>
            โทรสาร
            </span>
            <span className='form-text text-[18px] mt-[7px] h-5 border-b-[0.5px] w-[120px] border-black-800 border-dotted text-center'>{data.fax || ''}</span>
        </div>

        <div className='flex h-fit mt-[-10px] mb-[-6px] content-end p-0'>
            <span className='h-fit ml-4 form-text text-[21px] font-thin my-auto pt-1'>
            อีเมล
            </span>
            <span className='form-text text-[18px] mt-[7px] h-5 border-b-[0.5px] w-[335px] border-black-800 border-dotted text-center'>{data.email || ''}</span>
            <span className='h-fit form-text text-[21px] font-thin my-auto pt-1'>
            เว็บไซต์
            </span>
            <span className='form-text text-[18px] mt-[7px] h-5 border-b-[0.1px] w-[255px] border-black-800 border-dotted text-center'>{data.website || ''}</span>
        </div>
    </div>
  )
}
