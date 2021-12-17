import React, { useState } from "react";
import PropTypes from "prop-types";

const UIOutput = ({ option }) => {
  return (
    <div className="ui-output">
      <div className="main-output">
        {option === 1 ? (
          <img src="/img/real.png" alt="" />
        ) : option === 0 ? (
          <img src="/img/fake.png" alt="" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

UIOutput.propTypes = {};

export default UIOutput;
