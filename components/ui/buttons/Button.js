import React from 'react';
import Link from 'next/link';
import classes from './button.module.css';

const Button = ({ children, href, className, onClick }) => {
  if (href) {
    return (
      <Link href={href} className={`${classes.btn} ${className} `}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`${classes.btn} ${className} `}>
      {children}
    </button>
  );
};

export default Button;
