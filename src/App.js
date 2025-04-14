import "./styles.css";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

export default function MainCamFeed() {
  return (
    <div>
      <h2>VISTA</h2>
      <ReactPlayer url="https://www.youtube.com/watch?v=azWzEqmrA2U&ab_channel=coinsandcurrency" />
    </div>
  );
}
