import React, { useState, useEffect } from 'react';

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16.67);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        start = end;
      }
      setCount(Math.ceil(start));
    }, 16.67);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default CountUp;
