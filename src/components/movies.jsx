import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';


class Movies extends Component {
    state = { 
        movies : getMovies()
    }

    
    render() {
        const { length : count } = this.state.movies;
        if ( count === 0 ) return <div className='container'><p className='mt-4 mb-0 pb-3 fw-bold border-bottom'>Sorry No Movie in database</p></div>;
        

        return (
            <React.Fragment>
            <div className='container'>
                <p className='mt-4 mb-0 pb-3 fw-bold border-bottom'>Showing { count } movies in the table</p> 
                <table className={ `table table-hover mt-2 ${ this.state.movies.length === 0 && 'd-none'}` }>
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.movies.map( m => 
                            <tr key={ m._id} >
                                <th scope="row">{ m.title}</th>
                                <td>{ m.genre.name}</td>
                                <td>{ m.numberInStock}</td>
                                <td>{ m.dailyRentalRate}</td>
                                <td><button onClick={ () => this.deleteSingleMovie(m._id) } type="button" className="btn btn-danger">Delete</button></td>                                
                            </tr>
                        )
                        }                    
                </tbody>
                </table>
            </div>
            </React.Fragment>
        );
    }

    deleteSingleMovie = (id) => {
        let movies = this.state.movies.filter(m => m._id !== id );
        this.setState({ movies });
    }

}
 
export default Movies;