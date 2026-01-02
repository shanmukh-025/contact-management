import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ContactList.css';

const ContactList = ({ contacts, onContactDeleted }) => {
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState('newest');
  const [localContacts, setLocalContacts] = useState(contacts);

  useEffect(() => {
    setLocalContacts(contacts);
  }, [contacts]);

  const getSortedContacts = () => {
    const sorted = [...localContacts];
    if (sortOrder === 'newest') {
      return sorted.reverse();
    } else {
      return sorted;
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      setLoading(true);
      try {
        await axios.delete(`/api/contacts/${id}`);
        onContactDeleted(id);
        setLocalContacts(localContacts.filter(contact => contact._id !== id));
      } catch (error) {
        alert('Error deleting contact');
      } finally {
        setLoading(false);
      }
    }
  };

  const sortedContacts = getSortedContacts();

  return (
    <div className="contact-list">
      <div className="list-header">
        <h2>Contacts ({localContacts.length})</h2>
        <div className="sort-control">
          <select 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
            className="sort-select"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {sortedContacts.length === 0 ? (
        <p className="no-contacts">No contacts yet. Add one to get started!</p>
      ) : (
        <div className="contacts-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedContacts.map(contact => (
                <tr key={contact._id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.message ? contact.message.substring(0, 50) : '-'}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(contact._id)}
                      disabled={loading}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactList;
