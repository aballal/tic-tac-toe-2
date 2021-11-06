import { Component } from "react";
import {Player} from "./shared";

type Props = {
    value: Player | null,
    onClick: () => void,
}

export class Square extends Component<Props> {
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}