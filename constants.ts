const Theme: ThemeInterFace = Object.freeze({
  dracula: {
    color: "rgb(241, 250, 140)",
    bgColor: "rgb(40, 42, 54)",
  },
  docoo: {
    color: "rgb(68, 85, 136)",
    bgColor: "rgb(248, 248, 255)",
  },
});

const Blocks = Object.freeze({
  padded: "display: inline-block; padding: 0.5em 1em;",
  rounded: "border-radius: 4px;",
});

const NodeConfig: NodeConfigInterFace = {
  color: {
    black  : { start: "[30m", end: "[39m" },
    red    : { start: "[31m", end: "[39m" },
    green  : { start: "[32m", end: "[39m" },
    yellow : { start: "[33m", end: "[39m" },
    blue   : { start: "[34m", end: "[39m" },
    magenta: { start: "[35m", end: "[39m" },
    cyan   : { start: "[36m", end: "[39m" },
    white  : { start: "[37m", end: "[39m" },
    gray   : { start: "[90m", end: "[39m" },
  },
  bgColor: {
    black  : { start: "[40m", end: "[49m" },
    red    : { start: "[41m", end: "[49m" },
    green  : { start: "[42m", end: "[49m" },
    yellow : { start: "[43m", end: "[49m" },
    blue   : { start: "[44m", end: "[49m" },
    magenta: { start: "[45m", end: "[49m" },
    cyan   : { start: "[46m", end: "[49m" },
    white  : { start: "[47m", end: "[49m" },
  },
  textStyles: {
    reset        : { start: "[0m", end: "[0m" },
    bold         : { start: "[1m", end: "[22m" },
    dim          : { start: "[2m", end: "[22m" },
    italic       : { start: "[3m", end: "[23m" },
    underline    : { start: "[4m", end: "[24m" },
    inverse      : { start: "[7m", end: "[27m" },
    hidden       : { start: "[8m", end: "[28m" },
    strikethrough: { start: "[9m", end: "[29m" },
  }
};

const NodeTheme = Object.freeze({
  dracula: {
    color: NodeConfig.color.green,
    bgColor: NodeConfig.bgColor.black,
  },
  docoo: {
    color: NodeConfig.color.blue,
    bgColor: NodeConfig.bgColor.white,
  },
})

module.exports = { Theme, Blocks, NodeConfig, NodeTheme };
export { Theme, Blocks, NodeConfig, NodeTheme };
