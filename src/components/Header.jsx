import React from 'react';

export default function Header(props) {
    return (
        <header className="card-header bg-dark text-white">
            <div className="row justify-content-center align-items-center">
                <ul className="col-auto mb-0 text-right" type="none">
                    <li><strong className="mr-2">Всего задач: </strong><span className="text-light">3</span></li>
                    <li><strong className="mr-2">Выполненных задач: </strong><span className="text-light">1</span></li>
                    <li><strong className="mr-2">Невыполненных задач: </strong><span className="text-light">2</span></li>
                </ul>

                <h1 className="col mb-0 text-right">{props.title}</h1>
            </div>
        </header>
    );
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired
};