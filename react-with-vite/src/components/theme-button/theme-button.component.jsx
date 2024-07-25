import { Button } from "../button/button.component";
import { useTheme } from "../context/theme.context";

export const ThemeSwitcherButton = () => {
  const { value, toggleTheme } = useTheme();

  return (
    <Button
      text={value === "light" ? "switch to dark" : "switch to light"}
      onClick={toggleTheme}
    />
  );
};