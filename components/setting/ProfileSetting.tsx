import Image from 'next/image'

import Inputs from '../utils/Inputs'
import { SquarePen } from 'lucide-react'

function ProfileSetting() {
    return (
        <div>
            <h6 className='text-base md:text-[18px] lg:text-[20px] text-white'>Profile Image</h6>
            <div className='pt-2 flex items-end gap-2'>
                <div className=' relative rounded-full w-25.5 h-25.5 flex items-center justify-center'>
                    <Image src='/image/profile.jpg' width={102} height={102} alt='profile' className=' object-cover rounded-full w-25.5 h-25.5' />
                    <span className='w-10 h-10 absolute -bottom-3 right-0 bg-[#7AA3CC] z-30 flex items-center justify-center rounded-lg '><SquarePen size={32} color='#FFFFFF' /></span>
                </div>
            </div>
            <form>
                <div className='py-10 grid grid-cols-1 lg:grid-cols-2 gap-7.5 lg:gap-14'>
                    <div className='flex flex-col gap-4 lg:gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[14px] md:text-[16px] text-white lg:text-[20px]' htmlFor="name">Full Name</label>
                            <Inputs value='Jane D.' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className=':text-[14px] md:text-[16px] text-white lg:text-[20px]' htmlFor="name">Email</label>
                            <Inputs value='jane@gmail.com' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 lg:gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[14px] md:text-[16px] text-white lg:text-[20px]' htmlFor="name">Store Name</label>
                            <Inputs value='Ubreakfix Store' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[14px] md:text-[16px] text-white lg:text-[20px]' htmlFor="name">Store Address</label>
                            <Inputs value='123 Main Street, New York' />
                        </div>
                    </div>

                </div>
                <div className='flex items-center justify-center w-full'>

                    <button className='text-[20px] text-2xl font-bold w-37.5 lg:w-93.25 text-white bg-[#00C950] rounded-2xl py-2 '>Save</button>
                </div>
            </form>

        </div>
    )
}

export default ProfileSetting