import { Calendar, CircleAlert, CircleCheckBig, } from 'lucide-react'
const overviewData = [
    { id: '1', cardTitle: 'Total Booked', value: 34, trend: "+8 this week", icon:<Calendar />, color: 'text-[#51A2FF]' },
    { id: '2', cardTitle: 'AI Booked', value: 28, trend: "82% of total", icon: <CircleCheckBig/>, color: 'text-[#05DF72]' },
    { id: '3', cardTitle: 'Pending', value: 3, trend: "Awaiting confirmation", icon:<CircleAlert />, color: 'text-[#FDC700]' },

]
function AppointmentInfo() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 lg:py-6 gap-6'>
            {overviewData.map(d => (
                <div key={d.id} className='bg-[rgba(15,23,43,0.5)] border border-[rgba(43,128,255,0.2)] py-6.25 px-6 flex justify-between items-start rounded-2xl'>
                    <div className=' flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-3'>
                                <span className={`${d.color}`}>{d.icon}</span>
                            <p className='text-[#90A1B9] text-[14px]'>{d.cardTitle}</p>
                            </div>
                            <span className={` text-[#FFFFFF] text-2xl lg:text-[30px]`}>
                                {d.value}
                            </span>
                        </div>
                        <span className={`${d.trend.startsWith('+') ? 'text-[#05DF72]' : 'text-[#90A1B9]'} text-[14px]`}>{d.trend}</span>
                    </div>
                    
                </div>
            ))}

        </div>

    )
}

export default AppointmentInfo