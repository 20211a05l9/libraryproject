function checkData(){
var enterEmail = document.getElementById('email').value;
var enterPswd = document.getElementById('pswd').value;


var getEmail=localStorage.getItem('userEmail');
var getPswd=localStorage.getItem('userpswd');
if(enterEmail== getEmail){
    if(enterPswd==getPswd){
        alert("Login Successful");
        

    }
    else{
        alert("wrong password");
    }
}
else{
    alert("Invalid");
}
}


function addData(){
    var email = document.getElementById('email').value;
    var pass=document.getElementById('pswd').value;
    var conpswd = document.getElementById('conpswd').value;
    if(pass!=conpswd){
        alert("password and confirm password must be same");
    }
    else{
        alert("sign up successful.. login");
    }
    localStorage.setItem('userEmail',email);
    localStorage.setItem('userpswd',pass);

    localStorage.userEmail = email;
    localStorage.userd = pass;
}