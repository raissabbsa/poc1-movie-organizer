import pg from "pg";

const {Pool} = pg;

const connection = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'patyra13',
    database: 'movies'
});

export {connection};