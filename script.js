function sendEmail(){
 let parms = {
  name:document.getElementById("name").value,
  email : document.getElementById("email").value,
  Subject : document.getElementById("Subject").value,
  phone : document.getElementById("phone").value,
  message: document.getElementById("message").value,
 } 
emailjs.send("service_z8nojpf", "template_8lg6abo",parms).then(alert("Email Sent !!"))}

function checkInputs() {
  if (item.value == "") {
    item.classList.add("error")
    item.parentElement.classList.add("error");
  }
  item.addEventListener("keyup", () => {
    if (item.value != "") {
      item.classList.remove("error");
      item.parentElement.classList.remove("error");
    }
    else {
      item.classList.add("error")
      item.parentElement.classList.add("error");
    }
  })
}

form.addEventListener("submit" , (e) => {
  e.preventDefault();

  sendEmail();
})