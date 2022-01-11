import React from "react";
import PropTypes from "prop-types";
export default function SectionTitle({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};
