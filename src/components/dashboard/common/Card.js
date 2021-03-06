import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome';

const Card = ({children, col, title, ico, date}) => {
    return (
        <div className={"col-lg-" + col}>
            <div className="card mb-3">
                <div className="card-header">
                <FontAwesome name={ico || "check"}/>&nbsp;{title}</div>
                <div className="card-body">
                    {children}
                </div>
                {date && <div className="card-footer small text-muted">{date}</div>}
            </div>
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.object.isRequired,
    col: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    ico: PropTypes.string,
    date: PropTypes.string
}
export default Card;