import React from "react";
import PropTypes from "prop-types";

import styles from "./Line.module.css";

import { Frame } from "../../components";

const Line = ({ frames }) => {
  return (
    <div className={styles.line}>
      <div className={styles.bowler}>&nbsp;</div>
      {frames.map(frame => (
        <Frame frame={frame} />
      ))}
      <div className={styles.score}>&nbsp;</div>
    </div>
  );
};

Line.propTypes = {
  children: PropTypes.node,
  frames: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
};

Line.Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Line.Container.propTypes = {
  children: PropTypes.node
};

export default Line;
