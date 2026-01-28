import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
interface optionType{
  option1?:string
  option2?:string
  option3?:string
}
function FilterBtn({option1,option2,option3}:optionType) {
  return (
    <div className=" relative inline-block bg-[#1D293D]  border border-[rgba(43,128,255,0.2)] rounded-[10px]">
                    <select className=" text-[12px] lg:text-base text-[#FFFFFF] appearance-none outline-0 py-2.75 px-4.75 w-full pr-10" name="week" id="week">
                    <option className="bg-[#1D293D] text-[#FFFFFF]" value='this_week'>
                      {option1}
                    </option>
                    <option className="bg-[#1D293D] text-[#FFFFFF]" value='last_week'>
                      {option2}
                    </option>
                    <option className="bg-[#1D293D] text-[#FFFFFF]" value='last_7_day'>
                      {option3}
                    </option>
                    
                 </select>
                 <span className=" absolute top-1/2 -translate-y-1/2 right-3 pointer-events-none">
                    <IoMdArrowDropdown  className="text-[#FFFFFF]"/>
                 </span>
                 </div>
  )
}

export default FilterBtn