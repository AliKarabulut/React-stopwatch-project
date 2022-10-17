import { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.development";
import Button from "../Button/Button";
import Sayac from "../Sayac/Sayac";

const Time = () => {
  const [active, setActive] = useState(false);
  const [pause, setPause] = useState(true);
  const [ten, setTen] = useState(0);

  useEffect(() => {
    let interval = null;

    if (active && pause === false) {
      interval = setInterval(() => {
        setTen((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [active, pause]);

  const Start = () => {
    setActive(true);
    setPause(false);
  };

  const PauseResume = () => {
    setActive(false);
    setPause(!pause);
  };

  const Reset = () => {
    setActive(false);
    setTen(0);
  };

  return (
    <Fragment>
      <Sayac ten={ten}></Sayac>
      <div>
        <Button onClick={Start}>Start</Button>
        <Button onClick={PauseResume}>Pause</Button>
        <Button onClick={Reset}>Reset</Button>
      </div>
    </Fragment>
  );
};

export default Time;
