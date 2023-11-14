import React, { Component } from 'react';

class Counter extends Component {

    state = { 
        counter : { 
            id:1 , value: 5
        }        
    }

    render() { 
        return (            
            <div>
                <span className={this.badgeClasses()}>{ this.formatCount() }</span>
                <button onClick={ this.incrementCounter } className='btn btn-secondary btn-sm'>Increment</button>
                <button className={ this.decrementBtnClasses() }>Decrement</button>
                <button className='btn btn-danger btn-sm'>Delete</button>
            </div>
        );
    }

    incrementCounter = () => {
        let { counter } = this.state;
        let newcounter = counter.value++;
        // newcounter.value++;
        this.setState( { newcounter });
    }

    badgeClasses() {
        let classes = 'badge m-2 bg-';
        return classes += (this.state.counter.value) === 0 ? 'warning' : 'primary'
    }

    decrementBtnClasses() {
        let classes = 'btn btn-secondary btn-sm m-2 ';
        return classes += (this.state.counter.value) === 0 ? 'disabled' : ''
    }

    formatCount() {
        const { counter } = this.state;
        return counter.value === 0 ? 'Zero' : counter.value ; 
    }

}
 
export default Counter;