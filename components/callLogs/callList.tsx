import { CircleCheckBig, Clock3, Phone, Search } from 'lucide-react'
import { callinfoType } from '../types/callInfoType'
interface callListTYpe{
callinfo:callinfoType[]
onSelect: (call: callinfoType) => void;
activeId:number
}
function callList({callinfo,onSelect,activeId}:callListTYpe) {
  const callTypeStyles: Record<string, string> = {
    'AI Resolved': 'bg-linear-to-r from-[rgba(0,201,80,0.2)] to-[rgba(0,188,125,0.2)] text-[#05DF72] border-[#10B981]',
    'Warm Transfer': 'bg-linear-to-r from-[rgba(255,105,0,0.2)] to-[rgba(251,44,54,0.2)] text-[#FF8904] border-[#FF6900]',
    'Appointment': 'bg-linear-to-r from-[rgba(43,127,255,0.2)] to-[rgba(0,184,219,0.2)] text-[#51A2FF] border-[#2B7FFF]',
    'Dropped': 'bg-linear-to-r from-[rgba(255,21,0,0.2)] to-[rgba(251,44,54,0.2)] text-[#FF0404] border-[#FF6900]',
  }
  return (
    <div className='w-full flex flex-col gap-5.5 '>
      <div className='w-full flex items-center gap-2 border  bg-[rgba(15,23,43,0.5)]  rounded-[14px] h-12.5 px-17 border-[rgba(43,128,255,0.2)]'>
        <span className=''>
          <Search color='#62748E' />
        </span>
        <input type="text" placeholder='Search by phone number, issue type...' className='text-[#62748E] w-full outline-0' />
      </div>
      <div className='bg-[rgba(15,23,43,0.5)] border border-[rgba(43,128,255,0.2)]  rounded-2xl'>
        <div className='p-4 border-b border-[rgba(43,128,255,0.2)] '>
          <h5 className='text-white text-[18px] lg:text-[20px]'>Call List</h5>
        </div>
        <div className={` divide-y divide-[rgba(43,128,255,0.2)]`}>
          {callinfo.map(c=>(
            <div onClick={()=>onSelect(c)} key={c.id} className={`${activeId===c.id&&'border-b-2 border-[#2B7FFF]'} p-4 flex items-start justify-between cursor-pointer`}>

            <div>
              <div className='flex flex-col md:flex-row items-center gap-4'>
                <span className={`w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-[#FFFFFF] rounded-[14px] bg-linear-to-b from-[#2B7FFF] to-[#00B8DB]`}>
                  <Phone  size={16}/>
                </span>
                <div>
                  <h6 className='text-white text-[14px] lg:text-base'>{c.phoneNumber}</h6>
                  <p className='text-[#90A1B9] text-[12px] text-wrap'>{c.dateTime}</p>
                </div>
              </div>
              <div className=' flex flex-col md:flex-row lg:items-center text-[#90A1B9] gap-4 pt-4'>
                <span className='flex items-center text-[14px] gap-1'>
                  <Clock3 size={16} />
                  {c.duration}
                </span>
                <span className='flex items-center text-[14px] gap-1'>
                  <CircleCheckBig size={16} />
                  {c.outcome}
                </span>
                <span className='px-2 bg-[rgba(81,162,255,0.2)] text-[#51A2FF] text-[14px]'>{c.issueType}</span>
              </div>
            </div>
            <div>
              <span className={`${callTypeStyles[c.callType]||'bg-gray-800'}  border  px-3 py-1 rounded-full text-xs font-medium`}>
              {c.callType}
            </span>
            </div>

          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default callList