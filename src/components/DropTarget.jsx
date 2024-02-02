import React from "react";
import { useDrop } from "react-dnd";

const DropTarget = ({ onDrop, children }) => {
  const [, drop] = useDrop({
    accept: "ITEM",
    drop: (item) => onDrop(item),
  });

  return (
    <div ref={drop} style={{ border: "2px dashed #000", padding: "20px" }}>
      {children}
    </div>
  );
};

export default DropTarget;
