"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mappedResponseData = exports.queryResponseData = exports.emptyEventMock = exports.eventMock = exports.eventData = void 0;
exports.eventData = {
    apartment: '210',
    availability: JSON.stringify([
        {
            "day": "Monday",
            "intervals": [
                {
                    "start": "9:00am",
                    "end": "5:00pm"
                }
            ]
        }
    ]),
    city: 'Toronto',
    country: 'Canada',
    created: '2021-11-21T06:13:20.270Z',
    firstName: 'John',
    id: 1,
    lastName: 'McCrae',
    phone: '123-456-7890',
    postalCode: 'A1B2C3',
    rate: '5',
    skills: JSON.stringify([
        "director",
        "sales agent"
    ]),
    state: 'ON',
    street: 'unknown',
    updated: '2021-11-21T06:13:20.270Z'
};
exports.eventMock = {
    body: JSON.stringify(exports.eventData)
};
exports.emptyEventMock = {
    body: undefined
};
exports.queryResponseData = {
    id: 9,
    first_name: "Mark",
    last_name: "Hilton",
    apartment: "3102",
    street: "Rogers",
    city: "Toronto",
    country: "Canada",
    state: "ON",
    postalCode: "M2B9G11",
    phone: "4161234567",
    skills: JSON.stringify([
        "director",
        "sales agent"
    ]),
    availability: JSON.stringify([
        {
            "day": "Monday",
            "intervals": [
                {
                    "start": "9:00am",
                    "end": "5:00pm"
                }
            ]
        }
    ]),
    rate: "5",
    created: "2021-11-27T22:06:07.363Z",
    updated: "2021-11-27T22:06:07.363Z"
};
exports.mappedResponseData = {
    "id": 9,
    "firstName": "Mark",
    "lastName": "Hilton",
    "apartment": "3102",
    "street": "Rogers",
    "city": "Toronto",
    "state": "ON",
    "country": "Canada",
    "phone": "4161234567",
    "skills": [
        "director",
        "sales agent"
    ],
    "availability": [
        {
            "day": "Monday",
            "intervals": [
                {
                    "start": "9:00am",
                    "end": "5:00pm"
                }
            ]
        }
    ],
    "rate": "5",
    "created": "2021-11-27T22:06:07.363Z",
    "updated": "2021-11-27T22:06:07.363Z"
};
//# sourceMappingURL=mock.js.map