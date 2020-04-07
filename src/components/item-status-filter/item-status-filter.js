import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    render() {
        return (
            <div className="btn-group button-group">
                <button type="button"
                        className="btn btn-info button">Все</button>
                <button type="button"
                        className="btn btn-outline-dark button">Выполненные</button>
            </div>
        )
    }
    };