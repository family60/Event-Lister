import React from 'react'
import Event from './Event'

const Events = ({events, onDelete, onToggle}) => {
  return (
    <>
    {events.map((event) => (<Event key={event.id} event={event} onDelete={onDelete} onToggle={onToggle}/>))}
    </>
  )
}

export default Events