import React from "react";
import PropTypes from "prop-types";

import styles from "./Frame.module.css";

const Frame = ({ index, balls }) => {
  return <div className={styles.frame} />;
};

Frame.propTypes = {
  index: PropTypes.number,
  balls: PropTypes.arrayOf(PropTypes.number)
};

export default Frame;
