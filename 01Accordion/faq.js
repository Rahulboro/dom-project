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

const accordianBody = document.body.querySelector(".accordian_body")
const faqs = [];

function showFaq() {
}

function createFaq() {
  let div = document.createElement('div')
  div.setAttribute('class', 'faq');
  document.accordianBody.appendChild(div); 
}

function btnStatusUpdate() {
  addEventListener('click', 'btnStatusUpdate')
   {
  }  
}
// let [divOne, divTwo, divThree]= faqlist
// one 

// faqlist.forEach((createlist)=> {
  //   createlist = document.createElement('div')  
  //   createlist.setAttribute('class', 'faq')
  // });


//   accordianBody.appendChild(faqlist);
// faqlist.appendChild(createlist)

// for (let i = 0; i < faqlist.length; i++) {
//   const newElement = document.createElement('div');
//    newElement.setAttribute('class', 'faq')
//   const value = faqlist[0];
//   document.body.accordian_body.appendChild(newElement);
// }



// div one 

// let divOne = document.createElement('div')
// divOne.setAttribute('class', 'faq');
// accordianBody.appendChild(divOne);
// let divOneInnerh3 = document.createElement('h3')
// divOne.appendChild(divOneInnerh3);
// divOneInnerh3.textContent = faqlist[0].question
// let divOneInnerP = document.createElement('p')
// divOne.appendChild(divOneInnerP)
// divOneInnerP.textContent = faqlist[0].answer

// divtwo 

// let divTwo = document.createElement('div')
// divTwo.setAttribute('class', 'faq');
// accordianBody.appendChild(divTwo);
// let divTwoInnerh3 = document.createElement('h3')
// divTwo.appendChild(divTwoInnerh3);
// divTwoInnerh3.textContent = faqlist[1].question
// let divTwoInnerP = document.createElement('p')
// divTwo.appendChild(divTwoInnerP)
// divTwoInnerP.textContent = faqlist[1].answer

// divthree 

// let divThree = document.createElement('div')
// divThree.setAttribute('class', 'faq');
// accordianBody.appendChild(divThree);
// let divThreeInnerh3 = document.createElement('h3')
// divThree.appendChild(divThreeInnerh3);
// divThreeInnerh3.textContent = faqlist[2].question
// let divThreeInnerP = document.createElement('p')
// divThree.appendChild(divThreeInnerP)
// divThreeInnerP.textContent = faqlist[2].answer








