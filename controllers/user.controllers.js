
import {Event} from '../models/event.model.js'


const dateHandler = async (req, res) => {
    const { sport, date } = req.query;
    const filter = {};
    if (sport) filter.sport = sport;
    if (date) filter.date = new Date(date);
  
    try {
      const events = await Event.find(filter);
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch events' });
    }
  }


  const eventHandler = async (req, res) => {
    const newEvent = new Event(req.body);
    try {
      await newEvent.save();
      res.status(201).json(newEvent);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create event' });
    }
  }

  const evntUpdate = async  (req , res)=> {
    const { id } = req.params;
  const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedEvent);
  }


  export {dateHandler ,eventHandler , evntUpdate}