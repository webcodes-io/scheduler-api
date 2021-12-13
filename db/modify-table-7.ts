const modify_7 = async (client) => {
    return await client.query(
        `ALTER TABLE employees ADD COLUMN email varchar(100);
         ALTER TABLE employees ADD COLUMN mobile varchar(100);`,
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Table "employees" created');
            }
        })
}
export default modify_7;
