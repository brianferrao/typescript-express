"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var constants_1 = require("./config/constants");
var routes_1 = require("./routes");
var app = express_1.default();
app.use(express_1.default.json());
app.use('/user', routes_1.userRouter);
app.use('/message', routes_1.messageRouter);
app.listen(constants_1.PORT, function () {
    console.log("App started at port : " + constants_1.PORT);
});
