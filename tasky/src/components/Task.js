import React from 'react';

const Task = (props) => {
    
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p className="desc">{props.description}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
            <p>Due: {props.deadline}</p>
            <p className="priolow" style={{backgroundColor: props.low ? 'lightgreen' : '#32CD32'}}>{props.priority}</p>
            <p className="priomed" style={{backgroundColor: props.medium ? 'orange' : '#FFAE42'}}>{props.priority}</p>
            <p className="priohigh" style={{backgroundColor: props.high ? 'red' : '#C30010'}}>{props.priority}</p>
        </div>
    )
}

export default Task;