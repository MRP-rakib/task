interface valuType{
    value?:string
}
function Inputs({value}:valuType) {
  return (
    <input type="text" value={value} className='w-full text-[#FFFFFF] text-[12px] md:text-[14px] lg:text-base border flex-1 border-[rgba(0,255,136,0.2)] bg-[rgba(10,10,15,0.5)] rounded-[14px] px-4 py-3' />
  )
}

export default Inputs