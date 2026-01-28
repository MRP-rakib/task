'use client'
import { Copy } from 'lucide-react'
import  { useState } from 'react'
import AppointmentTable from './AppointmentTable'
import Pagination from '../utils/Pagination';
import Inputs from '../utils/Inputs';

const clientData = [
  {
    id: 1,
    Name: "Jane.D",
    phoneNumber: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    dateTime: "02/06/2026",
    slotNo: 1,
    startTime: "09:00",
   
  },
  {
    id: 2,
    Name: "Jane.D",
    phoneNumber: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    dateTime: "02/06/2026",
    slotNo: 1,
    startTime: "10:00",
   
  },
  {
    id: 3,
    Name: "Jane.D",
    phoneNumber: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    dateTime: "02/06/2026",
    slotNo: 1,
    startTime: "11:00",
   
  },
  {
    id: 4,
    Name: "Jane.D",
    phoneNumber: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    dateTime: "02/06/2026",
    slotNo: 1,
    startTime: "12:00",
   
  },
  {
    id: 5,
    Name: "Jane.D",
    phoneNumber: "01960685765",
    clientMail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    dateTime: "02/06/2026",
    slotNo: 1,
    startTime: "02:00",
    
  }
];
function AppointmentList() {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <div>
        <div className='bg-linear-to-b from-[#1A1A2E] to-[#16213E] p-4 lg:p-6.25 rounded-2xl'>
            <span className='text-[16px] text-[#FFFFFF]'>Booking Link</span>
          <div className='flex items-center gap-3 mt-4'>
            <Inputs/>
            <button className='px-3 cursor-pointer py-2 shadow-[inset_0_1px_18px_2px_#D2EAFF] flex items-center gap-4 bg-linear-to-b from-[#152252] to-[#111B3C]
            rounded-xl text-white'
            ><Copy/> Copy Link</button>
          </div>
        </div>
        <div className='pt-4 lg:pt-6'>
          <AppointmentTable data={clientData}/>
          <Pagination currentPage={currentPage} totalPages={8} onPageChange={(p) => setCurrentPage(p)}/>
        </div>
    </div>
  )
}

export default AppointmentList