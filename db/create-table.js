module.exports.init = async (client) => {
    await client.query(`
    CREATE TABLE IF NOT EXISTS employees
    (
        id serial not null PRIMARY KEY,
        first_name varchar(100) not null,
        last_name varchar(100) not null,
        appartement varchar(100) not null,
        street varchar(100) not null,
        city varchar(100) not null,
        state varchar(100) not null,
        code varchar(100) not null,
        phone varchar(100) not null,
        skills varchar(50) not null,
        availability varchar(256) not null,
        score varchar(100) not null,
        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Table "employees" created');
        }
    })
}
