import { useState } from "react";

export default function Textarea({ span, color, label }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  function focusHandler(event) {
    if (isFocused && value === "") {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
  }

  return (
    <div className={span}>
      <span
        className={
          isFocused
            ? "transition-all absolute ml-3 text-xs"
            : "transition-all absolute mt-3 ml-3"
        }
      >
        {label}
      </span>
      <textarea
        className={`resize-none p-3 rounded-md w-full ${color}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={focusHandler}
        onBlur={focusHandler}
      ></textarea>
    </div>
  );
}
