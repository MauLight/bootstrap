import React from "react";

const Nav = () => {
    return (
        <nav className="navbar bg-light px-3 navbar-expand-lg">
            <a href="#" className="navbar-brand">My Website</a>
            <button className="navbar-toggler" data-bs-toggle= "collapse" data-bs-target= "#navCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navCollapse">
                <ul className="navbar-nav ms-auto">
                    <li className="navbar-item">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="nav-link">Love</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="nav-link">Elv</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="nav-link">Wife</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
