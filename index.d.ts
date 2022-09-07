declare type Color = "red" | "green" | "yellow";
declare type Theme = "dracula" | "docoo";

interface ThemeInterFace {
  [Theme: string]: {
    color: string;
    bgColor: string;
  };
}

declare type FontWeight = "bold" | "lighter";
declare type FontStyle = "italic" | "underline";

interface Config {
  color?: Color;
  bgColor?: Color;
  theme?: Theme;
}
