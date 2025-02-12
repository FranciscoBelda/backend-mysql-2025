require('dotenv').config();
export default {
    database: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        port: 3306 /* 8889 MAMP*/
    }
}