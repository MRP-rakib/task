interface valuType{
    value?:string
}
function Inputs({value}:valuType) {
  return (
    <input type="text" value={value} className='w-full text-[#FFFFFF] border flex-1 border-[rgba(0,255,136,0.2)] bg-[rgba(10,10,15,0.5)] rounded-[14px] px-4 py-3' />
  )
}

export default Inputs