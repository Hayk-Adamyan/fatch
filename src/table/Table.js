import React from 'react';

const Table = (props) => {
    return (
        <div>
                <table className="table table-dark table-bordered">
                <thead>
                <tr>
                <th>Release Date</th>
                <th>Director </th>
                <th>Description</th>

                </tr>
                </thead>
                <tbody>
            {props.state.map((el, i) => {
                return (
                <tr key={i}>
                <td>{el.release_date}</td>
                <td>{el.director}</td>
                <td>{el.description}</td>
                </tr>
                );
            })}
                </tbody>
                </table>
        </div>
    );
};

export default Table;