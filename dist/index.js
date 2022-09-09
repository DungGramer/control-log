"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var ControlLog = /** @class */ (function () {
    function ControlLog() {
        this.environment = this.getEnv();
        this.color = "green";
        this.bgColor = "yellow";
    }
    ControlLog.prototype.init = function (config) {
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
    };
    ControlLog.prototype.getEnv = function () {
        // Check Browser or Node
        try {
            if (window)
                return "browser";
            else if (process)
                return "node";
        }
        catch (e) {
            return "node";
        }
    };
    ControlLog.prototype.browserInit = function (config) {
        if (config.color)
            this.color = config.color;
        if (config.bgColor)
            this.bgColor = config.bgColor;
        if (config.theme)
            this.theme = constants_1.Theme[config.theme];
    };
    ControlLog.prototype.nodeInit = function (config) {
        if (config.color)
            this.color = constants_1.NodeConfig.color[config.color];
        if (config.bgColor)
            this.bgColor = constants_1.NodeConfig.bgColor[config.bgColor];
        if (config.theme)
            this.theme = constants_1.NodeTheme[config.theme];
    };
    ControlLog.prototype.convert = function (message) {
        switch (typeof message) {
            case "string":
                return message;
            case "object":
                return JSON.stringify(message);
            default:
                return message.toString();
        }
    };
    ControlLog.prototype.log = function (message) {
        if (this.environment === "node") {
            console.log("\u001B".concat(this.bgColor.start, "\u001B").concat(this.color.start).concat(this.convert(message), "\u001B").concat(this.color.end, "\u001B").concat(this.bgColor.end));
        }
        else {
            console.log("%c".concat(this.convert(message)), "color: ".concat(this.color, "; background-color: ").concat(this.bgColor));
        }
    };
    return ControlLog;
}());
exports.default = ControlLog;
//# sourceMappingURL=index.js.map