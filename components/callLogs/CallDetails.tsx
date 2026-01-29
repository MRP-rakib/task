import React from 'react'
import FilterBtn from '../utils/FilterBtn'
import { FileText, PlayCircle } from 'lucide-react'
import { callinfoType } from '../types/callInfoType';
  interface selectCallType{
    selectCall:callinfoType
  }
function CallDetails({selectCall}:selectCallType) {
   const callTypeStyles: Record<string, string> = {
    'AI Resolved': 'bg-linear-to-r from-[rgba(0,201,80,0.2)] to-[rgba(0,188,125,0.2)] text-[#05DF72] border-[#10B981]',
    'Warm Transfer': 'bg-linear-to-r from-[rgba(255,105,0,0.2)] to-[rgba(251,44,54,0.2)] text-[#FF8904] border-[#FF6900]',
    'Appointment': 'bg-linear-to-r from-[rgba(43,127,255,0.2)] to-[rgba(0,184,219,0.2)] text-[#51A2FF] border-[#2B7FFF]',
    'Dropped': 'bg-linear-to-r from-[rgba(255,21,0,0.2)] to-[rgba(251,44,54,0.2)] text-[#FF0404] border-[#FF6900]',
  }
  return (
    <div className=' w-full flex flex-col gap-3 lg:gap-5.5'>
      <div className=' hidden lg:flex items-center h-12.5 justify-end gap-4 lg:gap-6'>
          <FilterBtn option1='All Type' option2='Second Type' option3='Third Type'/>
          <FilterBtn option1='All Issues' option2='All Issues2' option3='All Issues3'/>
          <FilterBtn option1='Today' option2='Tomorrow' option3='Yesterday'/>
        </div>
        
      <div className='bg-[rgba(15,23,43,0.5)] border  border-[rgba(43,128,255,0.2)] rounded-2xl'>
       <div className='p-4 border-b border-[rgba(43,128,255,0.2)]'>
         <h5 className='text-white text-[16px] md:text-[18px] lg:text-[20px]'>Call Details</h5>
       </div>
       <div className="p-4 lg:p-6 flex flex-col gap-4 lg:gap-6">
        <div className="grid grid-cols-2 gap-y-6 text-sm">
          <div>
            <p className="text-[#90A1B9] text-[12px] lg:text-[14px] mb-1">Phone Number</p>
            <p className="text-white text-[12px] lg:text-[14px]">{selectCall.phoneNumber}</p>
          </div>
          <div>
            <p className="text-[#90A1B9] text-[14px] mb-1">Duration</p>
            <p className="text-white text-[12px] lg:text-[14px]">{selectCall.duration}</p>
          </div>
          <div>
            <p className="text-[#90A1B9] text-[14px] mb-1">Date & Time</p>
            <p className="text-white text-[12px] lg:text-[14px]">{selectCall.dateTime}</p>
          </div>
          <div>
            <p className="text-[#90A1B9] text-[14px] mb-1">Issue Type</p>
            <p className="text-white text-[12px] lg:text-[14px]">{selectCall.issueType}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-[#90A1B9] text-[12px] lg:text-[14px] mb-2">Call Type</p>
            <span className={`${callTypeStyles[selectCall.callType]||'bg-gray-800'} px-3 py-1 rounded-full text-xs font-medium`}>
              {selectCall.callType}
            </span>
          </div>
          <div>
            <p className="text-[#90A1B9] text-[12px] lg:text-[14px] mb-1">Outcome</p>
            <p className="text-white text-[12px] lg:text-[14px]">{selectCall.outcome}</p>
          </div>
        </div>
        <button className="w-full text-[14px] lg:text-[16px] cursor-pointer flex items-center justify-center gap-2 py-3 bg-linear-to-r from-[rgba(172,70,255,0.2)] to-[rgba(246,51,155,0.2)] hover:opacity-90 transition rounded-xl text-[#C27AFF] font-medium">
          <PlayCircle size={20} className="text-[#C27AFF]" />
          Play Audio Recording
        </button>
        <div className="mt-2">
          <div className="flex items-center gap-2 text-white mb-4">
            <FileText size={18} className="text-[#51A2FF]" />
            <h3 className="text-base">Conversation Transcript</h3>
          </div>

          <div className="bg-[rgba(15,23,42,0.6)] border border-gray-800 rounded-xl p-4 space-y-4 text-[14px] leading-relaxed">
            <div>
              <p className="text-[#05DF72] text-[14px] mb-1">AI Assistant:</p>
              <p className="text-white text-[12px] font-medium">Thank you for calling UBreakiFix! How can I help you today?</p>
            </div>
            <div>
              <p className="text-[#51A2FF] text-[14px] mb-1">Customer:</p>
              <p className="text-white text-[12px] font-medium">Hi, my iPhone 13 screen is cracked. How much would it cost to repair?</p>
            </div>
            <div>
              <p className="text-[#05DF72] text-[14px] mb-1">AI Assistant:</p>
              <p className="text-white text-[12px] font-medium">
                I can help you with that! For an iPhone 13 screen repair, our price is $199. 
                This includes parts, labor, and comes with a 90-day warranty.
              </p>
            </div>
             <div>
              <p className="text-[#51A2FF] text-[14px] mb-1">Customer:</p>
              <p className="text-white text-[12px] font-medium">Yes, please! When are you available?</p>
            </div>
            <div>
              <p className="text-[#05DF72] text-[14px] mb-1">AI Assistant:</p>
              <p className="text-white text-[12px] font-medium">
                Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CallDetails