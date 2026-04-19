document.getElementById("login-btn").addEventListener("click", function(){
// get the mobile number
const numberInput = document.getElementById("input-num");
const contactNumber = numberInput.value;
console.log(contactNumber)
// get the pin
const pinInput = document.getElementById("input-pin");
const pin = pinInput.value;
console.log(pin)
// match pin and number
if(contactNumber == "01234567890" && pin=="1234"){
    alert("login done");
    // window.location.replace("./home.html")
    window.location.assign("./home.html")
}else{
alert("login Failed");
return;

}
// true--- >home page 
// false ---> error

})

