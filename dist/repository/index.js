"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
var UserRepository_1 = __importDefault(require("./UserRepository"));
var userRepository = new UserRepository_1.default();
exports.userRepository = userRepository;
