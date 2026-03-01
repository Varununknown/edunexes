import nodemailer from 'nodemailer';

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, schoolName, city, studentCount, package: pkg, email } = req.body;

    // Validation
    if (!name || !phone || !schoolName) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields: name, phone, schoolName' 
      });
    }

    // Prepare email content for admin
    const adminEmailContent = `
      <h2>New School Registration</h2>
      <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
      <hr>
      <h3>School Details:</h3>
      <p><strong>Principal/Contact:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>School Name:</strong> ${schoolName}</p>
      <p><strong>City:</strong> ${city || 'Not provided'}</p>
      <p><strong>Student Count:</strong> ${studentCount || 'Not provided'}</p>
      <p><strong>Package Selected:</strong> ${pkg || 'Not specified'}</p>
      <p><strong>Email:</strong> ${email || 'Not provided'}</p>
      <hr>
      <p>This registration came from the EduNexus trial signup form.</p>
    `;

    // Prepare email content for user
    const userEmailContent = `
      <h2>Welcome to EduNexus - 2 Month Free Trial!</h2>
      <p>Hi ${name},</p>
      <p>Thank you for registering ${schoolName} with EduNexus. We're excited to help uplift your school with modern management solutions!</p>
      <hr>
      <h3>Your Free Trial Includes:</h3>
      <ul>
        <li>✅ Student Management System</li>
        <li>✅ Attendance Tracking</li>
        <li>✅ Fee Collection Portal</li>
        <li>✅ Academic Management</li>
        <li>✅ School Communication Hub</li>
        <li>✅ AI-Powered Revision Tool</li>
        <li>✅ Advanced Analytics & Reporting</li>
      </ul>
      <hr>
      <h3>Next Steps:</h3>
      <ol>
        <li>Our team will contact you within 24 hours at ${phone}</li>
        <li>You'll receive login credentials via email</li>
        <li>Complete onboarding in 15 minutes</li>
        <li>Start managing your school immediately</li>
      </ol>
      <hr>
      <p><strong>Your Trial Expires:</strong> ${new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
      <p>Questions? Reply to this email or contact us at support@edunexes.com</p>
      <p>Best regards,<br><strong>EduNexus Team</strong><br>Powered by TrioGenX</p>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New EduNexus Registration: ${schoolName}`,
      html: adminEmailContent,
    });

    // Send confirmation email to user (if email provided)
    if (email) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to EduNexus - Your 2 Month Free Trial Starts Now!',
        html: userEmailContent,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully and notification emails sent',
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to process form submission',
      details: error.message,
    });
  }
}
