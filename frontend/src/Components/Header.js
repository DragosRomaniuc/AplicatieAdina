import React, { Component } from 'react';
import Timer from 'react-compound-timer';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titlu: '',
            buttonText: "Apasa-ma",
            butonApasat: false,
            pagina: 2,
            timerBackward: 60,
            timerForward: 0,
            stopTimer: false
        }
    }

    componentDidMount() {
        var myInterval = setInterval(() => {
            this.setState({ timerBackward: this.state.timerBackward - 1,timerForward: this.state.timerForward +1 })
            this.state.timer === 0 && clearInterval(myInterval);
        }, 1000)
    }


    handleClick = () => {
        this.setState({
            butonApasat: true
        })
    }

    afiseazaTitlu = () => {
        return this.state.titlu
    }

    handleInputChange = event => {
        this.setState({
            titlu: event.target.value
        });
    }

    handleClickInapoi = () => {
        if (this.state.pagina < 1) {
            return;
        }
        this.setState({
            pagina: this.state.pagina - 1
        })
    }

    handleClickInainte = () => {
        if (this.state.pagina > 2) {
            return;
        }
        this.setState({
            pagina: this.state.pagina + 1
        })
    }


    renderContent = () => {
        return this.state.pagina === 0 ? <div> 
            pagina 0 
           <div>
           Timp ramas: {this.state.timerBackward}s
           </div>

           <div>
           Timp petrecut: {this.state.timerForward}s
           </div>
        
        </div>
            : this.state.pagina === 1 ? <div> pagina 1</div>
                : this.state.pagina === 2 ? <div> pagina 2</div>
                    : <div> pagina 2</div>

    }



    render() {
        return (
            <div>
                {this.renderContent()}
                <button onClick={this.handleClickInapoi}> {"<-"} </button>
                <button onClick={this.handleClickInainte}> -> </button>
            </div>
        )
    }
}

export default Header;