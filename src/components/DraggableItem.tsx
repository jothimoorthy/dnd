// DraggableItem.js
import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ id, text }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: "ITEM",
    item: { id, text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <>
      <div
        ref={preview}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          pointerEvents: "none",
        }}
      />
      <div
        ref={(node) => {
          drag(preview(node)); // Pass the preview node to the drag function
        }}
        style={{
          opacity: isDragging ? 0.5 : 1,
          border: "1px solid #000",
          padding: "10px",
          marginBottom: "10px",
          cursor: "move",
        }}
      >
        {text}
      </div>
    </>
  );
};

export default DraggableItem;
