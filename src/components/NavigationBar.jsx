import logo from './Skypark_logo.png';

const NavigationBar = () => {

    return (
        <nav className="navbar navbark-dark bg-dark">
            <a href="http://skyparkzagreb.com/" className="navbar-brand ms-1">
                <img src={logo} className="App-logo" alt="logo" />
            </a>

            <div className='navbar-nav me-auto'>
                <li className="nav-item">
                    <a href="" className="nav-link">Admin</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">Home</a>
                </li>
            </div>

            <div className='navbar-nav ms-auto'>
                <li className="nav-item">
                    <a href="" className="nav-link">Sign up</a>
                </li>

                <li className="nav-item">
                    <a href="" className="nav-link">Sign in</a>
                </li>

            </div>
        </nav>
    );

}

export { NavigationBar };