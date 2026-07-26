const { Resend } = require("resend");

const resend = new Resend("YOUR_API_KEY");

async function test() {
  const result = await resend.emails.send({
    from: "Parakletus <onboarding@resend.dev>",
    to: "YOUR_EMAIL@gmail.com",
    subject: "Resend Test",
    html: "<h1>Hello from Resend</h1>",
  });

  console.log(result);
}

test();