const contactModel = require('../models/contactModel');

const getAll = async () =>{
    return await contactModel.getAll();
}

const createContact = async (contact) =>{
    if(!contact.name || !contact.email){
        throw new Error('Name and email are required fields.') 
    }
    return await contactModel.createContact(contact);
}

const findById = async ( id ) => {
    return await contactModel.findById( id )
}

module.exports = {getAll, createContact, findById}