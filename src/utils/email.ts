import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    const response = await emailjs.send(
      'service_4gwk8dc', // Replace with your EmailJS service ID
      'template_iu9d7im', // Replace with your EmailJS template ID
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: 'punnasurya2000@gmail.com', // Replace with your email
      },
      'b3U4DbrUrQYJ9wVfo' // Replace with your EmailJS public key
    );
    return response;
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
};