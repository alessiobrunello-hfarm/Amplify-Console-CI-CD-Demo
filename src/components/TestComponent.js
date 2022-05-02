import { useContext } from "react";
import TestContext from "../stores/TestContext";
import classes from "./TestComponent.module.css";

const TestComponent = () => {
  const ctxTest = useContext(TestContext);

  const onTestStateTap = () => {
    ctxTest.setStateButton(true);
  };

  return (
    <>
      <h1 className={classes.title}>my new test component</h1>
      {!ctxTest.stateButton && (
        <button onClick={onTestStateTap}>test states</button>
      )}
    </>
  );
};

export default TestComponent;
