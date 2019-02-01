import React from "react";
import PropTypes from "prop-types";

import styles from "./Line.module.css";

const Line = ({ children }) => {
  return (
    <div className={styles.line}>
      <div className={styles.bowler}>Bowler name</div>
      {children}
      <div className={styles.score}>Final score</div>
    </div>
  );
};

Line.propTypes = {
  children: PropTypes.node
};

export default Line;
