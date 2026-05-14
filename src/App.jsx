/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import Display from "./Components/Display.jsx";
import ButtonContainer from "./Components/ButtonContainer.jsx";
import Styles from "./App.module.css";
import { useState } from "react";

const App = () => {
  const [calVal, setCalVal] = useState("");

  const handleButtonClick = (buttonType) => {
    if (buttonType === "C") {
      setCalVal("");
    } else if (buttonType === "=") {
      try {
        let newCalVal = eval(calVal);
        setCalVal(newCalVal.toString());
      } catch (error) {
        console.error("Error evaluating expression: ", error);
        alert("Invalid Expression");
        setCalVal("");
      }
    } else {
      let newCalVal = calVal + buttonType;
      setCalVal(newCalVal);
    }
  };

  return (
    <div className={Styles["calculator-outer-container"]}>
      <div className={Styles["calculator-inner-container"]}>
        <header className={Styles["header"]}>Calculator</header>
        <main className={Styles["calculator-content"]}>
          <Display displayVal={calVal} />
          <ButtonContainer handleButtonClick={handleButtonClick} />
        </main>
      </div>
    </div>
  );
};

export default App;
