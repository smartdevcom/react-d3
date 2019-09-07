import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import PieClass from './components/PieClass';
import PieHooks from './components/PieHooks';
import PieSVG from './components/PieSVG';
import AnimatedPieHooks from './components/AnimatedPieHooks';
import AnimatedPieSVG from './components/AnimatedPieSVG';

import './styles.css';

const App = () => {

	//generate random data
   const generateData = (value, length = 5) =>
      d3.range(length).map((item, index) => ({
         date: index,
         value: value === null || value === undefined ? Math.random() * 100 : value
      }));

   const [data, setData] = useState(generateData(0));
   const changeData = () => {
      setData(generateData());
   };

   useEffect(() => {
      setData(generateData());
   }, [!data]);

   return (
      <div className='App'>
         <div>
            <button onClick={changeData}>Transform</button>
         </div>
         <div>
            <span className='label'>Animated Pie SVG (React Spring)</span>
            <AnimatedPieSVG data={data} width={200} height={200} innerRadius={60} outerRadius={100} />
         </div>
         <div>
            <span className='label'>Animated Pie Hooks (D3 animations)</span>
            <AnimatedPieHooks data={data} width={200} height={200} innerRadius={60} outerRadius={100} />
         </div>
         <div>
            <span className='label'>SVG Elements</span>
            <PieSVG data={data} width={200} height={200} innerRadius={60} outerRadius={100} />
         </div>
         <div>
            <span className='label'>Hooks</span>
            <PieHooks data={data} width={200} height={200} innerRadius={60} outerRadius={100} />
         </div>
         <div>
            <span className='label'>React Class</span>
            <PieClass data={data} width={200} height={200} innerRadius={60} outerRadius={100} />
         </div>
      </div>
   );
};

export default App;
