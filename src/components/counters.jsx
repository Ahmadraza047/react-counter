

import React, { Component } from 'react';
import NavBar from './Counters/navbar';
import CounterList from './Counters/counterList';

class Counters extends Component {
  state = { 
        counters : [
            { id:1 , value: 4},
            { id:2 , value: 1},
            { id:3 , value: 0},
            { id:4 , value: 0}
        ]
    }

    handleReset = () => {
        const counters = this.state.counters.map( counter => 
            {counter.value = 0
            return counter}
        );
        this.setState( { counters });
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value++;
        this.setState( { counters });
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value--;
        this.setState( { counters });
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter( c => c.id !== counterId );
        this.setState( {counters } );
    }
    
    render() { 
        const { counters } = this.state;
      return (

        <div className="CounterWrap">

            <NavBar totalCounters = { this.state.counters.filter( c => c.value > 0).length } />
            <CounterList 
                key={counters.id}
                counters={counters}
                onReset={this.handleReset}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
            />

            
        </div>
      );
    }
}
 
export default Counters;

