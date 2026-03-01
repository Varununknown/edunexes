import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email Configuration (Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Form Submission Endpoint
app.post('/api/submit-form', async (req, res) => {
  try {
    const { name, phone, schoolName, city, studentCount, package: packageType, email } = req.body;

    // Validation
    if (!name || !phone || !schoolName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send Email Notification
    await sendEmailNotification({
      name,
      phone,
      schoolName,
      city,
      studentCount,
      packageType,
      email,
    });

    res.json({
      success: true,
      message: 'Form submitted successfully! Check your email and our team will contact you within 24 hours.',
    });
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({
      error: 'Form submission failed',
      details: error.message,
    });
  }
});

// Function to send Email Notification
async function sendEmailNotification(data) {
  try {
    // Email to Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || 'admin@edunexes.com',
      subject: `New Form Submission from ${data.name}`,
      html: `
        <h2>New School Registration</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>School Name:</strong> ${data.schoolName}</p>
        <p><strong>City/District:</strong> ${data.city || 'N/A'}</p>
        <p><strong>No. of Students:</strong> ${data.studentCount || 'N/A'}</p>
        <p><strong>Package Interest:</strong> ${data.packageType || 'Free Trial'}</p>
        <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <p>Please contact them within 24 hours.</p>
      `,
    };

    // Email to User
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email || 'noreply@edunexes.com',
      subject: 'Welcome to EduNexes - Your Free Trial is Ready!',
      html: `
        <h2>Welcome to EduNexes, ${data.name}!</h2>
        <p>Thank you for choosing EduNexes for your school management needs.</p>
        <p><strong>Your Free Trial Details:</strong></p>
        <ul>
          <li>Duration: 15 days (all features included)</li>
          <li>No credit card required</li>
          <li>0% commission on fee payments</li>
          <li>Full access to AI & Premium features</li>
        </ul>
        <p>Our team will reach out to you within 24 hours to:</p>
        <ul>
          <li>Set up your school account</li>
          <li>Provide onboarding support</li>
          <li>Answer any questions</li>
        </ul>
        <p>In the meantime, feel free to explore our <a href="https://edunexes.com/features">features page</a>.</p>
        <p>Best regards,<br>EduNexes Team<br>Powered by TrioGenX</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    console.log('Emails sent successfully');
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n✅ EduNexes Backend Server running on http://localhost:${PORT}`);
  console.log(`📧 Email Service: ${process.env.EMAIL_USER || 'Configure in .env'}\n`);
});
