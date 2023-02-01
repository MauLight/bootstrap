import React from "react";

const style = {
    "marginTop": "20px;"
}

const Form = () => {
    return (
        <div className="container mt-3" style={style}>
            <form>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label" htmlFor="email">Email Address</label>
                    <div className="col-sm-9">
                        <input type="email" className="form-control" id="email"></input>
                    </div>
                </div>
                <div className="form-group row mt-2">
                    <label className="col-sm-3 col-form-label" htmlFor="password">Password</label>
                    <div className="col-sm-9">
                        <input type="password" className="form-control" id="password"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-9 offset-sm-3">
                        <button type="submit" className="btn btn-warning mt-2">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;