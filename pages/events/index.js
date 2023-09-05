import React from 'react';
import EventList from '@/components/events/EventList';
import { getFeaturedEvents } from '@/dummy-data';
import { getAllEvents } from '@/dummy-data';
import EventsSearch from '@/components/events/events-search';
const MainEventsPage = () => {
  const featuredEvents = getFeaturedEvents();
  const allEvents = getAllEvents();
  return (
    <>
      <EventsSearch />
      <EventList items={allEvents} />
    </>
  );
};

export default MainEventsPage;
