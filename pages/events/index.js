import React from 'react';
import EventList from '@/components/events/EventList';
import { useRouter } from 'next/router';
import { getAllEvents } from '@/dummy-data';
import EventsSearch from '@/components/events/events-search';
const MainEventsPage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </>
  );
};

export default MainEventsPage;
