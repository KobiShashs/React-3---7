import { useEffect, useState } from "react";
import "./CountDownFunction.css";
interface CountDownFunctionProps{
    ticks:number;
    cb: Function;
}
function CountDownFunction(props:CountDownFunctionProps): JSX.Element {

    const [ticks,setTicks] = useState<number>(props.ticks);

    useEffect(() =>{
        const timerId = setInterval(()=>{
            setTicks(ticks => ticks - 1);
            
        }, 1000)
        if(ticks ===0){
            props.cb();
        }
        return ()=>{
            clearInterval(timerId);
        }
    }, [props,ticks])
    return (
        <div className="CountDownFunction fc">
				<p>{ticks}</p>
        </div>
    );
}

export default CountDownFunction;
