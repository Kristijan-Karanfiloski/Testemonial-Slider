const testimonials = [
  {
    name: "Ann M.",
    photoUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "I don't know what else to say. Thanks for the great service. Great job,I will definitely be ordering again! I'd be lost without ios user.",
    color: "#059669",
  },

  {
    name: "Jake M.",
    photoUrl:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "Your company is truly upstanding and is behind its product 100%. We've seen amazing results already. Thanks ios user! Ios user is exactly what our business has been lacking.",
    color: "#fca5a5",
  },

  {
    name: "Rani X.",
    photoUrl:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    text: "Wow what great service, I love it! We were treated like royalty. I didn't even need training. You won't regret it.",
    color: "#0284c7",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userNameEl = document.querySelector(".username");
const testimonialConEL = document.querySelector(".testemonial-container");

let index = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text, color } = testimonials[index];
  imgEl.src = photoUrl;
  textEl.textContent = text;
  userNameEl.textContent = name;
  testimonialConEL.style.backgroundColor = color;
  index++;

  if (index === testimonials.length) {
    index = 0;
  }

  setTimeout(() => {
    updateTestimonial();
  }, 3000);
}
