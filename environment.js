import mysql from "mysql";

export const con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "phntmz",
    password: "minh2007",
    database: "exposure",
});
