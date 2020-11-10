"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = __importDefault(require("express"));
var Gender_1 = require("../../models/enums/Gender");
exports.userRouter = express_1.default.Router({
    strict: true,
});
var users = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        age: 50,
        gender: Gender_1.Gender.MALE,
    },
];
var count = (function (initialVal) {
    var count = initialVal;
    return function () { return ++count; };
})(1);
exports.userRouter.get('/', function (req, res) {
    res.json(users);
});
exports.userRouter.post('/', function (req, res) {
    var newUser = __assign({}, req.body);
    newUser.id = count();
    users.push(newUser);
    res.json(newUser);
});
exports.userRouter.delete('/:id', function (req, res) {
    var deleteIndex = users.findIndex(function (user) { return user.id === parseInt(req.params.id); });
    if (deleteIndex > -1) {
        users.splice(deleteIndex, 1);
        res.send('Deleted Successfully');
    }
    else {
        res.send('Invalid Id to delete');
    }
});
