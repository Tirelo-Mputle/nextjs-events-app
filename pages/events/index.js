import React from 'react';
import EventList from '@/components/events/EventList';
import { getFeaturedEvents } from '@/dummy-data';
const MainEventsPage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>MainEvents page</h1>
      <h2>Show all events</h2>
      <div>
        <EventList items={featuredEvents} />
      </div>
    </div>
  );
};

export default MainEventsPage;
