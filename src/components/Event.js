import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Event = ({event, onDelete, onToggle}) => {
  return (
    <div className={`event ${event.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(event.id)}>
        <h3>{event.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(event.id)}/></h3>
        <p>{event.day}</p>
    </div>
  )
}

export default Event
