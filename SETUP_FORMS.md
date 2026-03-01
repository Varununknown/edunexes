# EduNexes Form Submission Setup Guide

## Quick Start: Email Alerts + Google Sheets

This guide will help you set up automated email notifications and Google Sheets logging for form submissions.

---

## Step 1: Install Backend Dependencies

```bash
npm install
```

This installs: express, nodemailer, googleapis, cors, dotenv, concurrently

---

## Step 2: Set Up Gmail (Email Configuration)

### 2a. Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification if not already enabled

### 2b. Create App Password
1. Go back to [Google Account Security](https://myaccount.google.com/security)
2. Scroll to "App passwords" (only visible after 2FA is enabled)
3. Select "Mail" and "Windows Computer" (or your device)
4. Copy the 16-character password

### 2c. Create `.env` file in project root:
```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=xxxx-xxxx-xxxx-xxxx
ADMIN_EMAIL=admin@edunexes.com
PORT=5000
```

---

## Step 3: Set Up Google Sheets

### 3a. Create Google Sheets API Credentials
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (name it "EduNexes")
3. Search for "Google Sheets API" and enable it
4. Search for "Service Accounts" and create a new service account
5. Generate a JSON key and save it as `google-keys.json` in project root

### 3b. Create Google Sheet
1. Create a new Google Sheet called "EduNexes Form Submissions"
2. Copy the spreadsheet ID from the URL: `docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/`
3. Share the sheet with your service account email
4. Add the ID to `.env`:
```
SPREADSHEET_ID=your-spreadsheet-id-here
GOOGLE_KEY_FILE=./google-keys.json
```

### 3c. Add Headers to Google Sheet
In the first row, add these headers:
- Column A: Timestamp
- Column B: Name
- Column C: Phone
- Column D: School Name
- Column E: City/District
- Column F: No. of Students
- Column G: Package Type
- Column H: Email

---

## Step 4: Run the Server

### Terminal 1 - Backend Server
```bash
npm run server
```
You should see: ✅ EduNexes Backend Server running on http://localhost:5000

### Terminal 2 - Frontend (Vite)
```bash
npm run dev
```
Frontend will run on http://localhost:3000 (or 3002 if ports are in use)

---

## Step 5: Test the Form

1. Open the website in browser
2. Click "Free Trial" or any CTA button
3. Fill out the form and submit
4. You should see:
   - ✓ Success message on website
   - 📧 Email notification to ADMIN_EMAIL
   - 📧 Auto-reply email to user
   - 📊 New row in Google Sheets

---

## Troubleshooting

### Email not sending?
- Check 2-Factor Authentication is enabled
- Verify App Password was copied correctly (16 chars)
- Check ADMIN_EMAIL is correct
- Check EMAIL_USER matches Google account

### Google Sheets not updating?
- Verify SPREADSHEET_ID is correct (without /edit)
- Check google-keys.json exists in project root
- Verify service account email has access to sheet
- Check first row has headers

### Port already in use?
- Backend default: 5000
- Frontend default: 3000-3002
- Change PORT in `.env` if needed

---

## File Structure

```
edunexus/
├── server.js                 # Backend server
├── index.html               # Frontend
├── .env                     # Environment variables (CREATE THIS)
├── .env.example             # Example config
├── google-keys.json         # Google API credentials (CREATE THIS)
└── package.json
```

---

## Security Notes

⚠️ **IMPORTANT:**
- Never commit `.env` or `google-keys.json` to git
- Already added to `.gitignore` - verify it's there
- Keep App Password and API keys secure
- Use environment variables in production

---

## What Gets Collected?

Each form submission captures:
- ✅ Name
- ✅ Phone Number
- ✅ School Name
- ✅ City/District
- ✅ Number of Students
- ✅ Package Interest
- ✅ Email Address
- ✅ Timestamp

---

## Next Steps

After setup works:
1. Set up a public Google Form to display data (optional)
2. Create an admin dashboard to view submissions
3. Set up SMS notifications (Twilio)
4. Create automated follow-up emails

---

Need help? Email: support@edunexes.com
