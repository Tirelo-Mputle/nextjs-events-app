import React from 'react';
import SingleEvent from './SingleEvent';

const EventList = ({ items }) => {
  return (
    <div>
      {items.map((event) => (
        <SingleEvent key={event.id} {...event} />
      ))}
    </div>
  );
};

export default EventList;
