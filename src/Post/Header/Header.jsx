import React from "react";
import "./header.css";

export function Header(props) {
    const { img } = props;

    return (
        <div className="post-header">
            <div className="user-avatar">
                <img src={img} />
            </div>
            <h3 className="user-fullName">{props.fullName}
                <img className="verified-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png" />
                <span class="user-userName">{props.userName}</span>
            </h3>
        </div>
    );
}