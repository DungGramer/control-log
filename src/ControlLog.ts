class ControlLogInterface {
  color: any;
  bgColor: any;
  theme: any;
  environment = this.getEnv();

  constructor(config: Config) {}

  getEnv() {
    // Check Browser or Node
    try {
      if (window) return "browser";
      else if (process) return "node";
    } catch (e) {
      return "node";
    }
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
}

export default ControlLogInterface;