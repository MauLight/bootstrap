import React from "react";
import Nav from "./components/nav";

const style = {
  "border": "solid 1px black"
}

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Nav />
        <div className="col-sm-6 col-md-3" style={style}>One</div>
        <div className="col-sm-6 col-md-3" style={style}>Two</div>
        <div className="col-sm-6 col-md-3" style={style}>Three</div>
        <div className="col-sm-6 col-md-3" style={style}>Four</div>
      </div>

    </div>
  );
}

export default App;
