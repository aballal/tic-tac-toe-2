import { Component } from "react";
import { Player } from "./shared";
import { Square } from "./Square";

type State = {
    squares: (Player|null)[];
    nextPlayer: Player;
}

export class Board extends Component<{},State> {
    state: State = {
        squares: Array(9).fill(null),
        nextPlayer: 'X',
    }

    handleClick(i: number) {
        const squares = [...this.state.squares];
        squares[i] = this.state.nextPlayer;
        this.setState({
            squares,
            nextPlayer: this.state.nextPlayer === 'X' ? 'O' : 'X',
        });
    }

    renderSquare(i: number) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        const status = `Next player: ${this.state.nextPlayer}`;

        return (
            <div>
                <div className="status">{status}</div>
                <div>
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>
        );
    }
}