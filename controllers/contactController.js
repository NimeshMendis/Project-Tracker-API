//@DESC Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res) => {
    res.status(200).json({ message: "Get all contacts"});
};

//@DESC Create a contact
//@route POST /api/contacts
//@access public
const createContact = (req,res) => {
    res.status(200).json({ message: "Create contact"});
};

//@DESC Get a contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req,res) => {
    res.status(200).json({ message: "Get contact for " + req.params.id});
};

//@DESC Update a contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req,res) => {
    res.status(200).json({ message: "Update contact for " + req.params.id});
};

//@DESC Delete a contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req,res) => {
    res.status(200).json({ message: "Delete contact for " + req.params.id});
};

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }
