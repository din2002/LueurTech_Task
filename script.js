forms=document.getElementById("form1")
forms.addEventListener('submit', validate);
function validate(event){
  const username=document.getElementById("username").value;
  var username_style = document.getElementById("username");
  const password=document.getElementById("password").value;
  var password_style = document.getElementById("password");
  const password1=document.getElementById("password1").value;
  var password1_style = document.getElementById("password1");
  username_style.style.border="1px solid #ced4da";
  password_style.style.border="1px solid #ced4da";
  password1_style.style.border="1px solid #ced4da";
  document.getElementById("usernameHelpBlock").innerHTML="";
  document.getElementById("passwordHelpBlock").innerHTML="";
  document.getElementById("verifyHelpBlock").innerHTML="";   
  var regex = /^[A-Za-z][A-Za-z0-9]+[_][0-9]+$/;
  var flag="True";
  if (regex.test(username)==false){
      document.getElementById("usernameHelpBlock").innerHTML="Username must contain Underscore(_) and must be in the format of (Alphabets_Digits). e.g.Bob_12,bob_12,etc."
      username_style.style.border="2px solid red";
      document.getElementById("usernameHelpBlock").style.color="red";
      flag="False";
  }
  if (password.length<5 || password.length>15){
    document.getElementById("passwordHelpBlock").innerHTML="Password length must be between 5 and 15."
    password_style.style.border="2px solid red";
    document.getElementById("passwordHelpBlock").style.color="red";
    flag="False";
  }
  
  if (password!=password1){
    document.getElementById("verifyHelpBlock").innerHTML="Please Enter confirm password same as password."
    password1_style.style.border="2px solid red";
    document.getElementById("verifyHelpBlock").style.color="red"
    flag="False";
  }
  if (flag=="True"){
    alert("Successfull Registration");
  }
  else{
    event.preventDefault();
  }
}