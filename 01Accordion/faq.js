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

const faqs = [];
const accordianBody = document.querySelector('.accordian_body');

// created div faq element 
const faq_div = document.createElement('div');
faq_div.classList.add("faq");
accordianBody.appendChild(faq_div)

// function of showing faq
function showFaq(e) { 
  
}
function createFaq() {
  for (const divfaq of faqlist) {
    divfaq = faqlist.filter(obj => {
      return obj.id === 1
    })
    console.log(divfaq)
  }
  
}

function btnStatusUpdate() {
  
}
