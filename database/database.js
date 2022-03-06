const mysql2 = require('mysql2')
const { db_host, db_port, db_user, db_password, db_name } = require('../config')

const conection = mysql2.createConnection({
    host: db_host,
    port: db_port,
    user: db_user,
    password: db_password,
    database: db_name
})

function query(sql, data) {
    return new Promise((resolve, reject) => {
        conection.query(sql, data, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}

async function insert(tableName, data) {
    try {
        const result = await query(`INSERT INTO ${tableName}(??) VALUES (?)`,[Object.keys(data),Object.values(data)])
        return {data: result, success: true}
    } catch (error) {
        return {error, success: false}
    }
}

async function update(tableName, data, id) {
    try {
        const result = await query(`UPDATE ${tableName} SET ? WHERE id = ?`,[data, id])
        return {data: result, success: true}
    } catch (error) {
        return {error, success: false}
    }
}

async function delet(tableName, id) {
    try {
        const result = await query(`DELETE FROM ${tableName} WHERE id = ?`, [id])
        return {data: result}
    } catch (error) {
        return {error}
    }
}


module.exports = { query, insert, update, delet }