const Pool = require('pg').Pool;
const pg_conn = new Pool (
    {
        user:'jgxatkumxfuife',
        password:'29c29112eb49e46c6ff507b538f322e6cb3982ccbef77024acbd2de326cbd047',
        host:'ec2-44-209-24-62.compute-1.amazonaws.com',
        database:'d38na0jebtk4mu',
        port:5432,
        ssl: {
            rejectUnauthorized: false
        },
    }
);
module.exports = pg_conn;