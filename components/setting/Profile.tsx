import Image from 'next/image'

function Profile() {
    return (
        <div>
            <h6 className='text-[20px] text-white'>Profile Image</h6>
            <div className='pt-2 flex items-end gap-2'>
                <Image src='/image/profile.jpg' width={102} height={102} alt='profile' className=' object-cover rounded-full w-25.5 h-25.5' />
                <button className='px-2 cursor-pointer rounded-xl py-1.5 text-white text-[12px] bg-btn shadow-[inset_0_1px_18px_2px_#D2EAFF,inset_0_1px_4px_2px_#D2EAFF,0_42px_107px_0_rgba(87,177,255,0.38),0_24.72px_32.26px_0_rgba(87,177,255,0.38),0_10.27px_13.45px_0_rgba(87,177,255,0.22),0_3.71px_4.85px_0_rgba(87,177,255,0.15)]'>Edit Profile</button>
            </div>
            <div className='py-10'>
                 <table className=" text-[16px] lg:text-[20px] text-white font-medium border-collapse">
                        <tbody>
                            <tr className="border-b border-[#192D71]">
                                <td className="py-4 pr-16 ">Full Name:</td>
                                <td className="py-4 text-left">Jane D.</td>
                            </tr>
                            <tr className="border-b border-[#192D71]">
                                <td className="py-4 pr-16 ">Email:</td>
                                <td className="py-4 text-left">jane@gmail.com</td>
                            </tr>
                            <tr className="border-b border-[#192D71]">
                                <td className="py-4 pr-16">Store Name:</td>
                                <td className="py-4 text-left">Ubreakfix Store</td>
                            </tr>
                            <tr className="border-b border-[#192D71]">
                                <td className="py-4 pr-16 text-white">Store Address:</td>
                                <td className="py-4 text-left">
                                    123 Main Street, New York, NY 10001
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
            </div>
        </div>
    )
}

export default Profile