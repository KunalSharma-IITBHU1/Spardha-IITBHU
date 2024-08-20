import React from 'react';

function EventCard({ event }) {
  return (
    <div className="event-card">
      <h2>{event.sport}</h2>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Time: {event.time}</p>
      <p>Teams: {event.teams.join(' vs ')}</p>
      <p>Location: {event.location}</p>
    </div>
  );
}

export default EventCard;
