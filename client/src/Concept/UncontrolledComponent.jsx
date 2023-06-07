import React, { useRef } from "react";

const UncontrolledComponent = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value:", inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledComponent
