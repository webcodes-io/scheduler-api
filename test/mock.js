const eventData = {
        apartment: '210',
        availability: 'NA',
        city: 'Toronto',
        country: 'Canada',
        created: '2021-11-21T06:13:20.270Z',
        firstName: 'John',
        id: 1,
        lastName: 'McCrae',
        phone: '123-456-7890',
        postalCode: 'A1B2C3',
        score: '5',
        skills: 'poet',
        state: 'ON',
        street: 'unknown',
        updated: '2021-11-21T06:13:20.270Z'
};

const eventMock = {
    body: JSON.stringify(eventData)
};

const emptyEventMock = {
    body: undefined
};

const responseData = {
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
    skills: "designer",
    availability: "any time",
    score: "5",
    created: "2021-11-27T22:06:07.363Z",
    updated: "2021-11-27T22:06:07.363Z"
};

module.exports = {
    eventData,
    eventMock,
    emptyEventMock,
    responseData
}
