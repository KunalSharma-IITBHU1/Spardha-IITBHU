import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from '../EventCard';


function EventList() {
  const [events, setEvents] = useState([]);


useEffect(()=>{

  axios.get('/spardha/events')
        .then(response => setEvents(response.data))
        .catch(error => console.error('Error fetching events:', error));
})

  
 

  return (
    <div className="event-list">
      {
      events.map((event) => (
      <EventCard key={event._id} event={event} />
    ) )
    }
    </div>
  );
}

export default EventList;
