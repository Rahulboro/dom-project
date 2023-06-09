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
document.addEventListener('input', input )
function input() {
    let gettext = document.getElementById('text').value;
    document.getElementById('camel-case').innerText = gettext.toUpperCase();
}