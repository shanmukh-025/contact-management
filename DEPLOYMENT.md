# Deployment Guide

## Quick Deploy (10 minutes)

### Option 1: Deploy Both on Vercel (Easiest)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
cd C:\Users\shanm\OneDrive\Desktop\InterviewTask
vercel
```

3. **Set Environment Variables in Vercel Dashboard**
- Go to: https://vercel.com/dashboard
- Select your project
- Settings → Environment Variables
- Add: `MONGODB_URI` = your MongoDB Atlas connection string

### Option 2: Separate Deployment (Recommended for interviews)

#### Backend on Render

1. Go to https://render.com and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repo: `shanmukh-025/contact-management`
4. Configure:
   - **Name**: contact-management-api
   - **Root Directory**: backend
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   - `MONGODB_URI`: your MongoDB Atlas connection
   - `PORT`: 5000
6. Click "Create Web Service"
7. Copy the deployed URL (e.g., `https://contact-management-api.onrender.com`)

#### Frontend on Vercel

1. Go to https://vercel.com and sign up
2. Click "New Project"
3. Import your GitHub repo: `shanmukh-025/contact-management`
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: frontend
   - **Build Command**: `npm run build`
   - **Output Directory**: dist
5. Add Environment Variable:
   - `VITE_API_URL`: Your Render backend URL
6. Click "Deploy"

### Option 3: Quick Netlify Deploy (Frontend Only)

1. **Build frontend locally**
```bash
cd frontend
npm run build
```

2. **Deploy to Netlify**
- Drag & drop the `dist` folder to https://app.netlify.com/drop

3. **Update API URL**
- Deploy backend separately on Render
- Update frontend to use deployed backend URL

## Post-Deployment

1. Test the deployed app
2. Share the live URL in your submission
3. Make sure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)

## Live URLs

- Frontend: Will be provided by Vercel/Netlify
- Backend: Will be provided by Render/Vercel
- Database: Already on MongoDB Atlas ✓

## Troubleshooting

**CORS Error**: Make sure backend allows your frontend domain in CORS settings
**MongoDB Connection**: Verify MongoDB Atlas IP whitelist includes 0.0.0.0/0
**Environment Variables**: Double-check all env vars are set correctly
