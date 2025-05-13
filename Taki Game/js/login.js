
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const container = document.querySelector(".contaner");


form1.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSignUp();
})

form2.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSignIn();
})

let text;

function handleSignUp() {
    const name = document.getElementById("name").value;
    // let isName= /^[a-zA-Z]+$/;
    // if(!(isName.name)){
    //     isName=1;
    //     alert("The name can not contains digits, please refresh the page and enter again")
    //     return;
    // }
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // if(password.length<4){
    //     alert("The password is too short please refresh the page and enter a password with 4 digits")
    //     return;
    // }
    const users = JSON.parse(localStorage.getItem("user")) || [];
    const isExisting = users.find(u => u.email === email);
    if (isExisting) {
        text = "This email is already exsiting, Please enter another one."
        document.getElementById("errorMessage1").innerHTML = text;
    }
    else {
        users.push({ name, email,password });
        localStorage.setItem("user", JSON.stringify(users))
        window.location.href = '../html/homePage.html';
        localStorage.setItem('goToSign', JSON.stringify(1));
    }
}


function handleSignIn() {
    const name = document.getElementById("nameUp").value;
    const password = document.getElementById("passwordUp").value;
    users = JSON.parse(localStorage.getItem("user")) || [];
    const isExisting = users.find(u => u.name === name && u.password === password);
    if (isExisting) {
        window.location.href = '../html/homePage.html';
        localStorage.setItem('goToSign', JSON.stringify(1));
    }
    else {
        text = "This user is not exsiting, Please try again."
        document.getElementById("errorMessage2").innerHTML = text;
    }
}









