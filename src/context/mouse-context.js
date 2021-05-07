import React, { createContext, useState } from "react";

export const MouseContext = createContext({
  cursorType: "",
  cursorChangeHandler: () => {},
  cursorClicked: false
});

const MouseContextProvider = (props) => {
  const [cursorType, setCursorType] = useState("");
  const [cursorClicked, setCursorClicked] = useState(false);

  const cursorChangeHandler = (cursorType) => {
    setCursorType(cursorType);
  };

  const cursorClickedHandler = (cursorClicked) => {
      setCursorClicked(cursorClicked);
  }

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
        cursorClicked: cursorClicked,
        cursorClickedHandler: cursorClickedHandler
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
