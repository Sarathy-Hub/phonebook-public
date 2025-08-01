const db = require('../config/db')

const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM contact', (err, results) => {
            if (err) {
                reject ('Error fetching contacts: ', err)
            }

            resolve (results)
        })
    })
}

const createContact = (contact) => {
    return new Promise ((resolve, reject) => {
        const query = 'INSERT INTO contact (name, email) VALUES (?, ?)'
        db.query(query, [contact.name, contact.email], (err, results) => {
            if (err) {
                reject ('Error creating contact: ', err)
            }

            resolve (results.insertId)
        })
    })
}

const findById = ( id ) => {
    return new Promise (( resolve, reject) => {
        const query = 'SELECT * FROM contact WHERE id = ?'
        db.query(query, [id], (err, results) => {
            if (err) {
                reject ("Error finding ID: ", err)
            }

            resolve (results)
        })
    })
}

module.exports = {
    getAll, 
    createContact,
    findById
}