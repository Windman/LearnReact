export const Navigation = ({ items, selectedIndex, onSelect, type }) => {
  return (
    <div className="navigation">
      {items.map((item, index) => (
        <div className="navigation-item">
          <button onClick={() => onSelect(index)}>{item.name}</button>
        </div>
      ))}
    </div>
  );
};

Navigation.defaultProps = {
  type: "TAB",
  selectedIndex: 0,
};
