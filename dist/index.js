"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var BeautyLog = /** @class */ (function () {
    function BeautyLog() {
        this.environment = this.getEnv();
        this.color = "green";
        this.bgColor = "yellow";
    }
    BeautyLog.prototype.init = function (config) {
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
    BeautyLog.prototype.getEnv = function () {
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
    BeautyLog.prototype.browserInit = function (config) {
        if (config.color)
            this.color = config.color;
        if (config.bgColor)
            this.bgColor = config.bgColor;
        if (config.theme)
            this.theme = constants_1.Theme[config.theme];
    };
    BeautyLog.prototype.nodeInit = function (config) {
        if (config.color)
            this.color = constants_1.NodeConfig.color[config.color];
        if (config.bgColor)
            this.bgColor = constants_1.NodeConfig.bgColor[config.bgColor];
        if (config.theme)
            this.theme = constants_1.NodeTheme[config.theme];
    };
    BeautyLog.prototype.convert = function (message) {
        switch (typeof message) {
            case "string":
                return message;
            case "object":
                return JSON.stringify(message);
            default:
                return message.toString();
        }
    };
    BeautyLog.prototype.log = function (message) {
        if (this.environment === "node") {
            console.log("\u001B".concat(this.bgColor.start, "\u001B").concat(this.color.start).concat(this.convert(message), "\u001B").concat(this.color.end, "\u001B").concat(this.bgColor.end));
        }
        else {
            console.log("%c".concat(this.convert(message)), "color: ".concat(this.color, "; background-color: ").concat(this.bgColor));
        }
    };
    return BeautyLog;
}());
exports.default = BeautyLog;
var l = new BeautyLog();
l.init({ color: "red", bgColor: "yellow" });
l.log("hello world");
