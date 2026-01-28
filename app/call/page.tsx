'use client'
import CallDetails from '@/components/callLogs/CallDetails'
import CallList from '@/components/callLogs/CallList';
import { callinfoType } from '@/components/types/callInfoType';
import { useState } from 'react';
const callInfo = [
  {
    id: 1,
    phoneNumber: "+1 (555) 123-4567",
    duration: "4:32",
    dateTime: "2025-12-16 10:45 AM",
    issueType: "Screen",
    callType: "AI Resolved",
    outcome: "Quote provided"
  },
  {
    id: 2,
    phoneNumber: "+1 (555) 987-6543",
    duration: "2:15",
    dateTime: "2025-12-16 11:20 AM",
    issueType: "Software",
    callType: "Warm Transfer",
    outcome: "Escalated to technician"
  },
  {
    id: 3,
    phoneNumber: "+1 (555) 444-5555",
    duration: "5:50",
    dateTime: "2025-12-16 01:15 PM",
    issueType: "Battery",
    callType: "Appointment",
    outcome: "Appointment Booked"
  },
  {
    id: 4,
    phoneNumber: "+1 (555) 222-3333",
    duration: "1:45",
    dateTime: "2025-12-16 03:30 PM",
    issueType: "Unknown",
    callType: "Dropped",
    outcome: "Call Dropped"
  },
  {
    id: 5,
    phoneNumber: "+1 (555) 888-9999",
    duration: "3:10",
    dateTime: "2025-12-16 04:10 PM",
    issueType: "Screen",
    callType: "AI Resolved",
    outcome: "Quote Provided"
  }
];
function Call() {
  const [selectCall,setSelectCall] = useState<callinfoType>(callInfo[0])
  return (
    <div className='bg-[#121E49] px-6'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 items-start'>
        <CallList callinfo ={callInfo} onSelect = {(call=>setSelectCall(call))} activeId={selectCall.id}/>
        <CallDetails selectCall ={selectCall}/>
      </div>
      </div>
  )
}

export default Call