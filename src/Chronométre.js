import React, { Component } from 'react';

class MyFooter extends Component {


    constructor() {
        super()
        this.state = {
            second: 0,
            ClickPause:0
        }
        this.UpdateEachSecond = this.UpdateEachSecond.bind(this);
        this.renitialiser = this.renitialiser.bind(this);
        this.Timeout= this.Timeout.bind(this);

    }


    secondToTime(second) {

        const hours = Math.floor(second / 3600)
        const hoursRest = second % 3600
        const minutes = Math.floor(hoursRest / 60)
        const minutesRest = hoursRest % 60
        const seconds = Math.floor(minutesRest)
        return String(hours).padStart(2, '0') +
            ':' + String(minutes).padStart(2, '0') +
            ':' + String(seconds).padStart(2, '0')

    }

    UpdateEachSecond() {
        if (this.state.second != 0 && this.state.ClickPause== 0) {
            return;
        }
        
        this.setState({
            ClickPause: 0
        })

        this.time=setInterval(
            () => {
                this.setState({
                    second: this.state.second + 1
                })
            }
            ,
            1000
        )
    }

    Timeout () {
    console.log(this.time);
    clearInterval(this.time);
    this.setState({
        ClickPause: 1
    })
    };
    
    renitialiser() {
        this.setState({
            second: 0
        });
    }

    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '75px' }}>
                    <p>{this.secondToTime(this.state.second)}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '20px', width: '290px', marginLeft: '544px', marginTop: '-80px' }}>
                    <p>Hour</p>
                    <p>Minute</p>
                    <p>Second</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '500px', marginLeft: '440px' }}>
                    <input type='button' value="start" onClick={this.UpdateEachSecond} style={{ border: ' solid blueviolet', color: 'blueviolet', width: '125px', height: '40px', backgroundColor: 'white' }} />
                    <input type='button' value="Reset" onClick={this.renitialiser} style={{ border: 'solid', width: '125px', height: '40px', backgroundColor: 'white' }} />
                    <input type='button' value="Pause" onClick={this.Timeout} style={{ border: ' solid red', color: 'red', width: '125px', height: '40px', backgroundColor: 'white' }} />
                </div>
            </div>
        );
    }
}

export default MyFooter;