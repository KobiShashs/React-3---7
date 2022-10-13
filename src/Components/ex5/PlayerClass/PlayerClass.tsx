import { Component } from "react";
import "./PlayerClass.css";
interface PlayerClassProps{
    name:string;
    goals:number;
}

interface PlayerClassState{
    goals:number;
}
class PlayerClass extends Component<PlayerClassProps,PlayerClassState> {

    private plus = () => {
        this.setState({goals:this.state.goals+1});
    }

    private minus = ()=>{

        this.setState({goals:this.state.goals-1});
    }
    public constructor(props: PlayerClassProps) {
        super(props);
        this.state = {goals: this.props.goals};
    }
    public render(): JSX.Element {
        return (
            <div className="PlayerClass cc">
                <h3>{this.props.name}</h3>
				<button onClick={this.minus}>-</button>
                <p>{this.state.goals}</p>
				<button onClick={this.plus}>+</button>
            </div>
        );
    }
}

export default PlayerClass;
