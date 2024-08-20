import React, { useState } from 'react';
import axios from 'axios';

function EventFilter({ onFilter }) {
  const [sport, setSport] = useState('');
  const [date, setDate] = useState('');

  const handleFilter = () => {
    axios.get('/spardha/events', { params: { sport, date } })
      .then(response => onFilter(response.data))
      .catch(error => console.error('Error filtering events:', error));
  };

  return (


    <div className="event-filter">


      <select  onChange={e => setSport(e.target.value)} value={sport}>
        <option   value="">Select Sport</option>
        <option value="athletics">athletics</option>
        <option value="badminton">badminton</option>
        <option value="Basketball">Basketball</option>
        <option value="boxing">boxing</option>
        <option value="carrom">carrom</option>
        <option value="chess">chess</option>
        <option value="Cricket">Cricket</option>
        <option value="Football">Football</option>
        <option value="Gymnastics">Gymnastics</option>
        <option value="handball">handball</option>
        <option value="Hockey">Hockey</option>
        <option value="Kabaddi">Kabaddi</option>
        <option value=" table tennis"> table tennis</option>
        <option value="Taekwondo">Taekwondo</option>
      </select>
      {/* <input type="date" onChange={e => setDate(e.target.value)} value={date} /> */}
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default EventFilter;
