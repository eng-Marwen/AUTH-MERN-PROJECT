import  { MailtrapClient } from "mailtrap"
import dotenv from "dotenv"
dotenv.config();

const TOKEN = "d776d7dd4445923a040e19d68020f351";

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "marwen.boussabat@converty.shop",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);