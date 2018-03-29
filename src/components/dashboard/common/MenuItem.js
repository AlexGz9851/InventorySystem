import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

const MenuItem = ({title, text, link, icon}) => {
    return (
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title={title}>
            <Link className="nav-link" to={link}>
                <FontAwesome name={icon}/>
                <span className="nav-link-text">&nbsp;{text}</span>
            </Link>
        </li>
    )
};

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string
};

export default MenuItem;