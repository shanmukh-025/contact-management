# Contact Management Web App - MERN Stack

A full-stack contact management application built with MongoDB, Express, React, and Node.js.

## Features

- Add new contacts with validation
- View all contacts in a sortable table
- Delete contacts
- Client-side form validation with error messages
- Responsive design
- Real-time contact list updates
- Success/error messages

## Project Structure

```
InterviewTask/
├── backend/
│   ├── models/
│   │   └── Contact.js (MongoDB schema)
│   ├── routes/
│   │   └── contacts.js (API endpoints)
│   ├── server.js (Express server)
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ContactForm.jsx
    │   │   └── ContactList.jsx
    │   ├── styles/
    │   │   ├── index.css
    │   │   ├── App.css
    │   │   ├── ContactForm.css
    │   │   └── ContactList.css
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB running locally or MongoDB Atlas connection string
- npm or yarn

## Installation & Setup

### 1. Backend Setup

```bash
cd backend
npm install
```

Update `.env` file with your MongoDB connection:
```
MONGODB_URI=mongodb://localhost:27017/contact-management
PORT=5000
```

Start the backend server:
```bash
npm start
```

The server will run on `http://localhost:5000`

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Start the development server:
```bash
npm run dev
```

The app will run on `http://localhost:3000`

## API Endpoints

- `GET /api/contacts` - Fetch all contacts
- `POST /api/contacts` - Create a new contact
- `DELETE /api/contacts/:id` - Delete a contact by ID

## Form Validation

- **Name**: Required, must not be empty
- **Email**: Required, must be a valid email format
- **Phone**: Required, must be a valid phone number (10+ digits)
- **Message**: Optional field

## Features Implemented

### Core Requirements
✅ Contact form with required fields
✅ Client-side validation with error messages
✅ Backend API for storing contacts
✅ Backend API for fetching contacts
✅ MongoDB database with schema
✅ Display contacts without page reload
✅ Responsive UI design
✅ Disabled submit button for invalid forms

### Bonus Features
✅ Delete functionality
✅ Success/error messages
✅ Reusable components (ContactForm, ContactList)
✅ Sorting (newest/oldest first)

## Key Technologies

- **Frontend**: React 18, Axios, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Styling**: Custom CSS with responsive design
- **State Management**: React Hooks (useState, useEffect)

## Running the Application

1. Ensure MongoDB is running
2. Start backend: `cd backend && npm start`
3. Start frontend: `cd frontend && npm run dev`
4. Open browser to `http://localhost:3000`

## Code Quality

- Clean, readable code without unnecessary comments
- Proper error handling
- RESTful API design
- Component-based architecture
- Form validation on both client and server side
- Responsive design for mobile and desktop
