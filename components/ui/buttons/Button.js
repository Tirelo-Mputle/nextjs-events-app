import React from 'react';
import Link from 'next/link';
import classes from './button.module.css';

const Button = ({ children, href, className }) => {
  return (
    <Link href={href} className={`${classes.btn} ${className} `}>
      {children}
    </Link>
  );
};

export default Button;
