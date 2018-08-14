import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Cronometro extends Component {
    state = {
        seconds: 1500,
        min: 25,
        seg: 0,
        zeroMin: '',
        zeroSeg: '0',
        isTicking: false,
    }
    
    tick() {
        if(!this.state.isTicking) return;

        if(this.state.seconds<1){
            this.setState({
                seconds: 0,
                min: 0,
                seg: 0,
                isTicking: false,
            });
            return;
        }

        this.setState(prevState => ({
            seconds: prevState.seconds - 1,
            min: parseInt((prevState.seconds)/60),
            seg: ((prevState.seconds)%60),
        }));

        if(this.state.min<10) this.setState({zeroMin: '0'})
        else this.setState({zeroMin: ''})

        if(this.state.seg<10) this.setState({zeroSeg: '0'})
        else this.setState({zeroSeg: ''})
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handlePenalidade = () => {
        const now = this.state.seconds;
        if(now>30) this.setState({ seconds: (now-30)});
    }

    handlePause = () => {
        this.setState({ isTicking: false});
    }

    handleReset = () => {
        this.setState({ 
            seconds: 1500,
            min: 25,
            seg: 0,
            zeroMin: '',
            zeroSeg: '0',
            isTicking: false,
        });
    }

    handlePlay = () => {
        this.setState({ isTicking: true });
    }

    render(){
        return(
            <div class="App">
                <div class="timer-container">
                    <text class="timer-num">{this.state.zeroMin}{this.state.min}</text>
                    <text class="timer">:</text>
                    <text class="timer-num">{this.state.zeroSeg}{this.state.seg}</text>
                </div>
                <div class="botoes">
                    <Button style={{marginRight: 18, marginLeft: 18}} onClick={this.handlePenalidade} size="large" variant="contained" color="secondary" >
                        Penalidade
                    </Button>
                    <br/>
                    <Button style={{marginRight: 18, marginLeft: 18}} onClick={this.handleReset} size="large" variant="contained" color="default" >
                        Resetar
                    </Button>
                    <br/>
                    <Button style={{marginRight: 18, marginLeft: 18}} onClick={this.handlePause} size="large" variant="contained" color="default" >
                        Pausar
                    </Button>
                    <br/>
                    <Button style={{marginRight: 18, marginLeft: 18}} onClick={this.handlePlay} size="large" variant="contained" color="primary" >
                        Play
                    </Button>
                </div>
            </div>
        );
    }
}

export default Cronometro;