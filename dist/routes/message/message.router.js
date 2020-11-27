"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRouter = void 0;
var express_1 = __importDefault(require("express"));
exports.messageRouter = express_1.default.Router({ strict: true });
exports.messageRouter.get('/', function (req, res) {
    res.send('Hello Message');
});
