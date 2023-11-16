import Counter from "./singleCounter";
const CounterList = ( { counters , onDelete , onDecrement , onIncrement , onReset } = this.props ) => {
    if( counters.length === 0 ) return null;
    return ( 
        <div>
            <button onClick={ onReset } className="btn btn-primary btn-sm">Reset</button>
            {
                counters.map( 
                    counter => <Counter 
                        key={counter.id} 
                        counter={counter} 
                        onDelete={onDelete}
                        onIncrement = {onIncrement}
                        onDecrement = {onDecrement}
                    />
                )
            }
        </div>
    );
}

export default CounterList;