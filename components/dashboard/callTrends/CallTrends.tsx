import WeeklyChart from '@/components/dashboard/chart/WeeklyChart'
import FilterBtn from "@/components/utils/btn/FilterBtn";

function CallTrends() {
  return (
    <div className="bg-[rgba(15,23,43,0.5)] border border-[rgba(43,128,255,0.2)] p-6.25 rounded">
        <div className=" flex items-center justify-between">
            <div className="flext flex-col gap-1">
             <h5 className="text-[16px] lg:text-[20px] text-[#FFFFFF]">Call Trends - This Week</h5>
             <p className="text-[12px] text-[#90A1B9]">Total: 472 calls</p>
        </div>
        <div>
             <FilterBtn option1='this week' option2='last week' option3='last 7 day'/>
        </div>
        </div>
        <div className="pt-3 lg:pt-6">
            <WeeklyChart/>
        </div>
    </div>
  )
}

export default CallTrends