import "./HelloFunction.css";
interface HelloFunctionProps {
    txt: string;
}
function HelloFunction4(props: HelloFunctionProps): JSX.Element {
    return (
        <div className="HelloFunction fc">
			<p>{props.txt}</p>
        </div>
    );
}

export default HelloFunction4;
