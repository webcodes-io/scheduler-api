"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Reusable Authorizer function, set on `authorizer` field in serverless.yml
var auth = function (event, context, callback) {
    // Policy helper function
    var generatePolicy = function (principalId, effect, resource) {
        var authResponse = {};
        authResponse.principalId = principalId;
        if (effect && resource) {
            var policyDocument = {};
            policyDocument.Version = '2012-10-17';
            policyDocument.Statement = [];
            var statementOne = {};
            statementOne.Action = 'execute-api:Invoke';
            statementOne.Effect = effect;
            statementOne.Resource = resource;
            policyDocument.Statement[0] = statementOne;
            authResponse.policyDocument = policyDocument;
        }
        return authResponse;
    };
    var harcodedUserId = 'default';
    return callback(null, generatePolicy(harcodedUserId, 'Allow', event.methodArn));
};
exports.default = auth;
//# sourceMappingURL=auth.js.map