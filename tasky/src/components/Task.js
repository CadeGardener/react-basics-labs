import React from 'react';

const Task = (props) => {
    
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p className="desc">{props.description}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <p>Due: {props.deadline}</p>
        </div>
    )
}

export default Task;