import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

const ImportantButton = ({size, color, text, icon}) => {
    return (
        <div className={"col-xl-"+size+" col-md-6 mb-3"}>
            <Link to="/login">
                <div className="card text-white o-hidden h-100" style={{backgroundColor:color}} >
                    <div className="card-body">
                        <div className="card-body-icon">
                            <FontAwesome name={icon}/>
                        </div>
                        <div className="mr-5">{text}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

ImportantButton.propTypes = {
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string
}

export default ImportantButton;