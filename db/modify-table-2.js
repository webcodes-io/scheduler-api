module.exports.modify = async (client) => {
    return await client.query(
        `ALTER TABLE employees ADD COLUMN country varchar(100);`,
        (err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Table "employees" created');
        }
    })
}
