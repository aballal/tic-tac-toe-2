import { Component } from "react";
import { Player } from "./shared";
import { Square } from "./Square";

type State = {
    squares: (Player|null)[];
    nextPlayer: Player;
    winner?: Player;
}

type Status = 'win' | 'draw' | 'turn';

export class Board extends Component<{},State> {
    state: State = {
        squares: Array(9).fill(null),
        nextPlayer: 'X',
    }

    handleClick(i: number) {
        if (this.state.winner || this.state.squares[i]) return;
        const squares = [...this.state.squares];
        squares[i] = this.state.nextPlayer;
        const winner = calculateWinner(squares);
        this.setState({
            squares: squares,
            nextPlayer: this.state.nextPlayer === 'X' ? 'O' : 'X',
            winner,
        });
    }

    renderSquare(i: number) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        const status = this.getStatus();

        return (
            <div>
                <div className="board">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <div className={['status', status].join(' ')}>{this.getStatusMessage(status)}</div>
            </div>
        );
    }

    private getStatus(): Status {
        if (this.state.winner) return 'win';
        if (!this.state.squares.some(v => v === null)) return 'draw';
        return 'turn';
    }

    private getStatusMessage(status: Status): string {
        switch(status) {
            case 'win': return `Player ${this.state.winner} wins 🎉!`;
            case 'draw': return `It's a draw ⚖️`;
        }
        return `Next player: ${this.state.nextPlayer}`;
    }
}

function calculateWinner(squares: (Player|null)[]): Player | undefined {
    const horizontals = [[0,1,2], [3,4,5], [6,7,8]];
    const verticals = [[0,3,6],[1,4,7],[2,5,8]];
    const diagonals = [[0, 4, 8],[2, 4, 6]];
    for (const line of [...horizontals, ...verticals, ...diagonals]) {
        const content = line.map(item => squares[item]).join('');
        if (content === 'XXX') return 'X';
        if (content === 'OOO') return 'O';
    }
}