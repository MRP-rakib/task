import { Bell, Menu } from "lucide-react"
import Image from "next/image"

interface navbarprops {
  setisOpen: React.Dispatch<React.SetStateAction<boolean>>
}
function Navbar({ setisOpen }: navbarprops) {
  return (
    <nav className="py-2 px-4 lg:px-0 sticky top-0 left-0 w-full bg-[#111B3C] text-[#FFFFFF]">

      <div className="flex items-center justify-between lg:px-6">
        <div className="flex items-center gap-2">
          <span onClick={()=>setisOpen(true)} className="md:hidden">
          <Menu size={24}/>
        </span>
        <h4 className="text-[14px] lg:text-2xl ">Dashboard Overview</h4>
        </div>
        <div className=" flex items-center gap-4 lg:gap-10">
          <span>
            <Bell />
          </span>
          <div className="w-10 h-10 md:w-20 md:h-20 rounded-full flex items-center justify-between">
            <Image src='/image/profile.jpg' width={80} height={80} alt="profile-image" className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full" />
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar