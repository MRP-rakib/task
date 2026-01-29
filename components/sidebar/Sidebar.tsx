'use client'
import { X, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
const menu = [
  { id: 1, icon: '/icon/home.png', href: '/', name: 'Dashboard Overview' },
  { id: 2, icon: '/icon/call.png', href: '/call', name: 'Call Logs' },
  { id: 3, icon: '/icon/appointment.png', href: '/appointment', name: 'Appointments' },
  { id: 4, icon: '/icon/setting.png', href: '/setting', name: 'Settings' },
]

interface sidebarprops{
  isOpen:boolean
  setisOpen:React.Dispatch<React.SetStateAction<boolean>>
}
function Sidebar({isOpen,setisOpen}:sidebarprops) {
  const pathname = usePathname()

  return (
   <aside className={`${isOpen?'w-full opacity-100 visible':'w-0 opacity-0 invisible'} bg-[rgba(0,0,0,0.5)] h-screen md:opacity-100 md:visible fixed top-0 left-0 transition-all duration-300 md:w-60.25 md:sticky z-50`}>
     <div className="top-0 left-0 fixed md:sticky px-2 flex flex-col overflow-y-auto w-60.25 min-h-screen justify-between bg-[#111B3C] border-r border-[#2B7FFF33]">
      <span onClick={()=>setisOpen(false)} className="text-white md:hidden absolute right-2  top-2 w-8 h-8 rounded-full border flex items-center justify-center border-[#2B7FFF33]">
        <X/>
      </span>
      <div>
        <div className="flex items-center justify-center">
        <span className="w-14 h-14 mt-9.5 rounded-[14px] border bg-linear-to-b from-[#00FF88] to-[#00D4FF] flex items-center justify-center">
          <Zap size={24} />
        </span>
      </div>
      <div className="pt-18 flex flex-col gap-7">
        {menu.map((m) => {
          const isActive=pathname === m.href
          return (
            <Link key={m.id} href={m.href} onClick={()=>setisOpen(false)} className={`flex items-center py-1 px-2  gap-4 text-[#FFFFFF] 
            ${isActive && 'rounded-xl bg-btn shadow-[inset_0_1px_18px_2px_#D2EAFF,inset_0_1px_4px_2px_#D2EAFF,0_42px_107px_0_rgba(87,177,255,0.38),0_24.72px_32.26px_0_rgba(87,177,255,0.38),0_10.27px_13.45px_0_rgba(87,177,255,0.22),0_3.71px_4.85px_0_rgba(87,177,255,0.15)]'} 
          `}>
              <Image src={m.icon} height={32} width={32} alt="logo" className="w-6 h-6 md:w-8 md:h-8" />
              <span className="text-[14px] md:text-base font-medium">{m.name}</span>
            </Link>
          )

        })}
      </div>
      </div>
      <div className="flex pb-12 items-center gap-4">
        <Image src='/icon/logout.png' width={32} height={32} alt="logout"/>
        <span className=" font-medium text-[14px] md:text-base text-[#FF1100]">Logout</span>
      </div>
    </div>
   </aside>
  )
}

export default Sidebar