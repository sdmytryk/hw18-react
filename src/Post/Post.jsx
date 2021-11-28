import React from "react";
import { Header } from "./Header/Header";
import "./Post.css";
import { Content } from "./Content/Content";
import { Controllers } from "./Controllers/Controllers";


export default function Post() {
    return (
        <div className="post">
            <Header img="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg" 
                        fullName="Anakin skywalker"
                        userName="@dart_vader"
                        />
            <Content text="WTF? Who is Ray? Why she is Skywalker? Luke...?" img="https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale"/>
            
            <Controllers />
        </div>
    )
}