import Counter from "./counter";
const Counters = ( { counters , onDelete , onDecrement , onIncrement , onReset } = this.props ) => {
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
 
export default Counters;