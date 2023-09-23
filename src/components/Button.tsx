import React from "react";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";
import state from "../store";

export default function Button({ type, title, handleClick }) {
  const generateStyle = (type) => {
    const snap = useSnapshot(state);

    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };
  return (
    <button
      className="font-bold py-2 px-4 rounded"
      type={type}
      onClick={handleClick}
      style={generateStyle(type)}
    >
      {title}
    </button>
  );
}
