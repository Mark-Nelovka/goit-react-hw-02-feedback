import React from "react";
import PropTypes from "prop-types";
import s from "./FeedBack.module.css";
export default function FeedbackOptions({ onIncrement, buttons }) {
  return (
    <div>
      {Object.keys(buttons).map((button) => {
        return (
          <button
            key={button}
            className={s.btn}
            onClick={onIncrement}
            type="button"
          >
            {button}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onIncrement: PropTypes.func,
};
