const contactService = require('../service/contactService')

const getAll = async (req, res) =>{
    try{
        const contact = await contactService.getAll
        res.status(200).json(contact);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const createContact = async(req, res) =>{
    try{
        const contact = req.body;
        const contactId = await contactService.createContact(contact)
        res.status(201).json({id:contactId})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

const findById = async (req, res) => {
    try {
        const id = req.params.id

        if (!id) {
            return res.status(400).json({ message: 'ID is required' });
        }

        const contact = await contactService.findById(id);

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {getAll, createContact, findById}