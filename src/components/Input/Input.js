import IconInfo from "../../assets/images/icon-info.svg";
import Styles from "./Input.module.css"
const Input = ({
  children,
  type = "text",
  onChange,
  onBlur,
  id,
  autoComplete,
  value = "",
  error,
}) => {
  return (
    <div>
      <label className={`textXs ${Styles.label}`} htmlFor={id}>
        {children}
      </label>
      <input
        className={`borderRadius5 background700 ${Styles.input}`}
        type={type}
        placeholder={children}
        value={value}
        onChange={onChange}
        id={id}
        autoComplete={autoComplete}
        onBlur={onBlur}
      />

      {error !== undefined && error !== "" && (
        <label className={`textXs ${Styles.label}`} style={{ margin: "10px 0" }}>
          <img
            src={IconInfo}
            alt="info-icon"
            className="iconError"
            style={{ display: "inline-block" }}
          />
          <span className="textXs textRed" style={{ verticalAlign: "top" }}>
            {`please enter a valid ${children}`}
          </span>
        </label>
      )}
    </div>
  );
};

export default Input;
