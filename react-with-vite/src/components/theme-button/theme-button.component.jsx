import { Button } from "../button/button.component";
import { useTheme } from "../theme-context/theme-context";

export const ThemeButton = () => {
  const { value, toggleTheme } = useTheme();

  return (
    <Button
      text={value === "light" ? "switch to dark" : "switch to light"}
      onClick={toggleTheme}
    />
  );
};