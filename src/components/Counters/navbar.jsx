

// stateless functional component
const NavBar = ( { totalCounters } ) => {
    return ( 
        <div className="container">
            <nav className="navbar justify-content-start navbar navbar-light">
                <a className="navbar-brand" href="https://#">Navbar</a>
                <span className="badge badge-pill bg-dark">{ totalCounters }</span>
            </nav>
        </div>
     );
}
 
export default NavBar;