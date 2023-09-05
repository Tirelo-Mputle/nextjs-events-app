import React from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '@/dummy-data';
import EventSummary from '@/components/event-detail/event-summary';
import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
const EventDetailsPage = () => {
  const router = useRouter();
  const id = router.query.eventId;
  const event = getEventById(id);
  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <>
      <EventSummary />
      <EventLogistics />
      <EventContent>{event.description}</EventContent>
    </>
  );
};

export default EventDetailsPage;
