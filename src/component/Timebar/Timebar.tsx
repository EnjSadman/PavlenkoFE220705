import './Timebar.scss';

interface Props {
  name : string,
  time : number,
  summtime: number,
  wholetime: number,
}

export const Timebar : React.FC<Props> = ({name, time, summtime, wholetime}) => {
  console.log(wholetime);
  return (
    <div className="container">
      <p>{`${name} : `}</p>
      <div style={{
        "gridTemplateColumns": `repeat(${wholetime}, 10px)`,
      }} className="timebar">
        <div
          className="time_amount"
          style={{
            "gridColumn" : summtime,
            "gridColumnEnd" : summtime + Math.ceil(time),
        }}
        >
          {time}
        </div>
      </div>
    </div>
  )
}