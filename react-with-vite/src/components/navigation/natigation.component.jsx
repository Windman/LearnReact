import { useState } from "react";

export const Navigation = ({
  items,
  selectedIndex = 0,
  onSelect,
  type = "TAB",
}) => {
  const [currentIndex, setIndex] = useState(selectedIndex);

  return (
    <div className="navigation">
      {items.map((item, index) => (
        <div className="navigation-item" key={index}>
          <button
            onClick={() => {
              onSelect(index);
              setIndex(index);``
            }}
            disabled={index === currentIndex}
          >
            {item.name}
          </button>
        </div>
      ))}
    </div>
  );
};
