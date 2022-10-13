import { Component } from "react";
import "./CountDownClass.css";
interface CountDownClassProps{
    ticks:number;
    cb: Function;
}

interface CountDownClassState{
    ticks:number;
}
class CountDownClass extends Component<CountDownClassProps,CountDownClassState> {

    private timerId:any;
    public componentDidMount(): void{
        this.timerId = setInterval(() => {
            this.setState ({ticks:this.state.ticks-1});
        },1000);
    }

    public componentDidUpdate(): void {
        if(this.state.ticks===0){
            this.props.cb();
        }
    }

    public componentWillUnmount(): void {
        clearInterval(this.timerId);
    }

    public constructor(props: CountDownClassProps) {
        super(props);
        this.state = {ticks: props.ticks};
    }
    public render(): JSX.Element {
        return (
            <div className="CountDownClass cc">
				<p>{this.state.ticks}</p>
            </div>
        );
    }
}

export default CountDownClass;
