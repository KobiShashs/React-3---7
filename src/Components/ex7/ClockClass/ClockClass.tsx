import moment from "moment";
import { Component } from "react";
import "./ClockClass.css";

interface ClockClassState{
    time:Date;
}
class ClockClass extends Component<{},ClockClassState> {

    public componentDidMount():void {
        setInterval(()=>{
            this.setState({time: new Date()});
        },1000);
        
    }

    public constructor(props:{}){
        super(props);
        this.state = {time: new Date()}
    }
    public render(): JSX.Element {
        return (
            <div className="ClockClass cc">
                <p>{moment().format("hh:mm:ss")}</p>
            </div>
        );
    }
}

export default ClockClass;
