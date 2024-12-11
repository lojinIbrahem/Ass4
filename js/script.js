var signUp= document.querySelector('.sign');
var login=document.querySelector('.btn');
var Email = document.querySelector('.Email')
var Password = document.querySelector('.Password')
var NameRegex=/^[a-zA-Z][a-zA-Z0-9_]{5,19}$/;
var EmailRegex=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
var PasswardRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


if(localStorage.getItem("Information")){
    userInfo= JSON.parse(localStorage.getItem("Information"))
}

function isValid(input, regex) {
   if( regex.test(input.value)) {
    return true;
 }
 else{
    return false;
 }
}
function isUserValid() {
    return (
      isValid(Email, EmailRegex) &&
      isValid(Password, PasswardRegex)
    );
  }
function createUserInfo(Email,Password){
    var user={
        Email : Email.value,
        Password : Password.value,
    };
    return user;
}
function localSetStorage(key,value){
    localStorage.setItem("key",JSON.stringify(value))
}
login.addEventListener('click',function(){
    if (isUserValid()){
        console.log("is valid")
        var newuser=createUserInfo(Email,Password)
 window.location.href = "./page/home.html";
    localSetStorage("Information : ",userInfo);
    clear(Email,Password)
    console.log(userInfo);
    }
    else{
        console.log("is not valid")
    }
    
}) 
