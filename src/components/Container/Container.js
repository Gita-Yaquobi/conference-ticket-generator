import React from "react";
import pattern from "../../assets/images/pattern-circle.svg";
import patternlinebottom from "../../assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternline from "../../assets/images/pattern-lines.svg";
import patternlinetop from "../../assets/images/pattern-squiggly-line-top.svg";
import styles from "./Container.module.css";

export default function Container({ children }) {
  return (
    <div className={`${styles.container} flexCenter flexColumn`}>
      <div className={styles.div_img_svgLine}>
        <img
          src={patternline}
          alt="pattern"
          className={`${styles.img_svg} ${styles.img_svgLine}`}
        />
      </div>
      <img
        src={pattern}
        alt="pattern"
        className={`${styles.img_svg} ${styles.img_svgCircle}`}
      />
      <img
        src={patternlinetop}
        alt="pattern"
        className={`${styles.img_svg} ${styles.img_svgLineTop}`}
      />
      <img
        src={pattern}
        alt="pattern"
        className={`${styles.img_svg} ${styles.img_svgCircle_right}`}
      />
      <img
        src={patternlinebottom}
        alt="pattern"
        className={`${styles.img_svg} ${styles.img_svgLineBottom}`}
      />
      {children}
    </div>
  );
}
