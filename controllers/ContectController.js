const Contact = require("../modules/Contact");

// POST: Save new contact
const sendContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Message saved successfully" });
  } catch (err) {
    console.error("❌ Error saving contact:", err);
    res.status(500).json({ success: false, message: "Error saving message" });
  }
};

// GET: Fetch all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    console.error("❌ Error fetching contacts:", err);
    res.status(500).json({ success: false, message: "Error fetching messages" });
  }
};

module.exports = { sendContactMessage, getAllContacts };
