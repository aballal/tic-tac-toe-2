import {Component, Fragment} from "react";
import {Player} from "./shared";

type Props = {
    value: Player | null,
    onClick: () => void,
}

export class Square extends Component<Props> {
    render() {
        return (
            <Fragment>
                <button className="square" onClick={() => this.props.onClick()}>
                    {this.props.value}
                </button>
            </Fragment>
        );
    }
}