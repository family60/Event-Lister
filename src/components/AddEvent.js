import React from 'react'
import { useState } from 'react'

const AddEvent = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit  = (e) =>{
        e.preventDefault();

        if(!text){
            alert('Please add an event');
            return
        }

        onAdd({text, day, reminder});

        setText('');
        setDay('');
        setReminder(false);
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Event</label>
            <input type='text' placeholder='Add Event' value={text} onChange={(e) => {
                setText(e.target.value)}}></input>
        </div>
        <div className='form-control'>
            <label>Day and Time</label>
            <input type='text' placeholder='Add Day and Time'  value={day} onChange={(e) => {
                setDay(e.target.value)}}></input>
        </div>
        <div className='form-control form-control-check'>
            <label>Set a Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => {
                setReminder(e.currentTarget.checked)}}></input>
        </div>

        <input type='submit' value='Save Event' className='btn btn-block'></input>
    </form>
  )
}

export default AddEvent