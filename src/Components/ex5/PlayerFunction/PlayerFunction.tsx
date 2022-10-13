import { useState } from "react";
import "./PlayerFunction.css";
interface PlayerFunctionProps{
    name:string;
    goals:number;
}
function PlayerFunction(props:PlayerFunctionProps): JSX.Element {

    const plus = () => {
        setGoals(goals + 1);
    }

    const minus = ()=>{
        setGoals(goals-1);
    }
    const [goals,setGoals] = useState<number>(props.goals);

    return (
        <div className="PlayerFunction fc">
            <h3>{props.name}</h3>
            <button onClick={minus}>-</button>
            <p>{goals}</p>
            <button onClick={()=>setGoals(goals+1)}>+</button>
        </div>
    );
}

export default PlayerFunction;
