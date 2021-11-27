const eventData = {
        appartement: '210',
        availability: 'NA',
        city: 'Toronto',
        code: 'A1B2C3',
        created: '2021-11-21T06:13:20.270Z',
        firstName: 'John',
        id: 1,
        lastName: 'McCrae',
        phone: '123-456-7890',
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

module.exports = {
    eventData,
    eventMock,
    emptyEventMock
}
