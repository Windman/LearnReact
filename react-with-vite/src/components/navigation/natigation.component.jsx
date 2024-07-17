export const Navigation = ({ items, selectedIndex=0, onSelect, type="TAB" }) => {
  return (
    <div className="navigation">
      {items.map((item, index) => (
        <div className="navigation-item" key={index}>
          <button onClick={() => onSelect(index)}>{item.name}</button>
        </div>
      ))}
    </div>
  );
};

