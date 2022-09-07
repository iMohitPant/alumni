import Branch from '../components/Branch'

const branches = () => {
  return (
    <div className='flex flex-col gap-y-16 -mt-60'>
      <div className='flex justify-between items-center px-[500px]'>
        <div className='text-xl font-bold'>Select Course/Degree/Division/Department</div>
        <button className='text-[#00004F] border-2 rounded-md border-[#00004F] py-1 px-2'>View My Batchmates</button>
      </div>
      <div className='grid grid-cols-4 gap-x-8 gap-y-6 px-[500px]'>
        <Branch branch = 'CSE' memberNum='1'/>
        <Branch branch = 'ME' memberNum='1'/>
        <Branch branch = 'ECE' memberNum='1'/>
        <Branch branch = 'EE' memberNum='1'/>
        <Branch branch = 'CE' memberNum='1'/>
        <Branch branch = 'BT' memberNum='1'/>
      </div>
    </div>
  )
}

export default branches