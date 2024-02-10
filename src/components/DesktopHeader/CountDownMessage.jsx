import { Button } from "components";
import React, { useEffect, useState } from "react";

const CountDownMessage = () => {
  const [countdown, setCountdown] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    let timer;

    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [countdown]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  return (
    <Button
      className="cursor-pointer font-semibold text-center text-sm  w-full "
      shape="square"
      color="black_900"
      size="sm"
      variant="fill"
    >
      Holding your tickets for {formatTime(countdown)}
    </Button>
  );
};

export default CountDownMessage;
