"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Client = require('pg').Client;
var create_table_1 = require("./create-table");
var modify_table_1_1 = require("./modify-table-1");
var modify_table_2_1 = require("./modify-table-2");
var modify_table_3_1 = require("./modify-table-3");
var modify_table_4_1 = require("./modify-table-4");
var modify_table_5_1 = require("./modify-table-5");
var modify_table_6_1 = require("./modify-table-6");
var ifClientConnected = false;
var client = new Client({
    host: process.env.POSTGRESQL_HOST,
    port: process.env.POSTGRESQL_PORT,
    database: process.env.DB_NAME,
    user: process.env.USERNAME,
    password: process.env.PASSWORD
});
var DBService = /** @class */ (function () {
    function DBService() {
    }
    DBService.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(client && ifClientConnected)) return [3 /*break*/, 1];
                        return [2 /*return*/, client];
                    case 1:
                        _a.trys.push([1, 10, , 11]);
                        return [4 /*yield*/, client.connect()];
                    case 2:
                        _a.sent();
                        ifClientConnected = true;
                        return [4 /*yield*/, (0, create_table_1.default)(client)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, (0, modify_table_1_1.default)(client)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, (0, modify_table_2_1.default)(client)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, (0, modify_table_3_1.default)(client)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, (0, modify_table_4_1.default)(client)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, (0, modify_table_5_1.default)(client)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, (0, modify_table_6_1.default)(client)];
                    case 9:
                        _a.sent();
                        return [2 /*return*/, client];
                    case 10:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    return DBService;
}());
var dbService = new DBService();
exports.default = dbService;
//# sourceMappingURL=init.js.map