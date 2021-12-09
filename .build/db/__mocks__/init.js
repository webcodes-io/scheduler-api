"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_1 = require("../../mocks/mock");
var dbService = jest.createMockFromModule('./init');
dbService.init = function () { return ({
    query: function () { return ({
        rows: [mock_1.queryResponseData]
    }); }
}); };
exports.default = dbService;
//# sourceMappingURL=init.js.map