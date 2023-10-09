const form = document.querySelector('form');
    
form.addEventListener('submit', event =>{
    event.preventDefault();
    const email = document.querySelector('#email');
    console.log(email.value);
    const senha = document.querySelector('#senha');
    console.log(senha.value);

    if(email.value === 'a@a' & senha.value === 'aaa'){
        window.location.href = "./../pages/dashboard.html";
    }
})

