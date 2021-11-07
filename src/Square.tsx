import {Component, Fragment} from "react";
import {Player} from "./shared";

type Props = {
    value: Player | null,
    onClick: () => void,
    className: string
}

export class Square extends Component<Props> {
    render() {
        return (
            <Fragment>
                <button className={`square ${this.props.className}`} onClick={() => this.props.onClick()}>
                    <span>{this.props.value}</span>
                </button>
            </Fragment>
        );
    }
}