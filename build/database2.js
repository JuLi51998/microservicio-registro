"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool2 = promise_mysql_1.default.createPool(keys_1.default.database2);
pool2.getConnection()
    .then(connection => {
    pool2.releaseConnection(connection);
    console.log("DB2 conectada");
});
exports.default = pool2;
