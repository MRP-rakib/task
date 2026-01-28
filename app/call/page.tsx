import FilterBtn from '@/components/utils/btn/FilterBtn'
import { Search } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <div className='bg-[#121E49] px-6'>
      <div className=' flex items-center justify-between gap-21.25 py-6'>
        <div className='w-full flex items-center gap-2 flex-1 border  bg-[rgba(15,23,43,0.5)]  rounded-[14px] py-4 px-17 border-[rgba(43,128,255,0.2)]'>
          <span className=''>
            <Search color='#62748E'/>
          </span>
         <input type="text" placeholder='Search by phone number, issue type...'  className='text-[#62748E] w-full outline-0'/>
        </div>
        <div className=' flex items-center gap-6'>
          <FilterBtn option1='All Type' option2='Second Type' option3='Third Type'/>
          <FilterBtn option1='All Issues' option2='All Issues2' option3='All Issues3'/>
          <FilterBtn option1='Today' option2='Tomorrow' option3='Yesterday'/>
        </div>
      </div>
      
      </div>
  )
}

export default page