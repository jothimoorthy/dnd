// App.js
import React, { useState } from "react";
import DraggableItem from "./components/DraggableItem";
import DropTarget from "./components/DropTarget";

function App() {
  const [draggedItems, setDraggedItems] = useState([]);
  const [initialItems, setInitialItems] = useState([
    { id: "1", text: "Item 1" },
    { id: "2", text: "Item 2" },
    { id: "3", text: "Item 3" },
  ]);

  const handleDrop = (item) => {
    if (draggedItems.find((i) => i.id === item.id)) return;
    const updated = [...draggedItems, item].sort((a, b) =>
      a.id.localeCompare(b.id)
    );
    setDraggedItems(updated);
    const initial = initialItems.filter((i) => i.id !== item.id);
    setInitialItems(initial);
  };

  const handleDropInitial = (item) => {
    if (initialItems.find((i) => i.id === item.id)) return;
    const updated = [...initialItems, item].sort((a, b) =>
      a.id.localeCompare(b.id)
    );
    setInitialItems(updated);
    const dragged = draggedItems.filter((i) => i.id !== item.id);
    setDraggedItems(dragged);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "20px" }}>
        <DropTarget onDrop={handleDropInitial}>
          <h2>Drop Target</h2>

          {initialItems.map((item) => (
            <DraggableItem key={item.id} id={item.id} text={item.text} />
          ))}
        </DropTarget>
      </div>
      <DropTarget onDrop={handleDrop}>
        <h2>Drop Target</h2>
        {draggedItems.map((item) => (
          <DraggableItem key={item.id} id={item.id} text={item.text} />
        ))}
      </DropTarget>
    </div>
  );
}

export default App;
