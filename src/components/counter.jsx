import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        return (            
            <div>
                <span className={this.badgeClasses()}>{ this.formatCount() }</span>
                <button onClick={ () => this.props.onIncrement( this.props.counter ) } className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={ () => this.props.onDecrement( this.props.counter )  } className={ this.decrementBtnClasses() }>Decrement</button>
                <button onClick={ () => this.props.onDelete( this.props.counter.id ) } className='btn btn-danger btn-sm'>Delete</button>
            </div>
        );
    }

    badgeClasses() {
        let classes = 'badge m-2 bg-';
        return classes += (this.props.counter.value) === 0 ? 'warning' : 'primary'
    }

    decrementBtnClasses() {
        let classes = 'btn btn-secondary btn-sm m-2 ';
        return classes += (this.props.counter.value) === 0 ? 'disabled' : ''
    }

    formatCount() {
        const counter = this.props.counter.value;
        return counter === 0 ? 'Zero' : counter; 
    }

}
 
export default Counter;