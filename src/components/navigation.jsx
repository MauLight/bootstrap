import React from "react";

const Navigation = () => {
    return (
        <div className="container mb-5">
            <ul className="nav nav-tabs">
                <li>
                    <a href="#" className="nav-link active">Item One</a>
                </li>
                <li>
                    <a href="#" className="nav-link">Item Two</a>
                </li>
                <li>
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle= 'dropdown'>Item Three</a>
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">Dropdown1</a>
                        <a href="#" className="dropdown-item">Dropdown2</a>
                        <a href="#" className="dropdown-item">Dropdown3</a>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item">Dropdown4</a>
                    </div>
                </li>
                <li>
                    <a href="#" className="nav-link">Item Four</a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;