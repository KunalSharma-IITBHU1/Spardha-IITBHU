import express from "express";
import {dateHandler} from '../controllers/user.controllers.js'
import {eventHandler} from '../controllers/user.controllers.js'
import {evntUpdate}   from '../controllers/user.controllers.js'

const router = express.Router();

router.route('/events')
.get(dateHandler)
.post(eventHandler)
.put(evntUpdate)

export default router ;