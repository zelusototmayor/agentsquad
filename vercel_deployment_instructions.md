# Vercel Deployment Instructions

## Environment Variables
Add the following environment variables to your Vercel project:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDd7TRM4yYf3JEzj2OY9lXgDzRtBvkX1SA
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=agentsquad-33cb2.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=agentsquad-33cb2
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=agentsquad-33cb2.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=914462813836
NEXT_PUBLIC_FIREBASE_APP_ID=1:914462813836:web:7b66fc19e55524088e95a9
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-Q9TPLZ814H
```

## Deployment Steps
1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Click "Add New" > "Project"
3. Select the "agentsquad" repository from your GitHub account
4. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
5. Add the environment variables listed above
6. Click "Deploy"

## Post-Deployment
- Enable Firebase Authentication methods (Email/Password and Google) in your Firebase console
- Set up Firestore database rules for your application
- Test the application thoroughly after deployment
