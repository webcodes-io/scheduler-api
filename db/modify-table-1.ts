const modify_1 = async (client) => {
    return await client.query(
        `ALTER TABLE employees RENAME appartement TO apartment;`,
        (err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Table "employees" created');
        }
    })
}
export default modify_1;
