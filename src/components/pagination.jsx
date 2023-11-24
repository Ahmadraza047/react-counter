import React, { Component } from 'react';

class Pagination extends Component {
    state = {  } 

    
    render() { 
        const { pageCount, pageSize } = this.props;
        const totalPages = Math.ceil( pageCount / pageSize );
        if( totalPages === 1 ) return null;
        const Pages = [];
        for( let x = 1 ; x <= totalPages ; x++ ){
            Pages.push(x);
        }
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    { Pages.map( page => (
                        <li key={page} className="page-item"><a className="page-link" href='/' >{page}</a></li>
                    ))}
                    
                </ul>
            </nav>
        );
    }
}
 
export default Pagination;
