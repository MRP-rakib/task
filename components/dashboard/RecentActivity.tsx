
const activities = [
    {
        id: 1,
        text: "AI booked appointment for iPhone 13 screen repair",
        timestamp: '2 min ago',
        status: "success",
    },
    {
        id: 2,
        text: "Warm transfer to technician - Software issue",
        timestamp: '5 min ago',
        status: "pending",
    },
    {
        id: 3,
        text: "Quote provided for iPad battery replacement",
        timestamp: '8 min ago',
        status: "success",
    },
    {
        id: 4,
        text: "Call dropped after 12 seconds",
        timestamp: '15 min ago',
        status: "reject",
    }
];
function RecentActivity() {
    const statusColors: { [key: string]: string }= {
        success: "bg-[#05DF72]",
        pending: "bg-[#FF8904]",
        reject: "bg-[#FF6467]",

    };
    return (
        <div className="p-6.25 bg-[rgba(15,23,43,0.5)] border border-[rgba(43,128,255,0.2)] rounded text-white">

            <h5 className="text-[18px] lg:text-[20px]">Recent Activity</h5>
            <div className="flex flex-col gap-3 mt-4">
{activities.map(a=>(
                <div key={a.id} className="flex items-start p-2 gap-2 bg-[rgba(29,41,61,0.5)] rounded-[10px]">

                <span className={`w-2 h-2 rounded-full ${statusColors[a.status]||'bg-gray-500'} mt-1.25`}></span>
                <div className="flex flex-col gap-1">
                    <p className="text-[#FFFFFF] text-[14px]">{a.text}</p>
                    <p className="text-[#7A8BA4] text-[12px]">{a.timestamp}</p>
                </div>


            </div>
            ))}
            </div>
            

        </div>
    )
}

export default RecentActivity