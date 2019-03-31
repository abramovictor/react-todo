import React from 'react';

export default function Button(props) {
    return (
        <button onClick={props.onClick} className={props.className} type={props.type || 'button'} disabled={props.disabled || false} title={props.title}>
            {props.icon ? <span className={props.icon}></span> : props.children}
        </button>
    );
}

Button.propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
    children: React.PropTypes.node,
    type: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    title: React.PropTypes.string
};