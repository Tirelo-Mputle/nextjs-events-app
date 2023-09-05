import React from 'react';
import classes from './SingleEvent.module.css';
import { FaRegCalendar, FaLongArrowAltRight } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import Button from '../ui/buttons/Button';
const SingleEvent = ({
  id,
  title,
  description,
  location,
  date,
  image,
  isFeatured,
}) => {
  const dateFormatted = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const locationFormatted = location.replace(',', '\n');

  return (
    <div className={classes.eventContainer}>
      <div className={classes.imageContainer}>
        <img src={image} alt={title} className={classes.image} />
      </div>
      <div div className={classes.detailsContainer}>
        <h4>{title}</h4>
        <div className={classes.dataContainer}>
          <FaRegCalendar />

          <p className={classes.month}>{dateFormatted}</p>
        </div>
        <div className={classes.dataContainer}>
          <CiLocationOn />
          <div>
            <p>
              <i>{locationFormatted}</i>
            </p>
          </div>
        </div>
        <Button href={`/events/${id}`} className={classes.buttonToRight}>
          Explore Event <FaLongArrowAltRight />
        </Button>
      </div>
    </div>
  );
};

export default SingleEvent;
