import React from "react";
import { ProgressBarStyled, H3 } from "./ProgressBarStyled";

function ProgressBar({ title, width, text }) {
  const num = width + "%";
  return (
    <ProgressBarStyled>
      <H3>{title}</H3>
      <div className="progress">
        <span style={{ width: num }}></span>
      </div>
      <H3 className="progress-bar">{text}</H3>
    </ProgressBarStyled>
  );
}

export default ProgressBar;
