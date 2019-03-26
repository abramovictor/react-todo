import React from 'react';

export default function Stats(props) {
    return (
        <table className="table table-borderless col-auto">
            <tbody>
                <tr>
                    <th>Всего задач:</th>
                    <td>3</td>
                </tr>
                <tr>
                    <th>Выполнено задач:</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Осталось задач:</th>
                    <td>2</td>
                </tr>
            </tbody>
        </table>
    );
}