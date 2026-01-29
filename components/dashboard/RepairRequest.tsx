const repairRequests = [
  { id: 1, label: "Screen Repair", count: 156, percentage: "85%" },
  { id: 2, label: "Battery Replacement", count: 89, percentage: "60%" },
  { id: 3, label: "Back Glass Repair", count: 67, percentage: "45%" },
  { id: 4, label: "Software Issues", count: 45, percentage: "35%" },
];
function RepairRequest() {
  return (
    <div className='p-4 lg:p-6.25 bg-[rgba(15,23,43,0.5)] border border-[rgba(43,128,255,0.2)] rounded-2xl text-white'>
      <h5 className="text-[16px] md:text-[18px] lg:text-[20px]">Top Repair Requests</h5>
      <div className="flex flex-col gap-2 mt-2 lg:mt-4">
        {repairRequests.map((item) => (
          <div key={item.id} className="space-y-3">
            <div className="flex justify-between items-center text-[14px]">
              <span className="text-[#FFFFFF] text-[14px] lg:text-[16px]">{item.label}</span>
              <span className="text-[#C0CCDD] text-[14px] lg:text-[16px]">{item.count} requests</span>
            </div>
            <div className="w-full bg-[#161f31] h-2 rounded-full overflow-hidden">
              <div
                className="h-full text-[14px] lg:text-[16px] bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] rounded-full transition-all duration-700 ease-in-out"
                style={{ width: item.percentage }}
              ></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default RepairRequest