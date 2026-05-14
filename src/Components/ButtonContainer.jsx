import Styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ handleButtonClick }) => {
  const buttons = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={Styles.buttonContainer}>
      {buttons.map((ButtonType, index) => {
        return (
          <button
            className={Styles["button"]}
            key={index}
            onClick={() => handleButtonClick(ButtonType)}
          >
            {ButtonType}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonContainer;
