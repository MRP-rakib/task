'use client'
import Profile from '@/components/setting/Profile'
import ProfileSetting from '@/components/setting/ProfileSetting'
import React, { useState } from 'react'

function Setting() {
    const [active,isActive] = useState<boolean>(true)
  return (
    <div className='bg-[#121E49] pt-4 lg:pt-6 px-4 lg:px-6 min-h-screen'>
        <div className={`text-[20px] text-white
             lg:text-2xl flex items-center
              gap-15.75 border-b py-2
               border-[#192D71]`}>
            <span onClick={()=>isActive(true)} className={`${active&&'underline underline-offset-15 decoration-[#87A2FF]'} cursor-pointer text-[18px] md:text-[20px]  lg:text-2xl`}>Profile</span>
            <span onClick={()=>isActive(false)} className={`${!active&&'underline underline-offset-15 decoration-[#87A2FF]'} cursor-pointer text-[18px] md:text-[20px] lg:text-2xl text-nowrap`}>Password Settings</span>
        </div>
        <div className='pt-5 lg:pt-10'>
           {active?
           (
            <Profile/>
           )
           :
           (
            <ProfileSetting/>
           )}
        </div>
    </div>
  )
}

export default Setting