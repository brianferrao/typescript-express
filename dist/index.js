"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
var express_1 = __importDefault(require("express"));
var constants_1 = require("./config/constants");
var routes_1 = require("./routes");
var mongoose_1 = __importDefault(require("mongoose"));
dotenv.config();
var MONGO_DB_URI = process.env.MONGO_DB_URI || '';
mongoose_1.default.connect(MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.error("Problem connecting to MongoDB : " + err);
    }
    else {
        console.log('Connection to MongoDB established succesfully');
    }
});
var app = express_1.default();
app.use(express_1.default.json());
app.use('/user', routes_1.userRouter);
app.use('/message', routes_1.messageRouter);
app.listen(constants_1.PORT, function () {
    console.log("App started at port : " + constants_1.PORT);
});
