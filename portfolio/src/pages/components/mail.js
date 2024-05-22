import { Resend } from "resend";

async function sendMail(data) {
  const resend = new Resend("re_AFcCBwJz_D3Qv9Nta5h2tQZB3zsvanYau");
  const { name, number, email, message } = data;

  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sumitraj1533@gmail.com",
      subject: "Contact mail",
      html: `<p>Name: ${name}</p>
             <p>Number: ${number}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    });

    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
// sendMail({name:'sumit',number:'99887765',email:'raj1792@gmail.com',message:"hey hello"})
export default sendMail;
