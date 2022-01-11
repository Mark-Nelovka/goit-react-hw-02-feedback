import React from "react";
import PropTypes from "prop-types";
import s from "./FeedBack.module.css";
export default function FeedbackOptions({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) {
  return (
    <div>
      <button className={s.btn} onClick={onIncrementGood} type="button">
        Good
      </button>
      <button className={s.btn} onClick={onIncrementNeutral} type="button">
        Neutral
      </button>
      <button className={s.btn} onClick={onIncrementBad} type="button">
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onIncrementGood: PropTypes.func,
  onIncrementNeutral: PropTypes.func,
  onIncrementBad: PropTypes.func,
};
