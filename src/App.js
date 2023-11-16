import React, { Component } from 'react';
// import Movies from './components/movies';
import Counters from './components/counters';

class App extends Component {    
    render() { 
      return (
        <div className="App"> 
          <main className='container'> 
            <Counters />
          </main>
      </div>
      );
    }
}
 
export default App;