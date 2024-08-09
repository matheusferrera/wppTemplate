import wppClient from '../wppClient.js';
import Util from '../util.js'

const getContacts = async (req, res) => {
  try {
    const ContactId = req.params.ContactId;
    console.log("REQ NO GET!");
    const formated = await wppClient.getFormattedNumber("12345678901@c.us")
    console.log("FORMATED NUMBER -> ", formated)
    // const response = await ContactsService.getContacts(ContactId);
    // res.send(response);
  } catch (e) {
    res.status(500).send(e.toString());
  }
};

const createContacts = async (req, res) => {
  try {
    const reqBody = req.body;
    const contactId = await Util.getNumberId(reqBody.wppNumber)
    const contact = await wppClient.getContactById(contactId)
    console.log("contact -> ", contact)
    // const response = await ContactsService.createContact(reqBody);
    res.send(contact);
  } catch (e) {
    res.status(500).send(e.toString());
  }
};

const changeContacts = async (req, res) => {
  try {
    const ContactId = req.params.ContactId;
    // const response = await ContactsService.changeContacts(ContactId);
    // res.send(response);
  } catch (e) {
    res.status(500).send(e.toString());
  }
};

const deleteContacts = async (req, res) => {
  try {
    const ContactId = req.params.ContactId;
    // const response = await ContactsService.deleteContacts(ContactId);
    // res.send(response);
  } catch (e) {
    res.status(500).send(e.toString());
  }
};

const ContactsController = {
  getContacts,
  createContacts,
  changeContacts,
  deleteContacts,
};

export default ContactsController;
