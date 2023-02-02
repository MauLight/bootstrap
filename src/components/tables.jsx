import React from "react";

const Table = () => {
    return (
        <div className="container my-3">
            <table className="table table-sm table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Mau Light</td>
                        <td>38</td>
                        <td>Chile</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Elvira Shakirova</td>
                        <td>33</td>
                        <td>Russia</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>Sayantan Sanyal</td>
                        <td>27</td>
                        <td>India</td>
                    </tr>
                </tbody>
            </table>           
        </div>
    )
}

export default Table;