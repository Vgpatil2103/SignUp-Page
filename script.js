const submit = document.getElementById("submit");
const aftersubmit = document.querySelector(".afterSubmit");
const signupform = document.querySelector(".signup-form");
const succesmsg = document.querySelector(".succesfullmsg");
const form = document.getElementById("signupform");
const errorDiv = document.querySelector(".error");

function displayData(info) {
    const signupname = document.getElementById("signup-name");
    const signupemail = document.getElementById("signup-email");
    const signuppass = document.getElementById("signup-password");
    const noacc=document.querySelector("noacc");
    const tokens=document.getElementById("signup-token");
//token generator function
let token = '';
function generateToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }
  
    return token;
  }
  
  // Usage example: Generate a token of length 10
   generateToken(5);
 
  

    signupname.innerText = info.name;
    signupemail.innerText = info.email;
    signuppass.innerText = info.password;
    tokens.innerHTML=token;

    if (form.checkValidity()) {
        if (info.password === info.confirmpass) {
            saveToLocalStorage(info);
            signupform.style.display = "none";
            aftersubmit.style.display = "flex";
            succesmsg.style.display = "flex";
            
            noacc.style.display="none";
        } else {
            alert("Password does not match");
        }
    } else {
        errorDiv.style.display="block";
    }
}

function saveToLocalStorage(data) {
    localStorage.setItem("name", data.name);
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
}



submit.addEventListener("click", (e) => {
    e.preventDefault();
    const data = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        confirmpass: form.confirmpass.value,
    };

   
    displayData(data);
});

// ... (previous code)

const logoutButton = document.getElementById("logout");

logoutButton.addEventListener("click", () => {
   
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");

   
    document.getElementById("signup-name").innerText = "";
    document.getElementById("signup-email").innerText = "";
    document.getElementById("signup-password").innerText = "";

   
    form.reset();

   
    aftersubmit.style.display = "none";
    succesmsg.style.display = "none";

   
    signupform.style.display = "flex";
});


