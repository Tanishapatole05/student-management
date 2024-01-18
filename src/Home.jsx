import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

function Home() {
  const data = [
    { name: 'Totalstudent', value: 100 },
    { name: 'Course', value: 12 },
    { name: 'Instructor', value: 8 },
    { name: 'course_provider', value: 10 },
  ];

  const COLORS = ['#36A2EB', '#FF6384','#FF644', '#FFCE56'];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Students</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>100</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Courses</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>12</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Instructors</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>8</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Course-Providers</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>10</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width='200%' height={300}>
          <PieChart>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              startAngle={90}
              endAngle={450}
              innerRadius='60%'
              outerRadius='100%'
              fill='#8884d8'
              dataKey='value'
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;

