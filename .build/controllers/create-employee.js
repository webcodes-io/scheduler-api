'use strict';
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
var utils_1 = require("../services/utils");
var init_1 = require("../db/init");
var create = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var client, data, text, values, queryResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, init_1.default.init()];
            case 1:
                client = _a.sent();
                if (typeof event.body === 'string') {
                    data = JSON.parse(event.body);
                }
                else {
                    data = event.body;
                }
                if (!data ||
                    !data.firstName ||
                    !data.lastName ||
                    !data.apartment ||
                    !data.street ||
                    !data.city ||
                    !data.state ||
                    !data.postalCode ||
                    !data.phone ||
                    !data.skills ||
                    !data.availability ||
                    !data.rate ||
                    !data.country) {
                    return [2 /*return*/, {
                            statusCode: 400,
                            headers: { 'Content-Type': 'application/json' },
                            body: 'Couldn\'t create the employee item. Insufficient data',
                        }];
                }
                text = "insert into employees(\n    first_name,\n    last_name,\n    apartment,\n    street,\n    city,\n    state,\n    postal_code,\n    phone,\n    skills,\n    availability,\n    rate,\n    country\n  ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *";
                values = [
                    data.firstName,
                    data.lastName,
                    data.apartment,
                    data.street,
                    data.city,
                    data.state,
                    data.postalCode,
                    data.phone,
                    data.skills,
                    data.availability,
                    data.rate,
                    data.country
                ];
                return [4 /*yield*/, client.query(text, values)];
            case 2:
                queryResult = _a.sent();
                if (queryResult && queryResult.rows.length > 0) {
                    return [2 /*return*/, (0, utils_1.mapResponseObject)(queryResult.rows[0])];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.default = create;
//# sourceMappingURL=create-employee.js.map