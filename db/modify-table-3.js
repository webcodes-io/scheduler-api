module.exports.modify = async (client) => {
    return await client.query(
        `ALTER TABLE employees RENAME code TO postal_code;`,
        (err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Table "employees" created');
        }
    })
}