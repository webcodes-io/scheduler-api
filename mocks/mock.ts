export const eventData = {
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
        mobile: "4371234567",
        email: "kuku@kuku.com",
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

export const eventMock = {
    body: JSON.stringify(eventData)
};

export const emptyEventMock = {
    body: undefined
};

export const queryResponseData = {
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
    mobile: "4371234567",
    email: "kuku@kuku.com",
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

export const mappedResponseData = {
    "id": 9,
    "firstName": "Mark",
    "lastName": "Hilton",
    "apartment": "3102",
    "street": "Rogers",
    "city": "Toronto",
    "state": "ON",
    "country": "Canada",
    "phone": "4161234567",
    "mobile": "4371234567",
    "email": "kuku@kuku.com",
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
}
