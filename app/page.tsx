import CallTrends from "@/components/dashboard/callTrends/CallTrends";
import OverViewCard from "@/components/dashboard/overviewDetails/OverViewCard";
import RecentActivity from "@/components/dashboard/recentActivity/RecentActivity";
import RepairRequest from "@/components/dashboard/repairRequest/RepairRequest";

export default function Home() {
  return (
    <div className="bg-[#121E49] px-6">
      <OverViewCard/>
      <CallTrends/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <RecentActivity/>
        <RepairRequest/>
      </div>
    </div>
  );
}
