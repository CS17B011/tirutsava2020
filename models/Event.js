const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String, //DDMMYYYY format
    default: ""
  },
  time: { //Starting time of the event
    type: String, //HH:MM-(AM/PM)
    default: ""
  },
  venue: {
    type: String,
    default: ""
  },
  entryFee: {
    type: Number,
    required: true
  },
  prize: {
    type: Array, //Array of JSON object that is converted into string
    default: []
  },
  typeOfEvent: {
    type: String,
    default: "Offline"
  },
  coordinatorContact: {
    type: Array,  //Array of JSON object that is converted into string
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  posterImage: {
    type: String, //Path of that image + _(timestamp)
    required: true
  }
});

module.exports = Event = mongoose.model('Event',EventSchema);