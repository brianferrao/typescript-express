"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRouter = exports.userRouter = void 0;
var user_router_1 = require("./user/user.router");
Object.defineProperty(exports, "userRouter", { enumerable: true, get: function () { return user_router_1.userRouter; } });
var message_router_1 = require("./message/message.router");
Object.defineProperty(exports, "messageRouter", { enumerable: true, get: function () { return message_router_1.messageRouter; } });
