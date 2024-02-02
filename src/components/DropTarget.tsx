import { ReactNode } from "react";
import { useDrop } from "react-dnd";
import { Item } from "../App";

const DropTarget = ({
  onDrop,
  children,
}: {
  onDrop: (item: Item) => void;
  children: ReactNode;
}) => {
  const [, drop] = useDrop({
    accept: "ITEM",
    drop: (item: Item) => onDrop(item),
  });

  return (
    <div ref={drop} style={{ border: "2px dashed #000", padding: "20px" }}>
      {children}
    </div>
  );
};

export default DropTarget;
