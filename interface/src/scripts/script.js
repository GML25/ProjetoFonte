//URL
const url = "http://localhost:3000"

//json do user com email e password
async function register(){

    let emailInput = document.getElementById('email').value;
    let senhaInput = document.getElementById('password').value;

    let user = {
        "username": emailInput,
        "password": senhaInput,
    };
    console.log(user);
    user = JSON.stringify(user)
    console.log(user);
     await postUser(user)
};

//função pra enviar ao servidor
async function postUser(user) {
    const response = await fetch(`${url}/User/Create`,{
        method: "POST",
        body: user,
        headers: {
            "Content-type": "application/json; charset=utf-8" 
        },
    });

}

//Função do Login
async function Login(){
    let emailInput1 = document.getElementById('emailL').value;
    let senhaInput1 = document.getElementById('passwordL').value;
    
    let user1 = {
        "username": emailInput1,
        "password": senhaInput1,
    };
        user1 = JSON.stringify(user1)
        

        const response = await fetch(`${url}/Login`,{
            method: "POST",
            body: user1,
            headers: {
             "Content-type": "application/json; charset=utf-8" 
        },
    });
    
    console.log(await response);

    if (response.status == 200){
        window.sessionStorage.setItem("Token",await response.text())
        window.location.href = "dashboard.html"
    }else{
        alert("Usuario invalido");
    }
};



/* const users = [
    {
        "email": "email@email.com",
        "password": "1234"
    },
    {
        "email": "email0@email.com",
        "password": "1234"
    },
    {
        "email": "email1@email.com",
        "password": "1234"
    }
]; */

/*
function db(){
    return users;
}

function isUser(email, password){
    let users = db();
    let user = users.find( user =>  user.email === email && user.password === password);
    if(user !== undefined) {
        return true;
    }
    else{
        return false;
    }
} 
function Login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(isUser(email, password)) {
        window.location.href = "dashboard.html"
    }
    else{
        alert("Login ou Senha Incorretos !!");
    }
}
*/
