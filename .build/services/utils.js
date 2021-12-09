"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapResponseObject = exports.updateEmployee = exports.deleteEmployee = exports.findEmployee = void 0;
var findEmployee = function (comps, compId) {
    var foundIndex;
    if (!comps || comps.length === 0)
        return;
    for (var compIndex = 0; compIndex < comps.length; compIndex++) {
        if (comps[compIndex].id === compId) {
            foundIndex = compIndex;
            break;
        }
    }
    return foundIndex;
};
exports.findEmployee = findEmployee;
var deleteEmployee = function (comps, compIndex) {
    comps.splice(compIndex, 1);
};
exports.deleteEmployee = deleteEmployee;
var updateEmployee = function (comps, compIndex, updatedCompCont) {
    comps.splice(compIndex, 1, updatedCompCont);
};
exports.updateEmployee = updateEmployee;
var mapResponseObject = function (dbResponse) {
    return {
        id: dbResponse.id,
        firstName: dbResponse.first_name,
        lastName: dbResponse.last_name,
        apartment: dbResponse.apartment,
        street: dbResponse.street,
        city: dbResponse.city,
        state: dbResponse.state,
        country: dbResponse.country,
        postalCode: dbResponse.postal_code,
        phone: dbResponse.phone,
        skills: JSON.parse(dbResponse.skills),
        availability: JSON.parse(dbResponse.availability),
        rate: dbResponse.rate,
        created: dbResponse.created,
        updated: dbResponse.updated,
    };
};
exports.mapResponseObject = mapResponseObject;
//# sourceMappingURL=utils.js.map