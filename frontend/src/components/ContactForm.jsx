import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ContactForm.css';

const API_URL = import.meta.env.VITE_API_URL || '';

const ContactForm = ({ onContactAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9\-\+\(\)\s]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    const newErrors = { ...errors };
    delete newErrors[name];
    delete newErrors.submit;
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/api/contacts`, formData);
      setSuccess('Contact added successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
      onContactAdded(response.data);
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setErrors({ submit: error.response?.data?.message || 'Error adding contact' });
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = () => {
    const hasRequiredFields = formData.name.trim() && 
                              formData.email.trim() && 
                              formData.phone.trim();
    
    const hasNoErrors = Object.keys(errors).filter(key => key !== 'submit').length === 0;
    
    return hasRequiredFields && hasNoErrors;
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Add Contact</h2>

      {success && <div className="success-message">{success}</div>}
      {errors.submit && <div className="error-message">{errors.submit}</div>}

      <div className="form-group">
        <label htmlFor="name">👤 Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'input-error' : ''}
          placeholder="e.g. John Doe"
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">📧 Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'input-error' : ''}
          placeholder="e.g. john@example.com"
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">📱 Phone *</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? 'input-error' : ''}
          placeholder="e.g. +1 234 567 8900"
        />
        {errors.phone && <span className="error-text">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">💬 Message (Optional)</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Share your thoughts or additional information..."
          rows="4"
        />
      </div>

      <button 
        type="submit" 
        disabled={!isFormValid() || loading}
        className="submit-btn"
      >
        {loading ? '⏳ Adding Contact...' : '✨ Add Contact'}
      </button>
    </form>
  );
};

export default ContactForm;
