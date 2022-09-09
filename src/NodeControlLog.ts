import { NodeConfig } from "../constants";
import ControlLogInterface from "./ControlLog";

class NodeControlLog extends ControlLogInterface {
  color: NodeItemConfigInterface | undefined;
  bgColor: NodeItemConfigInterface | undefined;

  constructor(config: Config) {
    super(config);
    if (config.theme) {
    } else {
      if (config.color)
        this.color = NodeConfig.color[config.color as NodeColorName];
      if (config.bgColor)
        this.bgColor = NodeConfig.color[config.bgColor as NodeColorName];
    }
  }

  log(message: any) {
    if (this.bgColor !== undefined && this.color !== undefined) {
      console.log(
        `\x1b${this.bgColor.start}\x1b${this.color.start}${this.convert(message)}\x1b${this.color.end}\x1b${this.bgColor.end}`
      );
    }
  }
}

export default NodeControlLog;

const l = new NodeControlLog({ color: "red", bgColor: "blue" });
l.log('asdsad') //?