import React from 'react';

export default function Checkbox(props) {
    return (
        <button onClick={props.onChange} className="btn p-0 m-1 bg-transparent show" type="button">
            <i className={`far ${props.checked ? 'fa-check-square' : 'fa-square'}`}></i>
        </button>
    );
}

Checkbox.propTypes = {
    checked: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired
};