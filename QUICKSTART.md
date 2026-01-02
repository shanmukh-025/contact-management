# Quick Start Guide

## 5-Minute Setup

### Prerequisites
- Node.js installed
- MongoDB running locally (`mongod`)

### Terminal 1 - Backend
```bash
cd backend
npm install
npm start
```
You should see: "Server running on port 5000" and "MongoDB connected"

### Terminal 2 - Frontend
```bash
cd frontend
npm install
npm run dev
```
You should see: "Local: http://localhost:3000"

### Open Browser
Navigate to `http://localhost:3000`

## Using the App

1. **Add Contact**:
   - Fill in Name, Email, Phone (required fields)
   - Add optional message
   - Submit button only enables when form is valid
   - See success message on submission

2. **View Contacts**:
   - Contacts appear immediately in the table
   - Sort by newest/oldest

3. **Delete Contact**:
   - Click delete button on any contact
   - Confirm deletion

## Troubleshooting

**MongoDB Connection Error**:
- Make sure MongoDB is running: `mongod`
- Check .env file has correct connection string

**Port Already in Use**:
- Backend: Change PORT in .env
- Frontend: Vite will use next available port

**Module Not Found**:
- Run `npm install` in the respective directory

**CORS Error**:
- Check that backend is running on port 5000
- Check vite.config.js proxy settings

## Testing the APIs with cURL

```bash
GET all contacts:
curl http://localhost:5000/api/contacts

POST new contact:
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","phone":"1234567890"}'

DELETE contact:
curl -X DELETE http://localhost:5000/api/contacts/{id}
```
