import moment from "moment";
import { useEffect, useState } from "react";
import "./ClockFunction.css";

function ClockFunction(): JSX.Element {
    const [time,setTime] = useState<Date>(new Date());

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date());
        },1000);
    },[]);
    return (
        <div className="ClockFunction fc">
			<p>{moment().format("hh:mm:ss")}</p>
        </div>
    );
}

export default ClockFunction;
