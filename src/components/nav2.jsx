import React from "react";

const Nav2 = () => {
    return (
        <nav class="navbar navbar-light bg-light navbar-expand-lg">
            <a href="#" class="navbar-brand">My Website</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">Open</button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav">
                    <li class="navbar-item">
                        <a href="#" class="nav-link">Homepage</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="nav-link">Blog</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="nav-link">About Me</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav2;