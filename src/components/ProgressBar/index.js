import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";

export const Progesss = () => {
  return (
    <ProgressBar
      percent={75}
      filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
    >
      <Step>
        {({ accomplished, index }) => (
          <div
            style={{
              width: "20px",
              borderRadius: "50%",
              border: "1px solid black",
            }}
          >
            1
          </div>
        )}
      </Step>
      <Step>2</Step>
      <Step>3</Step>
    </ProgressBar>
  );
};
