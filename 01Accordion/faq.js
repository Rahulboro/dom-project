const faqlist =[
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody;
const faqs = [];
createFaq()

function showFaq() {
}

function createFaq() {
  const newfaq = document.querySelector(".accordian_body");
  const createFaq = document.createElement("div")
  createFaq.classList = ("faq")
  newfaq.appendChild(createFaq)
  
}

function btnStatusUpdate() {
  
}