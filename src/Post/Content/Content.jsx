import React from "react";
import "./Content.css"

export function Content(props) {
    const text = props.text;
    const img = props.img;

    return (
        <div className="content">
            {text ? <span className="content-text">{text}</span> : null}
            {img ? <img src={img}/> : null}
        </div>
    )       
}