// Defining ID

let textArea = document.querySelector('text');
let convertBtn = document.querySelector('convert-btn');
let camelCase = document.querySelector('camel-case')
let pascalCase = document.querySelector('pascal-case')
let snakeCase = document.querySelector('snake-case')
let screamingSnakeCase = document.querySelector('screaming-snake-case')
let kebabCase = document.querySelector('kebab-case')
let screamingKebabCase = document.querySelector('screaming-kebab-case')


// adding event listener 
// const eventListener = document.addEventListener("input", function (params) {
    
// })
// camel case 
document.addEventListener('input', input )
function input() {
    let inputText = document.getElementById('textArea').value;
    convertBtn.addEventListener('click', ()=>{
        // this is the camel case document
        function camel_Case(inputText) {
            let text_el = inputText.toLowerCase();
        }

    
    // document.getElementById('pascal-case').innerText = gettext.
    // toUpperCase();
    // document.getElementById('snake-case').innerText = gettext.
    // toUpperCase();
    // document.getElementById('screaming-snake-case').innerText = gettext.
    // toUpperCase();
    // document.getElementById('kebab-case').innerText = gettext.
    // toUpperCase();
    // document.getElementById('screaming-kebab-case').innerText = gettext.
    // toUpperCase();
    }
    )
}


