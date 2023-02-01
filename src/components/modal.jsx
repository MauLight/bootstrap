import React from "react";

const Modal = () => {
    return (
        <div className="container">
            <button className="btn" data-bs-toggle="modal" data-bs-target="#myModal">Launch Modal</button>
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">I love u, Elv!</h5>
                            <button type="button" className="btn close" data-bs-dismiss= "modal" aria-label="close">
                                <span aria-hidden= "true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>You're the love of my life, did I tell you? You are the most beautiful flower in the garden of Eden</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-success" data-bs-dismiss= "modal">    
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;