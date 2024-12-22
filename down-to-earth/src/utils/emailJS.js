import emailjs from 'emailjs-com';

const SERVICE_ID = '';
const TEMPLATE_ID = '';
const USER_ID = '';

export const sendEmail = async(form) => {
    try {
        const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID);
        return result;
    } catch (error) {
        console.error('Failed to send message!  Please try again.', error);
        throw error;
    }
};