module.exports.modify = async (client) => {
    return await client.query(
        `ALTER TABLE employees ALTER availability TYPE jsonb;`,
        (err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Table "employees" created');
        }
    })
}
