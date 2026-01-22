const SibApiV3Sdk = require("sib-api-v3-sdk");

const client = SibApiV3Sdk.ApiClient.instance;
client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

const mailSender = async (email, title, body) => {
  try {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    await apiInstance.sendTransacEmail({
      sender: {
        email: "aks333552@gmail.com", // verified sender
        name: "CodeBud",
      },
      to: [{ email }],
      subject: title,
      htmlContent: body,
    });
  } catch (error) {
    console.error("Email send failed:", error.response?.body || error);
    throw error;
  }
};

module.exports = mailSender;
