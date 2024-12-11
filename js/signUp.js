var signUp = document.querySelector(".btn")
var Name = document.querySelector('.Name')
var Email = document.querySelector('.Email')
var Passward = document.querySelector('.pass')
var NameRegex=/^[a-zA-Z][a-zA-Z0-9_]{5,19}$/;
var EmailRegex=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
var PasswardRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var userInfo = []
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
      isValid(Name, NameRegex) && 
      isValid(Email, EmailRegex) &&
      isValid(Passward, PasswardRegex)
    );
  }
  
function createUserInfo(Name,Email,Passward){
    var user={
        Name : Name.value,
        Email : Email.value,
        Passward : Passward.value,
    };
    return user;
}

function clear(Name,Email,Passward){
    Name.value = null;
    Email.value=null;
    Passward.value=null;
}


function localSetStorage(key,value){
    localStorage.setItem("key",JSON.stringify(value))
}

signUp.addEventListener('click',function(){
    if (isUserValid()){
        console.log("is valid")
        var newuser=createUserInfo(Name,Email,Passward)
    userInfo.push(newuser)
    localSetStorage("Information : ",userInfo);
    clear(Name,Email,Passward)
    console.log(userInfo);
    }
    else{
        console.log("is not valid")
    }
    
})