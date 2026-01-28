import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useTheme } from "next-themes";

export function ColorModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //theme tells us the current theme if it's already known.
  //resolvedTheme is a backup value in case theme isn't ready yet.

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // By writing const current = theme ?? resolvedTheme, we're essentially saying: "use theme if it exists, otherwise fall back to resolvedTheme".

  const current = theme ?? resolvedTheme;

  // The helper function isActive(mode) checks if the current theme equals "light" or "dark".

  const isActive = (mode) => {
    return current === mode;
  };

  return (
    <ButtonGroup isAttached size="sm" aria-label="Theme toggle">
      <Button
        p="20px"
        fontSize="18px"
        onClick={() => setTheme("light")}
        color={isActive("light") ? undefined : "white"}
        variant={
          isActive("light")
            ? "solid" // if the light theme is active
            : "ghost" // otherwise show the ghost (greyed out) button
        }
        _hover={
          isActive("light")
            ? undefined
            : {
                _light: { color: "black" }, // in light mode
                _dark: { color: "white" }, // in dark mode
              }
        }
      >
        Light
      </Button>
      <Button
        p="20px"
        fontSize="18px"
        onClick={() => setTheme("dark")}
        color={isActive("dark") ? undefined : "white"}
        variant={
          isActive("dark")
            ? "solid" // if the dark theme is active
            : "ghost" // otherwise
        }
        _hover={
          isActive("dark")
            ? undefined
            : {
                _light: { color: "black" }, // in light mode
                _dark: { color: "white" }, // in dark mode
              }
        }
      >
        Dark
      </Button>

      <Button
        p="20px"
        fontSize="18px"
        onClick={() => setTheme("system")}
        color={
          isActive("system") ? undefined : "white" // apply white styling when not selected
        }
        variant={
          isActive("system")
            ? "solid" // if the system theme is active
            : "ghost" // otherwise show the ghost (greyed out) button
        }
      >
        System
      </Button>
    </ButtonGroup>
  );
}
