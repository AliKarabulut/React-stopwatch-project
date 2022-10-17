import Card from "./components/Card/Card";
import Time from "./components/Time/Time";
import Shape from "./components/Shape/Shape";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Card>
        <Time></Time>
      </Card>
      <Shape></Shape>
    </Fragment>
  );
};

export default App;
