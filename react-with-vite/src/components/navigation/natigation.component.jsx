import { useState } from "react";
import { Button } from "../button/button.component";

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
          {
            <Button
              text={item.name}
              onClick={() => {
                onSelect(index);
                setIndex(index);
              }}
              disabled={index === currentIndex}
            />
          }
        </div>
      ))}
    </div>
  );
};
