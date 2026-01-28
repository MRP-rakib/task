'use client'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'Mon',
    uv: 50,
   
  },
  {
    name: 'Tue',
    uv: 60,
    
  },
  {
    name: 'Wed',
    uv: 50,
    
  },
  {
    name: 'Thu',
    uv: 70,
    
  },
  {
    name: 'Fri',
    uv: 80,
    
  },
  {
    name: 'Sat',
    uv: 90,
    
  },
  {
    name: 'Sun',
    uv: 40,
    
  },
];

const Example = () => {
  return (
    <div className='w-full h-75'>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis dataKey="name" tick={{fill:'#F8F8F8',fontSize: 12,}} />
          <YAxis domain={[0,100]} tick={{fill:'#F8F8F8',fontSize: 12,}}/>
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#3B82F6" fill="url(#colorUv)"/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;