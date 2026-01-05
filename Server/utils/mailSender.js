const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const mailSender = async (email, title, body) => {
  try {
    await resend.emails.send({
      from: "CodeBud <onboarding@resend.dev>",
      to: email,
      subject: title,
      html: body,
    });
  } catch (error) {
    console.error("Email send failed:", error);
    throw error;
  }
};

module.exports = mailSender;
