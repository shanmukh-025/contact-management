import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL || '';

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/contacts`);
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleContactAdded = (newContact) => {
    setContacts([newContact, ...contacts]);
  };

  const handleContactDeleted = (id) => {
    setContacts(contacts.filter(contact => contact._id !== id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Contact Management App</h1>
        <p>Manage your contacts efficiently</p>
      </header>

      <div className="app-content">
        <div className="form-section">
          <ContactForm onContactAdded={handleContactAdded} />
        </div>

        <div className="list-section">
          {loading ? (
            <p className="loading">Loading contacts...</p>
          ) : (
            <ContactList 
              contacts={contacts} 
              onContactDeleted={handleContactDeleted}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
