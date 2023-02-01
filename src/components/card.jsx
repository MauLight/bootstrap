import React from "react";

const Card = () => {
    return (
        <div className="container my-3">
            <div className="card">
                <img className="card-img-top" alt="card-header-image" src="https://film-grab.com/wp-content/uploads/photo-gallery/59%20(366).jpg?bwg=1547218157" />
                <div className="card-body">
                    <h5 className="card-title mb-0">
                        Elvira Shakirova
                    </h5>
                    <p className="card-text">Elvira is a gorgeous goddess that became a writer to share amazing stories that come from her exhuberant imagination. What type of incredible story she will share with us next!?</p>
                </div>
                
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">She's so smart</li>
                    <li className="list-group-item">She's so sexy</li>
                    <li className="list-group-item">She's loves me</li>
                </ul>
                
                <div className="card-body">
                    <button className="btn btn-primary">Love</button>
                </div>
            </div>
        </div>
    )
}

export default Card;