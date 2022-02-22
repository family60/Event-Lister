import Header from "./components/Header";
import Events from "./components/Events";
import {useState} from 'react'
import AddEvent from "./components/AddEvent";

function App() {
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [events, setEvents] = useState([
        {id: 1, text: 'Practise making more projects', day: 'Feb 18th at 6:00pm', reminder: false,},
        {id: 2, text: 'Go to the movies with friends', day: 'Feb 19th at 7:30pm', reminder: false,},
        {id: 3, text: 'Perform maintenance on car', day: 'April 1st at 10:00am', reminder: true,},
        {id: 4, text: 'Take "G" Road Test in Guelph',  day: 'April 10th at 10:30am', reminder: true,},
    ]);

//add event
const addEvent = (event) => {
  console.log(event);
  const id = Math.floor(Math.random() * 10000) + 1;
  console.log(id);
  const newEvent = {id, ...event};
  setEvents([...events, newEvent]);
}


//delete event
function deleteEvent(id){
  console.log("Delete", id);
  setEvents(events.filter((event) => event.id !== id))
}
//toggle reminder
const toggleReminder = (id) => {
  console.log(id);

  setEvents(events.map((event) => event.id === id ? {...event, reminder: !event.reminder} : event))
}

  return (
    <div className="container">
      <Header  onAdd={() => setShowAddEvent(!showAddEvent)} showAdd={showAddEvent}/>
      {showAddEvent && <AddEvent onAdd={addEvent}/>}
      {events.length > 0 ? <Events events={events} onDelete={deleteEvent} onToggle={toggleReminder}/> : 'No Events scheduled'}      
    </div>
  )
}

export default App;
