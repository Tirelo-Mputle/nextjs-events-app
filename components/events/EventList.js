import React from 'react';
import SingleEvent from './SingleEvent';
import classes from './eventList.module.css';
const EventList = ({ items }) => {
  return (
    <div className={classes.container}>
      {items.map((event) => (
        <SingleEvent key={event.id} {...event} />
      ))}
    </div>
  );
};

export default EventList;
