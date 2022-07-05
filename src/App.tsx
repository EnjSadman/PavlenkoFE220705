import React, { useEffect, useState } from 'react';
import './App.css';
import { Timebar } from './component/Timebar/Timebar';

const initialData = [
  { name: "Landing Page", time: 7.4 },
  { name: "Configurator", time: 0.2 },
  { name: "Check-out", time: 7.0 },
  { name: "Deal", time: 3.8 },
  ];

export const App : React.FC = () => {

  const [wholeTime, setWholeTime] = useState(0);
  const [array, setArray] = useState<Data[]>([])
  const [needUpdate, setNeedUpdate] = useState(false)

  useEffect (() => {
    let temp = 0;
    const arr : Data[] = [];
    
    for (let i = 0; i < initialData.length; i++) {
      if (i === 0) {
        arr.push({...initialData[i], summtime : 1});
      } else {
        arr.push({...initialData[i], summtime : temp});
      }
      temp += Math.ceil(initialData[i].time)
      console.log(Math.round(temp))
    }
    setArray(arr);
    setWholeTime(temp);
  },[needUpdate])
  return (
    <div className="App">
      {array.map(data => (
        <Timebar
          key={data.name}
          name={data.name}
          time={data.time}
          summtime={data.summtime}
          wholetime={wholeTime}
        />
      ))}
      <button type='button'
        onClick={() => {
          initialData.forEach(el => el.time = (Math.floor(Math.random() * 10) + 1))
          setNeedUpdate(!needUpdate)
        }}
      >
        Click
      </button>
    </div>
  );
}
