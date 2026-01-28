import AppointmentInfo from '@/components/appointment/AppointmentInfo'
import AppointmentList from '@/components/appointment/AppointmentList'

function page() {
  return (
    <div className='bg-[#121E49] px-4 lg:px-6'>
      <AppointmentInfo/>
      <AppointmentList/>
    </div>
  )
}

export default page