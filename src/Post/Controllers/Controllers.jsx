import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faHeart,  } from '@fortawesome/free-regular-svg-icons';
import { faRetweet, faUpload } from '@fortawesome/free-solid-svg-icons'
import "./Controllers.css";

export function Controllers(props) {
    return (
        <div className="controllers">
            <button className="controller">
                <FontAwesomeIcon icon={faCommentAlt} />
                <span className="text">482</span>
            </button>
            
            <button className="controller">
                <FontAwesomeIcon icon={faRetweet} />
                <span className="text">146</span>
            </button>

            <button className="controller">
                <FontAwesomeIcon icon={faHeart} />
                <span className="text">887</span>
            </button>
    
            <button className="controller">
                <FontAwesomeIcon icon={faUpload} />
            </button>
        </div>
    )
}