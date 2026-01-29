import { ArrowLeftRight, Bot, Calendar, CircleX, Clock3, Phone } from 'lucide-react'
const overviewData = [
    { id: '1', cardTitle: 'Total Calls Today', value: 127, trend: "+12%", icon: <Phone />, bg: 'bg-linear-to-b from-[#2B7FFF] to-[#00B8DB]' },
    { id: '2', cardTitle: 'AI-Handled Calls', value: 98, trend: "+77%", icon: <Bot />, bg: 'bg-linear-to-b from-[#AD46FF] to-[#F6339A]' },
    { id: '3', cardTitle: 'Warm Transfer', value: 23, trend: "+18%", icon: <ArrowLeftRight />, bg: 'bg-linear-to-b from-[#FF6900] to-[#FB2C36]' },
    { id: '4', cardTitle: 'Appointments Booked', value: 34, trend: "+8%", icon: <Calendar />, bg: 'bg-linear-to-b from-[#00C950] to-[#00BC7D]' },
    { id: '5', cardTitle: 'Missed/Failed Calls', value: 6, trend: "-3%", icon: <CircleX />, bg: 'bg-linear-to-b from-[#FB2C36] to-[#FF2056]' },
    { id: '6', cardTitle: 'Avg Call Duration', value: '3:42', trend: "+15%", icon: <Clock3 />, bg: 'bg-linear-to-b from-[#615FFF] to-[#2B7FFF]' }
]
function OverViewCard() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 lg:py-6 gap-4 lg:gap-6'>
            {overviewData.map(d => (
                <div key={d.id} className='bg-[rgba(15,23,43,0.5)] border border-[rgba(43,128,255,0.2)] py-6.25 px-6 flex justify-between items-start rounded-2xl'>
                    <div className=' flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#90A1B9] text-[12px] lg:text-[14px]'>{d.cardTitle}</p>
                            <span className={` text-[#FFFFFF] text-[20px] md:text-2xl lg:text-[30px]`}>
                                {d.value}
                            </span>
                        </div>
                        <span className={`${d.trend.startsWith('-') ? 'text-[#FD244A]' : 'text-[#05DF72]'} text-[12px] lg:text-[14px]`}>{d.trend}</span>
                    </div>
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center text-[#FFFFFF] rounded-[14px] ${d.bg}`}>
                        {d.icon}
                    </div>
                </div>
            ))}

        </div>

    )
}

export default OverViewCard