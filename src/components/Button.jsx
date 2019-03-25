import React from 'react';

export default function Button(props) {
    return (
        <button onClick={props.onClick} className="btn p-0 m-1 bg-transparent" type="button" title={props.title}>
            <span className={props.icon}></span>
        </button>
    );
}

Button.propTypes = {
    title: React.PropTypes.string,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
};