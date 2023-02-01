import React from "react";

const ListGroup = () => {
    return (
        <div className="container mt-3">
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action active">
                    Elv! Ur the best!
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    Did I tell u that I love u?
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    Also, U suck!
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    Notifications
                    <span className="badge bg-danger rounded-pill mx-2">3</span>
                </a>
            </div>
        </div>
    )
}

export default ListGroup;