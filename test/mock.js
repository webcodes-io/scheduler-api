const eventData = {
        appartement: '210',
        availability: 'NA',
        city: 'Toronto',
        code: 'A1B2C3',
        created: '11-23-2021',
        first_name: 'John',
        id: 1,
        last_name: 'McCrae',
        phone: '123-456-7890',
        score: '5',
        skills: 'poet',
        state: 'ON',
        street: 'unknown',
        updated: '11-23-2021'
};

// appartement: "1605"
// availability: "any time"
// city: "Toronto"
// code: "M2B9G9"
// created: "2021-11-21T06:13:20.270Z"
// first_name: "Shawn"
// id: 7
// last_name: "Caswel"
// phone: "4161234567"
// score: "5"
// skills: "designer"
// state: "ON"
// street: "Rogers"
// updated: "2021-11-21T06:13:20.270Z"

const eventMock = {
    body: JSON.stringify(eventData)
};
const updateEventData = {
    "name": "Coldplay",
    "locationCity": "London",
    "locationState": "England",
    "foundedDate": "1996",
    "founderFullName":"Chris Martin",
    "founderPosition":"singer",
    "description": "The band consists of vocalist, rhythm guitarist, and pianist Chris Martin; lead guitarist Jonny Buckland;"
}
const updateEventMock = {
    body: JSON.stringify(updateEventData)
};
const emptyEventMock = {
    body: undefined
};

module.exports = {
    eventData,
    eventMock,
    emptyEventMock,
    updateEventData,
    updateEventMock
}
