import React, { Component } from 'react';

class Like extends Component {
    state = { 
        like : false
     } 
    render() { 
        return (
            <span className='likeBtn' onClick={ this.props.onClick }>
                <i className={ `fa fa-heart${ (this.props.liked) ? '' : '-o' } `} aria-hidden="true"></i>
            </span>
        );
    }

    
}
 
export default Like;