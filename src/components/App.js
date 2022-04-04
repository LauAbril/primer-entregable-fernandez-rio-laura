import data from './data.json';
import React, { Component } from 'react';
import Options from './Options.js';
import LogHistory from './LogHistory.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LogStory: [],
            counter: 0,
            previousSelection: '',
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.counter !== this.state.counter) {
            this.state.LogStory.push(this.state.previousSelection);
        }
    }

    handleClick = (e) => {
        const id = e.target.id;
        if (this.state.counter >= 7) {
            alert('Fin de la historia. Recarge la pagina para encontrar una nueva aventura');
        } else if (id === 'A' && this.state.previousSelection !== 'A') {
            this.setState({
                counter: this.state.counter + 1,
                previousSelection: 'A',
            });
        } else if (id === 'A' && this.state.previousSelection === 'A') {
            this.setState({
                counter: this.state.counter + 2,
            });
        } else if (id === 'B' && this.state.previousSelection === 'A') {
            this.setState({
                counter: this.state.counter + 3,
                previousSelection: 'B',
            });
        } else if (id === 'B') {
            this.setState({
                counter: this.state.counter + 2,
                previousSelection: 'B',
            });
        }
    };

    render() {
        return (
            <div className="layout">
                <h1 className="historia">{data[this.state.counter].historia}</h1>
                <Options
                    handleClick={this.handleClick}
                    optionA={data[this.state.counter].opciones.a}
                    optionB={data[this.state.counter].opciones.b}
                />
                <LogHistory
                    previousSelection={this.state.previousSelection}
                    LogStory={this.state.LogStory.map(
                        (e, index) => {
                            return <li key={index}>{e}</li>
                        })
                        
                    }
                />
            </div>
        );
    }
}

export default App;