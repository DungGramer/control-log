import { NodeConfig, NodeTheme, Theme } from "./constants";

class ControlLog {
  color: Color | NodeItemConfigInterface;
  bgColor: Color | NodeItemConfigInterface;
  theme: any;
  environment = this.getEnv();

  constructor() {
    this.color = "green";
    this.bgColor = "yellow";
  }

  init(config: Config) {
    switch (this.environment) {
      case "browser":
        this.browserInit(config);
        break;
      case "node":
        this.nodeInit(config);
        break;
      default:
        break;
    }
  }

  getEnv() {
    // Check Browser or Node
    try {
      if (window) return "browser";
      else if (process) return "node";
    } catch (e) {
      return "node";
    }
  }

  browserInit(config: Config) {
    if (config.color) this.color = config.color;
    if (config.bgColor) this.bgColor = config.bgColor;
    if (config.theme) this.theme = Theme[config.theme];
  }

  nodeInit(config: Config) {
    if (config.color) this.color = NodeConfig.color[config.color as NodeColorName];
    if (config.bgColor) this.bgColor = NodeConfig.bgColor[config.bgColor as NodeColorName];
    if (config.theme) this.theme = NodeTheme[config.theme];
  }

  convert(message: any) {
    switch (typeof message) {
      case "string":
        return message;
      case "object":
        return JSON.stringify(message);
      default:
        return message.toString();
    }
  }

  log(message: any) {
   if (this.environment === "node") {
      console.log(
        `\x1b${this.bgColor.start}\x1b${this.color.start}${this.convert(message)}\x1b${this.color.end}\x1b${this.bgColor.end}`
      );
    } else {
      console.log(
        `%c${this.convert(message)}`,
        `color: ${this.color}; background-color: ${this.bgColor}`
      );
    }
  }
}

export default ControlLog;