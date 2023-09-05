import React from 'react';
import EventList from '@/components/events/EventList';
import { getFeaturedEvents } from '@/dummy-data';
import { getAllEvents } from '@/dummy-data';
import classes from './index.module.css';
const MainEventsPage = () => {
  const featuredEvents = getFeaturedEvents();
  const allEvents = getAllEvents();
  return (
    <div className={classes.container}>
      <div>
        <EventList items={allEvents} />
      </div>
    </div>
  );
};

export default MainEventsPage;
