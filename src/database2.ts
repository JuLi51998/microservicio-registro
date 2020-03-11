import mysql from "promise-mysql";
import keys from "./keys";

const pool2 = mysql.createPool(keys.database2);

pool2.getConnection()
.then(connection => {
    pool2.releaseConnection(connection);
    console.log("DB2 conectada");
});
export default pool2;