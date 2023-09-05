import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '@/dummy-data';
import EventList from '@/components/events/EventList';
import ResultsTitle from '@/components/events/results-title';
import Button from '@/components/ui/buttons/Button';
const FilteredEventPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p className="center">Loading ...</p>;
  }
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <div className="center">
        <p className="center">Invalid filter. Please adjust your values.</p>;
        <Button href="/events">Show All Events</Button>
      </div>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <div className="center">
          <p>No events found for the chosen filter values.</p>
          <Button href="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />;
    </>
  );
};

export default FilteredEventPage;
