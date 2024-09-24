import React from 'react';

const Task = (props) => {
    
    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p className="desc">{props.description}</p>
            <br></br>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Task;