// const FORM = document.getElementById("contactForm");
// const SENT = document.getElementById("sent");

// Your version
// FORM.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const name = e.target.fullName.value;
//   const email = e.target.email.value;
//   const subject = e.target.subject.value;
//   const message = e.target.message.value;

//   const p = document.createElement("p");
//   p.textContent = `Hello ${name}! Thanks for your message: ${message}`;
//   SENT.appendChild(p);
//   FORM.reset();
// });

// Mine
const FORM = document.getElementById("contactForm");
const sent = alert;

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const [name, email, subject, message] = e.target;
  sent(
    `Hello, ${name.value}! Your message has been sent! Here is an overview:\n Email: ${email.value} \n Subject: ${subject.value}\n Message: ${message.value}`
  );
  FORM.reset();
});
