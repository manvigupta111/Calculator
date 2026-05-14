import Styles from "./Display.module.css";

const Display = ({ displayVal }) => {
  return (
    <input
      type="text"
      readOnly
      aria-label="Enter an expression"
      className={Styles["display-box"]}
      value={displayVal}
    ></input>
  );
};
export default Display;
