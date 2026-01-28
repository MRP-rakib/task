import { ClientAppointment } from '../types/clientAppointment'

interface TableProps {
  data: ClientAppointment[];
}

export default function AppointmentTable({ data }: TableProps) {
  return (
    <div className="w-full">
      <div className="hidden xl:block overflow-hidden rounded-lg border border-[#162F61] bg-[#111B3B]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#162F61] text-white text-[14px] uppercase tracking-wider">
                <th className="px-6 py-4">Client Name</th>
                <th className="px-6 py-4">Client Phone</th>
                <th className="px-6 py-4">Client Mail</th>
                <th className="px-6 py-4">Device</th>
                <th className="px-6 py-4">Repair Type</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-center">Slot no</th>
                <th className="px-6 py-4 text-right">Start Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(43,128,255,0.1)] text-white">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-[rgba(43,128,255,0.05)] text-[14px] transition-colors group">
                  <td className="px-6 py-4 text-[#51A2FF] font-medium cursor-pointer hover:underline">{item.Name}</td>
                  <td className="px-6 py-4 text-white">{item.phoneNumber}</td>
                  <td className="px-6 py-4 text-white">{item.clientMail}</td>
                  <td className="px-6 py-4">{item.device}</td>
                  <td className="px-6 py-4">{item.repairType}</td>
                  <td className="px-6 py-4 text-white">{item.dateTime}</td>
                  <td className="px-6 py-4 text-center text-white">{item.slotNo}</td>
                  <td className="px-6 py-4 text-right font-mono text-white">{item.startTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 xl:hidden">
        {data.map((item) => (
          <div key={item.id} className="bg-[rgba(15,23,43,0.5)] border border-[rgba(43,128,255,0.2)] p-4 rounded-lg flex flex-col gap-2">
            <div className="flex justify-between items-center border-b border-[rgba(43,128,255,0.1)] pb-2">
              <span className="text-[#51A2FF] font-bold">{item.Name}</span>
              <span className="text-white font-mono bg-[rgba(43,128,255,0.2)] px-2 py-1 rounded text-xs">{item.startTime}</span>
            </div>
            <div className="text-sm flex flex-col gap-1">
              <p className="text-[#90A1B9]"><span className="text-white">Phone:</span> {item.phoneNumber}</p>
              <p className="text-[#90A1B9]"><span className="text-white">Phone:</span> {item.clientMail}</p>
              <p className="text-[#90A1B9]"><span className="text-white">Device:</span> {item.device}</p>
              <p className="text-[#90A1B9]"><span className="text-white">Repair:</span> {item.repairType}</p>
              <p className="text-[#90A1B9]"><span className="text-white">Date:</span> {item.dateTime}</p>
            </div>
            <div className="mt-2 text-xs text-[#90A1B9] italic text-right">Slot: {item.slotNo}</div>
          </div>
        ))}
      </div>
    </div>
  )
}