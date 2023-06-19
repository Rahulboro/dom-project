// Defining ID

// let textArea = document.querySelector('text');
// let convertBtn = document.querySelector('convert-btn');
// let camelCase = document.querySelector('camel-case')
// let pascalCase = document.querySelector('pascal-case')
// let snakeCase = document.querySelector('snake-case')
// let screamingSnakeCase = document.querySelector('screaming-snake-case')
// let kebabCase = document.querySelector('kebab-case')
// let screamingKebabCase = document.querySelector('screaming-kebab-case')


// adding event listener 

// camel case 
document.addEventListener('input', input )
function input() {
    let gettext = document.getElementById('text').value;
    let btn = document.getElementById('convert-btn')
    btn.addEventListener('click', ()=>{
        document.getElementById('camel-case').innerText = gettext.
    toUpperCase();
    document.getElementById('pascal-case').innerText = gettext.
    toUpperCase();
    document.getElementById('snake-case').innerText = gettext.
    toUpperCase();
    document.getElementById('screaming-snake-case').innerText = gettext.
    toUpperCase();
    document.getElementById('kebab-case').innerText = gettext.
    toUpperCase();
    document.getElementById('screaming-kebab-case').innerText = gettext.
    toUpperCase();
    }
    )
}


